import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((actor) => {
    const movie = actor.movies.map((movie) => <li key={movie}> {movie} </li>);

    return (
      <div key={actor.name}>
        {actor.name}
        <ul>{movie}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
}

export default Actors;
