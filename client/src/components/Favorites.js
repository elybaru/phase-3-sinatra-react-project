import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Favorites = ({ currentUser, removeFavorite }) => {

    console.log(currentUser)

    const deleteFavorite = poemId => {
        console.log("Delete favorite clicked")
        const favorite = currentUser.favorites.find(fav => fav.poem_id === poemId)
        handleDelete(favorite)
    }

    const handleDelete = (favorite) => {
        fetch(`http://localhost:9292/favorites/${favorite.id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => removeFavorite(data))
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
                            <button onClick={() => deleteFavorite(poem.id)}>Remove from favorites</button>
                        </div>
                    }) : null}
            </div>
        </div>
    )
}

export default Favorites
