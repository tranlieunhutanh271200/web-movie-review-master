import { ArrowDropDown, LibraryAdd, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>Celebrity</span>
                    <span>Watch List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Phuc Phan</span>
                    <Notifications className="icon"/>
                    <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/127871159_1685719574939446_539238990743755217_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dctNsm00r9gAX_MoSH7&_nc_ht=scontent.fsgn5-4.fna&oh=9c42aa9bec00f635fc377d5631d40efe&oe=617C75B6" 
                    alt=""/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>          
                </div>                
            </div>
        </div>
    )
}

export default Navbar
