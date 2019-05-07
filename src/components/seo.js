import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({ title, description, lang, keywords }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={`%s`}>
            <html lang={lang}/>
            <meta name="description" content={seo.description}/>
            <meta name="keywords" content={keywords.join(`, `)} />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  lang: `en`,
  keyword: [],
}