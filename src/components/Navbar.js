import React from 'react'
import { NavLink } from "react-router-dom";
import '../css/materialize.min.css';

const NavBar = () => {
    return (
        <nav >
            <div class="nav-wrapper light-blue darken-4" >
                <a class="brand-logo"><img src="img/The_Expanse_logo.png" alt="The Expanse Logo" width="200"/></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/characters">Characters</NavLink></li>
                    <li><NavLink to="/books/new">Add New Book</NavLink></li>
                    <li><NavLink to="/characters/new">Add New Character</NavLink></li>
                </ul>

            </div>
        </nav>

    )
}

export default NavBar