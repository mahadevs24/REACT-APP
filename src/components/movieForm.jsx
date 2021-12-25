import React, { Component } from "react";
const MovieForm = ({ history, match }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>;
      <button className="btn-primary" onClick={() => history.push("/")}>
        Movies
      </button>
    </div>
  );
};

export default MovieForm;
