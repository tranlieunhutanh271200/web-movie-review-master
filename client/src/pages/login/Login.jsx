import {Facebook} from "@material-ui/icons";
import "./login.scss";

export default function Login() {
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
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
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
