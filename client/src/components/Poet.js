import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'


const Poet = () => {



    const [poems, setPoems] = useState([])

    const params = useParams()
    const poetId = params.id

    useEffect(() => {
        fetch(`http://localhost:9292/poets/${poetId}`)
            .then(resp => resp.json())
            .then(data => setPoems(data))
    }, [])

    console.log(poems)


    return (
        <div>
            <h1>{poems.name}</h1>
            <div>
                {poems.poems ? poems.poems.map(poem => {
                    return <div><NavLink to={`/poems/${poem.id}`}>{poem.title}</NavLink></div>

                }) : null}
            </div>

        </div>
    )
}

export default Poet
