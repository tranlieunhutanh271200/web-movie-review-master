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
  
  export const createUsersStart = () => ({
    type: "CREATE_USERS_START",
  });
  
  export const createUsersSuccess = (user) => ({
    type: "CREATE_USERS_SUCCESS",
    payload: user,
  });
  
  export const createUsersFailure = () => ({
    type: "CREATE_USERS_FAILURE",
  });
  
  // export const updateUsersstart = () => ({
  //   type: "UPDATE_UsersS_START",
  // });
  
  // export const updateUserssuccess = (Userss) => ({
  //   type: "UPDATE_UsersS_SUCCESS",
  //   payload: Userss,
  // });
  
  // export const updateUsersFailure = () => ({
  //   type: "UPDATE_UsersS_FAILURE",
  // });
  
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