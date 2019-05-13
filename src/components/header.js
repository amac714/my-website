import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <div>
    <Navbar sticky="top" bg="#101926" variant="dark">
      <Nav className="ml-auto">
        <Link to="/" className="header-link">
          About
        </Link>
        <Link to="/projects" className="header-link">
          Projects
        </Link>
        <Link to="/contact" className="header-link">
          Contact
        </Link>
      </Nav>
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
