import "./updateUser.scss"
import {  useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import {  updateUsers } from "../../context/userContext/apiCalls";
export default function UpdateUser(){
  const { dispatch } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const location = useLocation();
  console.log(location.pathname)
  const handleChange = (e) => {
    const value = e.target.value;
    
    setUser({ ...user, [e.target.name]: value, _id:"619dbad988f550436c1b8a60" });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateUsers(user, dispatch);
  };
  console.log(user);
    return(
        
      <div className="updateUser">
      <h1 className="updateUserTitle">Update User</h1>
      <form className="updateUserForm">
        <div className="updateUserItem">
          <label>First Name</label>
          <input type="text" placeholder="john" name="firstname" onChange={handleChange}/>
        </div>
        <div className="updateUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="John Smith"name="lastname" onChange={handleChange} />
        </div>
        <div className="updateUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange} />
        </div>
        <div className="updateUserItem">
          <label>Date of Birth</label>
          <input type="date" name="dob" name="dob" onChange={handleChange} />
         
        </div>
        <div className="updateUserItem">
          <label>Admin</label>
          <div className="updateUserGender" >
            <input type="radio" name="gender" id="Admin" value="True"  onChange={handleChange} />
            <label for="male">Yes</label>
            <input type="radio" name="gender" id="User" value="False"  onChange={handleChange} />
            <label for="female">No</label>
          </div>
        </div>
        <div className="updateUserItem">
          <label>Active</label>
          <select className="updateUserSelect"  onChange={handleChange} id="active">
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <button className="updateUserButton" onClick={handleUpdate} >Update</button>
      </form>
      </div>
      
      
       
    )
}