import { useEffect, useState } from "react";
import "./App.css";
//import search_icon from "./svg icons/search_FILL0_wght400_GRAD0_opsz48.svg";

import MovieCard from "./MovieCard";

const KEY = "79f48594";
const API_URL = "https://www.omdbapi.com?apikey=" + KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search_movies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    search_movies("Superman");
  }, []);

  return (
    <div className="app">
      <header>
        <h1 className="title">MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search movies here"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              search_movies(e.target.value);
            }}
          />
        </div>
      </header>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
