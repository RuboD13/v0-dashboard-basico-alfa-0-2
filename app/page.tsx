"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, 
  AreaChart, Area, ComposedChart, Line
} from "recharts"
import { 
  TrendingUp, Users, AlertTriangle, ShieldAlert, 
  ArrowUpRight, ArrowDownRight, Clock, Target, 
  Briefcase, Activity, CheckCircle2, Info, X, BookOpen, BarChart3, PieChart, Zap
} from "lucide-react"

const funnelData = [
  { step: "Leads", count: 12500 },
  { step: "Válidos", count: 6200 },
  { step: "Visitas", count: 2800 },
  { step: "Asistidas", count: 2100 },
  { step: "Selección", count: 650 },
  { step: "Cierres", count: 480 },
]

const mrrData = [
  { month: "Oct", mrr: 42000, churn: 1200 },
  { month: "Nov", mrr: 46000, churn: 1500 },
  { month: "Dic", mrr: 51000, churn: 900 },
  { month: "Ene", mrr: 58000, churn: 1100 },
  { month: "Feb", mrr: 64000, churn: 800 },
  { month: "Mar", mrr: 72500, churn: 1400 },
]

export default function CEOFoundersDashboard() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Vista CEO / Founders</h2>
          <p className="text-[#b7b2a3] mt-1">¿El negocio está sano y mejorando?</p>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider delayDuration={300}>
            <UITooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="bg-[#6b7b45]/10 text-[#6b7b45] border-[#6b7b45]/30 px-3 py-1 cursor-help">
                  <Activity className="mr-2 h-4 w-4" /> NRR: 114% (Saludable)
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs" side="left">
                <p className="font-bold mb-1">Net Revenue Retention</p>
                <p className="text-xs text-[#b7b2a3]">Porcentaje de ingresos retenidos de clientes existentes tras sumar las expansiones (upgrades) y restar las contracciones y cancelaciones (churn). &gt;100% indica crecimiento saludable sin contar nuevas ventas.</p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Top KPIs - Financieros y Crecimiento */}
      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'mrr' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'mrr' ? null : 'mrr')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                MRR / ARR
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Monthly/Annual Recurring Revenue</p>
                    <p className="text-xs text-[#b7b2a3]">Ingresos recurrentes mensuales y anuales proyectados. Se calcula sumando el valor mensual de todas las suscripciones activas (planes + add-ons recurrentes).</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€72.5k <span className="text-sm font-normal text-[#b7b2a3]">/ €870k</span></div>
              <div className="flex items-center text-xs mt-1 text-[#6b7b45]">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +13% vs mes anterior
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'clientes' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'clientes' ? null : 'clientes')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Clientes Activos
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Cuentas (Agencias) Activas</p>
                    <p className="text-xs text-[#b7b2a3]">Número total de agencias inmobiliarias con un plan de pago vigente. El crecimiento neto es: (Nuevas altas + Reactivaciones) - Churn.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Users className="h-4 w-4 text-[#8a7f5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">284</div>
              <div className="flex items-center text-xs mt-1 text-[#b7b2a3]">
                <span className="text-[#6b7b45] font-medium mr-1">+22 nuevos</span> | 4 churn
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'expansion' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'expansion' ? null : 'expansion')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Expansión (Upgrades)
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Expansion Revenue</p>
                    <p className="text-xs text-[#b7b2a3]">Ingresos adicionales generados este mes por clientes existentes que suben de plan (Upgrade), añaden más usuarios, o contratan módulos adicionales.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Briefcase className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€4,250</div>
              <p className="text-xs text-[#b7b2a3] mt-1">Add-ons y ampliaciones este mes</p>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'churn' ? 'ring-2 ring-[#b4533f] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#b4533f]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'churn' ? null : 'churn')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Churn Revenue
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Ingresos Perdidos</p>
                    <p className="text-xs text-[#b7b2a3]">MRR perdido este mes por clientes que cancelan su suscripción (Logo Churn) o bajan a un plan inferior (Downgrade).</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-[#b4533f]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€1,400</div>
              <div className="flex items-center text-xs mt-1 text-[#b4533f]">
                <ArrowDownRight className="h-3 w-3 mr-1" /> 1.9% Logo Churn
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Paneles de Detalle Ampliado */}
        {expandedKpi === 'mrr' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: MRR / ARR
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Desglose de ingresos recurrentes, métricas relacionadas y guía de interpretación.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Métricas Relacionadas
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      ARPU
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Average Revenue Per User (Agencia).</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">€255 <span className="text-xs font-normal text-[#b7b2a3]">/mes</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      LTV Estimado
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Life Time Value: Ingreso total esperado por cliente antes de irse.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">€12,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Growth Rate (MoM)
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Crecimiento porcentual mensual del MRR.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#6b7b45]">+13.2%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Composición del MRR
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#4d4a3b] mr-2"></div> MRR Base Retenido</span>
                    <span className="text-[#f1efe7]">€64.5k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#6b7b45] mr-2"></div> Nuevo MRR</span>
                    <span className="text-[#6b7b45]">+€5.6k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#8a7f5a] mr-2"></div> Expansión</span>
                    <span className="text-[#8a7f5a]">+€4.2k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#b4533f] mr-2"></div> Contracción/Churn</span>
                    <span className="text-[#b4533f]">-€1.8k</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Salud del Crecimiento:</strong> Un crecimiento MoM &gt; 10% indica tracción sólida.</p>
                  <p><strong>Dependencia:</strong> Si el <span className="text-[#f1efe7]">ARPU</span> se estanca pero el MRR crece, dependes 100% de adquisición. Promueve el <em>cross-selling</em>.</p>
                  <p><strong>Rentabilidad:</strong> Compara el LTV con tu Coste de Adquisición (CAC). La regla de oro en SaaS es mantener un ratio <strong>LTV:CAC &gt; 3</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'clientes' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Users className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Clientes Activos
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Uso de la plataforma, retención y distribución por planes.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <Activity className="mr-2 h-4 w-4" /> Métricas de Uso
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      DAU / MAU
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Usuarios Activos Diarios vs Mensuales. Mide el engagement.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">68% <span className="text-xs font-normal text-[#6b7b45]">(Alto)</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Time to Value
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Días promedio hasta que la agencia cierra su primer contrato en la plataforma.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">14 días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Ratio Altas/Bajas
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Por cada cliente que se da de baja, cuántos entran nuevos.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#6b7b45]">5.5 a 1</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Distribución por Planes
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#4d4a3b] mr-2"></div> Starter</span>
                    <span className="text-[#f1efe7]">142 <span className="text-xs text-[#b7b2a3]">(50%)</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#8a7f5a] mr-2"></div> Pro</span>
                    <span className="text-[#f1efe7]">98 <span className="text-xs text-[#b7b2a3]">(35%)</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3] flex items-center"><div className="w-2 h-2 rounded-full bg-[#6b7b45] mr-2"></div> Premium</span>
                    <span className="text-[#f1efe7]">44 <span className="text-xs text-[#b7b2a3]">(15%)</span></span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Riesgo de Abandono:</strong> Si el <em>DAU/MAU</em> cae por debajo del 40%, es una alerta temprana de que el producto no se usa a diario y el cliente podría darse de baja.</p>
                  <p><strong>Retención:</strong> Vigila muy de cerca el <em>Time to Value</em>. Cuanto menos tiempo tarden en ver resultados reales (cierres), más probable es que renueven anualmente.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'expansion' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Expansión
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Análisis de Upgrades, Add-ons y crecimiento de cuentas existentes.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <Zap className="mr-2 h-4 w-4" /> Adopción
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Expansion MRR %
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Qué porcentaje del MRR total viene de expansiones este mes.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">5.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Upgrade Conv. Rate
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Tasa de conversión de cuentas Starter a Pro/Premium.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Adopción Módulo IA
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Porcentaje de clientes activos usando el add-on de IA.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#6b7b45]">34%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Fuentes de Expansión
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Upgrade a Plan Pro</span>
                    <span className="text-[#6b7b45]">+€2.1k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Licencias de Agentes Extra</span>
                    <span className="text-[#6b7b45]">+€1.2k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Add-on Módulo IA</span>
                    <span className="text-[#6b7b45]">+€950</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>El Santo Grial:</strong> La expansión debe compensar el Churn. Si el <em>Expansion MRR</em> supera al <em>Churn MRR</em>, tienes <strong>Net Negative Churn</strong> (tu NRR será &gt; 100%), lo que significa que el negocio crece aunque no vendas a nadie nuevo.</p>
                  <p><strong>Sticky Features:</strong> La venta de &quot;Agentes Extra&quot; indica que tu herramienta se vuelve central para toda la operativa de la agencia, haciendo que cancelar sea mucho más difícil.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'churn' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#b4533f] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-[#b4533f]" /> Análisis Profundo: Churn
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Análisis de pérdida de clientes, ingresos y motivos de baja.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" /> Métricas de Pérdida
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Logo Churn Rate
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Porcentaje de clientes (agencias) que cancelan.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#f1efe7]">1.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Gross MRR Churn
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Porcentaje de dinero perdido por cancelaciones y downgrades.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#b4533f]">2.4% <span className="text-xs font-normal text-[#b7b2a3]">(Alerta)</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#b7b2a3] flex items-center">
                      Recovery (Win-backs)
                      <UITooltip>
                        <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                        <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Clientes cancelados que logramos recuperar.</p></TooltipContent>
                      </UITooltip>
                    </span>
                    <span className="font-bold text-[#6b7b45]">15%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Motivos de Baja (Exit Surveys)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Precio / Presupuesto</span>
                    <span className="text-[#f1efe7]">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Bad Fit (Inmo Tradicional)</span>
                    <span className="text-[#f1efe7]">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Falta de Funcionalidad</span>
                    <span className="text-[#f1efe7]">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Cierre de la Agencia</span>
                    <span className="text-[#f1efe7]">10%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Alerta Roja:</strong> El <em>Gross MRR Churn</em> (2.4%) es mayor que el <em>Logo Churn</em> (1.9%). Esto significa que estás perdiendo clientes grandes (planes caros) más rápido que clientes pequeños.</p>
                  <p><strong>Ajuste de Marketing:</strong> El 35% de las bajas son por <em>Bad Fit</em>. El equipo de ventas debe dejar de captar &quot;Inmobiliarias Tradicionales&quot; que no tienen capacidad de usar herramientas digitales avanzadas.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Riesgos y Tiempos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <Card 
          className={`bg-card border-border cursor-pointer transition-all duration-300 ${expandedKpi === 'time' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
          onClick={() => setExpandedKpi(expandedKpi === 'time' ? null : 'time')}
        >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                <Clock className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Time to &quot;First Value&quot;
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Tiempo de Onboarding</p>
                    <p className="text-xs text-[#b7b2a3]">Media de tiempo que tarda una nueva agencia desde que activa su cuenta hasta que consigue hitos clave en la plataforma. Menos tiempo = Menos riesgo de churn temprano.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
            </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#b7b2a3]">1er Lead:</span>
                <span className="font-bold text-[#f1efe7]">4 horas</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#b7b2a3]">1ra Visita:</span>
                <span className="font-bold text-[#f1efe7]">2.5 días</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#b7b2a3]">1er Cierre:</span>
                <span className="font-bold text-[#f1efe7]">14 días</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`bg-card border-border cursor-pointer transition-all duration-300 ${expandedKpi === 'riesgo' ? 'ring-2 ring-[#b4533f] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#b4533f]/50'}`}
          onClick={() => setExpandedKpi(expandedKpi === 'riesgo' ? null : 'riesgo')}
        >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                <ShieldAlert className="mr-2 h-4 w-4 text-[#b4533f]" /> Cuentas en Riesgo
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Alertas de Salud (Health Score)</p>
                    <ul className="text-xs text-[#b7b2a3] list-disc pl-4 mt-1 space-y-1">
                      <li><strong>Churn:</strong> Uso bajo o impagos recientes.</li>
                      <li><strong>Operativo:</strong> Cuellos de botella o mal uso de la herramienta.</li>
                      <li><strong>Abuso:</strong> Compartición de contraseñas o scraping.</li>
                    </ul>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
            </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#b7b2a3]">Riesgo Churn:</span>
                <Badge variant="outline" className="bg-[#b4533f]/10 text-[#b4533f] border-[#b4533f]/30">8% (22 ct)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#b7b2a3]">Riesgo Operativo:</span>
                <Badge variant="outline" className="bg-[#8a7f5a]/10 text-[#8a7f5a] border-[#8a7f5a]/30">12% (34 ct)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#b7b2a3]">Posible Abuso:</span>
                <Badge variant="outline" className="bg-[#b47b4a]/10 text-[#b47b4a] border-[#b47b4a]/30">3% (8 ct)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`bg-card border-border lg:col-span-2 cursor-pointer transition-all duration-300 ${expandedKpi === 'evolucion' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
          onClick={() => setExpandedKpi(expandedKpi === 'evolucion' ? null : 'evolucion')}
        >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Evolución MRR vs Churn (6 meses)
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Tendencia de Ingresos</p>
                    <p className="text-xs text-[#b7b2a3]">Comparativa histórica. El área verde representa el MRR total, y la línea roja el valor económico perdido por churn. El objetivo es maximizar la separación entre ambas.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
            </CardHeader>
          <CardContent className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={mrrData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                <XAxis dataKey="month" hide />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                  itemStyle={{ color: '#f1efe7' }}
                />
                <Area type="monotone" dataKey="mrr" fill="#6b7b45" stroke="#6b7b45" fillOpacity={0.2} strokeWidth={2} />
                <Line type="monotone" dataKey="churn" stroke="#b4533f" strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Paneles de Detalle Ampliado (Riesgos y Tiempos) */}
      {expandedKpi === 'time' && (
        <div className="mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                <Clock className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Time to First Value
              </h3>
              <p className="text-sm text-[#b7b2a3] mt-1">Velocidad de adopción, cuellos de botella en el onboarding y eficiencia de uso inicial.</p>
            </div>
            <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Activity className="mr-2 h-4 w-4" /> Velocidad de Onboarding
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Activación de Cuenta
                    <UITooltip>
                      <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                      <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Tiempo medio en completar el setup inicial.</p></TooltipContent>
                    </UITooltip>
                  </span>
                  <span className="font-bold text-[#f1efe7]">1.2 días</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Subida 1er Inmueble
                  </span>
                  <span className="font-bold text-[#f1efe7]">2.5 días</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Tasa de Abandono
                    <UITooltip>
                      <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                      <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Usuarios que no completan el onboarding.</p></TooltipContent>
                    </UITooltip>
                  </span>
                  <span className="font-bold text-[#b4533f]">18% <span className="text-xs font-normal text-[#b7b2a3]">(Mejorable)</span></span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Target className="mr-2 h-4 w-4" /> Eficiencia del Funnel
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Lead a Visita</span>
                  <span className="text-[#f1efe7]">2.3 días</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Visita a Cierre</span>
                  <span className="text-[#f1efe7]">11.5 días</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Desviación vs Top 10%</span>
                  <span className="text-[#b4533f]">+45% tiempo</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
              <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
              </h4>
              <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                <p><strong>El Momento ¡Ajá!:</strong> El <em>Time to First Value</em> es el predictor #1 de retención a largo plazo. Si logran un cierre rápido, confían en el sistema.</p>
                <p><strong>Cuello de Botella:</strong> La subida del primer inmueble tarda 2.5 días. ¿Es complejo el formulario? ¿Falta una importación automática (XML)? Simplificar este paso reduce la fricción inicial.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedKpi === 'riesgo' && (
        <div className="mt-4 p-6 bg-[#191812] border border-[#b4533f] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                <ShieldAlert className="mr-2 h-5 w-5 text-[#b4533f]" /> Análisis Profundo: Cuentas en Riesgo
              </h3>
              <p className="text-sm text-[#b7b2a3] mt-1">Desglose de alertas, impacto económico (MRR en riesgo) y estado de salud de la cartera.</p>
            </div>
            <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4" /> Impacto Económico
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    MRR en Riesgo Alto
                    <UITooltip>
                      <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                      <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">Suma del MRR de las 22 cuentas con riesgo de Churn.</p></TooltipContent>
                    </UITooltip>
                  </span>
                  <span className="font-bold text-[#b4533f]">€4,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Cuentas Clave (&gt;€500/m)
                  </span>
                  <span className="font-bold text-[#f1efe7]">4 cuentas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Tickets Soporte Activos
                  </span>
                  <span className="font-bold text-[#b47b4a]">17 tickets</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <PieChart className="mr-2 h-4 w-4" /> Distribución del Riesgo Operativo
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Baja adopción de features</span>
                  <span className="text-[#f1efe7]">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Caída en logins (&gt;30%)</span>
                  <span className="text-[#f1efe7]">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Problemas integración</span>
                  <span className="text-[#f1efe7]">25%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
              <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
              </h4>
              <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                <p><strong>Priorización:</strong> No todas las cuentas en riesgo son iguales. El equipo de <em>Customer Success</em> debe enfocarse primero en las 4 Cuentas Clave que representan gran parte del MRR en riesgo.</p>
                <p><strong>Riesgo vs Realidad:</strong> Un 8% de cuentas en riesgo es normal, pero si ese 8% representa el 15% del MRR (clientes grandes), el impacto financiero será desproporcionado.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedKpi === 'evolucion' && (
        <div className="mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Evolución MRR vs Churn
              </h3>
              <p className="text-sm text-[#b7b2a3] mt-1">Tendencias históricas, ratio de eficiencia y proyecciones a corto plazo.</p>
            </div>
            <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <BarChart3 className="mr-2 h-4 w-4" /> Tendencias (Últimos 6 meses)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Crecimiento Promedio
                  </span>
                  <span className="font-bold text-[#6b7b45]">+11.5% /mes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Churn Promedio
                  </span>
                  <span className="font-bold text-[#b4533f]">€1,150 /mes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Quick Ratio
                    <UITooltip>
                      <TooltipTrigger asChild><Info className="h-3.5 w-3.5 ml-1.5 text-[#4d4a3b] cursor-help" /></TooltipTrigger>
                      <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7]"><p className="text-xs">(Nuevo MRR + Expansión) / (Churn + Contracción). &gt;4 es excelente.</p></TooltipContent>
                    </UITooltip>
                  </span>
                  <span className="font-bold text-[#6b7b45]">5.4 <span className="text-xs font-normal text-[#b7b2a3]">(Sano)</span></span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Activity className="mr-2 h-4 w-4" /> Proyección (Próximo Trimestre)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">MRR Estimado (Jun)</span>
                  <span className="text-[#f1efe7]">€95k - €105k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">ARR Run Rate</span>
                  <span className="text-[#f1efe7]">€1.14M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Meta de Churn</span>
                  <span className="text-[#b4533f]">&lt; 1.5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
              <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
              </h4>
              <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                <p><strong>Separación de Líneas:</strong> Visualmente, el área verde (MRR) debe subir de forma exponencial (curva), mientras la línea roja (Churn) debe mantenerse plana o bajar. Si ambas suben en paralelo, el crecimiento es insostenible a largo plazo.</p>
                <p><strong>Quick Ratio:</strong> Con un valor de 5.4, por cada euro que pierdes, generas más de cinco euros nuevos. El negocio es muy eficiente en crecimiento.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Gráfico de Funnel */}
        <Card 
          className={`col-span-4 bg-card border-border cursor-pointer transition-all duration-300 ${expandedKpi === 'funnel' ? 'ring-2 ring-[#6b7b45] transform scale-[1.01] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
          onClick={() => setExpandedKpi(expandedKpi === 'funnel' ? null : 'funnel')}
        >
            <CardHeader>
              <CardTitle className="text-[#f1efe7] flex items-center">
                Conversión Agregada del Funnel
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Rendimiento Operativo</p>
                    <p className="text-xs text-[#b7b2a3]">Volumen acumulado de prospectos en cada etapa del proceso de alquiler. Ayuda a identificar cuellos de botella (ej. gran caída entre &apos;Visitas&apos; y &apos;Asistidas&apos;).</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <CardDescription className="text-[#b7b2a3]">
                Rendimiento global del sistema (Leads hasta Cierres)
              </CardDescription>
            </CardHeader>
          <CardContent className="pl-2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#2f2b20" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 12}} />
                <YAxis dataKey="step" type="category" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 12}} />
                <RechartsTooltip 
                  cursor={{fill: '#2f2b20'}}
                  contentStyle={{ borderRadius: '4px', border: '1px solid #3a362b', backgroundColor: '#191812', color: '#f1efe7' }}
                />
                <Bar dataKey="count" name="Volumen" fill="#6b7b45" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Insights Estratégicos */}
        <Card 
          className={`col-span-3 bg-card border-border cursor-pointer transition-all duration-300 ${expandedKpi === 'insights' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.01] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
          onClick={() => setExpandedKpi(expandedKpi === 'insights' ? null : 'insights')}
        >
          <CardHeader>
            <CardTitle className="text-[#f1efe7] flex items-center">
              <Target className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Insights Estratégicos
              <UITooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 ml-2 text-[#8a7f5a] cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                  <p className="font-bold mb-1">Acciones Recomendadas</p>
                  <p className="text-xs text-[#b7b2a3]">Conclusiones extraídas automáticamente cruzando datos de uso del producto, pagos e interacciones. Señala oportunidades de venta y áreas de mejora en el servicio.</p>
                </TooltipContent>
              </UITooltip>
            </CardTitle>
            <CardDescription className="text-[#b7b2a3]">
              Resumen ejecutivo por segmentos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="space-y-1 border-l-2 border-[#6b7b45] pl-4">
                <p className="text-sm font-medium text-[#f1efe7]">Mejor Segmento (Conversión & Uso)</p>
                <p className="text-xs text-[#b7b2a3]">
                  Las <span className="text-[#8a7f5a] font-bold">Agencias Boutique/Premium</span> tienen la mejor tasa de cierre (4.8%) y el mayor margen estimado (78%).
                </p>
              </div>
              <div className="space-y-1 border-l-2 border-[#b4533f] pl-4">
                <p className="text-sm font-medium text-[#f1efe7]">Mayor Consumo de Soporte</p>
                <p className="text-xs text-[#b7b2a3]">
                  Las <span className="text-[#b47b4a] font-bold">Redes de Franquicia</span> generan el 65% de los tickets por integraciones complejas.
                </p>
              </div>
              <div className="space-y-1 border-l-2 border-[#8a8f6a] pl-4">
                <p className="text-sm font-medium text-[#f1efe7]">Oportunidades de Upgrade</p>
                <p className="text-xs text-[#b7b2a3]">
                  Identificadas 14 cuentas en plan &quot;Starter&quot; superando el 90% de sus límites. Empujar a plan &quot;Pro&quot;.
                </p>
              </div>
              <div className="space-y-1 border-l-2 border-[#4d4a3b] pl-4">
                <p className="text-sm font-medium text-[#f1efe7]">Desajuste (Bad Fit)</p>
                <p className="text-xs text-[#b7b2a3]">
                  Inmobiliarias tradicionales 100% offline tienen un 80% de riesgo de churn en los primeros 3 meses por falta de digitalización base.
                </p>
              </div>
            </div>
          </CardContent>
        </Card></div>

      {/* Paneles de Detalle Ampliado (Funnel e Insights) */}
      {expandedKpi === 'funnel' && (
        <div className="mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Conversión del Funnel
              </h3>
              <p className="text-sm text-[#b7b2a3] mt-1">Análisis de tasas de conversión entre etapas, cuellos de botella y rendimiento comparativo.</p>
            </div>
            <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Target className="mr-2 h-4 w-4" /> Tasas de Conversión
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Lead a Válido
                  </span>
                  <span className="font-bold text-[#f1efe7]">49.6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Visita a Asistida
                  </span>
                  <span className="font-bold text-[#b4533f]">75.0% <span className="text-xs font-normal text-[#b7b2a3]">(Caída)</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#b7b2a3] flex items-center">
                    Selección a Cierre
                  </span>
                  <span className="font-bold text-[#6b7b45]">73.8%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4" /> Cuellos de Botella
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Mayor fuga absoluta:</span>
                  <span className="text-[#f1efe7]">Lead → Válido</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Mayor fuga relativa:</span>
                  <span className="text-[#f1efe7]">Asistida → Selección</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#b7b2a3]">Impacto estimado:</span>
                  <span className="text-[#b4533f]">-210 cierres/mes</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
              <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
              </h4>
              <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                <p><strong>Caída Asistida-Selección:</strong> La conversión cae drásticamente aquí. Significa que llevamos gente a ver el piso pero no les gusta o no cumplen los requisitos finales. Hay que mejorar el filtrado previo (Lead a Válido).</p>
                <p><strong>Eficiencia Global:</strong> La tasa de conversión total (Leads a Cierres) es del 3.8%. Mejorar un 1% absoluto en la fase de 'Válidos' aumentaría los cierres en un 15%.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedKpi === 'insights' && (
        <div className="mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                <Target className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Insights Estratégicos
              </h3>
              <p className="text-sm text-[#b7b2a3] mt-1">Planes de acción recomendados basados en la inteligencia de datos del dashboard.</p>
            </div>
            <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Zap className="mr-2 h-4 w-4" /> Acciones Inmediatas (Sales & CS)
              </h4>
              <div className="space-y-4 text-sm">
                <div className="bg-[#221f18] p-3 rounded border border-[#3a362b]">
                  <p className="font-bold text-[#f1efe7] mb-1">Campaña de Up-sell a Pro</p>
                  <p className="text-[#b7b2a3] text-xs">Atacar a las 14 cuentas Starter al límite. <strong>Impacto estimado: +€1,200 MRR.</strong> Asignado a: Equipo Account Management.</p>
                </div>
                <div className="bg-[#221f18] p-3 rounded border border-[#b4533f]/30">
                  <p className="font-bold text-[#f1efe7] mb-1">Intervención de Franquicias</p>
                  <p className="text-[#b7b2a3] text-xs">Crear un equipo de soporte especializado ('Tiger Team') para resolver las integraciones complejas que saturan el soporte. Reducirá tickets un 30%.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                <Briefcase className="mr-2 h-4 w-4" /> Estrategia a Medio Plazo (Producto & Marketing)
              </h4>
              <div className="space-y-4 text-sm">
                <div className="bg-[#221f18] p-3 rounded border border-[#3a362b]">
                  <p className="font-bold text-[#f1efe7] mb-1">Ajuste de Ideal Customer Profile</p>
                  <p className="text-[#b7b2a3] text-xs">Marketing debe dejar de pujar por keywords genéricas que atraen "Inmobiliarias Tradicionales" (80% riesgo churn) y enfocar presupuesto en "Agencias Boutique".</p>
                </div>
                <div className="bg-[#221f18] p-3 rounded border border-[#6b7b45]/30">
                  <p className="font-bold text-[#f1efe7] mb-1">Nueva Feature de Filtrado</p>
                  <p className="text-[#b7b2a3] text-xs">Producto debe priorizar la IA de scoring de inquilinos para reducir la caída entre "Lead" y "Válido", que es el principal cuello de botella actual.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </TooltipProvider>
    </div>
  )
}
