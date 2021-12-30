import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>Hola somos propinVC</h2>
            <p>
              Hola somos propinVC
              Hola somos propinVC
              Hola somos propinVC
            </p>
            <p>
              Hola somos propinVC
              Hola somos propinVC
            </p>
            <Link t='/contacto' className='btn'>
              contacto 
            </Link>
          </article>
          <StaticImage
            src='../assets/images/navbar-propinvc.png'
            alt='propinvc'
            className='about-img'
            placeholder='blurred'
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
