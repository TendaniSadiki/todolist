import OnlineNav from "./OnlineNav";
import OfflineNav from "./OfflineNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'


const Status = () =>{
    const [loginState, setLoginState] = useState(JSON.parse(localStorage.getItem("loginState")));
    window.addEventListener('storage',  (event)=>{
       
            
        const loginValue = localStorage.getItem("loginState");
        if(loginValue === "true"){
            setLoginState(true) 
           
        }
    
})
        return(
            <Router>
                {
                    loginState ?
                    <Routes>
                    <Route exact path="*" element={<OnlineNav/>}/>
                    </Routes>
                :
                    <Routes>
                        <Route exact path="*" element={<OfflineNav/>}/> 
                    </Routes>
    }
            </Router>
        )
    }
    
    export default Status;