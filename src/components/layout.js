import React from "react"
//import PropTypes from "prop-types"
import Header from "../components/header";

const Layout = ({children}) => (
  <div>
    <Header siteTitle={`Header`} />
    {children}
  </div>
)

export default Layout;