
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty"
import "./email.scss";


export default function Email() {
  var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [validationMsg, setValidationMsg]= useState('')
  const onChangeEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }
  // const onChangePass = (event) => {
  //   const value = event.target.value
  //   setPassword(value)
  // }
  const validateAll =()=>{
    
    const msg = {}
    if (isEmpty(email)){
      msg.email = "Please input your Email or Phone number"
    }
    if (!isEmpty(email) && !mailFormat.test(email)) {
      msg.email= "Please provide a valid Email or phone number ";
    }

    // if (isEmpty(password)){
    //   msg.password = "Please input your Password"
    // }
    
    // if (isEmpty(dob)){
    //   msg.dob = "Please input your Date of bỉth"
    // }
    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmitContinue = () => {
      const isValid = validateAll()
      if (!isValid) return
      // Call API Sign Up
  }
  return (
    <div className="email">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
           <button className="loginButton"><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Sign In</Link></button>
        </div>
      </div>
      <div className="container">
        <h1>Forgot password</h1>
          <div className="input">
            <input type="email" placeholder="Enter your email" onChange = {onChangeEmail}/>
            <button className="emailButton" onClick={onSubmitContinue}>
              Re-send email
            </button>
      </div>
      <span className = "validator">{validationMsg.email}</span>
        
        
      </div>
    </div>
  );
}
