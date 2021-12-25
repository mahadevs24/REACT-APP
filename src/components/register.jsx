import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: { userName: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("User Name"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Form Submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "User Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("Name", "Name")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Register;
