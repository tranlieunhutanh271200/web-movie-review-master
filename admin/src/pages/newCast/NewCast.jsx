import "./newCast.scss";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import storage from "../../firebase";
import { createCasts } from "../../context/castContext/apiCalls";
import { CastContext } from "../../context/castContext/CastContext";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Notification from "../../components/Alert/Notification"


export default function Casts() {
  const [cast, setCast] = useState(null);
  const [castPic, setPic] = useState(null);
  const { dispatch } = useContext(CastContext);
  const [progress, setProgress] = useState(0);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     const getCountry = async () => {
//       try {
//         const res = await axios.get("/countries/get");
//         setCountry(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getCountry();
//   });
// console.log(country);

  const handleChange = (e) => {
    const value = e.target.value;

    setCast({ ...cast, [e.target.name]: value, castPic });
  };
  
  


  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: castPic, label: "castPic" }]);
  };
  console.log(cast);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/CastImages/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          if (progress === 100)
          {
            setNotify({
              isOpen: true,
              message: 'Upload Image Successfully',
              type: 'success'
          })
          }
          else 
          {
            setNotify({
              isOpen: true,
              message: 'Uploading',
              type: 'warning'
          })
          }
          
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setPic(url);
            });
          });
     
        }
      );
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    createCasts(cast, dispatch);
    setNotify({
      isOpen: true,
      message: 'Created Successfully',
      type: 'success'
  })
  };
  


  return (
    <div className="newCast">
      <h1 className="addCastTitle">New Cast</h1>
      <form className="addCastForm">
        <div className="addCastItem">
          <label>Image</label>
          <input
            type="file"
            name="castPic"
            onChange={(e) => setPic(e.target.files[0])}
            accept="image/png, image/jpg, image/jpeg"
          />
          <Box sx={{ width: '22%' }}>
          <LinearProgress 
          
          variant="determinate"
          value={progress}
           max="100"
            />
          
          </Box>
          
          </div>
           <button className="addCastButtonUpload" onClick={handleUpload}>Upload</button> 
        
       
        <div className="addCastItem">
          <label>Cast Name</label>
          <input 
          type="text" 
          name="name" 
          
          
          onChange={handleChange} />
        </div>
        <div className="addCastItem">
          <label>Country</label>
          <select 
          name="country"
           
           onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="VIETNAM">VIETNAM</option>
          </select>
          
          
        </div> 
        <div className="addCastItem">
          <label>Data Of Birth</label>
          <input 
          type="date"
           name="dob" 
           onChange={handleChange} />
        </div>
        <div className="addCastItem">
          <label>Bio</label>
        </div>
        <div className="addCastItemBio">
          <textarea rows="4" cols="50" name="bio" onChange={handleChange} />
        </div>

        <button className="addCastButton" onClick={handleSubmit}>Create </button>
         
        
        
      </form>
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
    </div>
    
  );
}
