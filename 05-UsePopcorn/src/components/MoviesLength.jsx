import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const MoviesLength = () => {
  const {watchedMovies} = useContext(MoviesContext)
  return (
    <p className="num-results">
      Found <strong>{watchedMovies.length}</strong> results
    </p>
  );
};

export default MoviesLength;
