import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from "./Login";

const Navbar = () => {
    return (
        <div>
            <div>
                <h1 className="logo">Verses</h1>
            </div>
            <div>
                <NavLink to="/" className="menuItems">Home</NavLink>
                <NavLink to="/poems" className="menuItems">Poems</NavLink>
                <NavLink to="/poets" className="menuItems">Poets</NavLink>
                <NavLink to="/create" className="menuItems">Create</NavLink>
                <NavLink to="/favorites" className="menuItems">Favorites</NavLink>
            </div>

        </div>
    )
}

export default Navbar
