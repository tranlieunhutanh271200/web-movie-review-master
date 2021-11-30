import { Link, useLocation } from "react-router-dom";

import "./casts.scss";
import { useEffect, useContext, useState } from "react";
import  storage  from "../../firebase";
import {  Publish } from "@material-ui/icons";
import { CastContext } from "../../context/castContext/CastContext";
import { getCastsFind, updateCasts } from "../../context/castContext/apiCalls";

export default function Casts() {
  const { casts, dispatch } = useContext(CastContext);
  const location = useLocation();
  const [path, castId] = location.pathname.split("/cast/");
  const [yasuo, setCast] = useState(null);
  const [url, setUrl] = useState("");
  const [castPic, setPic] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getCastsFind(castId, dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;

    setCast({ ...yasuo, [e.target.name]: value, _id: castId, castPic });
  };
  const handleChangee = e => {
    if (e.target.files[0]) {
      setPic(e.target.files[0]);
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateCasts(yasuo, dispatch);
  };


  const handleUpload = () => {
    const uploadTask = storage.ref(`update/${castPic.name}`).put(castPic);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(castPic.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };
  console.log(castPic);
  console.log(yasuo)
  console.log(url)

  return (
    <div className="casts">
      <div className="castTitleContainer">
        <h1 className="castTitle">Cast</h1>

        <Link to="/newCast">
          <button className="castAddButton">Create</button>
        </Link>
      </div>
      <div className="castTop">
        <div className="castTopRight">
          <div className="castInfoTop">
            <img src={casts.castPic} alt="" className="castInfoImg" />
            <span className="castName"></span>
          </div>
          <div className="castInfoBottom">
            <div className="castInfoItem">
              <span className="castInfoKey">Id:</span>
              <span className="castInfoValue    ">{casts._id}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Cast Name:</span>
              <span className="castInfoValue">{casts.name}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Date of Birth:</span>
              <span className="castInfoValue">{casts.dob}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Created:</span>
              <span className="castInfoValue">{casts.createdAt}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Update:</span>
              <span className="castInfoValue">{casts.updatedAt}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Bio:</span>
            </div>
            <span className="castInfoValue">{casts.bio}</span>
          </div>
        </div>
      </div>
      <div className="castBottom">
        <form className="castForm">
          <div className="castFormLeft">
            <label>Cast Name</label>
            <input
              type="text"
              placeholder={casts.name}
              name="name"
              onChange={handleChange}
            />

            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} />
            <label>Bio</label>
            <input
              type="text"
              name="bio"
              placeholder={casts.bio}
              onChange={handleChange}
            />
          </div>
          <div className="castFormRight">
            <div className="castUpload">
              <img src={casts.castPic} alt="" className="castUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input
               type="file" 
               id="file"
               name="castPic"
               onChange={handleChangee}
               style={{ display: "none" }} />
            </div>
            <progress value={progress} max="100" />
            <button 
            type="button"
             onClick={handleUpload}>
           
              Upload
            </button>
            <button 
            type="button"
            className="castButton" 
            onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
