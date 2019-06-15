import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import todo from "../images/todo.png"
import karateMaster from "../images/karatemaster.png"
import ogma from "../images/ogma1.png"
import budget from "../images/budgetapp.png"
import nba from "../images/nbass.png"
import yelpcamp from "../images/yelpcamp.png"

const data = [
  {
    name: "Ogma",
    link: "https://github.com/amac714/Employee_Recognition_Web_Portal",
    description: "Database-backed website used to track employee recognition awards",
    stack: "React.js, Python, Flask, PostGreSQL",
    image: ogma,
  },
  {
    name: "Budget App",
    link: "https://github.com/amac714/expense-app",
    description: "CRUD app to keep track of expenses",
    stack: "React.js, React-Redux, Express.js, Sass",
    image: budget,
  },
  {
    name: "To-Do List",
    link: "https://github.com/amac714/indecision-app",
    description: "To-do app for the indecisive person",
    stack: "React.js, Node.js",
    image: todo,
  },
  {
    name: "C++ Game",
    link: "https://github.com/amac714/Text-Based-Game---CS162-Project",
    description: "Command line text based game built with C++",
    stack: "C++, Polymorphism, Inheritance, OOP",
    image: karateMaster,
  },
  {
    name: "Yelp Camp",
    link: "https://github.com/amac714/YelpCamp",
    description: "Web app to post pictures of places visited",
    stack: "JavaScript, EJS, MongoDB, Node.js, REST",
    image: yelpcamp,
  },
]

const Projects = () => (
  <Layout>
    <SEO title="projects" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <p style={{textAlign: `center`, fontSize: `11px`}}>Note: Projects currently link externally to github repo</p>
      <Row>
        {data.map(d => (
          <Col sm={6} xs={12} key={d.name}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a href={d.link}>
                <div
                  className="image"
                  style={{
                    width: 250,
                    height: 200,
                    margin: 10,
                    background: `url(${d.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                />
                <h3 style={{ textAlign: `center` }}>{d.name}</h3>
              </a>
              <p style={{ fontSize: `12px` }}>{d.description}</p>
              <p style={{ fontSize: `12px`, color: `#B3B6B7` }}>
                Utilized: {d.stack}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

export default Projects;
