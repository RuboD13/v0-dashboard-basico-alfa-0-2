"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, 
  AreaChart, Area, ComposedChart, Line, LineChart
} from "recharts"
import { 
  Bot, FileText, Zap, BrainCircuit, XCircle, ArrowUpRight, ArrowDownRight,
  X, BookOpen, BarChart3, PieChart
} from "lucide-react"

const ocrData = [
  { month: "Oct", precision: 92.1 },
  { month: "Nov", precision: 93.5 },
  { month: "Dic", precision: 94.2 },
  { month: "Ene", precision: 95.0 },
  { month: "Feb", precision: 95.6 },
  { month: "Mar", precision: 96.8 },
]

export default function ProductoIAPage() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Producto e IA</h2>
          <p className="text-[#b7b2a3] mt-1">Rendimiento de modelos, procesamiento documental y automatización</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-[#6b7b45]/10 text-[#6b7b45] border-[#6b7b45]/30 px-3 py-1">
            Monitor de Workflows & OCR
          </Badge>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-4">
          {/* KPI 1: Workflows */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'workflows' ? 'ring-2 ring-[#d8d2c4] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#d8d2c4]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'workflows' ? null : 'workflows')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Workflows Ejecutados
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Zap className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Volumen de Automatización</p>
                    <p className="text-xs text-[#b7b2a3]">Número total de flujos automatizados (emails, scoring, validaciones) completados exitosamente en los últimos 30 días.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Zap className="h-4 w-4 text-[#d8d2c4]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">14,231</div>
              <p className="text-xs text-[#d8d2c4] mt-1">Últimos 30 días</p>
            </CardContent>
          </Card>

          {/* KPI 2: OCR */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'ocr' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'ocr' ? null : 'ocr')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Docs Procesados (OCR)
                <UITooltip>
                  <TooltipTrigger asChild>
                    <FileText className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Carga de Visión Artificial</p>
                    <p className="text-xs text-[#b7b2a3]">Cantidad de PDFs e imágenes (nóminas, DNIs, contratos) parseados por el motor de extracción de datos.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <FileText className="h-4 w-4 text-[#8a7f5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">8,543</div>
              <p className="text-xs text-[#8a7f5a] mt-1">Nóminas y DNIs</p>
            </CardContent>
          </Card>

          {/* KPI 3: Precisión */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'precision' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'precision' ? null : 'precision')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Precisión Extracción
                <UITooltip>
                  <TooltipTrigger asChild>
                    <BrainCircuit className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Confianza del Modelo (Confidence Score)</p>
                    <p className="text-xs text-[#b7b2a3]">Porcentaje de campos (nombre, salario, fecha) extraídos con un nivel de confianza superior al 95%, sin requerir validación manual.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <BrainCircuit className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#6b7b45]">96.8%</div>
              <p className="text-xs text-[#6b7b45] flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +1.2% tras último update
              </p>
            </CardContent>
          </Card>

          {/* KPI 4: Fallos */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'fallos' ? 'ring-2 ring-[#c85a5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#c85a5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'fallos' ? null : 'fallos')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Intervención Manual
                <UITooltip>
                  <TooltipTrigger asChild>
                    <XCircle className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Tasa de Excepción</p>
                    <p className="text-xs text-[#b7b2a3]">Porcentaje de documentos que el sistema no pudo procesar automáticamente y requirieron que un operador humano introdujera los datos a mano.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <XCircle className="h-4 w-4 text-[#c85a5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#c85a5a]">3.2%</div>
              <p className="text-xs text-[#c85a5a] mt-1">Principalmente DNIs borrosos</p>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Expandidos */}
        {expandedKpi === 'precision' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <BrainCircuit className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Precisión de Extracción IA
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Evolución de la eficacia del modelo de OCR y parsing semántico.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Evolución Confianza Media (6 Meses)
                </h4>
                <div className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={ocrData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} domain={[80, 100]} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                      <Line type="monotone" dataKey="precision" stroke="#6b7b45" strokeWidth={3} dot={{r: 4, fill: '#191812', stroke: '#6b7b45', strokeWidth: 2}} activeDot={{r: 6}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Contexto de IA
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                     <p><strong>El Salto Reciente:</strong> El incremento al 96.8% se debe a la integración de GPT-4o-mini como capa secundaria de validación semántica sobre el OCR tradicional.</p>
                     <p><strong>El Cuello de Botella:</strong> La extracción de la &quot;Fecha de Antigüedad&quot; en nóminas de formato antiguo sigue siendo el punto más débil (82% de confianza).</p>
                     <p className="text-[#6b7b45] font-medium border-t border-[#3a362b] pt-2">
                       PLAN: Fine-tuning de un modelo open-source específico para extraer fechas raras y reducir costes de API de OpenAI.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'fallos' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#c85a5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <XCircle className="mr-2 h-5 w-5 text-[#c85a5a]" /> Análisis Profundo: Intervención Manual
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Análisis de la fricción operativa y causas de fallo.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
               <div className="text-sm text-[#b7b2a3] space-y-4">
                  <p>De los 8,543 documentos, <strong>273</strong> requirieron intervención manual por parte de nuestro equipo de backoffice (Coste operativo estimado: ~150h).</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#f1efe7]">
                    <li><strong>45%</strong> - DNI fotografiado con flash o reflejos que ocultan el MRZ.</li>
                    <li><strong>30%</strong> - PDFs de nóminas protegidos con contraseña (bancos).</li>
                    <li><strong>15%</strong> - Documento no soportado (ej. certificado de pensiones extranjero).</li>
                    <li><strong>10%</strong> - Falsificaciones burdas que el sistema marca como &quot;Anomalía&quot; para revisión humana.</li>
                  </ul>
                  <div className="p-3 bg-[#191812] border border-[#c85a5a]/30 rounded text-[#f1efe7] font-medium">
                    Solución UX Recomendada: Implementar en el flujo del usuario (frontend) una detección en tiempo real de &quot;brillo/borrosidad&quot; al hacer la foto del DNI, obligando a repetir la toma antes de enviarla.
                  </div>
               </div>
            </div>
          </div>
        )}
        
        {/* Placeholder expandidos para otros kpis si se desea */}
        {expandedKpi === 'workflows' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#d8d2c4] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-[#d8d2c4]" /> Volumen de Automatización
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Carga del sistema de eventos.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-[#b7b2a3]">El sistema procesa actualmente ~470 workflows diarios. El SLA se mantiene en &lt;200ms por ejecución. La infraestructura está sana.</p>
          </div>
        )}
      </TooltipProvider>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#f1efe7]">Errores Frecuentes de Workflows</CardTitle>
            <CardDescription className="text-[#b7b2a3]">Top incidencias en la automatización</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#3a362b] pb-2">
                <div>
                  <p className="font-medium text-sm text-[#f1efe7]">Timeout en WhatsApp API</p>
                  <p className="text-xs text-[#b7b2a3]">El usuario no respondió en 24h</p>
                </div>
                <Badge className="bg-[#221f18] text-[#d8d2c4] border border-[#3a362b]">420 casos</Badge>
              </div>
              <div className="flex justify-between items-center border-b border-[#3a362b] pb-2">
                <div>
                  <p className="font-medium text-sm text-[#f1efe7]">Fallo lectura PDF (Contraseña)</p>
                  <p className="text-xs text-[#b7b2a3]">Nómina protegida por el banco</p>
                </div>
                <Badge className="bg-[#221f18] text-[#d8d2c4] border border-[#3a362b]">156 casos</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm text-[#f1efe7]">DNI Caducado / No Válido</p>
                  <p className="text-xs text-[#b7b2a3]">Rechazado por regla de negocio</p>
                </div>
                <Badge className="bg-[#221f18] text-[#d8d2c4] border border-[#3a362b]">89 casos</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#f1efe7]">Rendimiento por Canal</CardTitle>
            <CardDescription className="text-[#b7b2a3]">Tasa de éxito en la ingesta de leads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f1efe7]">Idealista (Email Parsing)</span>
                  <span className="font-medium text-[#6b7b45]">99.9%</span>
                </div>
                <div className="h-2 bg-[#191812] border border-[#3a362b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b7b45] rounded-full" style={{ width: '99.9%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f1efe7]">Fotocasa (API)</span>
                  <span className="font-medium text-[#6b7b45]">98.5%</span>
                </div>
                <div className="h-2 bg-[#191812] border border-[#3a362b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b7b45] rounded-full" style={{ width: '98.5%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f1efe7]">Habitaclia</span>
                  <span className="font-medium text-[#d48c3e]">92.0%</span>
                </div>
                <div className="h-2 bg-[#191812] border border-[#3a362b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#d48c3e] rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
