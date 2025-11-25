"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    producto: [
      { label: "Características", href: "#benefits" },
      { label: "Precios", href: "#pricing" },
      { label: "Integraciones", href: "#" },
      { label: "API", href: "#product-preview" },
      { label: "Changelog", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Contacto", href: "#" },
      { label: "Partners", href: "#" },
    ],
    legal: [
      { label: "Términos de Servicio", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "RGPD", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>
              RentAFlow
            </div>
            <p className="footer__description">
              Automatiza la gestión completa de alquileres: desde la captura de leads hasta la firma del contrato.
              Tecnología de IA para agencias inmobiliarias modernas.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="footer__column-title">Producto</h3>
            <ul className="footer__links">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="footer__column-title">Empresa</h3>
            <ul className="footer__links">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h3 className="footer__column-title">Newsletter</h3>
            <p className="footer__description">Recibe consejos de gestión inmobiliaria y novedades del producto.</p>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                className="footer__newsletter-input"
                aria-label="Dirección de email para newsletter"
              />
              <button type="submit" className="footer__newsletter-btn" aria-label="Suscribirse">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">© {currentYear} RentAFlow. Todos los derechos reservados.</p>

          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
