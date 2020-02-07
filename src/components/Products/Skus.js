
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'
import Grid from '@material-ui/core/Grid';

const conatinerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
  }
  const styGrid = {
    flexWrap: 'wrap',
    padding: '1rem',
  }
export default props => (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku{
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
      
        <Grid style={conatinerStyles}>
            {skus.edges.map(({ node: sku }) => (
            
            <Grid item xs={6} sm={4} style={styGrid}>
            <SkuCard {...props} key={sku.id} sku={sku} />
          </Grid>
          ))}
          
        </Grid>
      )}
    />
  )
