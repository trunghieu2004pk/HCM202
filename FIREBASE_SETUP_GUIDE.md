# 🚀 Hướng dẫn Setup Firebase cho Con thuyền chung

## 📋 Bước 1: Tạo Firebase Project

1. **Truy cập Firebase Console**
   - Vào [https://console.firebase.google.com](https://console.firebase.google.com)
   - Đăng nhập bằng Google account

2. **Tạo project mới**
   - Click "Create a project"
   - Đặt tên project: `con-thuyen-chung` (hoặc tên bạn thích)
   - Bỏ chọn Google Analytics (không cần thiết)
   - Click "Create project"

## 🗄️ Bước 2: Tạo Realtime Database

1. **Truy cập Database**
   - Trong Firebase Console, chọn "Realtime Database" từ menu trái
   - Click "Create Database"

2. **Cấu hình Database**
   - Chọn location: `asia-southeast1` (gần Việt Nam)
   - Chọn chế độ: "Start in test mode" (cho development)
   - Click "Enable"

## 🔑 Bước 3: Lấy Firebase Configuration

1. **Truy cập Project Settings**
   - Click biểu tượng ⚙️ → "Project settings"
   - Cuộn xuống "Your apps"

2. **Thêm Web App**
   - Click "</>" icon để thêm Web app
   - Đặt tên app: `Con thuyen chung Web`
   - Click "Register app"

3. **Copy Configuration**
   - Copy đoạn config code hiện ra
   - Nó sẽ trông như thế này:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyABCD1234567890...",
  authDomain: "con-thuyen-chung.firebaseapp.com",
  databaseURL: "https://con-thuyen-chung-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "con-thuyen-chung",
  storageBucket: "con-thuyen-chung.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234efgh5678"
};
```

## ⚙️ Bước 4: Cập nhật Firebase Config trong code

1. **Mở file `firebase-config.js`**
   - File nằm tại: `e:\HCM\firebase-config.js`

2. **Thay thế config mẫu**
   - Thay thế toàn bộ object `firebaseConfig` bằng config thật của bạn
   - Xóa các dòng comment không cần thiết

3. **File hoàn chỉnh sẽ trông như sau:**

```javascript
// Firebase Configuration - Replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyABCD1234567890...",
    authDomain: "con-thuyen-chung.firebaseapp.com",
    databaseURL: "https://con-thuyen-chung-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "con-thuyen-chung",
    storageBucket: "con-thuyen-chung.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcd1234efgh5678"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ... (phần còn lại giữ nguyên)
```

## 🔒 Bước 5: Cấu hình Database Rules (Quan trọng!)

1. **Truy cập Database Rules**
   - Vào Realtime Database → Rules
   - Thay thế rules mặc định bằng:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": "auth != null",
        ".write": "auth != null",
        "players": {
          ".indexOn": ["joinedAt"]
        },
        "votes": {
          ".indexOn": ["timestamp"]
        }
      }
    }
  }
}
```

2. **Hoặc đơn giản hơn cho testing:**
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. **Click "Publish"** để lưu rules

## 🧪 Bước 6: Test kết nối

1. **Mở game trong browser**
   - Mở file `index.html`
   - Chọn "Chơi cùng nhau"
   - Thử tạo phòng mới

2. **Kiểm tra Firebase Console**
   - Vào Realtime Database → Data
   - Bạn sẽ thấy dữ liệu phòng được tạo

## 🚀 Bước 7: Deploy lên Vercel

1. **Tạo tài khoản Vercel** (nếu chưa có)
   - [https://vercel.com/signup](https://vercel.com/signup)

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy project**
   ```bash
   cd e:\HCM
   vercel
   ```

4. **Follow instructions**
   - Chọn default settings
   - Project sẽ được deploy lên production URL

## 🛡️ Bước 8: Bảo mật Production (Sau khi test)

1. **Cập nhật Database Rules**
   - Thay rules test mode bằng rules bảo mật hơn

2. **Enable Authentication** (optional)
   - Vào Authentication → Sign-in method
   - Enable Email/Password hoặc Google sign-in

## ❌ Troubleshooting

### Lỗi "Permission denied"
- Kiểm tra Database Rules đã được publish chưa
- Đảm bảo rules cho phép read/write

### Lỗi kết nối
- Kiểm tra Firebase config có đúng không
- Đảm bảo database URL khớp với project

### Dữ liệu không đồng bộ
- Kiểm tra console browser để xem lỗi cụ thể
- Đảm bảo Firebase SDK được load đúng

## 📞 Hỗ trợ

Nếu gặp khó khăn:
1. Kiểm tra Firebase Console xem project đã active chưa
2. Xem error messages trong browser console (F12)
3. Đảm bảo không có lỗi JavaScript

Sau khi setup thành công, game sẽ hoạt động với **multiplayer thực sự**! 🎉