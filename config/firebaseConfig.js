// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAfybDFwlcj2t2_dA_3Sp3WlueYpt0l0qc",
//   authDomain: "stellar-haven-61009.firebaseapp.com",
//   projectId: "stellar-haven-61009",
//   storageBucket: "stellar-haven-61009.firebasestorage.app",
//   messagingSenderId: "58494296979",
//   appId: "1:58494296979:web:c71ccba0ed88ed0a87fe66",
//   measurementId: "G-0XW8R3LCE2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);


// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfybDFwlcj2t2_dA_3Sp3WlueYpt0l0qc",
  authDomain: "stellar-haven-61009.firebaseapp.com",
  projectId: "stellar-haven-61009",
  storageBucket: "stellar-haven-61009.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "58494296979",
  appId: "1:58494296979:web:c71ccba0ed88ed0a87fe66",
  measurementId: "G-0XW8R3LCE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Prevent analytics error in SSR (Next.js)

export default app;

