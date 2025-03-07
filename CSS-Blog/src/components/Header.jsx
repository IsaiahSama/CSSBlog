import React from "react"
import { Link } from "react-router-dom"

const Header = () => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        CSS Blog
      </Link>

      <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>

        <Link className="navbar-item" to="/post/new">
          New Post
        </Link>

        <Link className="navbar-item" to="/profile">
          Profile
        </Link>

      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary">
              <strong>Sign up</strong>
            </Link>
            <Link className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>

)

export default Header
