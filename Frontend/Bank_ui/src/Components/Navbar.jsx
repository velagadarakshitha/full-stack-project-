import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container" style={{ margin: '10px' }}>
        <Link className="navbar-brand text-white" to="/hOmEpAgE">VKR Bank</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/hOmEpAgE">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
          </ul>
          {/* Move the logout button to the right corner */}
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Apply red color to the logout button */}
              <Link className="nav-link " to="/logout" style={{ color: 'red' }}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
