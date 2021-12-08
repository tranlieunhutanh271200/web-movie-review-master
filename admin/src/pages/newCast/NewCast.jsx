import "./newCast.scss";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import storage from "../../firebase";
import { createCasts } from "../../context/castContext/apiCalls";
import { CastContext } from "../../context/castContext/CastContext";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Notification from "../../components/Alert/Notification"
import ConfirmDialogAdd from "../../components/Alert/ConfirmDialogAdd";


export default function Casts() {
  const [cast, setCast] = useState(null);
  const [castPic, setPic] = useState(null);
  const { dispatch } = useContext(CastContext);
  const [progress, setProgress] = useState(0);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  const [country, setCountry] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
 
  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get("/countries/");
        setCountry(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountry();

  },[]);
 

 

  const handleChange = (e) => {
    const value = e.target.value;   
    setCast({ ...cast, [e.target.name]: value, castPic });
  };
  
  


  const handleUpload = (e) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
  });
    e.preventDefault();
    upload([{ file: castPic, label: "castPic" }]);
  };
  

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
     
        }
      );
    })
  };

  const handleSubmit = (e) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
  });
    e.preventDefault();
    createCasts(cast, dispatch,setNotify);
    
  };
  

  const hide = (progress === 100 ? true : false);
  
  
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
          {hide === false ? (
           <button
            type="button"
            className="addCastButtonUpload" 
           onClick={() => 
             setConfirmDialog({
               isOpen: true,
               title: 'Are you sure to Upload this Image for new Cast?',
               subTitle: "You can't change it once confirmed",
               onConfirm: ( handleUpload)
           })
         }
           >Upload</button> 
        ) : (
          <button
          disabled={hide}
           type="button"
          className="addCastButtonLock" 
          onClick={() => 
            setConfirmDialog({
              isOpen: true,
              title: 'Are you sure to Upload this Image for new Cast?',
              subTitle: "You can't change it once confirmed",
              onConfirm: ( handleUpload)
          })
        }
          >Lock</button> 
        )}
          
        
       
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
          onChange={handleChange}
           >   
           {
             (()=>{
               let val =[];
                for (let i =0; i < country.length;i++)
                {
                  val.push(<option value = {country[i].id}> {country[i].name}</option>)
                }
                return val;
             })()
           }
              {/* return <option value = {country[i].id}> {country[i].name}</option> */}
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

        <button 
         type="button"
        className="addCastButton" 
        onClick= 
        {() => 
          setConfirmDialog({
            isOpen: true,
            title: 'Are you sure to Add this cast?',
            subTitle: "You can check again in Menu",
            onConfirm: ( handleSubmit)
        })
      }
        >Create </button>
         
        
        
      </form>
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialogAdd
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
    </div>
    
  );
}
