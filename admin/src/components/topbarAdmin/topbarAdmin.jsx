import React, { useContext, useState} from "react";
import "./TopbarAdmin.scss";
import { NotificationsNone, Language, MeetingRoom } from "@material-ui/icons";
import { lout} from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import Notification from "../../components/Alert/Notification";
import ConfirmDialogOk from "../../components/Alert/ConfirmDialogOk";
export default function Topbar() {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialogOk, setConfirmDialogOk] = useState({ isOpen: false, title: '', subTitle: '' });
  const {  dispatch } = useContext(AuthContext);
  const handleLogout = async (e) => {
    setConfirmDialogOk({
      ...confirmDialogOk,
      isOpen: false
  })
    lout( dispatch,setNotify);
}


  return (
    <div className="main">
      <div className="Wrapper">
        <div className="Left">
          <span className="logo">ADMIN</span>
        </div>
        <div className="Right">
          <div className="IconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="IconContainer">
            <Language />
            <span className="IconBadge">2</span>
          </div>
          <div 
          className="IconContainer"
          onClick={() =>
            setConfirmDialogOk({
              isOpen: true,
              title: "Are you sure to Logout this?",
              onConfirm: (handleLogout)
            })
            }  >
            <MeetingRoom />
          </div>
          <img src="" alt="" className="topAvatar" />
        </div>
      </div>
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
             <ConfirmDialogOk
        confirmDialogOk={confirmDialogOk}
        setConfirmDialogOk={setConfirmDialogOk}
      />
    </div>
  );
}