import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./email.scss";
import { showErrMsg, showSuccessMsg } from '../../components/notification/Notification'

const initialState = {
  email: '',
  password: '',
  err: '',
  success: '',
}

export default function Email() {
  const [data, setData] = useState(initialState)

  const { email, err, success } = data

  const handleChangeInput = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, err: '', success: '' })
  }
  const forgotPassword = async () => {
    try {
      const res = await axios.post('/users/forgot', { email })
      console.log(res)
      return setData({ ...data, err: '', success: res.data.msg })
    } catch (err) {
      err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
    }
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
        <h2>Enter your email below and submit to change password</h2>
        <div className="input">
          <input type="email" placeholder="Enter your email" id="email" value={email} name="email" onChange={handleChangeInput} />
          <button className="emailButton" onClick={forgotPassword}>
            Re-send email
          </button>
        </div>
      </div>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
    </div>
  );
}
