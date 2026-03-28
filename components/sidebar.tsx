"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  ShieldAlert, 
  Bot, 
  DollarSign,
  Settings,
  Radio
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Live Ops", href: "/live", icon: Radio },
  { name: "Salud de Cuentas", href: "/cuentas", icon: Users },
  { name: "Operación y Funnel", href: "/operacion", icon: Activity },
  { name: "Riesgo y Abuso", href: "/riesgos", icon: ShieldAlert },
  { name: "Producto e IA", href: "/producto", icon: Bot },
  { name: "Finanzas", href: "/finanzas", icon: DollarSign },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-[#191812] text-slate-100 border-r border-border">
      <div className="flex h-16 items-center px-6 border-b border-border">
        <Bot className="h-6 w-6 text-[#6b7b45] mr-2" />
        <span className="text-lg font-bold tracking-tight">RentAFlow <span className="text-[#6b7b45]">Admin</span></span>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`) && item.href !== "/"
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive 
                    ? "bg-[#6b7b45]/15 text-[#c8d0b0]" 
                    : "text-slate-300 hover:bg-[#242117] hover:text-slate-50",
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-[#6b7b45]" : "text-slate-400 group-hover:text-slate-300",
                    "mr-3 flex-shrink-0 h-5 w-5 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-border">
        <Link
          href="/configuracion"
          className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-[#242117] hover:text-slate-50 transition-colors"
        >
          <Settings className="mr-3 flex-shrink-0 h-5 w-5 text-slate-400 group-hover:text-slate-300" />
          Configuración
        </Link>
        <div className="mt-4 px-3 flex items-center">
          <div className="h-8 w-8 rounded-full bg-[#242117] flex items-center justify-center text-sm font-medium">
            AD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-slate-500">Torre de control</p>
          </div>
        </div>
      </div>
    </div>
  )
}
