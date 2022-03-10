import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Poem = ({ currentUser, deleteFavorite, handleAddFave, poems, setPoems }) => {
    const [poem, setPoem] = useState(null)
    const [fav, setFav] = useState(false)

    // const params = useParams()
    // const poemId = poems.id

    const { id } = useParams()

    useEffect(() => {
        //will only fetch the first time
        const foundPoem = poems.find(poem => poem.id == id)
        if (foundPoem) {
            setPoem(foundPoem)
        } else {
            fetch(`http://localhost:9292/poems/${id}`)
                .then(resp => resp.json())
                .then(data => {
                    setPoem(data)
                    setPoems([...poems, data])
                })
        }


    }, [])

    useEffect(() => {
        isFavorite()
    }, [currentUser.favorites])

    // console.log(id)
    console.log(currentUser)
    console.log(poem)

    const isFavorite = () => {
        setFav(currentUser.favorites.find(fav => fav.poem_id == id))
        console.log(currentUser.favorites.find(fav => fav.poem_id == id))
    }




    // Do another fetch in userEffect. need a useEffect for favorites by user if this poem is on the user's favorites. Store as state as a boolean for isFavorite and that conditionally impacts button

    const handleFavorite = e => {
        fetch(`http://localhost:9292/favorites`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                poem_id: id
            })
        })
            .then(resp => resp.json())
            .then(data => handleAddFave(data, poem))
        console.log("favorite button")
    }
    return (
        <div>

            {poem ?
                <div className="content-box">
                    <h3> {poem.title} </h3>
                    <h4>{poem.poet.name}</h4>
                    {JSON.parse(poem.body).map(line => {
                        return <p>{line}</p>
                    })}
                </div>
                : null}
            {fav ? <button onClick={() => deleteFavorite(poem.id)}>Remove from favorites</button> : <button onClick={handleFavorite}>Favorite</button>}

        </div>
    )
}

export default Poem
