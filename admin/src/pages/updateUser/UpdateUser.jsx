import "./updateUser.scss"
import { useContext, useState } from "react";
import Topbar from '../../components/topbarAdmin/topbarAdmin';
import Sidebar from '../../components/sidebarAdmin/SidebarAdmin';
import Footer from "../../components/footerAdmin/FooterAdmin";
export default function UpdateUser(){
  
    return(
        <div>
        <Topbar/>
      <div className="container">
      <Sidebar />
      <div className="updateUser">
      <h1 className="updateUserTitle">Update User</h1>
      <form className="updateUserForm">
        <div className="updateUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="updateUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="updateUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="updateUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="updateUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="updateUserItem">
          <label>Address</label>
          <input type="text" placeholder="update York | USA" />
        </div>
        <div className="updateUserItem">
          <label>Gender</label>
          <div className="updateUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="updateUserItem">
          <label>Active</label>
          <select className="updateUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="updateUserButton">Create</button>
      </form>
      </div>
      
      </div> 
      <Footer/>
        </div>
       
    )
}