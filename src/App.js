import React from "react";
import Header from "./components/Header";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Logged from "./components/Logged";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="wrapper">
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
          <Route path="/loggedin" component={Logged} />{" "}
        </div>{" "}
      </Router>
    </Provider>
  );
}

export default App;
