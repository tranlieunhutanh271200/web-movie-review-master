export const getCountriesStart = () => ({
    type: "GET_COUNTRY_START",
});

export const getCountriesSuccess = (Countries) => ({
    type: "GET_COUNTRY_SUCCESS",
    payload: Countries,

});


export const getCountriesFailure = () => ({
    type: "GET_COUNTRY_FAILURE",
});