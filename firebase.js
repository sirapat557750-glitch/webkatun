// 1. นำเข้าสิ่งที่ต้องใช้ (วางไว้บนสุดเสมอ)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. ค่า Config จากหน้าเว็บ Firebase (ใช้ค่าจริงของคุณ)
const firebaseConfig = {
  apiKey: "AIzaSyCNTKEhLke-GQUU_32Re9WDnovy4AqQoxQ",
  authDomain: "animemanga-hub.firebaseapp.com",
  projectId: "animemanga-hub",
  storageBucket: "animemanga-hub.firebasestorage.app",
  messagingSenderId: "781551776042",
  appId: "1:781551776042:web:8ca41f822b2eff3f6f6e53"
};

// 3. เริ่มต้นระบบ
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // export เพื่อให้ไฟล์ app.js นำไปใช้ได้

// 4. ฟังก์ชันสำหรับ Login (ส่งออกไปใช้ที่อื่น)
export async function checkLogin(emailIn, passIn) {
    try {
        // เปลี่ยน ID ตรงนี้ให้ตรงกับเลข Document ใน Firebase ของคุณ
        const docRef = doc(db, "users", "ใส่_ID_จาก_Firebase_ที่นี่"); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data["อีเมลของคุณ"] === emailIn && data["รหัสผ่านของคุณ"] === passIn) {
                return { success: true, data: data };
            }
        }
        return { success: false };
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, error: error };
    }
}