import "./user.scss"
import Topbar from '../../components/topbarAdmin/topbarAdmin';
import Sidebar from '../../components/sidebarAdmin/SidebarAdmin';
import Footer from "../../components/footerAdmin/FooterAdmin";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function UserManager(){
  const location = useLocation();
  const user= location.user;
  

    return(
        <div>
        <Topbar/>
      <div className="container">
            <Sidebar />  
            <div className="user">
            <div className="userTitleContainer">
        <h1 className="userTitle">Detail User</h1>
        <Link to="/UpdateUser/:userId">
          <button className="userAddButton">Update</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername"></span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
      
          
       
      </div>
      
       </div>
      
       </div>            
      <Footer/>
        </div>
    )
}