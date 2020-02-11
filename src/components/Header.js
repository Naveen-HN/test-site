import React from "react";
//import Register from "./Register";
import { Link } from "react-router-dom";
import "../styles.css";

function Header() {
  const LinkStyle = {
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold"
  };

  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span> W </span>elcome{" "}
          </h1>{" "}
        </div>{" "}
        <nav>
          <ul>
            <li>
              <Link style={LinkStyle} to="/">
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/register" style={LinkStyle}>
                REGISTER{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/Login" style={LinkStyle}>
                LOGIN{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}

export default Header;
