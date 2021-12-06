import "./app.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import CastDT from "./pages/castDt/CastDt";
import News from "./pages/news/News";
import NewDetail from "./pages/newDetail/NewDetail";
import Navbar from "./components/navbar/Navbar";
import Email from "./pages/email/email";
import Resetpassword from "./pages/resetPassword/resetPassword";

function App () {
  return  (
    <Router>
      <Switch>
      <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/forgot_password">
            <Email/>
        </Route>
        <Route exact path="/users/activation/:tokenActivation">
            <Login/>
        </Route>
        <Route exact path="/users/reset/:token">
            <Resetpassword/>
        </Route>
      </Switch>
    </Router>
  )
};


export default App;