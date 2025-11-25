import { Icons } from "./icons"

export function Footer() {
  return (
    <footer className="rf-footer">
      <div className="rf-container">
        <div className="rf-footer-grid">
          <div className="rf-footer-brand">
            <a href="#" className="rf-logo" style={{ color: "white" }}>
              <div className="rf-logo-icon">
                <Icons.Logo />
              </div>
              <span>RentAFlow</span>
            </a>
            <p>Automatiza tu gestión de alquileres con IA. Desde el primer contacto hasta la firma del contrato.</p>
            <div className="rf-footer-newsletter">
              <form className="rf-footer-newsletter-form">
                <input type="email" placeholder="tu@email.com" className="rf-footer-newsletter-input" />
                <button type="submit" className="rf-btn rf-btn-primary">
                  Suscribir
                </button>
              </form>
            </div>
          </div>

          <div className="rf-footer-column">
            <h5>Producto</h5>
            <ul className="rf-footer-links">
              <li className="rf-footer-link">
                <a href="#">Funcionalidades</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Precios</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Integraciones</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">API</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>

          <div className="rf-footer-column">
            <h5>Empresa</h5>
            <ul className="rf-footer-links">
              <li className="rf-footer-link">
                <a href="#">Sobre nosotros</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Blog</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Careers</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="rf-footer-column">
            <h5>Legal</h5>
            <ul className="rf-footer-links">
              <li className="rf-footer-link">
                <a href="#">Privacidad</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Términos</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">Cookies</a>
              </li>
              <li className="rf-footer-link">
                <a href="#">RGPD</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rf-footer-bottom">
          <p className="rf-footer-copyright">© 2025 RentAFlow. Todos los derechos reservados.</p>
          <div className="rf-footer-social">
            <a href="#" aria-label="Twitter">
              <Icons.Twitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Icons.LinkedIn />
            </a>
            <a href="#" aria-label="GitHub">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
