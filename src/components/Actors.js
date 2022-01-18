import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList = actors.map((actor) => (
    <div>
      <h2>Name: {actor.name}</h2>
      Movies: 
      <ul key={actor}>
        {actor.movies.map((movie) => {
          return (
          <li key={actor.name.length.toString() + movie}>{movie}</li>
        )})}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
