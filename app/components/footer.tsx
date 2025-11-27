import Link from "next/link"
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  const links = {
    product: [
      { name: "Características", href: "#services" },
      { name: "Precios", href: "#pricing" },
      { name: "Integraciones", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "Sobre Nosotros", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" },
      { name: "Contacto", href: "#" },
    ],
    legal: [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  return (
    <footer className="bg-text-dark text-chalk border-t border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-chalk font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-semibold">RentAFlow</span>
            </Link>
            <p className="text-chalk/70 mb-6 leading-relaxed">
              La plataforma de automatización para agencias inmobiliarias que quieren escalar sin aumentar equipo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-chalk/10 hover:bg-chalk/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-chalk/10 hover:bg-chalk/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-chalk/10 hover:bg-chalk/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-chalk/10 hover:bg-chalk/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-chalk/70 hover:text-chalk transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-chalk/70 hover:text-chalk transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-chalk/70 hover:text-chalk transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-chalk/10 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Mantente al día</h3>
            <p className="text-chalk/70 text-sm mb-4">
              Recibe las últimas novedades y consejos sobre automatización inmobiliaria
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-chalk/10 border border-chalk/20 rounded-lg text-chalk placeholder:text-chalk/50 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-chalk/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-chalk/70">
          <p>© 2025 RentAFlow. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en España</p>
        </div>
      </div>
    </footer>
  )
}
