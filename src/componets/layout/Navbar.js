import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className={icon}></i>
        {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              exact={true}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "github default proop",
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
