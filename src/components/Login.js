import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/postActions";

class Login extends Component {
  componentWillMount() {
    this.props.userLogin();
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
        this.props.history.push("/loggedin");
      }
    } else {
      alert("No users found");
    }
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
              value={this.props.user.userName}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Password: </label>{" "}
            <input
              name="password"
              type="password"
              placeholder="Password.."
              value={this.props.user.password}
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

const mapStateToProps = state => ({
  user: state.post.data
});

export default connect(mapStateToProps, { userLogin })(Login);
