import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
