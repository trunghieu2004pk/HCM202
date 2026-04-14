class ConThuyenChungGame {
    constructor() {
        this.questions = [
            {
                question: "Con thuyền muốn đi đúng hướng lâu dài cần dựa vào điều gì?",
                options: [
                    "A. Quyền lực áp đặt",
                    "B. Nhân dân",
                    "C. Một cá nhân giỏi",
                    "D. May mắn"
                ],
                correctAnswer: 1, // FIX: was `B` (undefined variable), now correct index
                explanation: "Đảng gắn bó với nhân dân"
            },
            {
                question: "Khi thuyền chưa vững, điều quan trọng nhất là gì?",
                options: [
                    "A. Người lái phải vững",
                    "B. Tốc độ nhanh",
                    "C. Ít người biết",
                    "D. Tránh tranh luận"
                ],
                correctAnswer: 0,
                explanation: "Ẩn dụ 'người lái đò'"
            },
            {
                question: "Con thuyền được hình thành từ yếu tố nào là đúng nhất?",
                options: [
                    "A. Một cá nhân lãnh đạo",
                    "B. Sức mạnh quân sự",
                    "C. Kết hợp lý luận + phong trào",
                    "D. Tiền bạc"
                ],
                correctAnswer: 2,
                explanation: "Mác–Lênin + công nhân + yêu nước"
            },
            {
                question: "Khi nói 'Đảng là đạo đức', điều gì là cốt lõi?",
                options: [
                    "A. Quyền lực",
                    "B. Lợi ích riêng",
                    "C. Phục vụ nhân dân",
                    "D. Thành tích"
                ],
                correctAnswer: 2,
                explanation: "Phục vụ nhân dân là cốt lõi"
            },
            {
                question: "Nếu thuyền viên bị cám dỗ bởi giàu sang thì cần?",
                options: [
                    "A. Chấp nhận",
                    "B. Thỏa hiệp",
                    "C. Giữ vững bản lĩnh",
                    "D. Bỏ qua"
                ],
                correctAnswer: 2,
                explanation: "'Giàu sang không thể quyến rũ...'"
            },
            {
                question: "Khi tổ chức muốn hoạt động đúng hướng, cần tuân theo?",
                options: [
                    "A. Ý kiến cá nhân",
                    "B. Ngẫu nhiên",
                    "C. Chủ nghĩa Mác – Lênin",
                    "D. Số đông nhất thời"
                ],
                correctAnswer: 2,
                explanation: "Tuân theo chủ nghĩa Mác – Lênin"
            },
            {
                question: "Khi có nhiều ý kiến khác nhau, cách đúng là?",
                options: [
                    "A. Theo người mạnh nhất",
                    "B. Không cần bàn",
                    "C. Thảo luận rồi thống nhất",
                    "D. Mỗi người làm một kiểu"
                ],
                correctAnswer: 2,
                explanation: "Tập trung dân chủ"
            },
            {
                question: "Khi thuyền trưởng muốn quyết định một mình, nên?",
                options: [
                    "A. Đồng ý ngay",
                    "B. Phản đối hoàn toàn",
                    "C. Lãnh đạo tập thể",
                    "D. Bỏ mặc"
                ],
                correctAnswer: 2,
                explanation: "Thực hiện lãnh đạo tập thể"
            },
            {
                question: "Khi có sai lầm trong nội bộ, cần làm gì?",
                options: [
                    "A. Che giấu",
                    "B. Đổ lỗi",
                    "C. Tự phê bình và sửa",
                    "D. Im lặng"
                ],
                correctAnswer: 2,
                explanation: "Tự phê bình và sửa chữa sai lầm"
            },
            {
                question: "Kỷ luật trên thuyền cần như thế nào?",
                options: [
                    "A. Lỏng lẻo",
                    "B. Chỉ phạt người yếu",
                    "C. Nghiêm minh và tự giác",
                    "D. Không cần"
                ],
                correctAnswer: 2,
                explanation: "Kỷ luật nghiêm minh và tự giác"
            },
            {
                question: "Mối quan hệ đúng giữa thuyền và người dân là?",
                options: [
                    "A. Cai trị",
                    "B. Tách biệt",
                    "C. Phục vụ",
                    "D. Tránh tiếp xúc"
                ],
                correctAnswer: 2,
                explanation: "Đảng là 'đầy tớ của nhân dân'"
            },
            {
                question: "Nếu thuyền không mang lại lợi ích cho dân thì?",
                options: [
                    "A. Không sao",
                    "B. Vẫn chấp nhận",
                    "C. Mất ý nghĩa",
                    "D. Tăng tuyên truyền"
                ],
                correctAnswer: 2,
                explanation: "Mất ý nghĩa tồn tại"
            },
            {
                question: "Sức mạnh lớn nhất của thuyền đến từ?",
                options: [
                    "A. Vũ lực",
                    "B. Tiền",
                    "C. Lòng tin của dân",
                    "D. Số lượng người"
                ],
                correctAnswer: 2,
                explanation: "Lòng tin của nhân dân"
            },
            {
                question: "Một thuyền viên muốn đặc quyền riêng, đó là biểu hiện của?",
                options: [
                    "A. Đoàn kết",
                    "B. Chủ nghĩa cá nhân",
                    "C. Kỷ luật",
                    "D. Văn minh"
                ],
                correctAnswer: 1,
                explanation: "Chủ nghĩa cá nhân"
            },
            {
                question: "'Giặc nội xâm' trên thuyền là gì?",
                options: [
                    "A. Sóng biển",
                    "B. Kẻ thù bên ngoài",
                    "C. Tham ô, lãng phí, quan liêu",
                    "D. Thời tiết"
                ],
                correctAnswer: 2,
                explanation: "Tham ô, lãng phí, quan liêu"
            },
            {
                question: "Để thuyền mạnh, cần làm gì với nội bộ?",
                options: [
                    "A. Giữ nguyên",
                    "B. Tự chỉnh đốn",
                    "C. Bỏ qua sai sót",
                    "D. Che giấu"
                ],
                correctAnswer: 1,
                explanation: "Tự chỉnh đốn nội bộ"
            },
            {
                question: "Vai trò của cán bộ trên thuyền là?",
                options: [
                    "A. Không quan trọng",
                    "B. Trang trí",
                    "C. Gốc của mọi công việc",
                    "D. Chỉ nghe lệnh"
                ],
                correctAnswer: 2,
                explanation: "Cán bộ là gốc của mọi công việc"
            },
            {
                question: "Khi sử dụng cán bộ, điều đúng là?",
                options: [
                    "A. Theo cảm tính",
                    "B. Theo quan hệ",
                    "C. Đúng người đúng việc",
                    "D. Ngẫu nhiên"
                ],
                correctAnswer: 2,
                explanation: "Đúng người đúng việc"
            },
            {
                question: "Sau khi đạt thành công, thuyền nên?",
                options: [
                    "A. Tự mãn",
                    "B. Dừng lại",
                    "C. Tiếp tục rèn luyện",
                    "D. Bỏ nguyên tắc"
                ],
                correctAnswer: 2,
                explanation: "Tiếp tục rèn luyện"
            },
            {
                question: "Để thuyền tồn tại lâu dài, điều quan trọng nhất là?",
                options: [
                    "A. Quyền lực",
                    "B. Tiền bạc",
                    "C. Trong sạch, vững mạnh, gắn bó nhân dân",
                    "D. Tốc độ"
                ],
                correctAnswer: 2,
                explanation: "Trong sạch, vững mạnh, gắn bó nhân dân"
            }
        ];

        this.currentQuestionIndex = 0;
        this.votes = {};
        this.totalVotes = 0;
        this.timer = null;
        this.timeLeft = 15;
        this.isVoting = false;
        this.hasVoted = false;
        this.hp = 100;
        this.totalQuestions = 20;
        this.roomId = null;
        this.playerCount = 1;
        this.isMultiplayer = false;
        this.gameOverShown = false; // FIX: flag to prevent double showGameOver()

        this.initializeGame();
    }

    initializeGame() {
        this.startButton = document.getElementById('start-button');
        this.nextButton = document.getElementById('next-button');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.timerText = document.getElementById('timer-text');
        this.resultsContainer = document.getElementById('results-container');
        this.resultsChart = document.getElementById('results-chart');
        this.gameScreen = document.getElementById('game-screen');
        this.startScreen = document.getElementById('start-screen');
        this.roundNumber = document.getElementById('round-number');
        this.hpValue = document.getElementById('hp-value');
        this.hpBarFill = document.getElementById('hp-bar-fill');
        this.boat = document.getElementById('boat');

        this.createMultiplayerUI();

        this.startButton.addEventListener('click', () => this.showRoomSelection());
        this.nextButton.addEventListener('click', () => this.nextQuestion());

        this.updateBoatPosition();

        this.playerCountCheckInterval = setInterval(() => {
            this.checkPlayerCount();
        }, 3000);
    }

    createMultiplayerUI() {
        const roomSelectionHTML = `
            <div id="room-selection" class="room-selection hidden">
                <h2>Chọn chế độ chơi</h2>
                <div class="mode-buttons">
                    <button id="single-player-btn" class="mode-button">
                        🎮 Chơi đơn
                    </button>
                    <button id="multiplayer-btn" class="mode-button">
                        👥 Chơi cùng nhau
                    </button>
                </div>

                <div id="multiplayer-setup" class="multiplayer-setup hidden">
                    <div class="room-actions">
                        <button id="create-room-btn" class="room-button">
                            🚢 Tạo phòng mới
                        </button>
                        <div class="room-divider">hoặc</div>
                        <div class="join-room">
                            <input type="text" id="room-code-input" placeholder="Nhập mã phòng" maxlength="6">
                            <button id="join-room-btn" class="room-button">
                                🔗 Tham gia
                            </button>
                        </div>
                    </div>

                    <div id="room-info" class="room-info hidden">
                        <h3>Thông tin phòng</h3>
                        <p>Mã phòng: <span id="room-code-display"></span></p>
                        <p>Số người chơi: <span id="player-count">1</span></p>
                        <button id="start-game-btn" class="start-button">Bắt đầu game</button>
                    </div>
                </div>
            </div>
        `;

        this.startScreen.insertAdjacentHTML('afterend', roomSelectionHTML);

        document.getElementById('single-player-btn').addEventListener('click', () => {
            this.isMultiplayer = false;
            this.startSinglePlayer();
        });

        document.getElementById('multiplayer-btn').addEventListener('click', () => {
            this.showMultiplayerSetup();
        });

        document.getElementById('create-room-btn').addEventListener('click', () => {
            this.createRoom();
        });

        document.getElementById('join-room-btn').addEventListener('click', () => {
            this.joinRoom();
        });

        document.getElementById('start-game-btn').addEventListener('click', () => {
            this.startMultiplayerGame();
        });
    }

    showRoomSelection() {
        this.startScreen.classList.add('hidden');
        document.getElementById('room-selection').classList.remove('hidden');
    }

    showMultiplayerSetup() {
        document.getElementById('multiplayer-setup').classList.remove('hidden');
    }

    async createRoom() {
        // FIX: guard against missing firebaseManager
        if (!window.firebaseManager) {
            alert('Firebase chưa được khởi tạo. Vui lòng kiểm tra firebase-config.js');
            return;
        }
        try {
            this.roomId = await window.firebaseManager.createRoom();
            this.showRoomInfo();
            this.setupRoomListeners();
        } catch (error) {
            alert('Lỗi khi tạo phòng: ' + error.message);
        }
    }

    async joinRoom() {
        const roomCode = document.getElementById('room-code-input').value.trim().toUpperCase();
        if (!roomCode) {
            alert('Vui lòng nhập mã phòng');
            return;
        }

        // FIX: guard against missing firebaseManager
        if (!window.firebaseManager) {
            alert('Firebase chưa được khởi tạo. Vui lòng kiểm tra firebase-config.js');
            return;
        }

        try {
            await window.firebaseManager.joinRoom(roomCode);
            this.roomId = roomCode;
            this.showRoomInfo();
            this.setupRoomListeners();
        } catch (error) {
            alert('Lỗi khi tham gia phòng: ' + error.message);
        }
    }

    showRoomInfo() {
        document.getElementById('room-code-display').textContent = this.roomId;
        document.getElementById('room-info').classList.remove('hidden');
    }

    setupRoomListeners() {
        // FIX: guard against missing firebaseManager
        if (!window.firebaseManager) return;

        window.firebaseManager.onRoomUpdate((roomData) => {
            console.log('Room data received:', roomData);
            if (roomData && roomData.players) {
                this.playerCount = Object.keys(roomData.players).length;
                console.log('Player count updated to:', this.playerCount);
                document.getElementById('player-count').textContent = this.playerCount;
            } else {
                console.log('No players data found in room');
            }
        });

        console.log('Room listeners setup for room:', this.roomId);
    }

    startSinglePlayer() {
        this.isMultiplayer = false;
        document.getElementById('room-selection').classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        this.showQuestion();
    }

    startMultiplayerGame() {
        this.isMultiplayer = true;
        document.getElementById('room-selection').classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        this.showQuestion();
    }

    async checkPlayerCount() {
        if (this.isMultiplayer && this.roomId && window.firebaseManager) {
            // FIX: guard against missing firebaseManager
            try {
                const count = await window.firebaseManager.getPlayerCount();
                if (count !== this.playerCount) {
                    console.log('Manual player count check:', count);
                    this.playerCount = count;
                    const el = document.getElementById('player-count');
                    if (el) el.textContent = count;
                }
            } catch (error) {
                console.log('Error checking player count:', error);
            }
        }
    }

    showQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = currentQuestion.question;

        this.optionsContainer.innerHTML = '';
        this.votes = {};
        this.totalVotes = 0;
        this.hasVoted = false;
        this.gameOverShown = false; // reset flag each question

        currentQuestion.options.forEach((option, index) => {
            this.votes[index] = 0;

            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.addEventListener('click', () => this.castVote(index));

            this.optionsContainer.appendChild(button);
        });

        this.resultsContainer.classList.add('hidden');
        this.roundNumber.textContent = `${this.currentQuestionIndex + 1}/${this.totalQuestions}`;

        if (this.isMultiplayer) {
            this.setupMultiplayerVoting();
        } else {
            this.startVoting();
        }
    }

    setupMultiplayerVoting() {
        // FIX: guard against missing firebaseManager
        if (!window.firebaseManager) {
            this.startVoting();
            return;
        }

        window.firebaseManager.onVotesUpdate(this.currentQuestionIndex, (votes) => {
            console.log('Votes received from Firebase:', votes);
            if (votes) {
                // FIX: Count votes per option correctly
                this.votes = {};
                this.totalVotes = 0;
                
                // Initialize all options to 0
                for (let i = 0; i < 4; i++) {
                    this.votes[i] = 0;
                }
                
                // Count votes for each option
                Object.values(votes).forEach(optionIndex => {
                    this.votes[optionIndex]++;
                    this.totalVotes++;
                });
                
                console.log('Vote counts after processing:', this.votes, 'Total:', this.totalVotes);
                this.updateVoteDisplay();

                if (this.isMultiplayer && this.totalVotes >= this.playerCount && this.isVoting) {
                    console.log('All players have voted, ending voting early');
                    this.endVoting();
                }
            }
        });

        this.startVoting();
    }

    startVoting() {
        this.isVoting = true;
        this.timeLeft = this.isMultiplayer ? 15 : 8;
        this.timerText.textContent = this.timeLeft;

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerText.textContent = this.timeLeft;

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.endVoting();
            }
        }, 1000);

        if (!this.isMultiplayer) {
            this.simulateMultiplayerVotes();
        }
    }

    async castVote(optionIndex) {
        if (!this.isVoting || this.hasVoted) return;

        this.hasVoted = true;
        console.log('Casting vote for option:', optionIndex, 'isMultiplayer:', this.isMultiplayer);

        if (this.isMultiplayer && window.firebaseManager) {
            // FIX: guard against missing firebaseManager
            console.log('Submitting vote to Firebase:', optionIndex);
            await window.firebaseManager.submitVote(this.currentQuestionIndex, optionIndex);
        } else {
            this.votes[optionIndex]++;
            this.totalVotes++;
            console.log('Local vote counted:', this.votes, 'Total:', this.totalVotes);
        }

        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => button.classList.remove('selected'));
        buttons[optionIndex].classList.add('selected');

        buttons[optionIndex].classList.add('vote-animation');
        setTimeout(() => {
            buttons[optionIndex].classList.remove('vote-animation');
        }, 500);
    }

    simulateMultiplayerVotes() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const numOptions = currentQuestion.options.length;

        const simulateVote = () => {
            if (!this.isVoting) return;

            const randomOption = Math.floor(Math.random() * numOptions);
            this.votes[randomOption]++;
            this.totalVotes++;

            setTimeout(simulateVote, Math.random() * 800 + 300);
        };

        for (let i = 0; i < 5; i++) {
            setTimeout(simulateVote, i * 1000);
        }
    }

    // FIX: use original option text to avoid appending "(N)" repeatedly
    updateVoteDisplay() {
        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        const currentQuestion = this.questions[this.currentQuestionIndex];
        buttons.forEach((button, index) => {
            const voteCount = this.votes[index] || 0;
            const originalText = currentQuestion.options[index];
            button.textContent = voteCount > 0
                ? `${originalText} (${voteCount})`
                : originalText;
        });
    }

    endVoting() {
        console.log('Ending voting, isMultiplayer:', this.isMultiplayer, 'votes:', this.votes);
        this.isVoting = false;
        clearInterval(this.timer);

        this.calculateScore();
        this.showResults();
    }

    calculateScore() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const winningOption = this.getWinningOption();

        if (winningOption === currentQuestion.correctAnswer) {
            this.hp = Math.min(this.hp + 10, 100);
            this.showScoreChange('+10', true);
        } else {
            this.hp = Math.max(this.hp - 15, 0);
            this.showScoreChange('-15', false);
        }

        this.updateHP();
        this.updateBoatPosition();
    }

    showScoreChange(amount, isPositive) {
        const scoreChange = document.createElement('div');
        scoreChange.className = `score-change ${isPositive ? 'score-positive' : 'score-negative'}`;
        scoreChange.textContent = amount;
        scoreChange.style.position = 'absolute';
        scoreChange.style.top = '50%';
        scoreChange.style.right = '20px';
        scoreChange.style.fontSize = '1.5em';

        document.querySelector('.stats-container').appendChild(scoreChange);

        setTimeout(() => {
            scoreChange.remove();
        }, 1000);
    }

    getWinningOption() {
        let maxVotes = 0;
        let winningOption = 0;

        Object.entries(this.votes).forEach(([option, votes]) => {
            if (votes > maxVotes) {
                maxVotes = votes;
                winningOption = parseInt(option);
            }
        });

        return winningOption;
    }

    updateHP() {
        this.hpValue.textContent = this.hp;
        this.hpBarFill.style.width = this.hp + '%';

        if (this.hp <= 30) {
            this.hpBarFill.style.background = 'linear-gradient(90deg, #ff6b6b, #ff4757)';
        } else if (this.hp <= 60) {
            this.hpBarFill.style.background = 'linear-gradient(90deg, #ffa726, #ff9800)';
        } else {
            this.hpBarFill.style.background = 'linear-gradient(90deg, #4caf50, #8bc34a)';
        }
    }

    updateBoatPosition() {
        // Tính toán vị trí thuyền dựa trên tiến độ câu hỏi
        // Bắt đầu từ 10% và kết thúc ở 80% (tránh đảo)
        const startPosition = 10;
        const endPosition = 80;
        const progress = (this.currentQuestionIndex / this.totalQuestions);
        const boatPosition = startPosition + (progress * (endPosition - startPosition));
        
        this.boat.style.left = boatPosition + '%';
        
        // Cập nhật trạng thái các mốc tiến độ
        this.updateMilestones();
    }
    
    updateMilestones() {
        const milestones = document.querySelectorAll('.milestone');
        milestones.forEach(milestone => {
            const questionNum = parseInt(milestone.getAttribute('data-question'));
            if (this.currentQuestionIndex >= questionNum) {
                milestone.style.background = '#4CAF50';
                milestone.style.color = 'white';
            }
        });
    }

    showResults() {
        console.log('Showing results, totalVotes:', this.totalVotes, 'votes:', this.votes);
        this.resultsContainer.classList.remove('hidden');
        this.resultsChart.innerHTML = '';
        
        if (this.totalVotes === 0) {
            console.log('WARNING: No votes recorded!');
        }

        const currentQuestion = this.questions[this.currentQuestionIndex];
        const winningOption = this.getWinningOption();

        currentQuestion.options.forEach((option, index) => {
            const percentage = this.totalVotes > 0
                ? Math.round((this.votes[index] / this.totalVotes) * 100)
                : 0;

            const resultBar = document.createElement('div');
            resultBar.className = 'result-bar';

            const resultFill = document.createElement('div');
            resultFill.className = 'result-fill';
            resultFill.style.width = percentage + '%';
            resultFill.textContent = `${option}: ${percentage}% (${this.votes[index] || 0} phiếu)`;

            resultBar.appendChild(resultFill);
            this.resultsChart.appendChild(resultBar);
        });

        const winningText = document.createElement('p');
        winningText.style.marginTop = '20px';
        winningText.style.fontWeight = 'bold';
        winningText.style.color = '#4caf50';
        winningText.textContent = `🏆 Quyết định của thuyền: ${currentQuestion.options[winningOption]}`;
        this.resultsChart.appendChild(winningText);

        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.innerHTML = `
            <h4>📝 Giải thích:</h4>
            <p>${currentQuestion.explanation}</p>
        `;
        this.resultsChart.appendChild(explanation);

        // FIX: removed duplicate showGameOver() call here.
        // endGame() handles game-over after the user clicks "Câu tiếp theo".
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length || this.hp === 0) {
            this.endGame();
        } else {
            this.showQuestion();
        }
    }

    endGame() {
        // FIX: clear the player-count polling interval to avoid memory leak
        clearInterval(this.playerCountCheckInterval);

        if (this.hp === 0) {
            this.showGameOver();
        } else {
            this.showVictory();
        }

        // Clean up Firebase listeners
        if (this.isMultiplayer && window.firebaseManager) {
            window.firebaseManager.cleanup();
        }
    }

    showGameOver() {
        // FIX: guard against being called twice
        if (this.gameOverShown) return;
        this.gameOverShown = true;

        this.gameScreen.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: #f44336;">💀 Thất bại!</h2>
                <p style="font-size: 1.2em; margin: 20px 0;">Niềm tin nhân dân đã cạn kiệt!</p>
                <p style="font-style: italic; color: #666;">"Mất lòng dân là mất tất cả"</p>
                <button onclick="location.reload()" class="start-button">Chơi lại</button>
            </div>
        `;
    }

    showVictory() {
        this.gameScreen.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: #4caf50;">🎉 Chiến thắng!</h2>
                <p style="font-size: 1.2em; margin: 20px 0;">Con thuyền đã về đích an toàn!</p>
                <p style="font-style: italic; color: #666;">"Con thuyền vững mạnh vì luôn gắn bó với nhân dân"</p>
                <p>Điểm niềm tin cuối cùng: ${this.hp}/100</p>
                <button onclick="location.reload()" class="start-button">Chơi lại</button>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ConThuyenChungGame();
});