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
//find del
export const getMoviesDelFind = async(object, dispatch) => {
    dispatch(getMoviesDelStart());
    try {

        const res = await axios.get("/" + object + "/deleted/", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getMoviesDelSuccess(res.data));


    } catch (err) {
        dispatch(getMoviesDelFailure());
    }
};

//create
export const createMovies = async(cast, dispatch) => {
    dispatch(createMoviesStart());
    try {
        const res = await axios.post("/Movies/add/", cast, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });


        dispatch(createMoviesSuccess(res.data));
    } catch (err) {
        dispatch(createMoviesFailure());
    }
};

//update
export const updateMovies = async(cast, dispatch) => {
    dispatch(updateMoviesStart());
    try {

        const res = await axios.put("/Movies/update/" + cast._id, cast, {
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