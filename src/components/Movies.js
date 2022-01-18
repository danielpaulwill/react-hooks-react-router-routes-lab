import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      Genres: 
      <ul>
        {movie.genres.map((genre) => (
          <li key={movie.title + " " + genre}>{genre}</li>
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
