import React from 'react'
import SkuCard from '../components/Products/SkuCard'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
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
            loading: false,
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

            this.setState({
                fetchedData: json.data,

            })
            if (this.state.fetchedData.length > 0) {

                this.setState({ loading: true });
            }
            return json;
        })

    }
    createSkeleton = () => {
        let table = []


        for (let i = 0; i < 3; i++) {
            table.push(<Grid item key={i} xs={6} sm={4} style={styGrid}>
                <Box pt={0.5}>
                    <Skeleton variant="text" width={210} />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="rect" width={210} height={118} />
                </Box>
            </Grid>)
        }
        return table
    }
    render() {
        const props = this.props;
        const { fetchedData } = this.state
        return (<div>
            <Grid style={conatinerStyles}>
                {this.state.loading ? (
                    fetchedData.map(sku =>
                        <Grid item key={sku.id} xs={6} sm={4} style={styGrid}>

                            <SkuCard {...props} sku={sku} />

                        </Grid>
                    )

                ) : (
                        this.createSkeleton() 
                    )}
            </Grid>
        </div>

        )
    }
}

export default Skius