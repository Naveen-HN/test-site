import React, { Component } from "react";
import "../styles.css";
<<<<<<< HEAD
import { createUser } from "../Actions";
import { connect } from "react-redux";
=======
import axios from "axios";
import FacebookLogin from "react-facebook-login";
>>>>>>> 7b18bd9d06b77f3dc2f0f90e6563ac546a15fac2
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      userName: "",
      password: "",
      confirmPassword: ""
    };
  }

  responseFacebook = response => {
    console.log(response);
  };

  componentClicked = () => console.log("Clicked");

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD
    this.props.dispatch(createUser(this.state.fields));
=======
    // if (this.validateForm()) {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      userName: this.state.userName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    axios
      .post("http://localhost:4000/users/add", newUser)
      .then(res => console.log(res.data));

    alert("Form submitted");
>>>>>>> 7b18bd9d06b77f3dc2f0f90e6563ac546a15fac2
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
              value={this.state.firstName}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Last Name: </label>{" "}
            <input
              name="lastName"
              type="text"
              placeholder="Last Name.."
              value={this.state.lastName}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Phone number: </label>{" "}
            <input
              name="phone"
              type="text"
              placeholder="Phone number.."
              value={this.state.phone}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <label> Username: </label>{" "}
            <input
              name="userName"
              type="email"
              placeholder="Enter your email.."
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
            <label> Confirm Password: </label>{" "}
            <input
              name="confirmPassword"
              type="password"
              placeholder="Type Password again.."
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div id="row">
            <button value="submit" onClick={this.handleSubmit}>
              Submit{" "}
            </button>{" "}
            <button value="reset"> Reset </button>{" "}
          </div>{" "}
          <h4> or </h4>{" "}
          <FacebookLogin
            className="fb"
            appId="1088597931155576"
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />{" "}
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
