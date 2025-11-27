"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="navbar" style={{ boxShadow: isScrolled ? "var(--shadow-md)" : "none" }}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <div className="navbar-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            RentAFlow
          </a>

          <ul className="navbar-menu">
            <li>
              <a href="#benefits" className="navbar-link">
                Servicios
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="navbar-link">
                Cómo Funciona
              </a>
            </li>
            <li>
              <a href="#pricing" className="navbar-link">
                Precios
              </a>
            </li>
            <li>
              <a href="#faq" className="navbar-link">
                FAQ
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a href="/login" className="navbar-link">
              Iniciar Sesión
            </a>
            <a href="/register" className="btn btn-primary btn-sm">
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

      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-list">
          <li>
            <a href="#benefits" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
              Cómo Funciona
            </a>
          </li>
          <li>
            <a href="#pricing" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
              Precios
            </a>
          </li>
          <li>
            <a href="#faq" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="/login" className="mobile-menu-link">
              Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/register" className="btn btn-primary" style={{ marginTop: "16px" }}>
              Prueba Gratis
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
