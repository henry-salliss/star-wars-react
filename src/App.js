import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import { Route, Navigate, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/:movieID"} element={<MovieDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
