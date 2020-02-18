/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Divider from '@material-ui/core/Divider';
import StickyFooter from './StickyFooter';
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          minHeight: `81vh`,
          flexDirection: `column`,
        }}
      >
        <main>{children}</main>
       
      </div>
      <Divider />
        <StickyFooter/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
