import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/users")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const users = this.state.data.map(function(item) {
      return item["userName"];
    });
    const passes = this.state.data.map(function(item) {
      return item["password"];
    });
    if (
      users.includes(this.state.userName) &&
      passes.includes(this.state.password)
    ) {
      if (
        users.indexOf(this.state.userName) ===
        passes.indexOf(this.state.password)
      ) {
        console.log("its true");
        window.location.href = "/loggedin";
      }
    } else {
      alert("No users found");
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
              value={this.state.userName}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Password: </label>{" "}
            <input
              name="password"
              type="password"
              placeholder="Password.."
              value={this.state.password}
              onChange={this.handleChange}
            />{" "}
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
