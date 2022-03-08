import React, { useState } from 'react'

const Create = () => {

    const defaultPoemForm = {
        title: "",
        poet: "",
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
            body: JSON.stringify(
                {
                    title: createPoem.title,
                    poet: createPoem.poet,
                    body: JSON.stringify([createPoem.body])
                    // Because the backend expects it as a stringified JSON object. Other way is to make coniditional in backend.
                }
            )
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
            <div className="content-box">
                <p>Create or submit a new poem below</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <div className="input-label">Title</div>
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
                            <div className="input-label">Author</div>
                            <input
                                type='text'
                                name='poet'
                                value={createPoem.author}
                                onChange={handleFormChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <div className="input-label">Body</div>
                            <input
                                className="large-text-input"
                                type='textarea'
                                name='body'
                                value={createPoem.body}
                                onChange={handleFormChange}
                            />
                        </label>
                    </div>
                    <input type='submit' className="submit-poem" />
                </form>
            </div>
        </div>
    )
}

export default Create
