import { React } from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="contents">
        <div className="info">
          <h3 className="title">{movie.Title}</h3>
          <div className="footer">
            <p className="type">{movie.Type}</p>
            <p className="year">{movie.Year}</p>
          </div>
        </div>

        <img
          className="poster"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
    </div>
  );
};

export default MovieCard;
