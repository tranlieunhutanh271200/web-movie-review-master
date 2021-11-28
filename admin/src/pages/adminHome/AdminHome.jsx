import React from 'react';

import "./adminHome.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from '../../components/footerAdmin/FooterAdmin'
import Topbar from '../../components/topbarAdmin/topbarAdmin';
import Sidebar from '../../components/sidebarAdmin/SidebarAdmin';
import MainAdmin from  '../../components/mainAdmin/MainAdmin';
import { useState } from "react";
import  storage  from "../../firebase";


function Home() {



  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };
console.log(url);
 console.log("image: ", image);
    return (
      <div>
      <Topbar/>
      <div className="container">
      <Sidebar />
      <MainAdmin />
      <progress value={progress} max="100" />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>
      </div>
  
       
     
    );
}
    
       

export default Home;