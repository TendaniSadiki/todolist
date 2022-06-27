import Topbar from './Components/topbar/Topbar';
import './App.css';
import AuthRoutes from './Auth/Routes';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAJ6333vmI8C0mcz59ug7YF_dzJegH_xE",
  authDomain: "todolist-f4c26.firebaseapp.com",
  projectId: "todolist-f4c26",
  storageBucket: "todolist-f4c26.appspot.com",
  messagingSenderId: "737210606992",
  appId: "1:737210606992:web:28551b21128a81e6a73f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//functional programing
function App() {
    
  return (
    <div>
    <AuthRoutes/>
    <Topbar/>
    </div>
  );
}

export default App;
