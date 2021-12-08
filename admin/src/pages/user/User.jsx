import "./user.scss";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  DateRange,
  AddCircleOutline
  
} from "@material-ui/icons";
import { useContext, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsersFind } from "../../context/userContext/apiCalls";
import Notification from "../../components/Alert/Notification"
export default function UserManager() {
  const { users, dispatch } = useContext(UserContext);
  const location = useLocation();
  const [path, userId] = location.pathname.split("/user/");
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  
  useEffect(() => {
    getUsersFind(userId, dispatch, setNotify);
  }, [dispatch]);
  console.log(users)

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Detail</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={users.profilePic}
              alt=""
              className="userShowImg"
            />
           
          </div>
          <div className="userShowTopTitle">
              <span className="userShowUsername">{users.firstname}</span>
              <span className="userShowUserTitle">{users.lastname} </span>
            </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Information</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{users._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{users.dob}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{users.email}</span>
            </div>
            <div className="userShowInfo">
              <AddCircleOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{users.createdAt}</span>
            </div>
            <div className="userShowInfo">
              <DateRange className="userShowIcon" />
              <span className="userShowInfoTitle">{users.updatedAt}</span>
            </div>
           
          </div>
        </div>
        <Notification
                notify={notify}
                setNotify={setNotify}
            />
      </div>
     
    </div>
  );
}
