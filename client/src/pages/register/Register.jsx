import React, { useState } from "react";
import "./register.scss"
import '@date-io/date-fns'
import Grid  from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import isEmpty from "validator/lib/isEmpty"
import { Link } from 'react-router-dom'
import{
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker 
}from '@material-ui/pickers'
import {isMatch} from "../../components/validation/Validation"
import { showErrMsg, showSuccessMsg } from '../../components/notification/Notification'
import axios from 'axios'

const initialState = {
  firstname:'',
  lastname: '',
  email: '',
  password: '',
  cf_password: '',
  dob:'',
  err: '',
  success: '',
}

export default function Register() {
  const [user, setUser] = useState(initialState);
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2020-09-11T12:00:00")
  // )

  const { firstname, lastname, email, password, cf_password, dob, err, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if(!isMatch(password, cf_password))
      return setUser({...user, err: "Password did not match.", success: ''})
    try {
      const res = await axios.post('/users/register', { firstname, lastname, email, password, dob })
      console.log(res)
      setUser({ ...user, err: '', success: res.data.msg })
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: '' })
    }
  }
  console.log(user)
    return (
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Sign Up</h1>
            <span>
                First Name:
            </span>
            <input type="text" value={firstname} id="firstname" name="firstname" placeholder="Enter First Name" onChange={handleChangeInput} />           
            <span>
                Last Name:
            </span>
            <input type="text" value={lastname} id="lastname" name="lastname" placeholder="Enter Last Name" onChange={handleChangeInput}/>
            <span>
                Email:
            </span>
            <input type="email" id="email" value={email} name="email" placeholder="Enter Email" onChange={handleChangeInput}/>
            <span>
                Date of birth:
            </span>
            <input type="date" id="dob" name="dob" onChange={handleChangeInput}></input>
            <span>
                Password:
            </span>
            <input type="password" value={password} id="password" name="password" placeholder="Enter Password" onChange={handleChangeInput}/>
            <span>
                Confirm Password:
            </span>
            <input type="password" value={cf_password} id="cf_password" name="cf_password" placeholder="Confirm Password" onChange={handleChangeInput}/>
            <button className="registerButton" type="button" onClick = {handleSubmit}>Sign Up</button>
            <span className="sign-up">
                Do you have an account? <Link style={{ textDecoration: 'none' }} className="signup-btn" to="/login">Sign in now.</Link>
            </span>   
             </form>
        </div>
      </div>
    );
}