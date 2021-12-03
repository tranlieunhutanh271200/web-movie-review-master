import "./user.scss";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  DateRange,
  AddCircleOutline
  
} from "@material-ui/icons";
import { useContext, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsersFind } from "../../context/userContext/apiCalls";

export default function UserManager() {
  const { users, dispatch } = useContext(UserContext);
  const location = useLocation();
  const [path, userId] = location.pathname.split("/user/");
  
  
  useEffect(() => {
    getUsersFind(userId, dispatch);
  }, [dispatch]);
  console.log(users)

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Detail User</h1>
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
              <span className="userShowUserTitle">{users.lastname} {users.firstname}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
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
      </div>
    </div>
  );
}
