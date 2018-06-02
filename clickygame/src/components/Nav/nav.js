import React from "react";
import "./nav.css";

const Nav = props => (
  <div className="Navbar">
    <nav
      className="navbar navbar-light bg-light"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 50px',
      }}
    >
      <p>
        Clicky Game
      </p>
      <p>
        Click an image to start!
      </p>
      <p>
        Score: 0
      </p>
     </nav>
  </div>
);
    
export default Nav;
