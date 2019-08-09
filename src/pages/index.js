import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello World!</h1>
        <p>Welcome to Yumei Jin's <br />learning-by-doing website <br />coded in React.</p>
        <p>Stay tuned!</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>4 projects, more coming...</h2>
      <div className="CardGroup">
        <Card 
          title="bi(OS)"
          text="Business Intelligent Operating System for Enterprise"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="TalkMeUp"
          text="AI based communication training for everyone"
          image={require('../images/wallpaper2.jpg')} />
        <Card 
          title="Sensei Pro"
          text="E-learning data viz platform for K12 teachers"
          image={require('../images/wallpaper3.jpg')} />
        <Card 
          title="popoya"
          text="Imaging the future"
          image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
