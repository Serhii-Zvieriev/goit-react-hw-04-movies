import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header/Header";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import NotFoundView from "./pages/NotFoundView";
// import MoviesPage from "./pages/MoviesPage";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundView = lazy(() => import("./pages/NotFoundView"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <HomePage />
          </Suspense>
        </Route>

        <Route path="/movie" exact>
          <Suspense fallback={<div>Загрузка...</div>}>
            <MoviesPage />
          </Suspense>
        </Route>

        <Route path="/movie/:movieId">
          <Suspense fallback={<div>Загрузка...</div>}>
            <MovieDetailsPage />
          </Suspense>
        </Route>

        <Route>
          <NotFoundView />
          <Suspense fallback={<div>Загрузка...</div>}></Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
