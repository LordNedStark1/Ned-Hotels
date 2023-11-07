import React from "react";
import { Link } from "react-router-dom";
import "../../Navbar/style/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg fixed-top navbar-scroll">
            <div className="container">
              <div className="">
                <a href="/" className="navbar-brand fs-3 text-center">
                  <span className="text-danger">Cap</span>Stone
                </a>
              </div>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto fs-4">
                  <Link to="/" className="nav-item nav-link">
                    Home
                  </Link>
                  <Link to="/about" className="nav-item nav-link">
                    About
                  </Link>
                  <Link to="/rooms" className="nav-item nav-link">
                    Rooms
                  </Link>
                  <Link to="/contacts" className="nav-item nav-link">
                    Contacts
                  </Link>
                  {/* <Link
                    to="/bookings"
                    className="nav-item nav-link book bg-danger rounded-pill"
                  >
                    Book Online
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
