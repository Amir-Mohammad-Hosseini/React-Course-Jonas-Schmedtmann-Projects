import StarRating from "./StarRating";

const Movie = ({ imdbID, Title, Poster, Year }) => {
  return (
    <li key={imdbID}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
        <StarRating />
      </div>
    </li>
  );
};

export default Movie;
