import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeAdmin from "./pages/adminHome/AdminHome";
import UserManager from "./pages/userManager/UserManager";
import User from "./pages/user/User";
import Movie from "./pages/movie/Movie"
import Casts from "./pages/casts/Casts";
import NewCast from "./pages/newCast/NewCast";
import CastsManager from "./pages/castsManager/CastsManager";
import Footer from "./components/footerAdmin/FooterAdmin";
import Topbar from "./components/topbarAdmin/topbarAdmin";
import Sidebar from "./components/sidebarAdmin/SidebarAdmin";
import DeleteManager from "./pages/deleteManager/DeleteManager";
import MoviesManager from "./pages/moviesManager/MoviesManager";
import CharacterManager from "./pages/characterManager/CharacterManager";
import NewMovie from "./pages/newMovie/NewMovie"
import UpdateMovies from "./pages/updateMovie/UpdateMovie";
import Login from "./pages/login/Login";
import Category from "./pages/categoryManager/CategoryManager"
import Producer from "./pages/producerManager/ProducerManager"
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import Country from "./pages/countryManager/CountryManager";

function App() {
  const { user } = useContext(AuthContext);
console.log(user);

  return (
    <Router>
      <Switch>
      {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> */}
      {user && (
        <div>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <HomeAdmin />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Users">
              <UserManager />
            </Route>

            <Route path="/User/:userId">
              <User />
            </Route>
            <Route path="/Movie/:movieId">
              <Movie />
            </Route>
        
            <Route path="/Castss">
              <CastsManager />
            </Route>
            <Route path="/Movies">
              <MoviesManager />
            </Route>
            <Route path="/cast/:castId">
              <Casts />
            </Route>

            <Route path="/newCast">
              <NewCast />
            </Route>
            
            <Route path="/newMovie">
              <NewMovie/>
            </Route>
            <Route path="/MovieUpdate/:movieId">
              <UpdateMovies/>
            </Route>

            <Route path="/DeleteManager">
              <DeleteManager />
            </Route>

            <Route path="/category">
              <Category />
            </Route>
            <Route path="/producer">
              <Producer />
            </Route>
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/character">
              <CharacterManager />
            </Route>
          </div>
          <Footer />
        </div>
        )}
      </Switch>
    </Router>
  );
}

export default App;
