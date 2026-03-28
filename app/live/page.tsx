"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity, Users, Radio, CheckCircle2, XCircle, Clock, Shield, Info, X, BookOpen, BarChart3, LineChart as LineChartIcon } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from "recharts"

// Mock data for initial load
const initialUsers = [
  { id: 1, name: "Laura Martínez", role: "Agencia", agency: "Inmobiliaria SolyMar", status: "active", time: "2h 15m" },
  { id: 2, name: "Carlos Ruiz", role: "Agencia", agency: "Fincas Barcelona", status: "active", time: "45m" },
  { id: 3, name: "Ana López", role: "Agencia", agency: "AlquilaYa", status: "idle", time: "5m" },
  { id: 4, name: "Admin (Tú)", role: "Staff", agency: "RentAFlow", status: "active", time: "1h 30m" },
  { id: 5, name: "Soporte N1", role: "Staff", agency: "RentAFlow", status: "active", time: "4h 10m" },
]

const initialLeads = [
  { id: "L-901", name: "María G.", origin: "Idealista", status: "clasificado", score: 85, time: "Hace 2 min" },
  { id: "L-902", name: "David S.", origin: "Fotocasa", status: "procesando", score: null, time: "Hace 5 min" },
  { id: "L-903", name: "Elena P.", origin: "Web Propia", status: "rechazado", score: 30, time: "Hace 12 min" },
  { id: "L-904", name: "Juan M.", origin: "Habitaclia", status: "clasificado", score: 92, time: "Hace 18 min" },
]

export default function LivePage() {
  const [users, setUsers] = useState(initialUsers)
  const [leads, setLeads] = useState(initialLeads)
  const [pulse, setPulse] = useState(false)
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null)

  // Trend data for charts
  const usersTrend = [
    { time: "09:00", value: 120 },
    { time: "09:15", value: 150 },
    { time: "09:30", value: 210 },
    { time: "09:45", value: 280 },
    { time: "10:00", value: 320 },
    { time: "10:15", value: 342 },
  ]

  const leadsTrend = [
    { time: "09:00", value: 45 },
    { time: "09:15", value: 80 },
    { time: "09:30", value: 110 },
    { time: "09:45", value: 95 },
    { time: "10:00", value: 130 },
    { time: "10:15", value: 142 },
  ]

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p)
      
      // Simulate a new lead occasionally
      if (Math.random() > 0.7) {
        const newLead = {
          id: `L-${Math.floor(Math.random() * 1000) + 900}`,
          name: ["Carlos T.", "Sofía L.", "Miguel A.", "Lucía F."][Math.floor(Math.random() * 4)],
          origin: ["Idealista", "Fotocasa", "Web Propia", "WhatsApp"][Math.floor(Math.random() * 4)],
          status: "procesando",
          score: null,
          time: "Justo ahora"
        }
        setLeads(prev => [newLead, ...prev].slice(0, 8))
      }

      // Simulate leads getting classified
      setLeads(prev => prev.map(lead => {
        if (lead.status === "procesando" && Math.random() > 0.5) {
          const score = Math.floor(Math.random() * 60) + 40
          return { ...lead, status: score > 50 ? "clasificado" : "rechazado", score }
        }
        return lead
      }))

    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight flex items-center">
          <Activity className="mr-3 h-8 w-8 text-[#6b7b45]" />
          Live Ops (Tiempo Real)
        </h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className={`bg-[#6b7b45]/15 text-[#c8d0b0] border-[#6b7b45]/40 transition-opacity duration-500 ${pulse ? 'opacity-100' : 'opacity-70'}`}>
            <Radio className="mr-1 h-3 w-3 animate-pulse" /> Sistema Online
          </Badge>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'usuarios' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'usuarios' ? null : 'usuarios')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                Usuarios Conectados
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Conexiones Activas</p>
                    <p className="text-xs text-[#b7b2a3]">Número de agencias y personal de staff actualmente logueados en la plataforma.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Users className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">{users.filter(u => u.role === "Agencia").length} Agencias, {users.filter(u => u.role === "Staff").length} Staff</p>
            </CardContent>
          </Card>
          
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'leads' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'leads' ? null : 'leads')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                Leads en la última hora
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Volumen de Ingesta</p>
                    <p className="text-xs text-[#b7b2a3]">Leads recibidos y procesados por el motor de IA en los últimos 60 minutos.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Activity className="h-4 w-4 text-[#8a7f5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">Procesando: {leads.filter(l => l.status === "procesando").length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Ampliados */}
        {expandedKpi === 'usuarios' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Users className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Usuarios Conectados
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Carga del sistema y distribución de actividad en tiempo real.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <Activity className="mr-2 h-4 w-4" /> Carga Actual
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Uso CPU Servidor</span>
                    <span className="font-bold text-[#6b7b45]">24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Latencia Media API</span>
                    <span className="font-bold text-[#6b7b45]">120ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Pico Usuarios (Hoy)</span>
                    <span className="font-bold text-[#f1efe7]">342</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <LineChartIcon className="mr-2 h-4 w-4" /> Evolución (Últimas horas)
                </h4>
                <div className="h-[180px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={usersTrend} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#6b7b45" strokeWidth={3} dot={{r: 4, fill: '#191812', stroke: '#6b7b45', strokeWidth: 2}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="md:col-span-1 bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Análisis de Capacidad
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Salud del Sistema:</strong> Con latencia bajo 200ms y CPU en 24%, la infraestructura está holgada. No se requiere auto-escalado.</p>
                  <p><strong>Engagement:</strong> Las agencias mantienen sesiones largas, indicando que usan la plataforma como su herramienta principal de trabajo (Hub).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'leads' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Flujo de Leads
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Velocidad de procesamiento y efectividad de la IA.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Tasa de Clasificación
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Leads Aptos</span>
                    <span className="font-bold text-[#6b7b45]">68 (48%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Leads Descartados</span>
                    <span className="font-bold text-[#b4533f]">74 (52%)</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#3a362b] pt-2">
                    <span className="text-sm text-[#b7b2a3]">Tiempo IA / Lead</span>
                    <span className="font-bold text-[#f1efe7]">1.2 seg</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <LineChartIcon className="mr-2 h-4 w-4" /> Evolución Ingesta
                </h4>
                <div className="h-[180px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={leadsTrend} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#8a7f5a" strokeWidth={3} dot={{r: 4, fill: '#191812', stroke: '#8a7f5a', strokeWidth: 2}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="md:col-span-1 bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo interpretar
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Eficiencia IA:</strong> El motor está filtrando el 52% de los leads como no aptos. Esto ahorra <strong>12h de trabajo</strong>.</p>
                  <p><strong>Picos de Demanda:</strong> El volumen actual de 142 leads/hora es normal para las 10:00 AM.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </TooltipProvider>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Panel de Usuarios */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Conexiones Activas</CardTitle>
            <CardDescription>Usuarios autenticados en este momento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${user.role === 'Staff' ? 'bg-[#6a7182]' : 'bg-[#2a271d]'}`}>
                        {user.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#191812] ${user.status === 'active' ? 'bg-[#6b7b45]' : 'bg-[#b47b4a]'}`}></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none flex items-center">
                        {user.name} 
                        {user.role === 'Staff' && <Shield className="ml-1 h-3 w-3 text-[#6a7182]" />}
                      </p>
                      <p className="text-xs text-muted-foreground">{user.agency}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {user.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Panel de Leads */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Flujo de Leads (Ingesta)</CardTitle>
            <CardDescription>Clasificación por IA en tiempo real</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between border-b pb-2 last:border-0 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center gap-3">
                    {lead.status === 'procesando' && <div className="h-8 w-8 rounded-full bg-[#6a7182]/15 flex items-center justify-center"><Activity className="h-4 w-4 text-[#6a7182] animate-spin" /></div>}
                    {lead.status === 'clasificado' && <div className="h-8 w-8 rounded-full bg-[#6b7b45]/15 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-[#6b7b45]" /></div>}
                    {lead.status === 'rechazado' && <div className="h-8 w-8 rounded-full bg-[#b4533f]/15 flex items-center justify-center"><XCircle className="h-4 w-4 text-[#b4533f]" /></div>}
                    <div>
                      <p className="text-sm font-medium leading-none">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">vía {lead.origin} • {lead.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={
                      lead.status === 'procesando' ? 'bg-[#6a7182]/15 text-[#b1b7c2]' :
                      lead.status === 'clasificado' ? 'bg-[#6b7b45]/15 text-[#c8d0b0]' :
                      'bg-[#b4533f]/15 text-[#c98f7f]'
                    }>
                      {lead.status === 'procesando' ? 'IA analizando...' : 
                       lead.status === 'clasificado' ? `Apto (Score: ${lead.score})` : 
                       `Descartado (Score: ${lead.score})`}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
