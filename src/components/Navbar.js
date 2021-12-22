import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/navbar-propinvc.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Encuentra las mejores propiedades" />
        </Link>
        <button className="nav-btn" onClick={() => setShow(false)}>
          <FiAlignJustify />
        </button>
        </div>
        <div className={
          show ? "nav-links show-links" : "nav-links"
        }>
          <Link to="/" className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
          >
            inicio
          </Link>
          <Link to="/alquiler" className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
          >
            alquiler
          </Link>
          <Link to="/venta" className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
          >
            venta
          </Link>
          <Link to="/servicios" className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
          >
            servicios
          </Link>
          <div className="nav-link contact-link">
          <Link to="/contact" className="btn"
          onClick={() => setShow(false)}
          >
              contacto
            </Link>
          </div>
        </div>
      </div>     
    </nav>
  )
}

export default Navbar
