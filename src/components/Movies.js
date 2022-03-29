import React from "react";
import { movies } from "../data";

function Movies() {

  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => {
        return <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Run time: {movie.time}mins</p>
          {movie.genres.map((genre) => {
                return <li key={genre}>{genre}</li>
                    })}
        </div>
    })
    }
    </div>;
}

export default Movies;
