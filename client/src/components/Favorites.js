import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

const Favorites = ({ currentUser, removeFavorite, deleteFavorite }) => {
    const [favorites, setFavorites] = useState([])
    const [favoritePoems, setFavoritePoems] = useState([])


    console.log(currentUser)

    useEffect(() => {
        fetch(`http://localhost:9292/favorites`)
            .then(resp => resp.json())
            .then(data => {
                const filteredFaves = data.filter(favorites => favorites.user_id === currentUser.id)
                setFavorites(filteredFaves)
                // fetchFavoritePoems(favorites)
            })
        // fetch favorites using currentUser.id  save to state.
    }, [])

    console.log(favorites)

    // const fetchFavoritePoems = (favorites) => {
    //     let fetchedFaves = []
    //     favorites.map(favorite => {
    //         return fetch(`http://localhost:9292/poems/${favorite.poem_id}`)
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 return fetchedFaves = [...fetchedFaves, data]
    //             })
    //     })
    //     console.log(fetchedFaves)
    // }

    // console.log(favoritePoems)



    return (
        <div>
            <h1>Favorites</h1>
            <div className="content-box">
                {favorites ?
                    favorites.map(favorite => {
                        return <div>
                            <NavLink to={`/poems/${favorite.poem_id}`} key={favorite.poem_id}>{favorite.poem.title}</NavLink>
                            <button onClick={() => deleteFavorite(favorite.poem_id)}>Remove from favorites</button>
                        </div>
                    }) : null}


                {/* {currentUser.poems ?
                    currentUser.poems.map(poem => {
                        return <div>
                            <NavLink to={`/poems/${poem.id}`} key={poem.id}>{poem.title}</NavLink>
                            <button onClick={() => deleteFavorite(poem.id)}>Remove from favorites</button>
                        </div>
                    }) : null} */}
            </div>
        </div>
    )
}

export default Favorites
