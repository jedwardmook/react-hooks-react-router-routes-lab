import React from "react";
import { directors } from "../data";

function Directors() {

const directorsPage = directors.map((director) => {
  return (
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
        <li>{director.movies[0]}</li>
        <li>{director.movies[1]}</li>
        <li>{director.movies[2]}</li>
    </div>
    )
  })

  return <div>
            <h1>Directors Page</h1>
            {directorsPage}
        </div>;
}

export default Directors;
