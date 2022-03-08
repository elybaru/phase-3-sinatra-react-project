import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Favorites = ({ currentUser }) => {
    const [favorites, setFavorites] = useState([])

    console.log(currentUser)
    const updateFavorites = () => {
        setFavorites(currentUser.poems)
    }
    console.log(favorites)

    const deleteFavorite = e => {
        console.log("Delete favorite clicked")
    }

    // pass down currentuser in props
    // fetch favorites by user, interpolate
    // display favorites

    // like button, 


    //need to update poems array
    // currentUser.poems.map
    // need to update poems array when I make fetch request (user's poems array)



    return (
        <div>
            <h1>Favorites</h1>
            <div className="content-box">
                {currentUser.poems ?
                    currentUser.poems.map(poem => {
                        return <div>
                            <NavLink to={`/poems/${poem.id}`}>{poem.title}</NavLink>
                            <button onClick={deleteFavorite}>Remove from favorites</button>
                        </div>
                    }) : null}
            </div>
        </div>
    )
}

export default Favorites
