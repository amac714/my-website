import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <div>
    <Container>
      <Navbar fixed="top" expand="md" variant="light" bg="dark">
        {/* <Navbar.Brand className="mr-auto">Alan Macabuhay</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end p-4"
        >
          <Nav defaultActiveKey="#About">
            <Nav.Item>
              <Link to="/">About</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/projects">Projects</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
