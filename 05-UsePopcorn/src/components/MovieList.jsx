import { useContext } from "react";
import Movie from "./Movie";
import MoviesContext from "../context/MoviesContext";

const MovieList = () => {
  const {movies} = useContext(MoviesContext)
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
