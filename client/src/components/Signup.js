import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


const Signup = ({ loginUser }) => {
    const [username, setUsername] = useState("")
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:9292/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                loginUser(data)
                history.push('/')
            })
    }


    return (
        <div>
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <div className="content-box">
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="submit" value="Create Account" className="submit-poem" />
                </div>
            </form>

        </div>
    )
}

export default Signup
