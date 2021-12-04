import "./newMovie.scss";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import storage from "../../firebase";
import { createMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Notification from "../../components/Alert/Notification";
import Select from '@mui/material/Select';
import { MenuItem, TextField } from "@mui/material";

export default function Movies() {
  const [movie, setMovie] = useState(null);
  const [namePic, setnamePic] = useState(null);
  const [coverPic, setcoverPic] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const { dispatch } = useContext(MovieContext);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(0);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [country, setCountry] = useState([]);
  const [categories, setCategory] = useState([]);
  const [productions, setProd] = useState([]);
  const [cast, setCast] = useState([]);

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

    const getCategory = async () => {
      try {
        const res = await axios.get("/categories/" ,{
          headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
      });
        setCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategory();

    const getProd = async () => {
      try {
        const res = await axios.get("/productions/" ,{
          headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
      });
        setProd(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProd();

    const getCast = async () => {
      try {
        const res = await axios.get("/casts/" ,{
          headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
      });
        setCast(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCast();


  },[]);

 
  
  const handleChange = (e) => {
    const value = e.target.value;

    setMovie({ ...movie, [e.target.name]: value});
  };
  
  const handleChangeSelectCate = (e) => {
    const category = e.target.value;
    const key = e.target.name;

   setMovie({ ...movie, [key]:{ category}});
  };
  const handleChangeSelect = (e) => {
    const value = e.target.value;
    const key = e.target.name;

   setMovie({ ...movie, [key]:{ value}});
  };
  const handleChangeSelectProd = (e) => {
    const production = e.target.value;
    const key = e.target.name;

   setMovie({ ...movie, [key]:{ production}});
  };
  
  console.log(movie)
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: namePic, label: "namePic" },
      { file: coverPic, label: "coverPic" },
      { file: trailer, label: "trailer" }
    ])
  };

 console.log(movie)

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/Movies/${fileName}`).put(item.file);
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
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };


  const handleSubmit = (e) => {
   e.preventDefault();
    createMovies(movie, dispatch);
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
      <div className="addMovieForm">
        <div className="addMovieItem">
         <label>Name Image</label>
          <input
           type="file"
           id="img"
          name="namePic"
          accept="image/png, image/jpg, image/jpeg"
           onChange={(e) => setnamePic(e.target.files[0])}
        />
        <Box sx={{ width: '100%' }}>
          <LinearProgress 
          
          variant="determinate"
          value={progress}
           max="100"
            />
          
          </Box>
      </div>
      <div className="addMovieItem">
        <label>Thumbnail image</label>
        <input
          type="file"
          id="imgSm"
          name="coverPic"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => setcoverPic(e.target.files[0])}
        />
        <Box sx={{ width: '100%' }}>
          <LinearProgress 
          
          variant="determinate"
          value={progress}
           max="100"
            />
          
          </Box>
      </div>
      <div className="addMovieItem">
        <label>Trailer</label>
        <input
          type="file"
          name="trailer"
          onChange={(e) => setTrailer(e.target.files[0])}
        />
        <Box sx={{ width: '100%' }}>
          <LinearProgress 
          
          variant="determinate"
          value={progress}
           max="100"
            />
          
          </Box>
      </div>
      </div>
      {uploaded === 3 ? (
        <button className="addMovieButton" onClick={handleSubmit}>
          Create
        </button>
      ) : (
        <button className="addMovieButton" onClick={handleUpload}>
          Upload
        </button>
      )}

      <div className="addMovieForm">
      <div className="addMovieItem">
        <label>Title</label>
        <TextField
          type="text"
          placeholder="Name Movie"
          name="title"
          onChange={handleChange}
        />
      </div>

      <div className="addMovieItem">
        <label>Age Limit</label>
        <TextField
          type="number"
          placeholder="Age Limit"
          name="limit"
          onChange={handleChange}
        />
        </div>

        <div className="addMovieItem">
        <label>ReleaseDate</label>
        <TextField
          type="date"
          name="releaseDate"
          onChange={handleChange}
        />
      </div>

      <div className="addMovieItem">
        <label>Site</label>
        <Select name="site" id="site" onChange={handleChange}>
          <MenuItem value="Cinema">Cinema</MenuItem>
          <MenuItem value="Netflix">Netflix</MenuItem>
          <MenuItem value="HBO">HBO</MenuItem>
          <MenuItem value="Disney+">Disney+</MenuItem>
        </Select>
      </div>

      <div className="addMovieItem">
        <label>Country</label>
        <Select name="namecount" id="country" onChange={handleChange}>
        {
             (()=>{
               let val =[];
                for (let i =0; i < country.length;i++)
                {
                  val.push(<MenuItem value = {country[i].name}> {country[i].name} </MenuItem>)
                }
                return val;
             })()
           }
          
        </Select>
      </div>

      <div className="addMovieItem">
        <label>Casts</label>
        <Select 
        name="castItems" 
        id="castItems"
        onChange={handleChangeSelect}
        >
        {
             (()=>{
               let valCast =[];
                for (let i =0; i < cast.length;i++)
                {
                  valCast.push(<MenuItem value = {cast[i].name}> {cast[i].name}</MenuItem>)
                }
                return valCast;
             })()
           }
        </Select>
      </div>

      <div className="addMovieItem">
        <label>Category</label>
        <Select 
        name="categoryItems"
        id="category"
        label="category"
        onChange={handleChangeSelectCate}>
        {
             (()=>{
               let valcate =[];
                for (let i =0; i < categories.length;i++)
                {
                  valcate.push(<MenuItem value = {categories[i]._id}> {categories[i].name}</MenuItem>)
                }
                return valcate;
             })()
           }
        </Select>
      </div>

      <div className="addMovieItem">
        <label>Producers</label>
        <Select 
        name="productionItems" 
        id="productionItems" 
        onChange={handleChangeSelectProd}>
        {
             (()=>{
               let valPro =[];
                for (let i =0; i < productions.length;i++)
                {
                  valPro.push(<MenuItem value = {productions[i]._id}> {productions[i].name}</MenuItem>)
                }
                return valPro;
             })()
           }
        </Select>
      </div>

     </div>
     <div className="addMovieForm">
        <div className="addMovieItem">
         <label>Description</label>
          
         <textarea 
         rows="4" 
         cols="50" 
         name="desc"
         onChange={handleChange} />

      </div>
      </div>
      
      
    </form>
    <Notification notify={notify} setNotify={setNotify} />
  </div>
);
}
      
