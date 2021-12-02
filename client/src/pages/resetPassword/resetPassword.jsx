import {Facebook} from "@material-ui/icons";
import "./resetPassword.scss";
import isEmpty from "validator/lib/isEmpty"
import React, { useState } from "react";
export default function Resetpassword() {
  
  const [pass, setPass] = useState('')
  const [code, setCode] = useState('')
  const [validationMsg, setValidationMsg]= useState('')
  const [confirmpass, setConfirmpass] = useState('')
  const onChangePass = (event) => {
    const value = event.target.value
    setPass(value)
  }
  const onChangeCode = (event) => {
    const value = event.target.value
    setCode(value)
  }
  const onChangeConfirmpass = (event) => {
    const value = event.target.value
    setConfirmpass(value)
  }
  const validateAll =()=>{
    const msg = {}
    
    if (isEmpty(pass)){
      msg.pass = "Please input your Password"
    }
    if (isEmpty(code)){
      msg.code = "Please input verification code"
    }
    if (isEmpty(confirmpass)){
        msg.confirmpass = "Please input your Confimr Password"
      }
      if (!isEmpty(pass) && !isEmpty(confirmpass)) {    

        if (pass != confirmpass) {
    
    
          msg.confirmpass = "Passwords don't match.";
    
        }
        
    
    } 
    
  setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmitResetPass = () => {
    const isValid = validateAll()
    if (!isValid) return
    // Call API Sign Up
}
  return (
    <div className="resetPass">
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
          <h1>New Password</h1>
          <span>
                New Password
            </span>
          <input type="password" placeholder="Enter new password" onChange={onChangePass} />
          <p className = "validator">{validationMsg.pass}</p>
          <span>
                Confirm New Password
            </span>
          <input type="password" placeholder="Password" onChange = {onChangeConfirmpass} />
          <p className = "validator">{validationMsg.confirmpass}</p>
          <span>
          Verification code
            </span>
          <input type="code" placeholder="Enter verification code" onChange={onChangeCode} />
          <p className = "validator">{validationMsg.code}</p>
          <button className="resetPassButton" type="button" onClick={onSubmitResetPass}>Confirm</button>
         
        
        </form>
      </div>
    </div>
  );
}