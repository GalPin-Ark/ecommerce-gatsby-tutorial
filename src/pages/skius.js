import React from 'react'
import SkuCard from '../components/Products/SkuCard'
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
const stripe_url = 'https://api.stripe.com/'

const Skius = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            fetchedData: [],
        }
      }
    
    componentDidMount() {

        this.getProducts();
    }

    getProducts() {
        fetch(stripe_url + "/v1/skus", {
            method: "GET",
            headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            this.setState({
                fetchedData: json.data
            })

        });
    }

    render() {
        const props = this.props;
        const { fetchedData } = this.state
        return ( <div>
            <Grid style={conatinerStyles}>
             {fetchedData.map(sku => <Grid item xs={6} sm={4} style={styGrid}>
            <SkuCard {...props} key={sku.id} sku={sku} />
          </Grid>)}   
            
         
          
        </Grid>
            
            </div>

        )
    }
}

export default Skius