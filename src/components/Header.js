import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/header.css";

function Header() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="nav-active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-active" to="/todolist">
              To Do List
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-active" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-active" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
