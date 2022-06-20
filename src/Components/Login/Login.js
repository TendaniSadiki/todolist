import React , { useState } from 'react'
import {NavLink} from 'react-router-dom';

import './LoginStyle.css';

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  
 

  const signin = () => {
    let getDetails = {
      email: email,
      pass: password,
      
    };
   
  if (getDetails.email ==="" && getDetails.pass ===""){
    alert("Please enter Email and Password")
  }
  else if(getDetails.email ===""){
    alert("Enter your Email")
  }
  else if(!getDetails.email.includes("@")){
    alert("Email doesn't exist")
  }
  else if(getDetails.pass ===""){
    alert("Enter your Password")
  }
  else if(!getDetails.pass.match(numbers)){
    alert('please add 1 number');

}
else if(!getDetails.pass.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}
else if(!getDetails.pass.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');

}
  else{
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    let userFound = false;
    for(let user of storedUsers) {
      
      if(email === user.email && password === user.pass){
        let getProfileInfo = {
          email: user.name,
          surname: user.surname,
          number: user.number
          
        };
        localStorage.setItem("profileInfo", JSON.stringify(getProfileInfo));
        alert("logging in")
        userFound = true;
        
        window.localStorage.setItem("loginState", "true");
        window.dispatchEvent(new Event("storage"))
      }
    
      
   }
if(!userFound){
  alert("failed to log in")
}
    

  }
  }
    
    return(
        <div>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
            <p>Login page</p>
            <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="email" className="form-control" placeholder="Email"
  value={email}
  onChange={(text) => {
    setEmail(text.target.value);
  }}
  />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" placeholder="Password"
  value={password}
  onChange={(text) => {
    setPassword(text.target.value);
  }}
  />
</div>
 <button type="button" className="btn btn-secondary btn-block" onClick={signin}>Log In</button>
 <NavLink to="../SIGNUP  "  exact ><span><i>Sign Up</i></span>
</NavLink>  
   </form>  
          </div>
        </div>
       </div>   
        </div>
    )
}

export default Login;