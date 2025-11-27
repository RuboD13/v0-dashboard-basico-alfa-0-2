"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-chalk/80 backdrop-blur-md border-b border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-text-dark">RentAFlow</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="text-text-muted hover:text-text-dark transition-colors">
              Servicios
            </Link>
            <Link href="#como-funciona" className="text-text-muted hover:text-text-dark transition-colors">
              Cómo Funciona
            </Link>
            <Link href="#precios" className="text-text-muted hover:text-text-dark transition-colors">
              Precios
            </Link>
            <Link href="#testimonios" className="text-text-muted hover:text-text-dark transition-colors">
              Testimonios
            </Link>
            <Link href="#faq" className="text-text-muted hover:text-text-dark transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-text-muted hover:text-text-dark transition-colors">
              Iniciar Sesión
            </Link>
            <Link
              href="/demo"
              className="bg-text-dark text-white px-6 py-2.5 rounded-full hover:bg-primary transition-colors font-medium"
            >
              Prueba Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-porcelain transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-silk">
            <div className="flex flex-col space-y-4">
              <Link href="#servicios" className="text-text-muted hover:text-text-dark transition-colors">
                Servicios
              </Link>
              <Link href="#como-funciona" className="text-text-muted hover:text-text-dark transition-colors">
                Cómo Funciona
              </Link>
              <Link href="#precios" className="text-text-muted hover:text-text-dark transition-colors">
                Precios
              </Link>
              <Link href="#testimonios" className="text-text-muted hover:text-text-dark transition-colors">
                Testimonios
              </Link>
              <Link href="#faq" className="text-text-muted hover:text-text-dark transition-colors">
                FAQ
              </Link>
              <Link href="/login" className="text-text-muted hover:text-text-dark transition-colors">
                Iniciar Sesión
              </Link>
              <Link
                href="/demo"
                className="bg-text-dark text-white px-6 py-2.5 rounded-full hover:bg-primary transition-colors font-medium text-center"
              >
                Prueba Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
