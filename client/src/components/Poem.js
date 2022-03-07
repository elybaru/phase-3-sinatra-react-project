import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Poem = () => {
    const [poem, setPoem] = useState(null)

    // const params = useParams()
    // const poemId = poems.id
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/poems/${id}`)
            .then(resp => resp.json())
            .then(data => setPoem(data))
    }, [])

    console.log(id)
    return (
        <div>

            {poem ?
                <div>
                    <h3> {poem.title} </h3>
                    {JSON.parse(poem.body).map(line => {
                        return <p>{line}</p>
                    })}
                </div>
                : null}

        </div>
    )
}

export default Poem
