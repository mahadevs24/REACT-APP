import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import react from "react";
import React, { Component } from "react";
import Counter from "./components/counter";
import Movies from "./components/movies";

import { Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginPage from "./components/loginPage";
import Register from "./components/register";
import MovieAdd from "./components/movieAdd";

class App extends React.Component {
  // state = {
  //   counters: [
  //     { id: 1, count: 4, selected: true },
  //     { id: 2, count: 0, selected: true },
  //     { id: 3, count: 3, selected: true },
  //   ],
  // };
  // handleDelete = (counterId) => {
  //   console.log(this, counterId);
  //   const Counters = this.state.counters.filter((co) => co.id !== counterId);
  //   this.setState({ counters: Counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.count = 0;
  //     return c;
  //   });
  //   this.setState({ counters: counters });
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].count++;

  //   // counters[index].count++;

  //   this.setState({ counters: counters });
  //   console.log(this.state.counters);
  // };

  // handleDecrement = (counter) => {
  //   const Counters = [...this.state.counters];
  //   const index = Counters.indexOf(counter);
  //   Counters[index] = { ...counter };
  //   Counters[index].count--;
  //   this.setState({ counters: Counters });
  // };

  render() {
    return (
      <react.Fragment>
        <NavBar></NavBar>;
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieAdd} />
            <Route path="/register" component={Register} />
            <Route path="/loginPage" component={LoginPage} />

            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-Found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found"></Redirect>
          </Switch>
        </main>
      </react.Fragment>
    );
    // <react.Fragment>
    //
    {
      /* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          /> */
    }

    // </react.Fragment>
  }
}

export default App;
