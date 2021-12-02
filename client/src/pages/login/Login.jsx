import {Facebook} from "@material-ui/icons";
import "./login.scss";
import isEmpty from "validator/lib/isEmpty"
import React, { useState } from "react";
export default function Login() {
  var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [validationMsg, setValidationMsg]= useState('')
  const onChangeEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }
  const onChangePass = (event) => {
    const value = event.target.value
    setPass(value)
  }
  const validateAll =()=>{
    const msg = {}
    if (isEmpty(email)){
      msg.email = "Please input your Email or Phone number"
    }
    if (isEmpty(pass)){
      msg.pass = "Please input your Password"
    }
    if (!isEmpty(email) && !mailFormat.test(email)) {
      msg.email= "Please provide a valid Email or phone number ";
      
  }
  setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmitSigin = () => {
    const isValid = validateAll()
    if (!isValid) return
    // Call API Sign Up
}
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <span>
                Email or phone number
            </span>
          <input type="email" placeholder="Email or phone number" onChange={onChangeEmail} />
          <p className = "validator">{validationMsg.email}</p>
          <span>
                Password:
            </span>
          <input type="password" placeholder="Password" onChange = {onChangePass} />
          <p className = "validator">{validationMsg.pass}</p>
          <button className="loginButton" type="button" onClick={onSubmitSigin}>Sign In</button>
          <span>
            New to Netflix? <b className="signup-btn">Sign up now.</b>
          </span>
          <hr className="line"/>
          <button className="loginFBButton"> 
            <span className="facebook-logo"></span>
            <span className="facebook-text">Log in with Facebook</span> 
          </button>
          <button className="loginGGButton"> Log in with Google</button>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b style={{cursor: "pointer"}}>Learn more </b>.
          </small>
        </form>
      </div>
    </div>
  );
}