import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink
                    to={"/"}
                    className={(nav) => (nav.isActive ? "nav-active" : "")}> {
                    /** applique le style de la class "nav-active" UNIQUEMENT si elle est active, SINON ne change rien*/}
                    <li>Home</li>
                </NavLink>

                <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>About</li>
                </NavLink>

                <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div >
    );
};

export default Navbar;