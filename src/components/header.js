import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'


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
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/mylogo.svg')} width="30" /></Link>
          <Link to="/projects">Projects</Link>
          <Link to="/fun">Fun</Link>
          <Link to="/about">About</Link>
          <Link to="/resume"><button>Resume</button></Link>
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
