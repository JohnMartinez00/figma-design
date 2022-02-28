import * as React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <div className="navbar0">
                <div className="white_logo"></div>
                <div className="group">
                    <NavLink to="/Home" className="menubtn">Home</NavLink>
                    <NavLink to="/Gallery" className="menubtn">Gallery</NavLink>
                    <NavLink to="/Shop" className="menubtn">Shop</NavLink>
                </div>
                <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg
                        width="25"
                        height="20"
                        viewBox="0 0 25 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1H25M1 10H25M2 19H25"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-miterlimit="0"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </div >
            {menuOpen ? (
                <div className="menu-open">
                    <NavLink to="/Home" className="menubtn" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
                    <NavLink to="/Gallery" className="menubtn" onClick={() => setMenuOpen(!menuOpen)}>Gallery</NavLink>
                    <NavLink to="/Shop" className="menubtn" onClick={() => setMenuOpen(!menuOpen)}>Shop</NavLink>
                </div>) : ''}
        </>
    );
};

export default NavBar;
