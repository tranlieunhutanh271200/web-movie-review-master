import axios from "axios";
import {
    createMoviesFailure,
    createMoviesStart,
    createMoviesSuccess,

    

    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,

    getMoviesFindFailure,
    getMoviesFindStart,
    getMoviesFindSuccess,

    

    delMoviesStart,
    delMoviesSuccess,
    delMoviesFailure,

    updateMoviesSuccess,
    updateMoviesStart,
    updateMoviesFailure


} from "./MovieAction";

export const getMovies = async(dispatch,setNotify) => {
    dispatch(getMoviesStart());
    try {

        const res = await axios.get("/Movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        setNotify({
            isOpen: true,
            message: "Loading Successfully",
            type: "success",
          });
        dispatch(getMoviesSuccess(res.data));

    } catch (err) {
        setNotify({
            isOpen: true,
            message: "Loading Failed: " + err ,
            type: "error",
          });
        dispatch(getMoviesFailure());
    }
};
//find
export const getMoviesFind = async(id, dispatch,setNotify) => {
    dispatch(getMoviesFindStart());
    try {
        const res = await axios.get("/Movies/find/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        setNotify({
            isOpen: true,
            message: "Loading Successfully",
            type: "success",
          });
        dispatch(getMoviesFindSuccess(res.data));
        

    } catch (err) {
        setNotify({
        isOpen: true,
        message: "Loading Failed: " + err ,
        type: "error",
      });
        dispatch(getMoviesFindFailure());
    }
};


//create
export const createMovies = async(movie, dispatch,setNotify) => {
    dispatch(createMoviesStart());
   
    try {
        const res = await axios.post("/movies/add/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
            
        });

        setNotify({
            isOpen: true,
            message: "Add New Movie Successfully",
            type: "success",
          });
        dispatch(createMoviesSuccess(res.data));
        
    } catch (err) {
        setNotify({
            isOpen: true,
            message: "Add New Movie Failed: "+err,
            type: "error",
          });
        dispatch(createMoviesFailure());
    }
};

//update
export const updateMovies = async(Movie, dispatch,setNotify) => {
    dispatch(updateMoviesStart());
    try {

        const res = await axios.put("/Movies/update/" + Movie._id, Movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        setNotify({
            isOpen: true,
            message: "Update Successfully",
            type: "success",
          });
        dispatch(updateMoviesSuccess());

    } catch (err) {
        setNotify({
            isOpen: true,
            message: "Update Failed: "+err,
            type: "error",
          });
        dispatch(updateMoviesFailure());
    }
};
//Del
export const DelMovies = async(id, dispatch,setNotify) => {
    dispatch(delMoviesStart());
    dispatch(delMoviesSuccess(id));
    try {

        const res = await axios.put("/Movies/delete/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error",
          });
        dispatch(delMoviesSuccess(res.data));

    } catch (err) {
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "warning",
          });
        dispatch(delMoviesFailure());
    }
};

