"use client"

import { useState } from "react"
import { Icons } from "./icons"
import "../../styles/rentaflow.css"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="rf-navbar">
        <div className="rf-container rf-navbar-inner">
          <a href="#" className="rf-logo">
            <div className="rf-logo-icon">
              <Icons.Logo />
            </div>
            <span>RentAFlow</span>
          </a>

          <ul className="rf-nav-links">
            <li>
              <a href="#features" className="rf-nav-link">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="rf-nav-link">
                Cómo Funciona
              </a>
            </li>
            <li>
              <a href="#pricing" className="rf-nav-link">
                Precios
              </a>
            </li>
            <li>
              <a href="#testimonials" className="rf-nav-link">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#faq" className="rf-nav-link">
                FAQ
              </a>
            </li>
          </ul>

          <div className="rf-nav-actions">
            <a href="#login" className="rf-btn rf-btn-ghost rf-lg-block" style={{ display: "none" }}>
              Iniciar Sesión
            </a>
            <a href="#demo" className="rf-btn rf-btn-primary">
              Prueba Gratis
            </a>
            <button
              className="rf-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`rf-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <a href="#features" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Funcionalidades
        </a>
        <a href="#how-it-works" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Cómo Funciona
        </a>
        <a href="#pricing" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Precios
        </a>
        <a href="#testimonials" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Testimonios
        </a>
        <a href="#faq" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          FAQ
        </a>
        <a href="#login" className="rf-mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Iniciar Sesión
        </a>
      </div>
    </>
  )
}
