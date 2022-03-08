import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from "./Login";
import styled from 'styled-components';

const Navbar = ({ loggedIn, logoutUser, currentUser }) => {

    const Navbar = styled.div`
  `

    const logout = e => {
        e.preventDefault();

        logoutUser();
    }

    const loggedInLinks = () => {
        return (
            <div>
                <Navbar>
                    <NavLink to="/" className="menuItems">Home</NavLink>
                    {/* <NavLink to="/poems" className="menuItems">Poems</NavLink> */}
                    <NavLink to="/poets" className="menuItems">Poets</NavLink>
                    <NavLink to="/create" className="menuItems">Create</NavLink>
                    <NavLink to="/favorites" className="menuItems">Favorites</NavLink>
                    <button onClick={logout}>Logout</button>
                </Navbar>
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
                <h2 className="logo">Verses</h2>
            </div>
            <div>
                {currentUser.name ? <h3>Hello, {currentUser.name}</h3> : null}
            </div>
            {loggedIn ? loggedInLinks() : loggedOutLinks()}

        </div>
    )
}

export default Navbar
