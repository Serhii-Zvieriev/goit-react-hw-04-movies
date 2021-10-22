import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomeView from "./views/HomeView";
import MovieDetailsView from "./views/MovieDetailsView";
import NotFoundView from "./views/NotFoundView";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movie" exact>
          <h2>movie</h2>
        </Route>

        <Route path="/movie/:movieId" exact>
          <MovieDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
