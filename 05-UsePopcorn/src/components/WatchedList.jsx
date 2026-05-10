import { useContext } from "react";
import WatchedMovie from "./WatchedMovie";
import MoviesContext from "../context/MoviesContext";

const WatchedList = () => {
  const {watchedMovies} = useContext(MoviesContext)
  return (
    <ul className="list">
      {watchedMovies.map((movie) => (
        <WatchedMovie key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
};

export default WatchedList;
