import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            fixed(width: 332, height: 432, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img className="pic" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Image
