import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from "./Login";

const Navbar = ({ loggedIn, logoutUser }) => {

    const logout = e => {
        e.preventDefault();

        logoutUser();
    }

    const loggedInLinks = () => {
        return (
            <div>
                <NavLink to="/" className="menuItems">Home</NavLink>
                <NavLink to="/poems" className="menuItems">Poems</NavLink>
                <NavLink to="/poets" className="menuItems">Poets</NavLink>
                <NavLink to="/create" className="menuItems">Create</NavLink>
                <NavLink to="/favorites" className="menuItems">Favorites</NavLink>
                <a href="#" onClick={logout}>Logout</a>
            </div>
        )
    }

    const loggedOutLinks = () => {
        return (
            <div>
                <NavLink to="/signup" className="menuItems">Sign Up</NavLink>
                <NavLink to="/login" className="menuItems">Login</NavLink>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h1 className="logo">Verses</h1>
            </div>
            {loggedIn ? loggedInLinks() : loggedOutLinks()}

        </div>
    )
}

export default Navbar
