
// Firebase Web SDK configuration.
// Replace every YOUR_* value with your own project's Web App config from Firebase Console.
// This config is not a service-account secret. Never put private service-account keys here.
export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};
export const isFirebaseConfigured = !Object.values(firebaseConfig).some(v => v.startsWith("YOUR_"));
