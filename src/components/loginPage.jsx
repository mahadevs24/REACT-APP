import React, { Component } from "react";

import Form from "./common/form";
import Joi from "joi-browser";

class LoginPage extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("User Name"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "User Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginPage;
