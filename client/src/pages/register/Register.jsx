import React, { Component } from "react";
import "./register.scss"


export default function Register() {
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
            <h1>Sign Up</h1>
            <span>
                First Name:
            </span>
            <input type="firstname" placeholder="Enter First Name" />
            <hr className="line"/>
            <span>
                Last Name:
            </span>
            <input type="lastname" placeholder="Enter Last Name" />
            <hr className="line"/>
            <span>
                Email or Phone Number:
            </span>
            <input type="email" placeholder="Enter Email or phone number" />
            <hr className="line"/>
            <span>
                Password:
            </span>
            <input type="password" placeholder="Enter Password" />
            <hr className="line"/>
            <span>
                Date of birth:
            </span>
            <input type="birthdate" placeholder="Enter Date Of Birth" />
            <hr className="line"/>
            <span>
                Confirm Password:
            </span>
            <input type="confirmpassword" placeholder="Confirm Password" />
            <hr className="line"/>
            <button className="loginButton">Sign Up</button>
            <span>
                Do you have an account? <b className="signup-btn">Sign login now.</b>
            </span>
            <hr className="line"/>
            
             </form>
        </div>
      </div>
    );
}