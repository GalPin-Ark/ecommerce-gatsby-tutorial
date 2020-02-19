import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
/* import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FiestaImg from "../images/gatsby-happy.jpg" */
import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => {
/*   const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-happy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`) */

return (
  <Layout>
    <SEO title="Home" />
    
   
  
      <section className="swiper-container swiper-slider" style={{zIndex:`1`,backgroundImage:`url(gatsby-uni.jpg)`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`,backgroundPosition:`center bottom`,maxHeight:`35rem`,height:`25rem`,display:`flex`,alignItems:`center`}}>
   
     
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2 className="text-white">Enjoy Your Dream Vacation</h2>
                <p className="h6 text-white">Travel to the any corner of the world, without going around in circles.</p>
               
              </div>
            </div>
          </div>
     
  
        
      </section>
  
        <Container component="section" maxWidth="lg" style={{
         
          border:`red solid 2px`
        }}>
     <Box p={2} display="block" justifyContent="center">
     hola
       <Button variant="contained" className="btn btn-primary">
      Go to advanced
       <span className="material-icons">arrow_forward</span>
       </Button>
       <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button type="button" className="btn btn-primary">Primary</button>
   
    <Checkout />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="gatsby-astronaut.png"/>
      
    </div>
    <Link to="/advanced/" style={{ textDecoration: `none` }}>
    <Button variant="contained" >
      Go to advanced
       <span className="material-icons">arrow_forward</span>
       </Button>
    </Link> 
     </Box>
     </Container>
    
  </Layout>
)
  }

export default IndexPage
