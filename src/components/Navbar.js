import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/alquiler'>Alquiler</Link>
        </li>
        <li>
          <Link to='/venta'>Venta</Link>
        </li>
        <li>
          <Link to='/servicios'>Servicios</Link>
        </li>
        <li>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
