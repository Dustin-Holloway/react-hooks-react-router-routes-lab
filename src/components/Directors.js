import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  const directorz = directors.map((director) => director.movies);
  console.log(directorz);

  const director = directors.map((director) => {
    const movieTitle = director.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ));

    return (
      <div key={director.name}>
        {director.name}
        <ul>{movieTitle}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
