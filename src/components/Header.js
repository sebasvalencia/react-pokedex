import React from "react";
import { withRouter } from "react-router";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
            Pokedex app
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          
          <span class="navbar-text">
            <a class="nav-link" href="/">
              Home
            </a>
          </span>
          <span class="navbar-text">
            <a class="nav-link" href="/">
              Logout
            </a>
          </span>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
