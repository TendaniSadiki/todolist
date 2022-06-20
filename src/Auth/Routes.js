import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Profile from '../Components/Profile/Profile';
import SIgnup from '../Components/SIgnup/SIgnup';


const AuthRoutes = () =>{
    const [loginState, setLoginState] = useState(JSON.parse(localStorage.getItem("loginState")));
    window.addEventListener('storage',  (event)=>{
       
            
            const loginValue = localStorage.getItem("loginState");
            if(loginValue === "true"){
                setLoginState(true) 
               
            }
        
    })
    return(
//Router
        <Router>
            {
            loginState ?
            //Online Handler
                <Routes>
                <Route exact path="*" element={<Home/>}/>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/Profile" element={<Profile/>}/>
                </Routes>
            :
            //Offline Handler
                <Routes>
                    <Route exact path="*" element={<Login/>}/>
                    <Route exact path="/Signup" element={<SIgnup/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                </Routes>
            }
        </Router>
    )
}

export default AuthRoutes;
    