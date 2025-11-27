"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              RentAFlow
            </div>
            <p className="footer-description">
              La plataforma de automatización para agencias inmobiliarias. Convierte leads en contratos de manera
              eficiente.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Producto</h4>
            <ul className="footer-links">
              <li>
                <a href="#benefits" className="footer-link">
                  Características
                </a>
              </li>
              <li>
                <a href="#pricing" className="footer-link">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Empresa</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-column-title">Newsletter</h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Recibe consejos y novedades del sector inmobiliario
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="tu@email.com" className="newsletter-input" />
              <button type="submit" className="btn btn-primary btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 RentAFlow. Todos los derechos reservados.</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
