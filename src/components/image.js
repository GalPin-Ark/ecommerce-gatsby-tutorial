import React from "react"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} style={{maxHeight: `35rem`}}/>
}
const Image = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images}) => renderImage(images.edges.find(image => image.node.relativePath === props.src))}
  />
}
export default Image;