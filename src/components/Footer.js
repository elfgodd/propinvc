import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>&copy; {" "}{new Date().getFullYear()}<span>PropinVC</span>
      . Built by{" "}<a href="https://alienroom.dev">AlienRoom</a>
      </p>
    </footer>
  )
}

export default Footer
