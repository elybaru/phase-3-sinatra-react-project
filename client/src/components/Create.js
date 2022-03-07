import React, { useState } from 'react'

const Create = () => {

    const defaultPoemForm = {
        title: "",
        author: "",
        body: ""
    }
    const [createPoem, setCreatePoem] = useState(defaultPoemForm)

    const handleFormChange = (e) => {
        setCreatePoem({ ...createPoem, [e.target.name]: e.target.value })
    }
    console.log(createPoem)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/poems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createPoem)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCreatePoem(defaultPoemForm)
            })
    }


    return (
        <div>
            <h2>Create Poem</h2>
            <p>Create or submit a new poem below</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title
                        <input
                            type='text'
                            name='title'
                            value={createPoem.title}
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Author
                        <input
                            type='text'
                            name='author'
                            value={createPoem.author}
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Body
                        <input
                            type='text'
                            name='body'
                            value={createPoem.body}
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create
