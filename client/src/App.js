import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/Navbar";
import Poems from "./components/Poems";
import Poets from "./components/Poets";
import Create from "./components/Create";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Poet from "./components/Poet";
import Poem from "./components/Poem";
import styled from 'styled-components';
import styles from './styles.css';
import Welcome from "./components/Welcome";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [poems, setPoems] = useState([])



  // useEffect(() => {
  //   fetch("http://localhost:9292/poems")
  //     .then(resp => resp.json())
  //     .then(data => setPoems(data))

  // }, [])
  // console.log(poems)

  const removeFavorite = (favorite) => {
    setCurrentUser({
      ...currentUser,
      poems: currentUser.poems.filter(poem => poem.id != favorite.poem_id),
      favorites: currentUser.favorites.filter(fav => fav.id != favorite.id)
    })
  }

  console.log(currentUser)

  const Bodywrapper = styled.div`
  background: E5E5E5;
  color: 2E2E2E;
  text-align: center;
  `

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

  const deleteFavorite = poemId => {
    const favorite = currentUser.favorites.find(fav => fav.poem_id === poemId)
    handleDelete(favorite)
  }

  const handleDelete = (favorite) => {
    fetch(`http://localhost:9292/favorites/${favorite.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => removeFavorite(data))
  }

  const handleAddFave = (data, poem) => {
    setCurrentUser({
      ...currentUser,
      favorites: [...currentUser.favorites, data],
      poems: [...currentUser.poems, poem]
    })
  }


  return (
    <div>
      <Bodywrapper>
        <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={currentUser} />
        <Switch>

          {/* <Route exact path="/poems">
            <Poems />
          </Route> */}

          <Route exact path="/poems/:id">
            {loggedIn ? <Poem currentUser={currentUser} deleteFavorite={deleteFavorite} handleAddFave={handleAddFave} poems={poems} setPoems={setPoems} /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/poets">
            {loggedIn ? <Poets /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/poets/:id">
            {loggedIn ? <Poet /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/create">
            {loggedIn ? <Create /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/favorites">
            {loggedIn ? <Favorites currentUser={currentUser} removeFavorite={removeFavorite} deleteFavorite={deleteFavorite} /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/login">
            <Login loginUser={loginUser} loggedIn={loggedIn} />
          </Route >

          <Route exact path="/signup">
            <Signup loginUser={loginUser} />
          </Route>

          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Bodywrapper>
    </div>
  );
}

export default App;
