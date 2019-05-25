import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
// bg = "#101926"
const Header = ({ siteTitle }) => (
  <div>
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: `white`}} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="topnav ml-auto">
          <Link
            to="/"
            className="header-link"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="header-link"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="header-link"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
