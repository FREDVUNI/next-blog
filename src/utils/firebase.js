// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_API_KEY,
  authDomain: process.env.FIRE_BASE_DOMAIN,
  projectId: process.env.FIRE_BASE_PROJECTID,
  storageBucket: "next-blog-405403.appspot.com",
  messagingSenderId: "628302070364",
  appId: "1:628302070364:web:3d863ca83201788d79dc99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);