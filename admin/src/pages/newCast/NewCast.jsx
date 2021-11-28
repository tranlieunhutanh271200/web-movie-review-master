import "./newCast.scss"
import Topbar from '../../components/topbarAdmin/topbarAdmin';
import Sidebar from '../../components/sidebarAdmin/SidebarAdmin';
import Footer from "../../components/footerAdmin/FooterAdmin";
import { useContext, useState } from "react";
import storage from "../../firebase";
import { createCasts } from "../../context/castContext/apiCalls";
import { CastContext } from "../../context/castContext/CastContext";

export default function Casts(){
  const [cast, setCast] = useState(null);
  const [castPic, setPic] = useState("");
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(CastContext);
  
  const handleChange = (e) => {
    const value = e.target.value;
    
    setCast({ ...cast, [e.target.name]:value ,castPic });
  };

  const handleUpload = (e) => { 
    e.preventDefault();  
    upload([
      { file: castPic, label: "castPic" },
    ]);
    
    
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setPic(url);
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    
  };

 console.log(cast);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createCasts(cast, dispatch);
  };
  
  
  return(
    <div>
    <Topbar/>
      <div className="container">
      <Sidebar />
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
        </div>
        <div className="addCastItem">
          <label>Cast Name</label>
          <input 
          type="text" 
         
          name="name"
          onChange={handleChange} />
        </div>
        <div className="addCastItem">
          <label>Bio</label>
          <input 
          type="text" 
          
          name="bio" 
          onChange={handleChange}/>
        </div>
        <div className="addCastItem">
          <label>Data Of Birth</label>
          <input type="date"  
       
          name="dob"
          onChange={handleChange}/>
        </div>   
        <div className="addCastItem">
          <label>Status</label>
          <select 
          name="status"
           
           onChange={handleChange}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          
        </div>
        {uploaded === 1 ? (
          <button className="addCastButton" onClick={handleSubmit} >
            Create
          </button>
        ) : (
          <button className="addCastButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>

      </div>
      </div>
      <Footer/>
    </div>
  );
}