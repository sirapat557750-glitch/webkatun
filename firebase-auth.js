// ====================================================
// firebase-auth.js - เชื่อม Firebase Authentication + Firestore
// รองรับ Email/Password จริง + Google Sign-In
// ====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ====================================================
// 🔥 Firebase Config
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
const googleProvider = new GoogleAuthProvider();

// ====================================================
// Helper: ดึง display name จาก email (ใช้ส่วนหน้า @)
// ====================================================
function nameFromEmail(email) {
  return email ? email.split("@")[0] : "ผู้ใช้";
}

// ====================================================
// ฟังก์ชันสมัครสมาชิก (Email จริง + displayName)
// ====================================================
export async function firebaseSignup(displayName, email, password) {
  if (displayName.toLowerCase() === "admin") {
    throw { code: "auth/admin-reserved", message: "ชื่อนี้ถูกสงวนไว้" };
  }
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(userCredential.user, { displayName });

  await setDoc(doc(db, "users", userCredential.user.uid), {
    username: displayName,
    email: email,
    favorites: [],
    createdAt: new Date().toISOString()
  });

  return displayName;
}

// ====================================================
// Helper: ค้นหา email จาก username ใน Firestore
// ====================================================
async function lookupEmailByUsername(username) {
  const { collection, query, where, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
  const q = query(collection(db, "users"), where("username", "==", username));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    throw { code: "auth/user-not-found", message: "ไม่พบชื่อผู้ใช้นี้ในระบบ" };
  }
  return snapshot.docs[0].data().email;
}

// ====================================================
// ฟังก์ชัน Login ด้วย Username/Password
// ====================================================
export async function firebaseLogin(username, password) {
  const email = await lookupEmailByUsername(username);
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user.displayName || nameFromEmail(userCredential.user.email);
}

// ====================================================
// ฟังก์ชัน Login ด้วย Google
// ====================================================
export async function firebaseLoginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // สร้าง user doc ใน Firestore ถ้ายังไม่มี
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(userRef, {
      username: user.displayName || nameFromEmail(user.email),
      email: user.email,
      favorites: [],
      createdAt: new Date().toISOString()
    });
  }

  return user.displayName || nameFromEmail(user.email);
}

// ====================================================
// ส่งอีเมลรีเซ็ตรหัสผ่าน
// ====================================================
export async function firebaseResetPassword(email) {
  await sendPasswordResetEmail(auth, email);
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

// ====================================================
// โหลดรีวิวทั้งหมดจาก Firestore
// ====================================================
export async function loadAllReviews() {
  try {
    const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const snapshot = await getDocs(collection(db, "reviews"));
    const result = {};
    snapshot.forEach((docSnap) => {
      result[docSnap.id] = docSnap.data().list || [];
    });
    return result;
  } catch (e) {
    console.error("โหลดรีวิวไม่ได้:", e);
    return {};
  }
}

// ====================================================
// บันทึกรีวิวลง Firestore
// ====================================================
export async function saveReviewsToFirestore(key, reviewsList) {
  try {
    await setDoc(doc(db, "reviews", key), {
      list: reviewsList
    });
  } catch (e) {
    console.error("บันทึกรีวิวไม่ได้:", e);
  }
}
