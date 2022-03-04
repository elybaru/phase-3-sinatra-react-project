import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Login = ({ loginUser }) => {
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])

    const history = useHistory()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    console.log(username)

    const handleSubmit = e => {
        e.preventDefault()

        const user = users.find(user => user.name.toLowerCase() === username.toLowerCase())

        if (user) {
            loginUser(user)
            history.push("/")
        }
    }

    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [])



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <lablel>Username</lablel>
                <input type="text" name="username" id="username" onChange={handleChange} value={username} />
                <input type="submit" value="Login" />
            </form>

        </div>
    )
}

export default Login
