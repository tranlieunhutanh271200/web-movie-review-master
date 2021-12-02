const CountryReducer = (state, action) => {
    switch (action.type) {
        case "GET_COUNTRY_START":
            return {
                countries: [],
                isFetching: true,
                error: false,
            };
        case "GET_COUNTRY_SUCCESS":
            return {
                countries: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_COUNTRY_FAILURE":
            return {
                country: [],
                isFetching: false,
                error: true,
            };


        default:
            return {...state };
    }
};

export default CountryReducer;