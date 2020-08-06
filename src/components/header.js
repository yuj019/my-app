import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  } 

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "my testing payment"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/mylogo.svg')} width="30" /></Link>
          <Link to="/page-2/">Projects</Link>
          <Link to="/page-2/">Fun</Link>
          <Link to="/page-2/">About</Link>
          <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
            stripeKey={'pk_test_RFj4L1K49GfTEt5kE2oHnoZJ00O9BPJBOu'}>
            <button>Donate</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
