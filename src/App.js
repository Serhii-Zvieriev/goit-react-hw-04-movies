import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomeView from "./pages/HomeView";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundView from "./pages/NotFoundView";

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

        <Route path="/movie/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
