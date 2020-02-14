import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    })
    return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
    state = {
        disabled: false,
        buttonText: 'ADD TO CART',
        paymentMessage: '',
    }

    resetButton() {
        this.setState({ disabled: false, buttonText: 'ADD ME BABY ONE MORE TIME!' })
    }

    addToCart(event, skuId, quantity = 1) {
        event.preventDefault()
        this.setState({ disabled: true, buttonText: 'ADDED...' })
        this.props.addToCart(skuId)
        setTimeout(this.resetButton.bind(this), 500)
    }

    render() {
        const sku = this.props.sku
        return (

            <Card>
            <CardContent >

            < Typography variant = "h5"
            component = "h2" > { sku.attributes.name } </Typography>

            <Typography variant = "body2"
            component = "p" >
            Price: { formatPrice(sku.price, sku.currency) } </Typography> </CardContent>
             <CardActions >
            <Button variant = "contained"
            color = "primary"
            onClick = { event => this.addToCart(event, sku.id) }
            disabled = { this.state.disabled }
            size = "small" > { this.state.buttonText } < span className = "material-icons" > add_shopping_cart </span></Button >
            </CardActions> { this.state.paymentMessage } </Card>
        )
    }
}

export default SkuCard