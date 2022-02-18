import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB_GVK0mQoTC0Zd7Rcf1PWJyduBdPWI7w4",
  authDomain: "henry-network-b2190.firebaseapp.com",
  projectId: "henry-network-b2190",
  storageBucket: "henry-network-b2190.appspot.com",
  messagingSenderId: "409241400460",
  appId: "1:409241400460:web:59757b4d56658c265037a9",
  measurementId: "G-HLJ71N6QMH"
}

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
