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
      <Col sm={4}>
        <Image alt="my profile pic" />
      </Col>
      <Col sm={8}>
        <h1 style={{ paddingTop: `5%` }}>Hello.</h1>
        <p>
          My name's Alan Macabuhay. I recently graduated from Oregon State
          University. I am an aspiring software engineer.
        </p>
        <p>
          I am currently looking for a job to start my career. For more details,
          see my{" "}
          <a href="https://docs.google.com/document/d/1Emf02M1PUjog2N93UquHZGUk8sEEv9BqSvKnWfG-45Q/edit?usp=sharing">
            résumé.
          </a>
        </p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
