// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyApjRYnGUZdxI-aaOASbGPZaQ5YlEYHWRU",
  authDomain: "laundryapp-b5dd4.firebaseapp.com",
  projectId: "laundryapp-b5dd4",
  storageBucket: "laundryapp-b5dd4.firebasestorage.app",
  messagingSenderId: "579911471425",
  appId: "1:579911471425:web:80d58aec95feaf27c4d1c0"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Export Auth agar bisa digunakan di seluruh project
const auth = getAuth(app);

export { auth };
