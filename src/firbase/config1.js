import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
 export const firebaseConfig = {
  apiKey: "AIzaSyCRg1OnbJw3DAqIOX8bnPDnHLDzUJGLjCY",
  authDomain: "react-gym-a3cd6.firebaseapp.com",
  projectId: "react-gym-a3cd6",
  storageBucket: "react-gym-a3cd6.appspot.com",
  messagingSenderId: "118376194961",
  appId: "1:118376194961:web:35eaa43076d78aa4047030",
  measurementId: "G-DFP96GF18L"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
// const analytics = getAnalytics(app);