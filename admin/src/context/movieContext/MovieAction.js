export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (Movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: Movies,

});


export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});
//find
export const getMoviesFindStart = () => ({
    type: "GET_MoviesFIND_START",
});

export const getMoviesFindSuccess = (Movies) => ({
    type: "GET_MoviesFIND_SUCCESS",
    payload: Movies,
});

export const getMoviesFindFailure = () => ({
    type: "GET_MoviesFIND_FAILURE",
});
//get delete
export const getMoviesDelStart = () => ({
    type: "GET_DEL_START",
});

export const getMoviesDelSuccess = (Movies) => ({
    type: "GET_DEL_SUCCESS",
    payload: Movies,
});

export const getMoviesDelFailure = () => ({
    type: "GET_DEL_FAILURE",
});


export const createMoviesStart = () => ({
    type: "CREATE_MOVIES_START",
});

export const createMoviesSuccess = (Movie) => ({
    type: "CREATE_MOVIES_SUCCESS",
    payload: Movie,
});

export const createMoviesFailure = () => ({
    type: "CREATE_MOVIES_FAILURE",
});

export const updateMoviesStart = () => ({
    type: "UPLOAD_MOVIES_START",
});

export const updateMoviesSuccess = (Movies) => ({
    type: "UPLOAD_MOVIES_SUCCESS",
    payload: Movies,
});

export const updateMoviesFailure = () => ({
    type: "UPLOAD_MOVIES_FAILURE",
});

//Delete 
export const delMoviesStart = () => ({
    type: "DEL_MOVIES_START",
});

export const delMoviesSuccess = (Movies) => ({
    type: "DEL_MOVIES_SUCCESS",
    payload: Movies,
});

export const delMoviesFailure = () => ({
    type: "DEL_MOVIES_FAILURE",
});


// export const deleteMoviestart = () => ({
//   type: "DELETE_MOVIES_START",
// });

// export const deleteMoviesSuccess = (id) => ({
//   type: "DELETE_MOVIES_SUCCESS",
//   payload: id,
// });

// export const deleteMoviesFailure = () => ({
//   type: "DELETE_MOVIES_FAILURE",
// });