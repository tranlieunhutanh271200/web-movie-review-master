import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { CastContextProvider } from "./context/castContext/CastContext";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { CountryContextProvider } from "./context/countriesContext/CountryContext";
import { UserContextProvider}  from "./context/userContext/UserContext";
ReactDOM.render (
  
<Router>
<React.StrictMode>
  <AuthContextProvider>
    <UserContextProvider>
    <CastContextProvider>
    <CountryContextProvider> 
    <App />
    </CountryContextProvider>
      </CastContextProvider>
      </UserContextProvider>
      </AuthContextProvider>
      
      </React.StrictMode>,
  </Router>,
   
  
  document.getElementById('root')
);


