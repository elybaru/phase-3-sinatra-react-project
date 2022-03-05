import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Poems from "./components/Poems";
import Poets from "./components/Poets";
import Create from "./components/Create";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [poems, setPoems] = useState([])
  const [poets, setPoets] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/poets/")
      .then(resp => resp.json())
      .then(data => setPoets(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/poems")
      .then(resp => resp.json())
      .then(data => setPoems(data))

  }, [])
  console.log(poems)

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id)
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem("user_id");
  }

  useEffect(() => {
    const userId = localStorage.getItem('user_id')
    if (userId && !loggedIn) {
      fetch('http://localhost:9292/users/' + userId)
        .then(resp => resp.json())
        .then(data => loginUser(data))
    }

  }, [])


  return (
    <div>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} />
      <Switch>

        <Route exact path="/poems">
          <Poems poems={poems} />
        </Route>

        <Route exact path="/poems/:id">
        </Route>

        <Route exact path="/poets">
          <Poets poets={poets} />
        </Route>

        <Route exact path="/poets/:id">
        </Route>

        <Route exact path="/create">
          <Create />
        </Route>

        <Route exact path="/favorites">
          <Favorites />
        </Route>

        <Route exact path="/login">
          <Login loginUser={loginUser} loggedIn={loggedIn} />
        </Route >

        <Route exact path="/signup">
          <Signup loginUser={loginUser} />
        </Route>

        <Route exact path="/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
