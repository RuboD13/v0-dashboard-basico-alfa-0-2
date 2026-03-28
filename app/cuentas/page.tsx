"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, 
  AreaChart, Area, ComposedChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts"
import { 
  Users, AlertTriangle, ArrowUpRight, ArrowDownRight, 
  X, BookOpen, BarChart3, Activity, HeartPulse, Sparkles,
  Search, Filter, ShieldCheck, ShieldAlert, FileWarning, TrendingUp
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

const accountsData = [
  { 
    id: 1, name: "Inmobiliaria SolyMar", plan: "Starter", users: "3/3", mrr: "99€", 
    health: "Excelente", churnRisk: "Bajo", usage: "95%",
    labels: ["Candidata a upgrade"],
    metrics: { adopcion: 92, rendimiento: 88, estabilidad: 95, uso: 95, riesgo: 10 },
    details: {
      usuariosActivos: "3 de 3 (100%)", canales: "Email, WhatsApp, CRM", leadsRentaflow: "95%",
      tiempoRespuesta: "12 min", conversion: "14%", 
      incidencias: "1 abierta, 14 resueltas",
      riesgos: "Ninguno detectado"
    }
  },
  { 
    id: 2, name: "Fincas Barcelona", plan: "Agency", users: "2/6", mrr: "249€", 
    health: "Crítica", churnRisk: "Alto", usage: "15%",
    labels: ["Riesgo de churn", "Mala configuración"],
    metrics: { adopcion: 20, rendimiento: 45, estabilidad: 60, uso: 15, riesgo: 80 },
    details: {
      usuariosActivos: "2 de 6 (33%)", canales: "Solo Email", leadsRentaflow: "15%",
      tiempoRespuesta: "4h 30m", conversion: "2%", 
      incidencias: "5 abiertas (Bugs de sync)",
      riesgos: "Caída de logins (-85% en 14 días)"
    }
  },
  { 
    id: 3, name: "AlquilaYa", plan: "Mini", users: "1/1", mrr: "49€", 
    health: "Buena", churnRisk: "Medio", usage: "70%",
    labels: ["Mucho soporte / poco valor"],
    metrics: { adopcion: 75, rendimiento: 65, estabilidad: 80, uso: 70, riesgo: 30 },
    details: {
      usuariosActivos: "1 de 1 (100%)", canales: "Email, WhatsApp", leadsRentaflow: "80%",
      tiempoRespuesta: "45 min", conversion: "8%", 
      incidencias: "12 tickets de soporte este mes",
      riesgos: "Alto consumo de soporte vs MRR"
    }
  },
  { 
    id: 4, name: "Pisos Madrid", plan: "Starter", users: "2/3", mrr: "99€", 
    health: "Vigilable", churnRisk: "Medio", usage: "85%",
    labels: ["Riesgo de saturación", "Posible abuso"],
    metrics: { adopcion: 95, rendimiento: 60, estabilidad: 70, uso: 110, riesgo: 65 },
    details: {
      usuariosActivos: "2 de 3 (66%)", canales: "Email, Calendario", leadsRentaflow: "100%",
      tiempoRespuesta: "25 min", conversion: "11%", 
      incidencias: "3 alertas de rate limit",
      riesgos: "Consumo 10% por encima de límite"
    }
  },
]

const adopcionData = [
  { month: "Oct", adopcion: 52 },
  { month: "Nov", adopcion: 55 },
  { month: "Dic", adopcion: 58 },
  { month: "Ene", adopcion: 61 },
  { month: "Feb", adopcion: 65 },
  { month: "Mar", adopcion: 68 },
]

export default function CuentasPage() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [healthFilter, setHealthFilter] = useState("Todas");
  const [selectedAccount, setSelectedAccount] = useState<typeof accountsData[0] | null>(null);

  const filteredAccounts = accountsData.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHealth = healthFilter === "Todas" || account.health === healthFilter;
    return matchesSearch && matchesHealth;
  });

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Excelente': return '#6b7b45';
      case 'Buena': return '#8a7f5a';
      case 'Vigilable': return '#d48c3e';
      case 'Crítica': return '#c85a5a';
      default: return '#b7b2a3';
    }
  };

  const getHealthBadgeStyle = (health: string) => {
    switch (health) {
      case 'Excelente': return 'text-[#6b7b45] bg-[#6b7b45]/10 border-[#6b7b45]/30';
      case 'Buena': return 'text-[#8a7f5a] bg-[#8a7f5a]/10 border-[#8a7f5a]/30';
      case 'Vigilable': return 'text-[#d48c3e] bg-[#d48c3e]/10 border-[#d48c3e]/30';
      case 'Crítica': return 'text-[#c85a5a] bg-[#c85a5a]/10 border-[#c85a5a]/30';
      default: return 'text-[#b7b2a3] bg-[#b7b2a3]/10 border-[#b7b2a3]/30';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Salud de Cuentas</h2>
          <p className="text-[#b7b2a3] mt-1">Gestión de agencias, adopción de plataforma y prevención de churn</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-[#6b7b45]/10 text-[#6b7b45] border-[#6b7b45]/30 px-3 py-1">
            52 Agencias Totales
          </Badge>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-3">
          {/* KPI 1: Adopción Media */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'adopcion' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'adopcion' ? null : 'adopcion')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Adopción Media
                <UITooltip>
                  <TooltipTrigger asChild>
                    <HeartPulse className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Índice de Adopción de Producto</p>
                    <p className="text-xs text-[#b7b2a3]">Porcentaje medio de características core (CRM, Scoring, Firmas) utilizadas activamente por los usuarios dentro de su primer mes.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Users className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">68%</div>
              <p className="text-xs text-[#6b7b45] flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +2.1% este mes
              </p>
            </CardContent>
          </Card>

          {/* KPI 2: Riesgo de Churn */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'churn' ? 'ring-2 ring-[#c85a5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#c85a5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'churn' ? null : 'churn')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Riesgo de Churn Alto
                <UITooltip>
                  <TooltipTrigger asChild>
                    <AlertTriangle className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Cuentas en Peligro</p>
                    <p className="text-xs text-[#b7b2a3]">Agencias con caída dramática de logins en los últimos 14 días o tickets de soporte negativos recientes. Alta probabilidad de cancelación.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-[#c85a5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#c85a5a]">4 <span className="text-sm font-normal text-[#b7b2a3]">Cuentas</span></div>
              <p className="text-xs text-[#c85a5a] flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +1 desde la semana pasada
              </p>
            </CardContent>
          </Card>

          {/* KPI 3: Oportunidades Upgrade */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'upgrade' ? 'ring-2 ring-[#d8d2c4] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#d8d2c4]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'upgrade' ? null : 'upgrade')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Oportunidades de Upgrade
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Sparkles className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Potencial de Expansión (NRR)</p>
                    <p className="text-xs text-[#b7b2a3]">Agencias operando consistentemente por encima del 80% de los límites de su plan actual. Listos para contacto comercial de upsell.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-[#d8d2c4]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">7 <span className="text-sm font-normal text-[#b7b2a3]">Cuentas</span></div>
              <p className="text-xs text-[#d8d2c4] mt-1">Uso sostenido &gt; 80%</p>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Expandidos */}
        {expandedKpi === 'adopcion' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <HeartPulse className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Adopción Media
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Evolución de la adopción de features clave a lo largo del tiempo.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Evolución de Adopción (Últimos 6 meses)
                </h4>
                <div className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={adopcionData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorAdopcion" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6b7b45" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#6b7b45" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} domain={[0, 100]} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                      <Area type="monotone" dataKey="adopcion" stroke="#6b7b45" strokeWidth={3} fillOpacity={1} fill="url(#colorAdopcion)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                    <p><strong>El Momento &quot;Aha!&quot;:</strong> La adopción subió un 3% desde que simplificamos el onboarding en enero. El feature más adoptado es el <em>scoring financiero</em>.</p>
                    <p><strong>Puntos Ciegos:</strong> Apenas el 20% de las agencias usa la firma digital integrada. Están usando Docusign o Signaturit por fuera.</p>
                    <p className="text-[#6b7b45] font-medium border-t border-[#3a362b] pt-2">
                      ACCIÓN: Lanzar campaña de educación in-app sobre la firma digital mostrando el ahorro de tiempo (30 min/contrato).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'churn' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#c85a5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-[#c85a5a]" /> Análisis Profundo: Cuentas en Riesgo (Churn)
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Intervención de retención prioritaria.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-[#221f18] border border-[#3a362b] rounded-md overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-[#8a7f5a] uppercase bg-[#191812] border-b border-[#3a362b]">
                  <tr>
                    <th className="px-6 py-3">Agencia</th>
                    <th className="px-6 py-3">MRR en Riesgo</th>
                    <th className="px-6 py-3">Razón Principal</th>
                    <th className="px-6 py-3">Última Interacción</th>
                  </tr>
                </thead>
                <tbody className="text-[#b7b2a3]">
                  <tr className="border-b border-[#3a362b]/50 hover:bg-[#2a271f]">
                    <td className="px-6 py-3 font-medium text-[#f1efe7]">Fincas Barcelona</td>
                    <td className="px-6 py-3 text-[#c85a5a] font-bold">249€</td>
                    <td className="px-6 py-3">Caída logins (-85%), Tickets abiertos (Bugs)</td>
                    <td className="px-6 py-3">Hace 14 días (Soporte)</td>
                  </tr>
                  <tr className="border-b border-[#3a362b]/50 hover:bg-[#2a271f]">
                    <td className="px-6 py-3 font-medium text-[#f1efe7]">Inmobiliaria Centro</td>
                    <td className="px-6 py-3 text-[#c85a5a] font-bold">149€</td>
                    <td className="px-6 py-3">Campeón interno abandonó la empresa</td>
                    <td className="px-6 py-3">Hace 21 días (Login)</td>
                  </tr>
                  <tr className="hover:bg-[#2a271f]">
                    <td className="px-6 py-3 font-medium text-[#f1efe7]">Global Rentals</td>
                    <td className="px-6 py-3 text-[#c85a5a] font-bold">249€</td>
                    <td className="px-6 py-3">Impago detectado (Tarjeta caducada)</td>
                    <td className="px-6 py-3">Hace 2 días (Email Auto)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-[#c85a5a] text-[#191812] px-4 py-2 rounded-md font-medium text-sm hover:bg-[#c85a5a]/90 transition-colors">
                Iniciar Protocolo de Rescate
              </button>
            </div>
          </div>
        )}

        {expandedKpi === 'upgrade' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#d8d2c4] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-[#d8d2c4]" /> Análisis Profundo: Oportunidades de Upgrade
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Cuentas maduras listas para escalar su facturación.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
               <div className="text-sm text-[#b7b2a3] space-y-4">
                  <p>Hemos detectado <strong>7 cuentas</strong> en el plan Starter que han consumido el 90% de sus créditos de verificación durante los últimos 2 meses consecutivos.</p>
                  <p><strong>Potencial de Expansión (NRR):</strong> +1,050€ MRR adicionales si logramos convertir a estas 7 agencias al plan Agency.</p>
                  <div className="p-3 bg-[#191812] border border-[#8a7f5a]/30 rounded text-[#f1efe7] font-medium">
                    Trigger Recomendado: Configurar workflow automatizado de email ofreciendo &quot;1 Mes de Plan Agency a precio de Starter&quot; cuando consuman el 85% de sus créditos mensuales.
                  </div>
               </div>
            </div>
          </div>
        )}
      </TooltipProvider>

      <Card className="bg-card border-border shadow-sm">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <CardTitle className="text-[#f1efe7]">Monitor de Agencias</CardTitle>
            <CardDescription className="text-[#b7b2a3]">
              Vista detallada del uso y salud por cuenta. Haz clic para ver la Ficha de Salud.
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#8a7f5a]" />
              <Input
                placeholder="Buscar agencia..."
                className="pl-9 bg-[#191812] border-[#3a362b] text-[#f1efe7] placeholder:text-[#8a7f5a] focus-visible:ring-[#6b7b45]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b7b45]"
              value={healthFilter}
              onChange={(e) => setHealthFilter(e.target.value)}
            >
              <option value="Todas">Todas las Saludes</option>
              <option value="Excelente">Excelente</option>
              <option value="Buena">Buena</option>
              <option value="Vigilable">Vigilable</option>
              <option value="Crítica">Crítica</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b border-[#3a362b]">
                <tr className="border-b border-[#3a362b] transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Agencia</th>
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Plan</th>
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Usuarios</th>
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Uso Límite</th>
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Salud</th>
                  <th className="h-12 px-4 align-middle font-medium text-[#8a7f5a]">Riesgo Churn</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredAccounts.map((account) => (
                  <tr 
                    key={account.id} 
                    className="border-b border-[#3a362b]/50 transition-colors hover:bg-[#2a271f] cursor-pointer"
                    onClick={() => setSelectedAccount(account)}
                  >
                    <td className="p-4 align-middle font-medium text-[#f1efe7]">{account.name}</td>
                    <td className="p-4 align-middle text-[#b7b2a3]">{account.plan}</td>
                    <td className="p-4 align-middle text-[#b7b2a3]">{account.users}</td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[#191812] rounded-full overflow-hidden border border-[#3a362b]">
                          <div 
                            className={`h-full ${parseInt(account.usage) > 85 ? 'bg-[#d8d2c4]' : 'bg-[#6b7b45]'}`} 
                            style={{ width: account.usage }}
                          />
                        </div>
                        <span className="text-xs text-[#b7b2a3]">{account.usage}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Badge variant="outline" className={getHealthBadgeStyle(account.health)}>
                        {account.health}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">
                      <Badge variant="outline" className={
                        account.churnRisk === 'Alto' ? 'text-[#c85a5a] bg-[#c85a5a]/10 border-[#c85a5a]/30' :
                        account.churnRisk === 'Medio' ? 'text-[#d48c3e] bg-[#d48c3e]/10 border-[#d48c3e]/30' :
                        'text-[#6b7b45] bg-[#6b7b45]/10 border-[#6b7b45]/30'
                      }>
                        {account.churnRisk}
                      </Badge>
                    </td>
                  </tr>
                ))}
                {filteredAccounts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-[#b7b2a3]">
                      No se encontraron agencias con los filtros seleccionados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={!!selectedAccount} onOpenChange={(open) => !open && setSelectedAccount(null)}>
        <SheetContent side="right" className="w-full sm:max-w-xl bg-[#191812] border-l border-[#3a362b] text-[#f1efe7] overflow-y-auto">
          {selectedAccount && (
            <div className="space-y-6 mt-4 pb-10">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <SheetTitle className="text-2xl text-[#f1efe7]">{selectedAccount.name}</SheetTitle>
                    <SheetDescription className="text-[#b7b2a3] flex items-center gap-2 mt-1">
                      <span>Plan: {selectedAccount.plan}</span>
                      <span>•</span>
                      <span>MRR: {selectedAccount.mrr}</span>
                    </SheetDescription>
                  </div>
                  <Badge variant="outline" className={`px-3 py-1 text-sm ${getHealthBadgeStyle(selectedAccount.health)}`}>
                    Salud {selectedAccount.health}
                  </Badge>
                </div>
              </SheetHeader>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedAccount.labels.map((label, i) => (
                  <Badge key={i} variant="secondary" className="bg-[#221f18] text-[#d8d2c4] border border-[#3a362b]">
                    {label}
                  </Badge>
                ))}
              </div>

              {/* Score Radar Chart */}
              <div className="bg-[#221f18] border border-[#3a362b] rounded-xl p-5">
                <h4 className="text-sm font-semibold text-[#8a7f5a] mb-4 flex items-center">
                  <Activity className="mr-2 h-4 w-4" /> Composición del Health Score
                </h4>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                      { subject: 'Adopción (25%)', A: selectedAccount.metrics.adopcion, fullMark: 100 },
                      { subject: 'Rendimiento (25%)', A: selectedAccount.metrics.rendimiento, fullMark: 100 },
                      { subject: 'Estabilidad (20%)', A: selectedAccount.metrics.estabilidad, fullMark: 100 },
                      { subject: 'Uso vs Plan (15%)', A: selectedAccount.metrics.uso, fullMark: 100 },
                      { subject: 'Compliance (15%)', A: 100 - selectedAccount.metrics.riesgo, fullMark: 100 },
                    ]}>
                      <PolarGrid stroke="#3a362b" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#b7b2a3', fontSize: 11 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="Score" dataKey="A" stroke={getHealthColor(selectedAccount.health)} fill={getHealthColor(selectedAccount.health)} fillOpacity={0.4} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Metrics Grids */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#221f18] p-4 rounded-xl border border-[#3a362b]">
                  <h5 className="text-xs font-semibold text-[#8a7f5a] uppercase tracking-wider mb-3 flex items-center">
                    <Users className="h-3.5 w-3.5 mr-1.5" /> Adopción
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Usuarios Activos (7/30d)</div>
                      <div className="text-sm font-medium">{selectedAccount.details.usuariosActivos}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Canales Conectados</div>
                      <div className="text-sm font-medium">{selectedAccount.details.canales}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Leads en Sistema vs Fuera</div>
                      <div className="text-sm font-medium">{selectedAccount.details.leadsRentaflow} gestionados in-app</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#221f18] p-4 rounded-xl border border-[#3a362b]">
                  <h5 className="text-xs font-semibold text-[#8a7f5a] uppercase tracking-wider mb-3 flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1.5" /> Rendimiento
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">T. Medio 1ª Respuesta</div>
                      <div className="text-sm font-medium">{selectedAccount.details.tiempoRespuesta}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Conversión Agregada (Lead a Cierre)</div>
                      <div className="text-sm font-medium">{selectedAccount.details.conversion}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#221f18] p-4 rounded-xl border border-[#3a362b]">
                  <h5 className="text-xs font-semibold text-[#8a7f5a] uppercase tracking-wider mb-3 flex items-center">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1.5" /> Estabilidad
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Incidencias</div>
                      <div className="text-sm font-medium">{selectedAccount.details.incidencias}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#221f18] p-4 rounded-xl border border-[#c85a5a]/30">
                  <h5 className="text-xs font-semibold text-[#c85a5a] uppercase tracking-wider mb-3 flex items-center">
                    <ShieldAlert className="h-3.5 w-3.5 mr-1.5" /> Riesgo / Compliance
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#b7b2a3] mb-1">Alertas Detectadas</div>
                      <div className="text-sm font-medium text-[#c85a5a]">{selectedAccount.details.riesgos}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex gap-3 pt-4 border-t border-[#3a362b]">
                <button className="flex-1 bg-[#6b7b45] hover:bg-[#6b7b45]/90 text-[#191812] font-medium py-2 px-4 rounded-md transition-colors">
                  Contactar CSM
                </button>
                <button className="flex-1 bg-transparent hover:bg-[#221f18] border border-[#3a362b] text-[#f1efe7] font-medium py-2 px-4 rounded-md transition-colors">
                  Ver Historial
                </button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
