import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <NavLink className="navbar-brand me-2" to="https://mdbgo.com/">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height={16}
          alt="MDB Logo"
          loading="lazy"
          style={{ marginTop: "-1px" }}
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addpodcast">
              AddPodacst
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/podcastcard">
              Podcast Card
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/podcastmanager">
              Podcast Manager
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/podcastplayer">
              Podcast player
            </NavLink>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-primary me-3">
            Sign up
          </button>
          <NavLink
            className="btn btn-dark px-3"
            href="https://github.com/nidhi3108"
            role="button"
          >
            <i className="fab fa-github" />
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar







