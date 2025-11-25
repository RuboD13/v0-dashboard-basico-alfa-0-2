"use client"

import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Servicios", href: "#benefits" },
    { label: "Cómo Funciona", href: "#how-it-works" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Precios", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="container">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <span className="navbar__logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            RentAFlow
          </Link>

          <ul className="navbar__menu">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="navbar__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Link href="#pricing" className="navbar__cta">
            Prueba Gratis
          </Link>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`navbar__mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="#pricing" className="navbar__cta" style={{ marginTop: "1rem", display: "inline-flex" }}>
                Prueba Gratis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
