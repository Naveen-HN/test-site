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
      return {
        username: item.userName,
        password: item.password
      };
    });
    console.log("users", users);
    const pass = users.filter(item => {
      if (item.username === this.state.userName) {
        console.log("item username", item.username);
        console.log("item password", item.password);
        return item;
      }
    });
    var password = pass.map(function(i) {
      return i.password;
    });
    console.log("pass", password);
    console.log("state", this.state.password);
    //console.log("this ", pass.password);
    if (password.includes(this.state.password)) {
      console.log("user found");
      this.props.history.push("/loggedin");
    } else {
      alert("No users found");
    }

    //   if (
    //     users.includes(this.state.userName) &&
    //     users.includes(this.state.password)
    //   ) {
    //     if (
    //       users.indexOf(this.state.userName) ===
    //       users.indexOf(this.state.password)
    //     ) {
    //       console.log("its true");
    //       this.props.history.push("/loggedin");
    //     }}
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
