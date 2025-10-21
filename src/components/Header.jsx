import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Ali Azgor Rumi</Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header