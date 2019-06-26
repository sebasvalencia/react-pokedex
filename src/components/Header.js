import React from "react";
import { withRouter } from "react-router";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Pokedex app
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          
          <span className="navbar-text">
            <a className="nav-link" href="/">
              Home
            </a>
          </span>
          <span className="navbar-text">
            <a className="nav-link" href="/">
              Logout
            </a>
          </span>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
