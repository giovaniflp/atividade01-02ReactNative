// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBPtbT1pmonW84fioMYrrt1C7MsU3ZLPs",
  authDomain: "atividade-nilson.firebaseapp.com",
  projectId: "atividade-nilson",
  storageBucket: "atividade-nilson.appspot.com",
  messagingSenderId: "216015940541",
  appId: "1:216015940541:web:44e0b154e60a3c6d08c0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app