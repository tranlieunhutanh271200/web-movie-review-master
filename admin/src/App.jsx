import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeAdmin from "./pages/adminHome/AdminHome";
import UserManager from "./pages/userManager/UserManager";
import User from "./pages/user/User";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Casts from "./pages/casts/Casts";
import NewCast from "./pages/newCast/NewCast";
import CastsManager from "./pages/castsManager/CastsManager";
import Footer from "./components/footerAdmin/FooterAdmin";
import Topbar from "./components/topbarAdmin/topbarAdmin";
import Sidebar from "./components/sidebarAdmin/SidebarAdmin";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Router>
      <Switch>
        <div>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <HomeAdmin />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Users">
              <UserManager />
            </Route>

            <Route path="/User/:userId">
              <User />
            </Route>

            <Route path="/UpdateUser/:userId">
              <UpdateUser />
            </Route>

            <Route path="/Castss">
              <CastsManager />
            </Route>

            <Route path="/cast/:castId">
              <Casts />
            </Route>

            <Route path="/newCast">
              <NewCast />
            </Route>
          </div>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
