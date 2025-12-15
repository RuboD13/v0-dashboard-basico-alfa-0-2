import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerLinks = {
    Producto: [
      { label: "Características", href: "#beneficios" },
      { label: "Precios", href: "#precios" },
      { label: "Integraciones", href: "#" },
      { label: "API", href: "#" },
    ],
    Empresa: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
    Legal: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "RGPD", href: "#" },
    ],
    Soporte: [
      { label: "Centro de ayuda", href: "#" },
      { label: "Documentación", href: "#" },
      { label: "Estado del sistema", href: "#" },
      { label: "Comunidad", href: "#" },
    ],
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-xl font-semibold">RentAFlow</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              La plataforma de automatización para agencias inmobiliarias modernas.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium mb-3">Suscríbete a nuestra newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
                <Button className="bg-primary hover:bg-primary-hover">Enviar</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© 2025 RentAFlow. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label={social}
              >
                <span className="text-xs font-bold">{social[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
