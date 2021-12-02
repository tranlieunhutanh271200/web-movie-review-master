import axios from "axios";
import {
   
    getCountriesStart,
    getCountriesSuccess,
    getCountriesFailure,
} from "./CountryAction";

export const getCountry = async(dispatch) => {
    dispatch(getCountriesStart());
    try {

        const res = await axios.get("/countries/get");
        dispatch(getCountriesSuccess(res.data));

    } catch (err) {
        dispatch(getCountriesFailure());
    }
};
