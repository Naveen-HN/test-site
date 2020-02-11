import React from "react";
import Header from "./components/Header";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <body>
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <h1> This is the main Page </h1>{" "}
            </React.Fragment>
          )}
        />{" "}
        <Route path="/register" component={Register} />{" "}
        <Route path="/login" component={Login} />{" "}
      </body>{" "}
    </Router>
  );
}

export default App;
