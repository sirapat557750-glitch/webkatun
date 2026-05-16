// ====================================================
// firebase-auth.js - เชื่อม Firebase Authentication + Firestore
// ====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ====================================================
// 🔥 ใส่ Firebase Config ของคุณตรงนี้
// ====================================================
const firebaseConfig = {
  apiKey: "AIzaSyCI59jHdfWXUFpQa0kx6T6ZoNu4BDKN8Ss",
  authDomain: "anime-manga-22460.firebaseapp.com",
  projectId: "anime-manga-22460",
  storageBucket: "anime-manga-22460.firebasestorage.app",
  messagingSenderId: "219653600382",
  appId: "1:219653600382:web:eda68011c278bbfb88542f",
  measurementId: "G-KHPVWSQX1H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ====================================================
// ฟังก์ชันสมัครสมาชิก
// ชื่อผู้ใช้ + email จะถูกสร้างเป็น username@animemanga.com
// ====================================================
export async function firebaseSignup(username, password) {
  const email = `${username}@animemanga.com`;
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // บันทึกชื่อผู้ใช้ลง Firestore
  await setDoc(doc(db, "users", userCredential.user.uid), {
    username: username,
    favorites: [],
    createdAt: new Date().toISOString()
  });

  // ตั้งชื่อใน Auth Profile
  await updateProfile(userCredential.user, { displayName: username });
  
  return username;
}

// ====================================================
// ฟังก์ชัน Login
// ====================================================
export async function firebaseLogin(username, password) {
  const email = `${username}@animemanga.com`;
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user.displayName || username;
}

// ====================================================
// ฟังก์ชัน Logout
// ====================================================
export async function firebaseLogout() {
  await signOut(auth);
}

// ====================================================
// โหลดรายการโปรดจาก Firestore
// ====================================================
export async function loadFavoritesFromFirestore(uid) {
  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
      return new Set(docSnap.data().favorites || []);
    }
  } catch (e) {
    console.error("โหลด favorites ไม่ได้:", e);
  }
  return new Set();
}

// ====================================================
// บันทึกรายการโปรดไปยัง Firestore
// ====================================================
export async function saveFavoritesToFirestore(uid, favoritesSet) {
  try {
    await updateDoc(doc(db, "users", uid), {
      favorites: Array.from(favoritesSet)
    });
  } catch (e) {
    console.error("บันทึก favorites ไม่ได้:", e);
  }
}

// ====================================================
// ติดตามสถานะ Login แบบ realtime
// ====================================================
export function onAuthChange(callback) {
  onAuthStateChanged(auth, callback);
}

// ====================================================
// ดึง uid ของผู้ใช้ปัจจุบัน
// ====================================================
export function getCurrentUID() {
  return auth.currentUser ? auth.currentUser.uid : null;
}
