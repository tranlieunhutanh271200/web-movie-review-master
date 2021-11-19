import { ArrowDropDown,  Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbarAdmin.scss"
import React from "react";

const Navbar = () => {
    const [isScolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className= {isScolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                
                <div className="left">
                    <img
                        src="https://i.pinimg.com/originals/d0/53/f2/d053f2394d420d8d3712046f4e8f80cc.jpg"
                        alt=""
                    />
                    
                    <span>Home</span>
                    <span>User Management</span>
                    <span>Movie Management</span>
                    <span>Cast Management</span>
                    <span>New Management</span>
                    
                    
                </div>
                
                <div className="right">
                    <Search className="icon"/>
                    <span>Welcome Back Admin !!</span>
                    
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Logout</span>
                        </div>
                    </div>          
                </div>                
            </div>
        </div>
    )
}

export default Navbar