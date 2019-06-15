import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = () => (
  <Layout>
    <SEO title="Alan Macabuhay" keywords={[`gatsby`, `application`, `react`]} />
    <Row>
      <Col sm={8} md={6} lg={4}>
        <Image alt="my profile pic" />
      </Col>
      <Col sm={8} md={6} lg={8}>
        <h1 style={{ paddingTop: `5%` }}>Hello.</h1>
        <p className="bio">
          My name's{" "}
          <span style={{ color: `#197BBD`, fontSize: `24px` }}>
            <strong>Alan Macabuhay</strong>
          </span>
          . I recently graduated from Oregon State University. I have experience in C/C++, Javacsript, Node.js,
          React.js.
        </p>
        <p className="bio">
          I am currently looking for a job to start my career. For more details,
          see my{" "}
          <a
            href="https://docs.google.com/document/d/16kiQ5peCqbbgqbBo8kTLhkhW1y4GkP1h9TIzusHY2ac/edit?usp=sharing"
            style={{ color: `#FFF8F0` }}
          >
            résumé.
          </a>
        </p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
