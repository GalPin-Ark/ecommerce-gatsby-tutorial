
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Cart from '../components/Cart'
import Skus from '../components/Products/Skus'
import Button from '@material-ui/core/Button';
const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>This is the advanced example</h1>
    <h2>With multiple variants and easy cart functionality</h2>
    <Cart>
      <Skus />
    </Cart>

    <Link to="/" style={{ textDecoration: `none` }}>
      <Button variant="contained" >
        <span className="material-icons">arrow_back</span>
        Go back to the easy example
       </Button>
    </Link>
  </Layout>
)

export default AdvancedExamplePage