import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function Home() {
  return (
  <Layout>
    <main className='page'>
      <header className='hero'>
        <StaticImage
        src='../assets/images/navbar-propinvc.png'
        alt='home hero'
        className='hero-img'
        placeholder='tracedSVG'
        layout='fullWidth'
        ></StaticImage>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>apartamentos</h1>
            <h4>encuentra propiedades rapido muy rapido!</h4>
          </div>
        </div>
      </header>
    </main>
  </Layout>
  )
}
