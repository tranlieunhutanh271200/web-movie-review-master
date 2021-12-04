import {Facebook} from "@material-ui/icons";
import "./login.scss";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import {showErrMsg, showSuccessMsg} from '../../components/notification/Notification'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import isEmpty from "validator/lib/isEmpty"
import React, { useState } from "react";
import {dispatchLogin} from '../../redux/actions/authAction'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  err: '',
  success:'',
}
export default function Login() {
  //var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()
  const {email, password, err, success} = user
  
  const handleChangeInput = e => {
    const {name, value} = e.target
    setUser({...user, [name]:value, err:'', success: ''})
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/users/login', {email, password})
      //console.log(res)
      setUser({...user, err: '', success: 'Login Successfully'})
      localStorage.setItem('firstlogin', true);
      dispatch(dispatchLogin(res.data));
      history.push("/");
    } catch (err) {
      err.response.data.msg && 
      setUser({...user, err: err.response.data.msg, success: ''})
    }
  }
  const responseGoogle = async (response) =>{
    console.log(response);
    try {
      const res = await axios.post('users/google_login', {tokenId: response.tokenId})
      setUser({...user, err: '', success: res.data.msg});
      localStorage.setItem('firstlogin', true);
      dispatch(dispatchLogin(res.data));
      history.push("/");
    } catch (err) {
      err.response.data.msg && 
      setUser({...user, err: err.response.data.msg, success: ''})
    }
  }
  const responseFacebook = async (response) =>{
    console.log(response);
    try {
      const { accessToken, userID} = response
      const res = await axios.post('users/facebook_login', {accessToken, userID})
      setUser({...user, err: '', success: res.data.msg});
      localStorage.setItem('firstlogin', true);
      dispatch(dispatchLogin(res.data));
      history.push("/");
    } catch (err) {
      err.response.data.msg && 
      setUser({...user, err: err.response.data.msg, success: ''})
    }
  }
  //console.log(user)
  return (
    <div className="login">
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
          <h1>Sign In</h1>
          <span>
                Email Address:
            </span>
          <input type="text" placeholder="Enter your email address" id="email" value={email} name="email" onChange={handleChangeInput} />
          <span>
                Password:
            </span>
          <input type="password" placeholder="Enter your password" id="password" value={password} name="password" onChange = {handleChangeInput} />
          <button className="loginButton" type="button" onClick={handleSubmit}>Sign In</button>
          <span>
            New to Netflix? <b className="signup-btn" to="/forgot_password">Sign up now.</b>
          </span>
          <hr className="line"/>
          <GoogleLogin
              clientId="582403466790-cdgmfhup29f2hrfi9n2grna2sk15fmr6.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              cookiePolicy={'single_host_origin'}
          />
          <FacebookLogin
            appId="891862731473180"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
        </form>
      </div>
    </div>
  );
}