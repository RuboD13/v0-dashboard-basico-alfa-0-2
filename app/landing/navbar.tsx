"use client"

import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="landing-container navbar-inner">
          <a href="#" className="navbar-logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#4A6741" />
              <path
                d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V12Z"
                fill="white"
              />
              <path
                d="M18 10H22C23.1046 10 24 10.8954 24 12V14C24 15.1046 23.1046 16 22 16H18V10Z"
                fill="white"
                fillOpacity="0.7"
              />
              <path
                d="M18 18H22C23.1046 18 24 18.8954 24 20V20C24 21.1046 23.1046 22 22 22H18V18Z"
                fill="white"
                fillOpacity="0.7"
              />
            </svg>
            RentAFlow
          </a>

          <ul className="navbar-menu">
            <li>
              <a href="#benefits">Servicios</a>
            </li>
            <li>
              <a href="#how-it-works">Cómo Funciona</a>
            </li>
            <li>
              <a href="#pricing">Precios</a>
            </li>
            <li>
              <a href="#testimonials">Testimonios</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a href="/login" className="btn btn-secondary hide-mobile">
              Iniciar Sesión
            </a>
            <a href="/register" className="btn btn-primary">
              Prueba Gratis
            </a>
            <button
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          <li>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
              Cómo Funciona
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
              Precios
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
              Testimonios
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="/login" onClick={() => setMobileMenuOpen(false)}>
              Iniciar Sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
