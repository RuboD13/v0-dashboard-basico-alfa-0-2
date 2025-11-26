"use client"

import { useState, useEffect } from "react"
import "./landing.css"

export function Navbar() {
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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="navbar-logo-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          RentAFlow
        </a>

        <ul className={`navbar-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#como-funciona">Cómo Funciona</a>
          </li>
          <li>
            <a href="#testimonios">Testimonios</a>
          </li>
          <li>
            <a href="#precios">Precios</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="#" className="navbar-login">
            Iniciar Sesión
          </a>
          <a href="#demo" className="btn btn-primary">
            Prueba Gratis
          </a>
        </div>

        <button
          className="navbar-toggle"
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
