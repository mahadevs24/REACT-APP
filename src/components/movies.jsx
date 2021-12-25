import react from "react";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _, { filter } from "lodash";
import { Link } from "react-router-dom";
import MovieAdd from "./movieAdd";
import SearchBox from "./common/searchBox";

class Movies extends React.Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genre: [],
    sortColumn: { path: "title", sort: "asc" },
    searchQuery: "",
  };

  componentDidMount() {
    const genre = [{ name: "All Genre", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre: genre });
  }

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies });
  };

  handleLike = (movie) => {
    // console.log("like clicked", movie);
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
    console.log(this.state.sortColumn.sort);
  };

  handleChange = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    const { length: movieCount } = filtered;
    if (movieCount === 0) return <p>There are no movies to show</p>;

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.sort]
    );

    const movies = paginate(
      this.state.currentPage,
      this.state.pageSize,
      sorted
    );
    return (
      <div className="row">
        <div className="col-sm-3">
          <ListGroup
            items={this.state.genre}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col-sm">
          <Link className="btn btn-primary" to="movies/movieAdd">
            Add Movie
          </Link>
          <SearchBox
            onChange={this.handleChange}
            value={this.searchQuery}
          ></SearchBox>
          <MoviesTable
            movieCount={movieCount}
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />

          <Pagination
            itemsCount={movieCount}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
