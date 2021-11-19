import React from 'react';

import "./adminHome.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../../components/navbarAdmin/NavbarAdmin';
import Footer from "../../components/footerAdmin/FooterAdmin"
import Topbar from '../../components/topbarAdmin/topbarAdmin';
import Sidebar from '../../components/sidebarAdmin/SidebarAdmin';
import MainAdmin from  '../../components/mainAdmin/MainAdmin';


function Home() {
    return (
      <div>
      <Topbar/>
      <div className="container">
      <Sidebar />
      <MainAdmin />
      </div>
      </div>
  
       
     
    );
}
    
       

export default Home;