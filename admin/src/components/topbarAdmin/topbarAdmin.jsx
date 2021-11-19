import React from "react";
import "./TopbarAdmin.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
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
          <div className="IconContainer">
            <Settings />
          </div>
          <img src="" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}