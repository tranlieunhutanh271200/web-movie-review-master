import axios from "axios";
import {
    updateUsersSuccess,
    updateUsersStart,
    updateUsersFailure,
    deleteUsersFailure,
    deleteUserstart,
    deleteUsersSuccess,
    getUsersFailure,
    getUsersStart,
    getUsersSuccess,

    getUsersFindFailure,
    getUsersFindStart,
    getUsersFindSuccess,


    delUsersStart,
    delUsersSuccess,
    delUsersFailure,
} from "./UserAction";

export const getUser = async(dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getUsersSuccess(res.data));

    } catch (err) {
        dispatch(getUsersFailure());
    }
};

//find
export const getUsersFind = async(id, dispatch) => {
    dispatch(getUsersFindStart());
    try {
        const res = await axios.get("/users/find/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });


        dispatch(getUsersFindSuccess(res.data));


    } catch (err) {
        dispatch(getUsersFindFailure());
    }
};
//update
export const updateUsers = async(user, dispatch) => {
    dispatch(updateUsersStart());
    try {

        const res = await axios.put("/users/update/" + user._id, user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateUsersSuccess(res.data));

    } catch (err) {

        dispatch(updateUsersFailure());
    }
};
//Del
export const DelUsers = async(id, dispatch) => {
    dispatch(delUsersStart());
    dispatch(delUsersSuccess(id));
    try {

        const res = await axios.put("/users/delete/" + id, id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(delUsersSuccess(res.data));

    } catch (err) {

        dispatch(delUsersFailure());
    }
};


//delete
export const deleteUser = async(id, dispatch) => {
    dispatch(deleteUserstart());
    try {

        await axios.put("/users/delete/" + id, {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,

            },

        });

        dispatch(deleteUsersSuccess(id));
    } catch (err) {
        dispatch(deleteUsersFailure());
    }

};