import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);

  const movieTitle = movies.map((movie) => {
    const genre = movie.genres.map((genre) => <li key={genre}>{genre}</li>);

    return (
      <div key={movie.title}>
        {movie.title} - Time: {movie.time}
        <ul>{genre}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieTitle}
    </div>
  );
}

export default Movies;
