import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo color="#FF6060" />
            <ul>
                <NavLink
                    to={"/"}
                    className={(nav) => (nav.isActive ? "nav-active" : "")}> { }
                    <li>Home</li>
                </NavLink>

                <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div >
    );
};

export default Navbar;