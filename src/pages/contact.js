import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Container from "react-bootstrap/Container"

const Contact = () => (
  <Layout>
    <SEO title="projects" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Feel free to contact me.</h2>

      <ul style={{ display: "inline-block", textAlign: "left" }}>
        <li>
          <a href="mailto:amac714@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alan-macabuhay">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/amac714">GitHub</a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Contact
