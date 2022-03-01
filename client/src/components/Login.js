import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("")

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    console.log(username)

    const handleSubmit = e => {

    }



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
