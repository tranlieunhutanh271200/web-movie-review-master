import axios from "axios";
import {
  createUsersFailure,
  createUsersStart,
  createUsersSuccess,
deleteUsersFailure,
deleteUserstart,
  deleteUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./UserAction";

export const getUser = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: 
        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  
    dispatch(getUsersSuccess(res.data));
    
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

//create
export const createUser = async (cast, dispatch) => {
  dispatch(createUsersStart());
  try {
    const res = await axios.post("/users/add/", cast, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    
    dispatch(createUsersSuccess(res.data));
  } catch (err) {
    dispatch(createUsersFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserstart());
  try {
    
     await axios.put("/users/delete/" +id, {
        headers: {
          token: 
          "Bearer"+ JSON.parse(localStorage.getItem("user")).accessToken,
          
        },
       
      });
     
    dispatch(deleteUsersSuccess(id));
  } catch (err) {
    dispatch(deleteUsersFailure());
  }

};