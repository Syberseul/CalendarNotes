import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAr1jTh2c3nevQtN4GF1Bpj0z4jk4uJURo",
  authDomain: "calendarnotes4dogs.firebaseapp.com",
  projectId: "calendarnotes4dogs",
  storageBucket: "calendarnotes4dogs.appspot.com",
  messagingSenderId: "741192478981",
  appId: "1:741192478981:web:a2a5cd18538a66b14d476c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
