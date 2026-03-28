"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid
} from "recharts"
import { 
  Euro, TrendingUp, Users, Target, X, BookOpen, BarChart3, PieChart, Info, ArrowUpRight, ArrowDownRight, CreditCard
} from "lucide-react"

const cohortData = [
  { month: "M1", retencion: 100 },
  { month: "M3", retencion: 92 },
  { month: "M6", retencion: 85 },
  { month: "M9", retencion: 78 },
  { month: "M12", retencion: 70 },
]

export default function FinanzasPage() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Finanzas y Expansión</h2>
          <p className="text-[#b7b2a3] mt-1">Unit economics, rentabilidad por cuenta y proyecciones.</p>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'mrr' ? 'ring-2 ring-[#6b7b45] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#6b7b45]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'mrr' ? null : 'mrr')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Ingresos (MRR)
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Monthly Recurring Revenue</p>
                    <p className="text-xs text-[#b7b2a3]">Ingresos recurrentes generados este mes.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Euro className="h-4 w-4 text-[#6b7b45]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€72,500</div>
              <div className="flex items-center text-xs mt-1 text-[#6b7b45]">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +13% vs mes anterior
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'addons' ? 'ring-2 ring-[#8a7f5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#8a7f5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'addons' ? null : 'addons')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Add-ons y Extras
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Expansion Revenue</p>
                    <p className="text-xs text-[#b7b2a3]">Facturación por leads extra, usuarios adicionales y uso de IA fuera de plan.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <CreditCard className="h-4 w-4 text-[#8a7f5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€4,250</div>
              <div className="flex items-center text-xs mt-1 text-[#6b7b45]">
                <ArrowUpRight className="h-3 w-3 mr-1" /> Fuerte adopción IA
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'cac' ? 'ring-2 ring-[#b4533f] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#b4533f]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'cac' ? null : 'cac')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                CAC Estimado
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Customer Acquisition Cost</p>
                    <p className="text-xs text-[#b7b2a3]">Coste medio de ventas y marketing para conseguir una nueva agencia.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Target className="h-4 w-4 text-[#b4533f]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€480</div>
              <div className="flex items-center text-xs mt-1 text-[#b7b2a3]">
                <span className="text-[#f1efe7] font-medium mr-1">Payback:</span> 1.8 meses
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'ltv' ? 'ring-2 ring-[#d8d2c4] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#d8d2c4]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'ltv' ? null : 'ltv')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                LTV Medio
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Lifetime Value</p>
                    <p className="text-xs text-[#b7b2a3]">Beneficio bruto estimado que dejará una agencia durante toda su vida como cliente.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-[#d8d2c4]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">€12,500</div>
              <div className="flex items-center text-xs mt-1 text-[#6b7b45]">
                <span className="text-[#f1efe7] font-medium mr-1">Ratio LTV/CAC:</span> 26:1
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Ampliados */}
        {expandedKpi === 'mrr' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#6b7b45] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Euro className="mr-2 h-5 w-5 text-[#6b7b45]" /> Análisis Profundo: Unit Economics (MRR)
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Rentabilidad detallada por cuenta y márgenes operativos.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Margen por Cuenta (Promedio)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Ingreso Medio (ARPU)</span>
                    <span className="text-[#f1efe7]">€255</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Coste Servidor/IA (COGS)</span>
                    <span className="text-[#b4533f]">-€35</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Soporte Técnico</span>
                    <span className="text-[#b4533f]">-€25</span>
                  </div>
                  <div className="flex justify-between items-center font-bold border-t border-[#3a362b] pt-2">
                    <span className="text-[#8a7f5a]">Margen Bruto</span>
                    <span className="text-[#6b7b45]">€195 (76%)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Rentabilidad por Plan
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Plan Starter</span>
                    <span className="text-[#f1efe7]">68% Margen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Plan Pro</span>
                    <span className="text-[#6b7b45]">78% Margen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Plan Premium</span>
                    <span className="text-[#6b7b45]">82% Margen</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo analizar esto
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Salud del Negocio:</strong> Un margen bruto del 76% es excelente para SaaS. Significa que el modelo es altamente escalable.</p>
                  <p><strong>Cuidado con los COGS:</strong> Vigila de cerca el coste de la IA. Si los clientes de planes bajos consumen muchos tokens, el margen del Plan Starter podría volverse negativo. Implementar <em>Fair Use Limits</em> es crítico.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'addons' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#8a7f5a] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-[#8a7f5a]" /> Análisis Profundo: Expansión y Add-ons
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Desglose de compras adicionales y sobreuso de límites.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Distribución de Add-ons
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Leads Extra</span>
                    <span className="text-[#f1efe7]">€1,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Agentes Adicionales</span>
                    <span className="text-[#f1efe7]">€1,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Tokens IA (Overage)</span>
                    <span className="text-[#f1efe7]">€950</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Estrategia
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>El Overage como señal de Upgrade:</strong> Si un cliente paga "Leads Extra" durante 2 meses seguidos, el equipo de Customer Success debe llamarle para hacerle un <em>Upgrade</em> al siguiente plan. Es mejor un MRR asegurado que ingresos variables por add-ons.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'cac' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#b4533f] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Target className="mr-2 h-5 w-5 text-[#b4533f]" /> Análisis Profundo: Coste de Adquisición
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Eficiencia del equipo de ventas y marketing.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <PieChart className="mr-2 h-4 w-4" /> Desglose del CAC
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Ads / Marketing</span>
                    <span className="text-[#f1efe7]">€120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Comisiones Ventas</span>
                    <span className="text-[#f1efe7]">€250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7b2a3]">Herramientas (CRM)</span>
                    <span className="text-[#f1efe7]">€110</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 bg-[#221f18] p-4 rounded-lg border border-[#3a362b]">
                <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                  <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Cómo interpretar
                </h4>
                <div className="text-xs text-[#b7b2a3] space-y-2 leading-relaxed">
                  <p><strong>Payback Period:</strong> Con un ARPU de €255 y un CAC de €480, recuperas tu inversión en menos de 2 meses (1.8m). Esto es <strong>excepcional</strong> (la media SaaS es de 6-12 meses).</p>
                  <p><strong>Acción:</strong> Tienes margen para pisar el acelerador. Puedes permitirte gastar el doble en marketing (€960 de CAC) y aún tendrías un negocio extremadamente rentable. Es el momento de crecer agresivamente.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'ltv' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#d8d2c4] rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#d8d2c4]" /> Análisis Profundo: LTV y Cohortes
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Valor a largo plazo y retención histórica de agencias.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Retención por Cohorte (12 Meses)
                </h4>
                <div className="h-[180px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cohortData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                        cursor={{fill: '#221f18'}}
                      />
                      <Bar dataKey="retencion" fill="#d8d2c4" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Regla de Oro
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                    <p><strong>El Ratio LTV/CAC:</strong> Tienes un ratio de 26:1. Cualquier cosa por encima de 3:1 es buena; por encima de 5:1 es excelente. Tienes un motor de hacer dinero.</p>
                    <p><strong>Retención M12:</strong> El 70% de las agencias siguen pagando al año de entrar. Si mejoras el Onboarding para subir esto al 85%, el LTV se disparará a más de €18,000.</p>
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
