import React, { Component } from "react";
import Like from "./common/like";
import Movies from "./movies";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends React.Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}> {movie.title} </Link>
      ),
    },
    { path: "genre.name", label: "Genre Name" },
    { path: "numberInStock", label: "Number In Stock" },
    { path: "dailyRentalRate", label: "Daily Rental Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      ),
    },

    {
      key: "Delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.sort = sortColumn.sort === "asc" ? "desc" : "asc";
    else {
      sortColumn.sort = "asc";
      sortColumn.path = path;
    }
    console.log(sortColumn.path, path);
    this.props.onSort(sortColumn);
    console.log("real", sortColumn.sort);
  };
  render() {
    const { movieCount, movies, onLike, onDelete } = this.props;
    return (
      <div>
        <p>There are {movieCount} movies</p>

        <Table
          raiseSort={this.raiseSort}
          sortColumn={this.props.sortColumn}
          data={movies}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default MoviesTable;
