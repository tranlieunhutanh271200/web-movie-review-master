import "./app.scss";
import {  Routes, Route } from "react-router-dom";
import HomeAdmin from "./pages/adminHome/AdminHome";
import UserManager from "./pages/userManager/UserManager";
import User from "./pages/user/User";
import UpdateUser from "./pages/updateUser/UpdateUser"
import Casts from "./pages/casts/Casts";
import NewCast from "./pages/newCast/NewCast";
import CastsManager from "./pages/castsManager/CastsManager";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

function App () {
  const { user } = useContext(AuthContext);
  console.log(user);
  return  (
    <Routes>
          
    <Route exact path="/" element ={<HomeAdmin/>}/>
    <Route  path="/Login" element ={<Login/>}/>
   <Route  path="/Users" element ={<UserManager/>}/>

   <Route  path="/Users/:userId" element ={<User/>}/>

   <Route  path="/UpdateUser/:userId" element ={<UpdateUser/>}/>      

   <Route  path="/casts" element ={<CastsManager/>}/>

   <Route  path="/casts/find/:castId" element ={<Casts/>}/>     

   <Route  path="/newCast" element ={<NewCast/>}/>
 
   
 </Routes>
  )
};


export default App;