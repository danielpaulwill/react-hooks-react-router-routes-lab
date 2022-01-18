import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie) => (
    <div>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      Genres: 
      <ul key={movie}>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
