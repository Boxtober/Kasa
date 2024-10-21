import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo color="#FF6060" />
            <ul>
                <NavLink
                    to={"/"}
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    {" "}
                    {}
                    <li>Accueil</li>
                </NavLink>

                <NavLink
                    to={"/apropos"}
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;
