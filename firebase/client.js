// "use client";

// import { initializeApp, getApps } from "firebase/app";
// import { 
//   getAuth, 
//   RecaptchaVerifier, 
//   signInWithPhoneNumber 
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCIvGh0QtpvowF1BOMWi0fNz41uxulzuSE",
//   authDomain: "fityou-b8b85.firebaseapp.com",
//   projectId: "fityou-b8b85",
//   storageBucket: "fityou-b8b85.firebasestorage.app",
//   messagingSenderId: "662162245766",
//   appId: "1:662162245766:web:49f9273585699cba61a907",
//   measurementId: "G-GXY38T74LX"
// };

// // Initialize Firebase only once
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// export const auth = getAuth(app);

// // Safely create Recaptcha
// export function generateRecaptcha() {
//   if (typeof window === "undefined") return;

//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "invisible",
//       }
//     );
//   }

//   return window.recaptchaVerifier;
// }

// export { signInWithPhoneNumber };
