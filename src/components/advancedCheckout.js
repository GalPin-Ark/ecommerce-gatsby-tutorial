import React from 'react'
import Button from '@material-ui/core/Button';
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

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
      <span className="material-icons">check_circle</span>
      {this.props.cart.length ? 'GO TO CHECKOUT' : 'CART IS EMPTY'}
      </Button>
    )
  }
}

export default Checkout