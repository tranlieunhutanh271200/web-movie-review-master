import "./newMovie.scss";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import storage from "../../firebase";
import { createMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Notification from "../../components/Alert/Notification";

export default function Movies() {
  const [Movie, setMovie] = useState(null);
  const [MoviePic, setPic] = useState(null);
  const { dispatch } = useContext(MovieContext);
  const [progress, setProgress] = useState(0);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
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

    setMovie({ ...Movie, [e.target.name]: value, MoviePic });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: MoviePic, label: "MoviePic" }]);
  };
  console.log(Movie);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/MovieImages/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
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
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setPic(url);
          });
        }
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovies(Movie, dispatch);
    setNotify({
      isOpen: true,
      message: "Created Successfully",
      type: "success",
    });
  };

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input
            type="file"
            name="namePic"
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
           <button className="addMovieButtonUpload" onClick={handleUpload}>Upload</button> 
        
       
        <div className="addMovieItem">
          <label>Movie Title</label>
          <input 
          type="text" 
          name="title" 
          onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Site</label>
          <input 
          type="text" 
          name="site" 
          onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input 
          type="number" 
          name="limit" 
          onChange={handleChange} />
        </div>
        
        <div className="addMovieItem">
        <label>Rating</label>
          <input 
          type="number" 
          name="rating" 
          onChange={handleChange} />
        </div>
        {/* <div className="addMovieItem">
          <label>Country</label>
          <select name="country" onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="VIETNAM">VIETNAM</option>
          </select>
        </div> */}
        <div className="addMovieItem">
          <label>Release Date </label>
          <input type="date" name="releaseDate" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
        </div>
        <div className="addMovieItemBio">
          <textarea rows="4" cols="50" name="desc" onChange={handleChange} />
        </div>

        <button className="addMovieButton" onClick={handleSubmit}>
          Create{" "}
        </button>
      </form>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
