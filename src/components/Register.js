import React, { Component } from "react";
import "../styles.css";
import { createUser } from "../Actions";
import { connect } from "react-redux";
class Register extends Component {
  state = {
    fields: {
      firstName: "",
      lastName: "",
      phone: "",
      userName: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  };

  handleChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(createUser(this.state.fields));
  };

  // validateForm = () => {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;
  //   if (!fields["firstName"]) {
  //     formIsValid = false;
  //     errors["firstName"] = "*Please enter your firstname.";
  //   }

  //   if (!fields["userName"]) {
  //     formIsValid = false;
  //     errors["userName"] = "*Please enter your email-ID.";
  //   }

  //   if (!fields["phone"]) {
  //     formIsValid = false;
  //     errors["phone"] = "*Please enter your mobile no.";
  //   }

  //   if (!fields["password"]) {
  //     formIsValid = false;
  //     errors["password"] = "*Please enter your password.";
  //   }

  //   this.setState({
  //     errors: errors
  //   });
  //   return formIsValid;
  // };

  render() {
    return (
      <form>
        <div className="reg">
          <div id="row">
            <label> First Name: </label>{" "}
            <input
              name="firstName"
              type="text"
              placeholder="First Name.."
              onChange={this.handleChange}
            />{" "}
            <div className="errorMsg"> {this.state.errors.firstName} </div>{" "}
          </div>{" "}
          <div id="row">
            <label> Last Name: </label>{" "}
            <input
              name="lastName"
              type="text"
              placeholder="Last Name.."
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Phone number: </label>{" "}
            <input name="phone" type="text" onChange={this.handleChange} />{" "}
            <div className="errorMsg"> {this.state.errors.phone} </div>{" "}
          </div>{" "}
          <div id="row">
            <label> Username: </label>{" "}
            <input
              name="userName"
              type="email"
              placeholder="Enter your email.."
              onChange={this.handleChange}
            />{" "}
            <div className="errorMsg"> {this.state.errors.userName} </div>{" "}
          </div>{" "}
          <div id="row">
            <label> Password: </label>{" "}
            <input
              name="password"
              type="password"
              placeholder="Password.."
              onChange={this.handleChange}
            />{" "}
            <div className="errorMsg"> {this.state.errors.username} </div>{" "}
          </div>{" "}
          <div id="row">
            <label> Confirm Password: </label>{" "}
            <input
              name="confirmPassword"
              type="password"
              placeholder="Type Password again.."
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <button value="submit" onClick={this.handleSubmit}>
              Submit{" "}
            </button>{" "}
            <button value="reset"> Reset </button>{" "}
          </div>{" "}
        </div>{" "}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.createUserReducer.user
  };
};

export default connect(mapStateToProps)(Register);
