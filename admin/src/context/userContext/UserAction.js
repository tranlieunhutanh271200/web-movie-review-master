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