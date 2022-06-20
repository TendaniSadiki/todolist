import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNUmber] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loginState, setLoginState] = useState(false);
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  const register = () => {
    let userdDetails = {
      name: name,
      surname: surname,
      email: email,
      number: contactNumber,
      userImage: image,
      pass: password,
      login:loginState
      
    };
    if(userdDetails.name === "" && userdDetails.surname === "" && userdDetails.email ==="" && userdDetails.number ==="" && userdDetails.userImage.length ===0 && userdDetails.pass === ""){
      alert("Please fill in all inputs")
    }
    else if(userdDetails.name === ""){
      alert("Enter Username")
    }else if(userdDetails.surname === ""){
      alert("Enter Surname")
    }
    else if(userdDetails.email === ""){
      alert("Enter Email")
    }
    else if(!userdDetails.email.includes("@")){
      alert("Email doesn't exist")
    }
    else if(userdDetails.number === ""){
      alert("Enter Contact number")
    }
    else if(userdDetails.userImage.length === 0){
      alert("Select Image")
    }
    else if(userdDetails.pass === ""){
      alert("Enter Password")
    }
    else if(userdDetails.pass.length < 6){
      alert("password should be 6 characters")
    }
    else if(!userdDetails.pass.match(numbers)){
      alert('please add 1 number');
  
  }
  else if(!userdDetails.pass.match(upperCaseLetters)){
      alert('please add 1 uppercase letter');
  
  }
  else if(!userdDetails.pass.match(lowerCaseLetters)){
      alert('please add 1 lovercase letter');
  
  }
    
    else{
    let storedUserDetails = new Array();
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      storedUserDetails = storedUsers;
      storedUserDetails.push(userdDetails);
    } else {
      storedUserDetails.push(userdDetails);
    }
    alert('Your account has been created');
    localStorage.setItem("users", JSON.stringify(storedUserDetails));
    window.location = "/Login";
  };}

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Signup page</p>{" "}
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(text) => {
                    setName(text.target.value);
                  }}
                  
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Surname"
                  onChange={(text) => {
                    setSurname(text.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Contact number"
                  onChange={(text) => {
                    setContactNUmber(text.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user">Image</i>
                  </span>
                </div>
                <input
                  type="file"
                  className="form-control"
                  accept='image/png ,image/jpg'
                  onChange={(text) => {
                    setImage(text.target.files[0]);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={(text) => {
                    setPassword(text.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={register}
              >
                Sign Up
              </button>
              <div className="message"></div>
              <NavLink to="../Login" exact>
                <span>
                  <i>Sign In</i>
                </span>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;