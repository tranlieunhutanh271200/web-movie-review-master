import React, { useState } from "react";
import "./register.scss"
import '@date-io/date-fns'
import Grid  from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import isEmpty from "validator/lib/isEmpty"
import{
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker 
}from '@material-ui/pickers'

export default function Register() {
  var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-09-11T12:00:00")
  )
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  // const [dob, setDob] = useState('')
  const [confirmpass, setConfirmpass] = useState('')
  const [validationMsg, setValidationMsg]= useState('')
  const onChangeFirstname = (event) => {
    const value = event.target.value
    setFirstname(value)
  }
  const onChangeLastname = (event) => {
    const value = event.target.value
    setLastname(value)
  }
  const onChangePass = (event) => {
    const value = event.target.value
    setPass(value)
  }
  // const onChangeDob = (event) => {
  //   const value = event.target.value
  //   setDob(value)
  // }
  const onChangeEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }
  const onChangeConfirmpass = (event) => {
    const value = event.target.value
    setConfirmpass(value)
  }
  const validateAll =()=>{
    
    const msg = {}
    if (isEmpty(firstname)){
        msg.firstname = "Please input your First Name"
        
    }
    if (isEmpty(lastname)){
      msg.lastname = "Please input your Last Name"
    }
    if (isEmpty(email)){
      msg.email = "Please input your Email or Phone number"
    }
    if (!isEmpty(email) && !mailFormat.test(email)) {
      msg.email= "Please provide a valid Email or phone number ";
    }

    if (isEmpty(pass)){
      msg.pass = "Please input your Password"
    }
    
    // if (isEmpty(dob)){
    //   msg.dob = "Please input your Date of bỉth"
    // }
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
  const onSubmitSigup = () => {
      const isValid = validateAll()
      if (!isValid) return
      // Call API Sign Up
  }
    return (
      <div className="register">
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
            <h1>Sign Up</h1>
            <span>
                First Name:
            </span>
            <input type="firstname" placeholder="Enter First Name" onChange={onChangeFirstname} />           
            <p className = "validator">{validationMsg.firstname}</p>
            <span>
                Last Name:
            </span>
            <input type="lastname" placeholder="Enter Last Name" onChange={onChangeLastname}/>
            <p className = "validator">{validationMsg.lastname}</p>
            <span>
                Email or Phone Number:
            </span>
            <input type="email" placeholder="Enter Email or phone number" onChange={onChangeEmail}/>
            <p className = "validator">{validationMsg.email}</p>
            <span>
                Password:
            </span>
            <input type="password" placeholder="Enter Password" onChange={onChangePass}/>
            <p className = "validator">{validationMsg.pass}</p>
            <span>
                Confirm Password:
            </span>
            <input type="password" placeholder="Confirm Password" onChange={onChangeConfirmpass}/>
            <p className = "validator">{validationMsg.confirmpass}</p>
            <span>
                Date of birth:
            </span>
            <div className = "Muiinput">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify ='space-around'>
                <KeyboardDatePicker
                  
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id ='data-picker'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
                </Grid>
                </MuiPickersUtilsProvider>
                </div>
            <button className="registerButton" type="button" onClick = {onSubmitSigup}>Sign Up</button>
            <span>
                Do you have an account? <b className="signup-btn">Sign in now.</b>
            </span>   
             </form>
        </div>
      </div>
    );
}