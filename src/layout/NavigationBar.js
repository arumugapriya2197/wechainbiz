import React, { useState, useEffect } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import BorrowerLogin from "../views/Models/BorrowerLogin";
import BorrowerSignup from "../views/Models/BorrowerSignup";
import { connect } from "react-redux";

const NavigationBar = ({ userDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const [isBorrowerLoginOpen, setIsBorrowerLoginOpen] = useState(false);

  const [isBorrowerSignup, setIsBorrowerSignup] = useState(false);

  const toggleSingIn = () => setIsBorrowerLoginOpen(!isBorrowerLoginOpen);

  const toggleSingUp = () => setIsBorrowerSignup(!isBorrowerSignup);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar
        color="white"
        light
        expand="lg"
        className={`app-navigation ${isSticky ? "active" : ""}`}
      >
        <Link className="navbar-brand nav-center" to="/">
          <img
            className="logo-icon"
            src="./assets/images/logo-icon.png"
            alt=""
          />
          <img
            className="logo-text"
            src="./assets/images/logo-text.png"
            alt=""
          />
        </Link>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/enquiries">
                SignUp Now
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/our-products">
                Our Products{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/new-loan">
                Loan Application{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link set-black"
                // to="/lenders"
                to=""
              >
                Lenders{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link set-black"
                // to="/how-it-works"
                to="/"
              >
                How it Works?{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link set-black"
                // to="/about-us"
                to="/"
              >
                About us{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link set-black"
                // to="/our-partners"
                to="/"
              >
                Our Partners{" "}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        {!userDetails ? (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="nav-link pointer" onClick={toggleSingIn}>
                Sign In <i className="fas fa-sign-in-alt"></i>
              </div>
            </NavItem>
          </Nav>
        ) : (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="nav-link">
                Welcome {userDetails.first_name}{" "}
                <i className="fas fa-sign-in-alt"></i>
              </div>
            </NavItem>
          </Nav>
        )}
        <NavbarToggler onClick={toggle} />
      </Navbar>
      {!userDetails && (
        <React.Fragment>
          <BorrowerLogin
            isOpen={isBorrowerLoginOpen}
            toggle={toggleSingIn}
            toggleSingUp={toggleSingUp}
            size="lg"
          />
          <BorrowerSignup
            isOpen={isBorrowerSignup}
            toggle={toggleSingUp}
            toggleSingIn={toggleSingIn}
            size="lg"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ Application }) => ({
  userDetails: Application.userDetails,
});

export default connect(mapStateToProps)(NavigationBar);
