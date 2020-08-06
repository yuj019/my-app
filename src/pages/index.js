import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell";
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello!</h1>
        <p>Welcome to Yumei Jin's <br />learning-by-doing website <br />coded in React.</p>
        <p>Stay tuned!</p>
        <Link to="/">Download my Resume</Link>
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
          title="Data Dashboard Design"
          text="Smart Data Dashboard for Small Businesses"
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
      title="I am Learning React"
      text="Currently learning how to build a modern site using React and the most efficient libraries to get my site online, I am getting myself amiliar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying my site with Netlify." 
    />
    <SectionCaption>Here's what I've learned</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>

  </Layout>
)

export default IndexPage
