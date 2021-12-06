import "./sidebarAdmin.scss";
import {
  Face,
  LineStyle,
  Movie,
  PermIdentity,
  EmojiEmotions,
  ChatBubbleOutline,
  WorkOutline,
  DeleteForever,
  Category,
  MovieCreation,
  Public
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bar">
      <div className="SideWrapper">
        <div className="Menu">
          <h3 className="Title">Dashboard</h3>
          <ul className="List">
            <Link to="/" className="link">
            <li className="ListItem active">
              <LineStyle className="Icon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="Menu">
          <h3 className="Title">Quick Menu</h3>
          <ul className="List">
            <Link to="/Users" className="link">
              <li className="ListItem">
                <PermIdentity className="Icon" />
                Users
              </li>
            </Link>
            <Link to="/Castss" className="link">
              <li className="ListItem">
                <  Face className="Icon" />
                Cast
              </li>
            </Link>
            <Link to="/Movies" className="link">
            <li className="ListItem">
              <Movie className="Icon" />
              Movie
            </li>
            </Link>
          </ul>
        </div>
        <div className="Menu">
          <h3 className="Title">Details</h3>
          <ul className="List">
          <Link to="category" className="link">
            <li className="ListItem">
              <Category className="Icon" />
              Category
            </li>
            </Link>
            <Link to="/country" className="link">
            <li className="ListItem">
              <Public className="Icon" />
              Country
            </li>
            </Link>
            <Link to="/character" className="link">
            <li className="ListItem">
              <EmojiEmotions className="Icon" />
              Character
            </li>
            </Link>
            <Link to="/producer" className="link">
            <li className="ListItem">
              <MovieCreation className="Icon" />
              Producer
            </li>
            </Link>
          </ul>
        </div>
        <div className="Menu">
          <h3 className="Title">More</h3>
          <ul className="List">
          <Link to="" className="link">
            <li className="ListItem">
              <WorkOutline className="Icon" />
              Manage
            </li>
            </Link>
           
            <Link to="/DeleteManager" className="link">
            <li className="ListItem">
              <DeleteForever className="Icon" />
              Trash
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}