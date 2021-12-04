export const getUsersStart = () => ({
    type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users,
});

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE",
});
//find
export const getUsersFindStart = () => ({
    type: "GET_USERSFIND_START",
});

export const getUsersFindSuccess = (Users) => ({
    type: "GET_USERSFIND_SUCCESS",
    payload: Users,
});

export const getUsersFindFailure = () => ({
    type: "GET_USERSFIND_FAILURE",
});


export const updateUsersStart = () => ({
    type: "UPDATE_USERS_START",
});

export const updateUsersSuccess = (Userss) => ({
    type: "UPDATE_USERS_SUCCESS",
    payload: Userss,
});

export const updateUsersFailure = () => ({
    type: "UPDATE_USERS_FAILURE",
});
//Delete 
export const delUsersStart = () => ({
    type: "DEL_USERS_START",
});

export const delUsersSuccess = (Users) => ({
    type: "DEL_USERS_SUCCESS",
    payload: Users,
});

export const delUsersFailure = () => ({
    type: "DEL_USERS_FAILURE",
});

export const deleteUserstart = () => ({
    type: "DELETE_USERS_START",
});

export const deleteUsersSuccess = (id) => ({
    type: "DELETE_USERS_SUCCESS",
    payload: id,
});

export const deleteUsersFailure = () => ({
    type: "DELETE_USERS_FAILURE",
});