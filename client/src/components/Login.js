import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Login = ({ loginUser, loggedIn }) => {
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
        else {
            return "Username not found, please sign up."
        }
    }

    useEffect(() => {
        if (loggedIn) {
            return history.push("/poems")
        }
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [loggedIn])



    return (
        <div>
            <h2>Login</h2>
            <div className="content-box">
                <form onSubmit={handleSubmit}>
                    <lablel>Username</lablel>
                    <input type="text" name="username" id="username" onChange={handleChange} value={username} />
                    <input type="submit" value="Login" className="submit-poem" />
                </form>
            </div>
        </div>
    )
}

export default Login
