import { useLocation } from "react-router-dom";

import "./casts.scss";
import { useEffect, useContext, useState } from "react";
import storage from "../../firebase";
import { Publish } from "@material-ui/icons";
import { CastContext } from "../../context/castContext/CastContext";
import { getCastsFind, updateCasts } from "../../context/castContext/apiCalls";
import Notification from "../../components/Alert/Notification";
import ConfirmDialogUpdate from "../../components/Alert/ConfirmDialogUpdate";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function Casts() {
  const { casts, dispatch } = useContext(CastContext);
  const location = useLocation();
  const [path, castId] = location.pathname.split("/cast/");
  const [yasuo, setCast] = useState(null);
  const [castPic, setPic] = useState(null);
  const [progress, setProgress] = useState(0);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    getCastsFind(castId, dispatch, setNotify);
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;

    setCast({ ...yasuo, [e.target.name]: value, _id: castId, castPic });
  };
  const handleChangee = (e) => {
    if (e.target.files[0]) {
      setPic(e.target.files[0]);
    }
  };
  const handleUpdate = (e) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    e.preventDefault();
    updateCasts(yasuo, dispatch, setNotify);
  };

  const handleUpload = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    const uploadTask = storage.ref(`images/${castPic.name}`).put(castPic);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        if (progress === 100) {
          setNotify({
            isOpen: true,
            message: "Upload Image Successfully",
            type: "success",
          });
        } else {
          setNotify({
            isOpen: true,
            message: "Uploading",
            type: "warning",
          });
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(castPic.name)
          .getDownloadURL()
          .then((url) => {
            setPic(url);
          });
      }
    );
  };

  const hide = progress === 100 ? true : false;

  return (
    <div className="casts">
      <div className="castTitleContainer">
        <h1 className="castTitle">Detail Cast</h1>

        <button
          type="button"
          className="castAddButton"
          onClick={() =>
            setConfirmDialog({
              isOpen: true,
              title: "Are you sure to update this cast?",
              subTitle: "You will back Menu",
              onConfirm: handleUpdate,
            })
          }
        >
          Update
        </button>
      </div>
      <div className="castTop">
        <div className="castTopRight">
          <div className="castInfoTop">
            <img src={casts.castPic} alt="" className="castInfoImg" />
            <label for="file">
              <Publish />
            </label>
            <input
              type="file"
              id="file"
              name="castPic"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleChangee}
              style={{ display: "none" }}
            />
          </div>
          <div className="castInfoItemLine">
            <Box sx={{ width: "55%" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                max="100"
              />
            </Box>
            <div className="castInfoItemButton">
              {hide === false ? (
                <button
                  type="button"
                  className="uploadButton"
                  onClick={() =>
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure to Upload this Image for new Cast?",
                      subTitle: "You can't change it once confirmed",
                      onConfirm: handleUpload,
                    })
                  }
                >
                  Upload
                </button>
              ) : (
                <button
                  disabled={hide}
                  type="button"
                  className="addCastButtonLock"
                  onClick={() =>
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure to Upload this Image for new Cast?",
                      subTitle: "You can't change it once confirmed",
                      onConfirm: handleUpload,
                    })
                  }
                >
                  Lock
                </button>
              )}
            </div>
          </div>

          <div className="castInfoBottom">
            <div className="castInfoItem">
              <span className="castInfoKey">Id:</span>
              <span className="castInfoValue    ">{casts._id}</span>
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Cast Name:</span>

              <input
                className="castInfoValue"
                type="text"
                placeholder={casts.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="castInfoItem">
              <span className="castInfoKey">Date of Birth:</span>
              <span className="castInfoValue">{casts.dob}</span>

              <input
                className="castInfoValueDate"
                type="date"
                name="dob"
                onChange={handleChange}
              />
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

            <textarea
              rows="4"
              cols="100"
              name="bio"
              className="castInfoValue"
              onChange={handleChange}
              defaultValue={casts.bio}
            />
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialogUpdate
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
}
