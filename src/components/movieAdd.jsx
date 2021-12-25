import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "./../services/fakeMovieService";

class MovieAdd extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.string().required(),
    dailyRentalRate: Joi.string().required(),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState(genres);

    const movieId = this.props.match.params.id;

    if (movieId === "movieAdd") return;

    const movie = getMovie(movieId);

    if (!movie) return this.props.history.replace("/not-Found");
    console.log("movie id is", movieId, movie);
    this.setState({ data: this.mapToViewModel(movie) });
  }
  doSubmit = () => {
    console.log("Form Submitted");
  };
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "User Name")}
          {this.renderInput("genreId", "Genere")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Daaily Rental Rate")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default MovieAdd;
