import React, { Component } from "react";

class Login extends Component {
  state = {
    details: {
      userName: "",
      password: ""
    },
    errors: {}
  };

  handleChange = event => {
    const [name, value] = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let det = {};
      det["userName"] = "";
      det["password"] = "";
      this.setState({
        details: det
      });
      alert("Login Successful");
    }
  };

  validateForm = () => {
    let details = this.state.details;
    let errors = {};
    let formIsValid = true;

    if (!details["userName"]) {
      formIsValid = false;
      errors["username"] = "*Please enter a username*";
    }

    if (!details["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter a password*";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  };

  render() {
    return (
      <form>
        <div className="reg">
          <div id="row">
            <label> Username: </label>{" "}
            <input
              name="userName"
              type="email"
              placeholder="Username.."
              onChange={this.handleChange}
            />{" "}
            <div className="errorMsg"> {this.state.errors.username} </div>{" "}
          </div>{" "}
          <div id="row">
            <label> Password: </label>{" "}
            <input
              name="password"
              type="password"
              placeholder="Password.."
              onChange={this.handleChange}
            />{" "}
            <div className="errorMsg"> {this.state.errors.password} </div>{" "}
          </div>{" "}
          <div id="row">
            <button value="submit" onClick={this.handleSubmit}>
              Login{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </form>
    );
  }
}

export default Login;
