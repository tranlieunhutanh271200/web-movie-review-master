import axios from "axios";
import {
    createMoviesFailure,
    createMoviesStart,
    createMoviesSuccess,

    // deleteMoviesFailure,
    // deleteMoviestart,
    //   deleteMoviesSuccess,

    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,

    getMoviesFindFailure,
    getMoviesFindStart,
    getMoviesFindSuccess,

    getMoviesDelFailure,
    getMoviesDelStart,
    getMoviesDelSuccess,

    delMoviesStart,
    delMoviesSuccess,
    delMoviesFailure,

    updateMoviesSuccess,
    updateMoviesStart,
    updateMoviesFailure


} from "./MovieAction";

export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try {

        const res = await axios.get("/Movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));

    } catch (err) {
        dispatch(getMoviesFailure());
    }
};
//find
export const getMoviesFind = async(id, dispatch) => {
    dispatch(getMoviesFindStart());
    try {
        const res = await axios.get("/Movies/find/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getMoviesFindSuccess(res.data));
        

    } catch (err) {
        dispatch(getMoviesFindFailure());
    }
};


//create
export const createMovies = async(movie, dispatch) => {
    dispatch(createMoviesStart());
    console.log(movie)
    try {
        const res = await axios.post("/movies/add/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
            
        });

console.log("test1")
        dispatch(createMoviesSuccess(res.data));
        
    } catch (err) {
        
        dispatch(createMoviesFailure());
    }
};

//update
export const updateMovies = async(Movie, dispatch) => {
    dispatch(updateMoviesStart());
    try {

        const res = await axios.put("/Movies/update/" + Movie._id, Movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateMoviesSuccess(res.data));

    } catch (err) {

        dispatch(updateMoviesFailure());
    }
};
//Del
export const DelMovies = async(id, dispatch) => {
    dispatch(delMoviesStart());
    dispatch(delMoviesSuccess(id));
    try {

        const res = await axios.put("/Movies/delete/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(delMoviesSuccess(res.data));

    } catch (err) {

        dispatch(delMoviesFailure());
    }
};

// //delete
// export const deleteMovies = async (id, dispatch) => {
//   dispatch(deleteMoviestart());
//   try {

//      await axios.put("/Movies/delete/" +id, {
//         headers: {
//           token: 
//           "Bearer"+ JSON.parse(localStorage.getItem("user")).accessToken,

//         },

//       });

//     dispatch(deleteMoviesSuccess(id));
//   } catch (err) {
//     dispatch(deleteMoviesFailure());
//   }

//};