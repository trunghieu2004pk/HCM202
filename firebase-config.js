// Firebase Configuration - Replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyDLJnykK-cNrUpV2B05Z6VqpM4bXV6whxc",
  authDomain: "con-thuyen-chung.firebaseapp.com",
  databaseURL: "https://con-thuyen-chung-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "con-thuyen-chung",
  storageBucket: "con-thuyen-chung.firebasestorage.app",
  messagingSenderId: "1051376745830",
  appId: "1:1051376745830:web:d6fa51710d2e89a9689ca7",
  measurementId: "G-ML2LLD0QZS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Firebase utility functions
class FirebaseManager {
    constructor() {
        this.db = database;
        this.currentRoom = null;
        this.playerId = this.generatePlayerId();
    }
    
    generatePlayerId() {
        // Try to get from sessionStorage first
        const savedId = sessionStorage.getItem('hcm_player_id');
        if (savedId) return savedId;
        
        const newId = 'player_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('hcm_player_id', newId);
        return newId;
    }
    
    // Create a new game room
    async createRoom(playerName) {
        const roomId = Math.random().toString(36).substr(2, 6).toUpperCase();
        const roomRef = this.db.ref('rooms/' + roomId);
        
        await roomRef.set({
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            status: 'waiting',
            players: {},
            currentQuestion: 0,
            votes: {},
            hp: 100
        });
        
        // Add host player
        const playerRef = roomRef.child('players/' + this.playerId);
        await playerRef.set({
            joinedAt: firebase.database.ServerValue.TIMESTAMP,
            name: playerName || 'Thuyền trưởng'
        });
        
        // Auto-remove player from room on disconnect
        playerRef.onDisconnect().remove();
        
        this.currentRoom = roomId;
        return roomId;
    }
    
    // Join an existing room
    async joinRoom(roomId, playerName) {
        const roomRef = this.db.ref('rooms/' + roomId);
        const snapshot = await roomRef.once('value');
        
        if (!snapshot.exists()) {
            throw new Error('Room not found');
        }
        
        this.currentRoom = roomId;
        
        // Add player to room
        const playerRef = roomRef.child('players/' + this.playerId);
        await playerRef.set({
            joinedAt: firebase.database.ServerValue.TIMESTAMP,
            name: playerName || 'Thuyền viên ' + this.playerId.substr(7, 4)
        });
        
        // Auto-remove player from room on disconnect
        playerRef.onDisconnect().remove();
        
        return roomId;
    }
    
    // Submit a vote
    async submitVote(questionIndex, voteData) {
        if (!this.currentRoom) return;
        
        const voteRef = this.db.ref(`rooms/${this.currentRoom}/votes/${questionIndex}/${this.playerId}`);
        await voteRef.set(voteData);
    }
    
    // Listen for room changes
    onRoomUpdate(callback) {
        if (!this.currentRoom) return;
        
        const roomRef = this.db.ref('rooms/' + this.currentRoom);
        roomRef.on('value', (snapshot) => {
            callback(snapshot.val());
        });
    }
    
    // Listen for vote changes
    onVotesUpdate(questionIndex, callback) {
        if (!this.currentRoom) return;
        
        const votesRef = this.db.ref(`rooms/${this.currentRoom}/votes/${questionIndex}`);
        votesRef.on('value', (snapshot) => {
            callback(snapshot.val() || {});
        });
    }
    
    // Stop listening for votes
    offVotesUpdate(questionIndex) {
        if (!this.currentRoom) return;
        this.db.ref(`rooms/${this.currentRoom}/votes/${questionIndex}`).off();
    }
    
    // Get player count
    async getPlayerCount() {
        if (!this.currentRoom) return 0;
        
        const playersRef = this.db.ref(`rooms/${this.currentRoom}/players`);
        const snapshot = await playersRef.once('value');
        return snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
    }
    
    // Cleanup listeners
    cleanup() {
        if (this.currentRoom) {
            this.db.ref('rooms/' + this.currentRoom).off();
        }
    }
}

// Create global firebase manager instance
window.firebaseManager = new FirebaseManager();