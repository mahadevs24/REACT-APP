import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink class="nav-link" to="/customers">
                Customers
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/rentals">
                Rental
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link " to="/loginPage">
                Login
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink class="nav-link " to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
