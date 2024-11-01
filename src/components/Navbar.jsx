import "../styles/Navbar.css";
import searchicon from "../assets/searchIcon.svg";
import hamburgericon from "../assets/hamburgerIcon.svg";
import arrowDown from "../assets/arrowDown.svg";
import homeIcon from "../assets/homeIcon.png";
import moviesIcon from "../assets/moviesIcon.png";
import liveEventsIcon from "../assets/liveEventsIcon.png";
import profileIcon from "../assets/profileIcon.png";
import Logo from "./Logo";
import { useMovie } from "../contexts/MovieContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const { setSearchTerm } = useMovie();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <div className="navbar">
                <nav className="for-desktop">
                    <Logo />
                    <div className="left">
                        <div className="inputfield">
                            <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" onChange={(e) => setSearchTerm(e.target.value)} />
                            <span><img src={searchicon} alt="search" height={18}/></span>
                        </div>
                    </div>
                    <div className="right">
                        <p>Kolkata <img src={arrowDown} alt="arrow" /></p>
                        <button>Sign in</button>
                        <div className="menu"><img src={hamburgericon} alt="menu" /></div>
                    </div>
                </nav>
                <nav className="for-mobile">
                    <div className="left">
                        <h2>It All Starts Here!</h2>
                        <p>Kolkata <img src={arrowDown} alt="arrow" style={{ transform: "rotate(-90deg)" }} /></p>
                    </div>
                    <div className="right">
                        <button className="use-app">Use App</button>
                        <img src={searchicon} alt="search" height={25} onClick={() => setShowSearch(!showSearch)}/>
                    </div>
                </nav>
                <div className="mobile-nav">
                    <NavLink to="/" className="links">
                        <img src={homeIcon} alt="Home" height={25} />
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/movies" className="links">
                        <img src={moviesIcon} alt="Movie" height={25} />
                        <p>Movies</p>
                    </NavLink>
                    <NavLink to="/life-events" className="links">
                        <img src={liveEventsIcon} alt="Live Events" height={25} />
                        <p>Live Events</p>
                    </NavLink>
                    <NavLink to="/profile" className="links">
                        <img src={profileIcon} alt="Profile" height={25} />
                        <p>Profile</p>
                    </NavLink>
                </div>
            </div>
            {showSearch && <div className="search-for-mobile">
                <input type="text" placeholder="Search for Movies, Events, Plays & more" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>}
        </>
    );
}