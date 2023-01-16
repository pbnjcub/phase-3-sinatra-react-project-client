import React from 'react'
import { NavLink } from "react-router-dom";
import '../css/materialize.min.css';

const NavBar = () => {
    return (
        <nav class="transparent">
            <div class="nav-wrapper" style={{fontSize:"large"}}>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/characters">Characters</NavLink></li>
                </ul>

            </div>
        </nav>

    )
}

export default NavBar