import { ArrowDropDown, LibraryAdd, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"
import React from "react";
import { useHistory } from "react-router"
import { 
  Link
} from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const userName = localStorage.getItem("name")
    const [isScolled, setIsScrolled] = useState(false);
    const History = useHistory()
    const redirect = (page) => {
        History.push(`${page}`)
      }
    const handleLogout = () => {
        // localStorage.removeItem("id")
        // localStorage.removeItem("name")
        // localStorage.removeItem("dateofbirth")
        // localStorage.removeItem("email")
        // localStorage.removeItem("address")
        // localStorage.removeItem("phone")
        // localStorage.removeItem("gender")
        
        redirect("/")
      }

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className= {isScolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span><Link className="link" to="/">Home</Link></span>
                    <span><Link className="link" to="/series">Series</Link></span>
                    <span><Link className="link" to="/movies">Movies</Link></span>
                    <span><Link className="link" to="/news">New and Popular</Link></span>
                    <span>Celebrity</span>
                    <span>Watch List</span>

                    
                </div>
                
                <div className="right">
                {/* <Search className="icon"/> */}
                <Searchbar/>
                {userName ?(
                   <React.Fragment>
                    {/* <span>Phuc Phan</span>
                    <Notifications className="icon"/>
                    <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/127871159_1685719574939446_539238990743755217_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GkyY54EVj34AX_7MkXp&_nc_ht=scontent.fsgn2-5.fna&oh=50cc97bcfc61a2c2bec2b5f735df9477&oe=61AFE036" 
                    alt=""/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleLogout}>Logout</span>
                            <span><Link className="link" to="/Login">Sign Up</Link></span>
                        </div>
                    </div>   */}
                    </React.Fragment>  
                 ):(
                     <>
                     <button className="loginButton"  to="/Login" onClick={() => setIsLogin(true)} >Sign In</button>
                     </>
                 )}
                
               
                    {/* <Search className="icon"/>
                    <span>Phuc Phan</span>
                    <Notifications className="icon"/>
                    <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/127871159_1685719574939446_539238990743755217_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GkyY54EVj34AX_7MkXp&_nc_ht=scontent.fsgn2-5.fna&oh=50cc97bcfc61a2c2bec2b5f735df9477&oe=61AFE036" 
                    alt=""/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                            <span><Link className="link" to="/Login">Sign Up</Link></span>
                        </div>
                    </div>           */}
                </div>                
            </div>
        </div>
    )
}

export default Navbar