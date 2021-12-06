import "./app.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import { Movie } from "@material-ui/icons";

function App () {
  const user = true;
  return  (
    <Router>
      <Switch>
      <Route exact path="/">
            {user?<Home/>:<Redirect to="/login"/>}
        </Route>
        <Route path="/login">
        {!user ? <Login/>:<Redirect to="/"/>}
        </Route>
        <Route path="/register">
        {!user ? <Register/>:<Redirect to="/"/>}
        </Route>
        {user && (
          <>
        <Route path="/movies">
            <Home type="movies"/>
        </Route>
        <Route path="/series">
            <Home type="series"/>
        </Route>
        <Route path="/watch">
            <Watch/>
        </Route>
        <Route path="/news">
            <News/>
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
        
        </>
            )}
      </Switch>
    </Router>
  )
};


export default App;