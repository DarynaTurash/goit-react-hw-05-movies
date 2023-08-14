import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { SharedLayout } from "./SharedLayout";
import { Movies } from '../pages/Movies';
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "../components/Cast";
import { Reviews } from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
