"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-chalk/80 backdrop-blur-md border-b border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-chalk font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-semibold text-text-dark">RentAFlow</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-text-muted hover:text-text-dark transition-colors">
              Servicios
            </Link>
            <Link href="#how-it-works" className="text-text-muted hover:text-text-dark transition-colors">
              Cómo Funciona
            </Link>
            <Link href="#pricing" className="text-text-muted hover:text-text-dark transition-colors">
              Precios
            </Link>
            <Link href="#faq" className="text-text-muted hover:text-text-dark transition-colors">
              FAQ
            </Link>
            <button className="px-6 py-2 bg-primary text-chalk rounded-lg hover:bg-primary-dark transition-colors font-medium">
              Prueba Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-silk">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-text-muted hover:text-text-dark transition-colors">
                Servicios
              </Link>
              <Link href="#how-it-works" className="text-text-muted hover:text-text-dark transition-colors">
                Cómo Funciona
              </Link>
              <Link href="#pricing" className="text-text-muted hover:text-text-dark transition-colors">
                Precios
              </Link>
              <Link href="#faq" className="text-text-muted hover:text-text-dark transition-colors">
                FAQ
              </Link>
              <button className="px-6 py-2 bg-primary text-chalk rounded-lg hover:bg-primary-dark transition-colors font-medium w-full">
                Prueba Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
