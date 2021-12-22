import React from 'react'
import Layout from '../components/Layout'

const contacto = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contatanos</h3>
            <p>
              Para mas informacion sobre como publicar tu propiedades, ya sea para
              venta o renta.
            </p>
            <p>Para informacion sobre cotizaciones de como podemos ayudarte
              en la administracion de tu propiedad.
            </p>
            <p>Para mas informacion sobre como podemos ayudarte con las reparaciones
              y mejoras a tu propiedad.
            </p>
            <p>O simplemente cualquier consulta que tengas pensado estamos abiertos
              a escucharte gracias.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contacto




