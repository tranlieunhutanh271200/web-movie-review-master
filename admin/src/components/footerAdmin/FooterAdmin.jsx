import React from "react";
import "./footerAdmin.scss"

function Footer() {
    return (
      <div className="footer-container">
        <div class ="footer">
        <div class ="footer-heading footer-1">
          <h2> About Us</h2>
          <a href ="#"> Blog</a>
          <a href ="#"> Customers</a>
          <a href ="#"> Terms of Service</a>
          <a href ="#"> Investors</a>
          <a href ="#"> Facebook</a>
      </div>
      <div class ="footer-heading footer-2">
          <h2> Contact Us</h2>
          <a href ="#"> Help Center</a>
          <a href ="#"> Support</a>
          <a href ="#"> Jobs</a>
          <a href ="#"> Sponsorships</a>
        </div>
        <div class ="footer-heading footer-3">
          <h2>Another</h2>
          <a href ="#"> Cookie Preferences</a>
          <a href ="#"> Privacy</a>
          <a href ="#"> Legal Notices</a>
          <a href ="#"> Gift Cards</a>
        </div>
        <div class ="footer-email-form">
          <h2>Join with us</h2>
          <input type="email" placeholder="Enter your email Address" id ="footer-email"/>
          <input type="submit" value="Sign Up" id ="footer-email-btn"/>
          
        </div>
        
        </div>

      </div>
     
    )
}  
  export default Footer;