import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Poets = () => {
    const [poets, setPoets] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/poets")
            .then(resp => resp.json())
            .then(data => setPoets(data))
    }, [])

    console.log(poets)
    return (
        <div>
            <h1>Poets</h1>
            <p>View a list of poets here, and search for poets</p>
            <div>
                {poets ? poets.map(poet => {
                    return <NavLink to={`/poets/${poet.id}`} key={poet.id}>{poet.name}</NavLink>
                }) : null}
            </div>
        </div>
    )
}

export default Poets
