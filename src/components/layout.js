import React from "react"
//import PropTypes from "prop-types"
import Header from "../components/header"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => (
  <Container>
    <Header siteTitle={`Header`} />
    <main style={{paddingTop: `10%`}}>{children}</main>
    <footer>
      © {new Date().getFullYear()} Alan Macabuhay, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Container>
)

export default Layout
