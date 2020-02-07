import React from 'react'
import Button from '@material-ui/core/Button';


const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY, {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      successUrl: `https://${process.env.GATSBY_API_URL}/page-2/`,
      cancelUrl: `https://${process.env.GATSBY_API_URL}/advanced/`,
    })

    if (error) {
      console.error('Error:', error)
    }
  }

  render() {
    return (
  
      <Button variant="contained" color="secondary" onClick={event => this.redirectToCheckout(event)} disabled={!this.props.cart.length}>
      
      {this.props.cart.length ? 'GO TO CHECKOUT' : 'CART IS EMPTY'}
      <span className="material-icons">{this.props.cart.length ? 'shopping_cart' : 'remove_shopping_cart'}</span>
      </Button>
    )
  }
}

export default Checkout