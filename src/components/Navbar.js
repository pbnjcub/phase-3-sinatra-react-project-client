import React from 'react'
import { NavLink } from "react-router-dom";
import '../css/materialize.min.css';

const NavBar = () => {
    return (
        <nav class="transparent">
            <div class="nav-wrapper" style={{fontSize:"large"}}>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/"><h5>Home</h5></NavLink></li>
                    <li><NavLink to="/books"><h5>Books</h5></NavLink></li>
                    <li><NavLink to="/characters"><h5>Characters</h5></NavLink></li>
                    <li><NavLink to="/books/new"><h5>Add Book</h5></NavLink></li>
                    <li><NavLink to="/characters/new"><h5>Add Character</h5></NavLink></li>
                </ul>

            </div>
        </nav>

    )
}

export default NavBar