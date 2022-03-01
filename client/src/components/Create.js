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


    return (
        <div>
            <h2>Create Poem</h2>
            <p>Create or submit a new poem below</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                <input
                        type='text'
                        name='title'
                        value={createPoem.title}
                        onChange={handleFormChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default Create
