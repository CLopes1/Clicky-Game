import React from "react";
import "./nav.css";


const Nav = props => (
  <nav className="navbar navbar-light">
    <a className="navbar-brand mb-0 h1 text-light">Clicky Game</a>
    <span className="text-center mb-0 h3">{props.message}</span>
    <span className="navbar-text text-light font-weight-bold">
      Score: <span>{props.currentScore}</span>&nbsp;
      Top Score: <span>{props.topScore}</span>
    </span>
  </nav>
);
    
export default Nav;
