import React from 'react'
import { Link } from 'react-router-dom'

const Navi = () => {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.shutterstock.com/image-vector/ticket-vector-icon-600w-691375591.jpg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Movie Booking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Add Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                Delete Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">
                View Bookings
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navi