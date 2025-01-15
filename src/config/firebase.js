// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey:"AIzaSyBYnGuAfnXnEzlzVvNUczcoBstasNU1tqU",
  authDomain: "laundryapp-45989.firebaseapp.com",
  projectId:"laundryapp-45989",
  storageBucket: "laundryapp-45989.firebasestorage.app",
  messagingSenderId: "743423071263",
  appId:  "1:743423071263:web:c9219efe529e862ecaf12a",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Export Auth agar bisa digunakan di seluruh project
const auth = getAuth(app);

export { auth };
