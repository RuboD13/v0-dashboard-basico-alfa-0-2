"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, 
  ComposedChart, Line
} from "recharts"
import { 
  Filter, Clock, AlertCircle, X, BookOpen, BarChart3, PieChart, Info, MousePointerClick, TrendingDown
} from "lucide-react"

const funnelData = [
  { step: "Lead Recibido", count: 14231, drop: 0 },
  { step: "Doc. Solicitada", count: 13946, drop: 2 },
  { step: "Doc. Completa", count: 6403, drop: 54 },
  { step: "Filtro Pasado", count: 4269, drop: 33 },
  { step: "Visita Propuesta", count: 2800, drop: 34 },
  { step: "Visita Confirmada", count: 1707, drop: 39 },
  { step: "Candidato Select.", count: 850, drop: 50 },
  { step: "Cierre", count: 426, drop: 50 },
]

export default function OperacionPage() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Funnel Operativo Real</h2>
          <p className="text-[#b7b2a3] mt-1">Análisis de conversión end-to-end, tiempos y cuellos de botella.</p>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Tarjeta 1: Conversión Global */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'conversion' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'conversion' ? null : 'conversion')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Conversión Lead a Cierre
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Win Rate Global</p>
                    <p className="text-xs text-[#b7b2a3]">Porcentaje total de leads captados que terminan firmando un contrato de alquiler. Mide la eficiencia general del funnel.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Filter className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">3.0%</div>
              <div className="flex items-center text-xs mt-1 text-[#b7b2a3]">
                <span className="text-[#6b7b45] font-medium mr-1">426 cierres</span> de 14,231 leads
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta 2: Tiempos Medios */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'tiempos' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'tiempos' ? null : 'tiempos')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Tiempo Medio (Lead → Cierre)
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Velocidad del Ciclo</p>
                    <p className="text-xs text-[#b7b2a3]">Días transcurridos en promedio desde que entra el lead por un portal hasta que se firma el contrato.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Clock className="h-4 w-4 text-[#8a7f5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">14.5 días</div>
              <div className="flex items-center text-xs mt-1 text-[#b4533f]">
                <TrendingDown className="h-3 w-3 mr-1" /> Cuello de botella: Doc. Completa (6d)
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta 3: Intervención Manual */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'manual' ? 'ring-2 ring-[#b47b4a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#b47b4a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'manual' ? null : 'manual')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Intervención Manual
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Tasa de fricción</p>
                    <p className="text-xs text-[#b7b2a3]">Porcentaje de operaciones que requirieron acción manual de un agente (ej. llamar por falta de documentos o negociar aval).</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <MousePointerClick className="h-4 w-4 text-[#b47b4a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">28%</div>
              <div className="flex items-center text-xs mt-1 text-[#b7b2a3]">
                Mayor fricción: <span className="text-[#f1efe7] ml-1">Filtro Fallido</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Ampliados */}
        {expandedKpi === 'conversion' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Conversión del Funnel
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Desglose de cada etapa, caídas y análisis de rendimiento.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Visualización del Funnel Operativo
                </h4>
                <div className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#2f2b20" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="step" type="category" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} width={100} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                        cursor={{fill: '#221f18'}}
                      />
                      <Bar dataKey="count" fill="#6b7b45" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                    <p><strong>Identifica el Abismo:</strong> La mayor caída ocurre entre <span className="text-[#f1efe7]">Doc. Solicitada</span> y <span className="text-[#f1efe7]">Doc. Completa</span> (54% de pérdida). Esto indica que el proceso de subida de nóminas es demasiado tedioso o el lead pierde interés.</p>
                    <p><strong>Calidad vs Cantidad:</strong> De los que completan la documentación, el <span className="text-[#f1efe7]">66% pasa el filtro</span> de solvencia. Esto sugiere que los portales traen un volumen alto de leads basura que consumen recursos si no se automatizan.</p>
                    <p><strong>Acción Recomendada:</strong> Implementar recordatorios automáticos por WhatsApp a las 24h y 48h de solicitar la documentación para recuperar un 10-15% de los leads perdidos en esa etapa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'tiempos' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Tiempos Medios
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Duración por etapa, percentiles y atascos operativos.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <Clock className="mr-2 h-4 w-4" /> Tiempo por Etapa (Mediana)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Lead → Primer Mensaje</span>
                    <span className="font-bold text-[#6b7b45]">5 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Petición → Doc. Completa</span>
                    <span className="font-bold text-[#b4533f]">6.2 días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Filtro → Visita Confirmada</span>
                    <span className="font-bold text-[#f1efe7]">2.5 días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3]">Visita → Cierre</span>
                    <span className="font-bold text-[#f1efe7]">4.1 días</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" /> Análisis de Percentiles (P90)
                </h4>
                <div className="space-y-3 text-sm">
                  <p className="text-[#b7b2a3] text-xs">El 10% de las operaciones más lentas tardan:</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Lead → Primer Mensaje</span>
                    <span className="text-[#b4533f]">14 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Petición → Doc. Completa</span>
                    <span className="text-[#b4533f]">18 días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Tiempo Total al Cierre</span>
                    <span className="text-[#b4533f]">42 días</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Cuidado con los Promedios:</strong> La mediana es de 14.5 días, pero el Percentil 90 muestra que hay cierres que se alargan más de un mes. Esto retiene inventario bloqueado.</p>
                  <p><strong>El Cuello de Botella:</strong> Los 6.2 días esperando documentación es el punto crítico. Si un lead tarda más de 3 días en subir papeles, la probabilidad de cierre cae un 60%. Se debe descartar antes a los inactivos.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'manual' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#b47b4a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <MousePointerClick className="mr-2 h-5 w-5 text-[#b47b4a]" /> Análisis Profundo: Intervención Manual
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Dónde la automatización falla y los agentes tienen que tomar el control.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" /> Motivos de Intervención
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Petición de Avalista</span>
                    <span className="text-[#f1efe7]">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Documento Ilegible (OCR)</span>
                    <span className="text-[#f1efe7]">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Reprogramación de Visita</span>
                    <span className="text-[#f1efe7]">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Dudas Legales / Contrato</span>
                    <span className="text-[#f1efe7]">10%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Intervención por Canal
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Llamada Telefónica</span>
                    <span className="text-[#b4533f]">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">WhatsApp Manual</span>
                    <span className="text-[#8a7f5a]">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Email Personalizado</span>
                    <span className="text-[#f1efe7]">5%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Carga Operativa Oculta:</strong> Aunque la tasa general es del 28%, el 65% de esas intervenciones acaban en llamadas telefónicas (alto coste en tiempo). </p>
                  <p><strong>El problema del OCR:</strong> Un 25% de las intervenciones son por fallos al leer DNI o nóminas. Mejorar el motor de IA para pedir automáticamente fotos más claras ahorraría unas 40 horas/mes por agencia.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </TooltipProvider>
    </div>
  )
}
