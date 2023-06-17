import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBTje3AXAC_aOCi6zc1XgL6fiSPVW_o_wI",
  authDomain: "nft-marketplace-94b84.firebaseapp.com",
  projectId: "nft-marketplace-94b84",
  storageBucket: "nft-marketplace-94b84.appspot.com",
  messagingSenderId: "875718597770",
  appId: "1:875718597770:web:ce82e07ea9d58f6a4a2173",
  measurementId: "G-3WE3E10LZY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {
  db
}



