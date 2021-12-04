import axios from "axios";
import {
    createCastsFailure,
    createCastsStart,
    createCastsSuccess,
    deleteCastsFailure,
    deleteCastStart,
    deleteCastsSuccess,

    getCastsFailure,
    getCastsStart,
    getCastsSuccess,

    getCastsFindFailure,
    getCastsFindStart,
    getCastsFindSuccess,

    getCastsDelFailure,
    getCastsDelStart,
    getCastsDelSuccess,

    delCastsStart,
    delCastsSuccess,
    delCastsFailure,

    delRestoreStart,
    delRestoreSuccess,
    delRestoreFailure,


    updateCastsSuccess,
    updateCastsStart,
    updateCastsFailure


} from "./CastAction";

export const getCasts = async(dispatch) => {
    dispatch(getCastsStart());
    try {

        const res = await axios.get("/casts", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getCastsSuccess(res.data));

    } catch (err) {
        dispatch(getCastsFailure());
    }
};
//find
export const getCastsFind = async(id, dispatch) => {
    dispatch(getCastsFindStart());
    try {
        const res = await axios.get("/casts/find/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getCastsFindSuccess(res.data));

    } catch (err) {
        dispatch(getCastsFindFailure());
    }
};

//find del
export const getCastsDelFindObject = async(object, dispatch) => {
    dispatch(getCastsDelStart());
    try {

        const res = await axios.get("/" + object + "/deleted/", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getCastsDelSuccess(res.data));


    } catch (err) {
        dispatch(getCastsDelFailure());
    }
};

//create
export const createCasts = async(cast, dispatch) => {
    dispatch(createCastsStart());
    try {
        const res = await axios.post("/casts/add/", cast, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });


        dispatch(createCastsSuccess(res.data));
    } catch (err) {
        dispatch(createCastsFailure());
    }
};

//update
export const updateCasts = async(cast, dispatch) => {
    dispatch(updateCastsStart());
    try {

        const res = await axios.put("/casts/update/" + cast._id, cast, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateCastsSuccess(res.data));

    } catch (err) {

        dispatch(updateCastsFailure());
    }
};
//Del
export const DelCasts = async(id, dispatch) => {
    dispatch(delCastsStart());
    dispatch(delCastsSuccess(id));
    try {

        const res = await axios.put("/casts/delete/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(delCastsSuccess(res.data));

    } catch (err) {

        dispatch(delCastsFailure());
    }
};
//recover
export const RestoreCasts = async(object, id, dispatch) => {
    dispatch(delRestoreStart());
    dispatch(delCastsSuccess(id));
    try {

        const res = await axios.put("/" + object + "/recover/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(delRestoreSuccess(res.data));

    } catch (err) {

        dispatch(delRestoreFailure());
    }
};
//delete
export const deleteCasts = async(object, id, dispatch) => {
    dispatch(deleteCastStart());

    try {
        
        await axios.delete("/" + object + "/remove/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

            },

        });
        dispatch(deleteCastsSuccess(id));
    } catch (err) {
        dispatch(deleteCastsFailure());
    }

};