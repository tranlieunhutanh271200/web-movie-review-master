import CountryReducer from "./CountryReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  countries: [],
  isFetching: false,
  error: false,
};

export const CountryContext = createContext(INITIAL_STATE);

export const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, INITIAL_STATE);

  return (
    <CountryContext.Provider
      value={{
        casts: state.casts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};