import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDXYDTEYCqUKSj4jIS3nk9xPaDgEgkgSD8",
  authDomain: "henry-network-8267b.firebaseapp.com",
  projectId: "henry-network-8267b",
  storageBucket: "henry-network-8267b.appspot.com",
  messagingSenderId: "717190995829",
  appId: "1:717190995829:web:658d1f0b2c2d100465fd3c",
  measurementId: "G-6VVTHGRKVM"
}

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
