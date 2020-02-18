import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Box component="section" style={{maxHeight: `40rem`}}>
    <Image src="gatsby-uni.jpg"  />
     </Box>
     <Box component="section">
       hola
        Officia elit laboris in incididunt fugiat est. Occaecat cupidatat incididunt amet duis aliqua incididunt. Non anim excepteur ipsum ad quis. Pariatur sit dolor ex in consequat ea in cillum incididunt sunt. Culpa laborum fugiat nulla est consectetur minim 
        lorem100
        hola
        Officia elit laboris in incididunt fugiat est. Occaecat cupidatat incididunt amet duis aliqua incididunt. Non anim excepteur ipsum ad quis. Pariatur sit dolor ex in consequat ea in cillum incididunt sunt. Culpa laborum fugiat nulla est consectetur minim 
        lorem100
        hola
      
        Officia elit laboris in incididunt fugiat est. Occaecat cupidatat incididunt amet duis aliqua incididunt. Non anim excepteur ipsum ad quis. Pariatur sit dolor ex in consequat ea in cillum incididunt sunt. Culpa laborum fugiat nulla est consectetur minim 
        lorem100
        hola Officia elit laboris in incididunt fugiat est. Occaecat cupidatat incididunt amet duis aliqua incididunt. Non anim excepteur ipsum ad quis. Pariatur sit dolor ex in consequat ea in cillum incididunt sunt. Culpa laborum fugiat nulla est consectetur minim 
        lorem100
        hola Officia elit laboris in incididunt fugiat est. Occaecat cupidatat incididunt amet duis aliqua incididunt. Non anim excepteur ipsum ad quis. Pariatur sit dolor ex in consequat ea in cillum incididunt sunt. Culpa laborum fugiat nulla est consectetur minim 
        lorem100
        hola
     </Box>

   {/* 
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
   
    <Checkout />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="gatsby-astronaut.png"/>
      
    </div>
    <Link to="/advanced/" style={{ textDecoration: `none` }}>
    <Button variant="contained" >
      Go to advanced
       <span className="material-icons">arrow_forward</span>
       </Button>
    </Link> */}
  </Layout>
)

export default IndexPage
