export const getCastsStart = () => ({
    type: "GET_CASTS_START",
  });
  
  export const getCastsSuccess = (Casts) => ({
    type: "GET_CASTS_SUCCESS",
    payload: Casts,
  });
  
  export const getCastsFailure = () => ({
    type: "GET_CASTS_FAILURE",
  });
//find
  export const getCastsFStart = () => ({
    type: "GET_CASTSFIND_START",
  });
  
  export const getCastsFSuccess = (Casts) => ({
    type: "GET_CASTSFIND_SUCCESS",
    payload: Casts,
  });
  
  export const getCastsFFailure = () => ({
    type: "GET_CASTSFIND_FAILURE",
  });

  export const createCastsStart = () => ({
    type: "CREATE_Casts_START",
  });
  
  export const createCastsSuccess = (Casts) => ({
    type: "CREATE_CastsS_SUCCESS",
    payload: Casts,
  });
  
  export const createCastsFailure = () => ({
    type: "CREATE_CastsS_FAILURE",
  });
  
  export const updateCastsStart = () => ({
    type: "UPLOAD_CASTS_START",
  });
  
  export const updateCastsSuccess = (Casts) => ({
    type: "UPLOAD_CASTS_SUCCESS",
    payload: Casts,
  });
  
  export const updateCastsFailure = () => ({
    type: "UPLOAD_CASTS_FAILURE",
  });
  
  //Delete 
  export const delCastsStart = () => ({
    type: "DEL_CASTS_START",
  });
  
  export const delCastsSuccess = (Casts) => ({
    type: "DEL_CASTS_SUCCESS",
    payload: Casts,
  });
  
  export const delCastsFailure = () => ({
    type: "DEL_CASTS_FAILURE",
  });

  
  // export const deleteCastStart = () => ({
  //   type: "DELETE_CASTS_START",
  // });
  
  // export const deleteCastsSuccess = (id) => ({
  //   type: "DELETE_CASTS_SUCCESS",
  //   payload: id,
  // });
  
  // export const deleteCastsFailure = () => ({
  //   type: "DELETE_CASTS_FAILURE",
  // });