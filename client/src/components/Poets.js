import React from 'react';
import { NavLink } from 'react-router-dom';

const Poets = ({ poets }) => {
    console.log(poets)
    return (
        <div>
            <h1>Poets</h1>
            <p>View a list of poets here, and search for poets</p>
            <div>
                {/* {poets ? poets.map(poet => {
                    <NavLink to={`/artworks/${artWork.objectNumber}`}>{poet.name}</NavLink>
                }) : null } */}
            </div>
        </div>
    )
}

export default Poets
