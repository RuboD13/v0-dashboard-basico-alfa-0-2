"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="landing-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
            <p className="footer-description">
              Automatiza tu gestión de alquileres de principio a fin. Desde la captación hasta el contrato firmado.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Producto</h4>
            <ul className="footer-links">
              <li>
                <a href="#benefits">Características</a>
              </li>
              <li>
                <a href="#pricing">Precios</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Integraciones</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Carreras</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Privacidad</a>
              </li>
              <li>
                <a href="#">Términos</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">RGPD</a>
              </li>
            </ul>
            <div className="footer-newsletter">
              <h4 style={{ marginTop: "24px" }}>Newsletter</h4>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="tu@email.com"
                  aria-label="Email para newsletter"
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 RentAFlow. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Preferencias de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
