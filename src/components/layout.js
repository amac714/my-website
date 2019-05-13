import React from "react"
//import PropTypes from "prop-types"
import Header from "../components/header"
import Container from "react-bootstrap/Container"
import MainStyles from "../styles/main.module.css";

const Layout = ({ children }) => (
  <div className={MainStyles.main}>
    <Container>
      <Header siteTitle={`Header`} />
      <main style={{paddingTop: `0%`}}>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()} Alan Macabuhay, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </Container>
  </div>
)

export default Layout
