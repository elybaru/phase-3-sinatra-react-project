import './App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/Navbar";
import Poems from "./components/Poems";
import Poets from "./components/Poets";
import Create from "./components/Create";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path="/poems">
          <Poems />
        </Route>

        <Route exact path="/poems/:id">
        </Route>

        <Route exact path="/poets">
          <Poets />
        </Route>

        <Route exact path="/poets/:id">
        </Route>

        <Route exact path="/create">
          <Create />
        </Route>

        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
