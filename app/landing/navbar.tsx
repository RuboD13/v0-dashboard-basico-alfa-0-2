"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="navbar" style={{ boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none" }}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#5B7FD3" />
            <path
              d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M12 16H20M12 19H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="13" r="2" fill="white" />
          </svg>
          RentAFlow
        </a>

        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#beneficios" className="navbar-link">
            Servicios
          </a>
          <a href="#como-funciona" className="navbar-link">
            Cómo Funciona
          </a>
          <a href="#testimonios" className="navbar-link">
            Testimonios
          </a>
          <a href="#precios" className="navbar-link">
            Precios
          </a>
          <a href="#faq" className="navbar-link">
            FAQ
          </a>
          <a href="#contacto" className="navbar-cta">
            Prueba Gratis
          </a>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
