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
  ShieldAlert, AlertTriangle, FileWarning, Fingerprint, 
  ArrowUpRight, ArrowDownRight, Activity, X, BookOpen, BarChart3, Lock, Users, EyeOff
} from "lucide-react"

const fraudData = [
  { month: "Oct", intentos: 12, detectados: 11 },
  { month: "Nov", intentos: 18, detectados: 17 },
  { month: "Dic", intentos: 14, detectados: 14 },
  { month: "Ene", intentos: 24, detectados: 22 },
  { month: "Feb", intentos: 35, detectados: 31 },
  { month: "Mar", intentos: 42, detectados: 39 },
]

const fairUseData = [
  { category: "Llamadas API", accounts: 12 },
  { category: "Almacenamiento", accounts: 5 },
  { category: "Consultas BD", accounts: 8 },
  { category: "Procesamiento Doc", accounts: 15 },
]

export default function RiesgosPage() {
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-background text-foreground">
      <div className="flex items-center justify-between space-y-2 border-b border-border pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f1efe7]">Riesgos y Abuso</h2>
          <p className="text-[#b7b2a3] mt-1">Control de fraude, seguridad y uso de recursos del sistema</p>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider delayDuration={300}>
            <UITooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="bg-[#8b3a3a]/10 text-[#c85a5a] border-[#8b3a3a]/30 px-3 py-1 cursor-help">
                  <ShieldAlert className="mr-2 h-4 w-4" /> Nivel de Alerta: Medio-Alto
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs" side="left">
                <p className="font-bold mb-1">Índice Global de Riesgo</p>
                <p className="text-xs text-[#b7b2a3]">Agregado ponderado de intentos de fraude, anomalías de seguridad y abuso de recursos. Actualmente elevado por un pico en intentos de fraude documental.</p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
      </div>

      <TooltipProvider delayDuration={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* KPI 1: Fraude Documental */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'fraude' ? 'ring-2 ring-[#c85a5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#c85a5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'fraude' ? null : 'fraude')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Alertas de Fraude
                <UITooltip>
                  <TooltipTrigger asChild>
                    <FileWarning className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Fraude Documental Detectado</p>
                    <p className="text-xs text-[#b7b2a3]">Nóminas manipuladas, identidades falsas o documentos alterados interceptados por el motor de verificación en los últimos 30 días.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <ShieldAlert className="h-4 w-4 text-[#c85a5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">39 <span className="text-sm font-normal text-[#b7b2a3]">casos</span></div>
              <div className="flex items-center text-xs mt-1 text-[#c85a5a]">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +25% vs mes anterior
              </div>
            </CardContent>
          </Card>

          {/* KPI 2: Fair Use */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'fairuse' ? 'ring-2 ring-[#d48c3e] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#d48c3e]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'fairuse' ? null : 'fairuse')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Superando Fair Use
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Users className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Límites de Uso Razonable</p>
                    <p className="text-xs text-[#b7b2a3]">Cuentas de agencias que están consumiendo recursos (API, Storage, Procesamiento) por encima del p95 de su tier de suscripción.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Activity className="h-4 w-4 text-[#d48c3e]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">15 <span className="text-sm font-normal text-[#b7b2a3]">agencias</span></div>
              <div className="flex items-center text-xs mt-1 text-[#d48c3e]">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +3 vs mes anterior
              </div>
            </CardContent>
          </Card>

          {/* KPI 3: Accesos Sensibles */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'accesos' ? 'ring-2 ring-[#c85a5a] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#c85a5a]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'accesos' ? null : 'accesos')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Accesos Anómalos
                <UITooltip>
                  <TooltipTrigger asChild>
                    <Fingerprint className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Seguridad de Accesos</p>
                    <p className="text-xs text-[#b7b2a3]">Inicios de sesión desde IPs sospechosas, intentos fallidos múltiples o acceso a datos sensibles fuera de horario habitual.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <Lock className="h-4 w-4 text-[#c85a5a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">4 <span className="text-sm font-normal text-[#b7b2a3]">eventos</span></div>
              <div className="flex items-center text-xs mt-1 text-[#6b7b45]">
                <ArrowDownRight className="h-3 w-3 mr-1" /> -2 vs mes anterior
              </div>
            </CardContent>
          </Card>

          {/* KPI 4: Vulnerabilidades */}
          <Card 
            className={`bg-card border-border shadow-sm cursor-pointer transition-all duration-300 ${expandedKpi === 'vuln' ? 'ring-2 ring-[#d8d2c4] transform scale-[1.02] z-10' : expandedKpi ? 'opacity-40 scale-[0.98]' : 'hover:border-[#d8d2c4]/50'}`}
            onClick={() => setExpandedKpi(expandedKpi === 'vuln' ? null : 'vuln')}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#b7b2a3] flex items-center">
                Dependencias Críticas
                <UITooltip>
                  <TooltipTrigger asChild>
                    <EyeOff className="h-3.5 w-3.5 ml-2 text-[#8a7f5a] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#191812] border border-[#3a362b] text-[#f1efe7] p-3 max-w-xs">
                    <p className="font-bold mb-1">Vulnerabilidades de Código</p>
                    <p className="text-xs text-[#b7b2a3]">Librerías de terceros o componentes de infraestructura con CVEs (Common Vulnerabilities and Exposures) detectados pendientes de parchear.</p>
                  </TooltipContent>
                </UITooltip>
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-[#d8d2c4]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#f1efe7]">1 <span className="text-sm font-normal text-[#b7b2a3]">crítica</span></div>
              <div className="flex items-center text-xs mt-1 text-[#d8d2c4]">
                Requiere atención inmediata
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Paneles Expandidos */}
        {expandedKpi === 'fraude' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#c85a5a]/50 rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <FileWarning className="mr-2 h-5 w-5 text-[#c85a5a]" /> Análisis Profundo: Fraude Documental
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Evolución de intentos de fraude y eficacia del motor de detección.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Intentos vs. Detectados (6 meses)
                </h4>
                <div className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={fraudData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2b20" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                      />
                      <Bar dataKey="intentos" name="Total Intentos" fill="#3a362b" radius={[4, 4, 0, 0]} barSize={20} />
                      <Line type="monotone" dataKey="detectados" name="Bloqueados" stroke="#c85a5a" strokeWidth={2} dot={{r: 4, fill: '#191812', stroke: '#c85a5a', strokeWidth: 2}} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Evaluación de Amenaza
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                    <p><strong>Vector Principal:</strong> Las falsificaciones de nóminas mediante edición de PDFs (manipulación de metadatos) representan el 68% de los casos recientes.</p>
                    <p><strong>Tasa de Eficacia:</strong> El motor está bloqueando el <strong>92.8%</strong> de los intentos detectados. El 7.2% restante requirió revisión manual por parte de los operadores.</p>
                    <p className="text-[#c85a5a] font-medium border-t border-[#3a362b] pt-2">
                      ACCIÓN REQUERIDA: Entrenar el modelo con el nuevo dataset de nóminas falsas del último mes para reducir la intervención manual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'fairuse' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#d48c3e]/50 rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-[#d48c3e]" /> Análisis Profundo: Consumo Fair Use
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Distribución del abuso de recursos por categoría técnica.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold text-[#8a7f5a] border-b border-[#3a362b] pb-2 flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" /> Agencias excediendo límites por vector
                </h4>
                <div className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fairUseData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#2f2b20" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="category" type="category" axisLine={false} tickLine={false} tick={{fill: '#b7b2a3', fontSize: 11}} width={120} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#191812', borderColor: '#3a362b', color: '#f1efe7', fontSize: '12px' }}
                        itemStyle={{ color: '#f1efe7' }}
                        cursor={{fill: '#221f18'}}
                      />
                      <Bar dataKey="accounts" name="Agencias" fill="#d48c3e" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#221f18] p-4 rounded-lg border border-[#3a362b] h-full">
                  <h4 className="text-sm font-semibold text-[#f1efe7] flex items-center mb-3">
                    <BookOpen className="mr-2 h-4 w-4 text-[#8a7f5a]" /> Diagnóstico de Recursos
                  </h4>
                  <div className="text-xs text-[#b7b2a3] space-y-3 leading-relaxed">
                    <p><strong>Fuga Principal:</strong> El "Procesamiento de Documentos" (OCR + IA) es el recurso más abusado. Algunas agencias están subiendo lotes masivos de documentos irrelevantes.</p>
                    <p><strong>Impacto:</strong> Coste de infraestructura AWS +$450 este mes debido a colas de procesamiento saturadas.</p>
                    <p className="text-[#d48c3e] font-medium border-t border-[#3a362b] pt-2">
                      ESTRATEGIA: Aplicar rate-limiting estricto (HTTP 429) a las 5 agencias top ofensoras e iniciar protocolo de "Upsell a plan Enterprise" para tráfico intensivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedKpi === 'accesos' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#c85a5a]/50 rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <Lock className="mr-2 h-5 w-5 text-[#c85a5a]" /> Análisis Profundo: Accesos Anómalos
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Eventos de seguridad detectados en la red.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-[#221f18] border border-[#3a362b] rounded-md overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-[#8a7f5a] uppercase bg-[#191812] border-b border-[#3a362b]">
                  <tr>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Tipo de Evento</th>
                    <th className="px-6 py-3">Usuario / IP</th>
                    <th className="px-6 py-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="text-[#b7b2a3]">
                  <tr className="border-b border-[#3a362b]/50 hover:bg-[#2a271f]">
                    <td className="px-6 py-3">Hoy, 04:23 AM</td>
                    <td className="px-6 py-3"><span className="text-[#c85a5a] font-medium">Multiple Login Failures</span></td>
                    <td className="px-6 py-3">admin@agencia-z.com<br/><span className="text-xs text-[#6b7b45]">IP: 185.22.x.x (Rusia)</span></td>
                    <td className="px-6 py-3"><Badge className="bg-[#c85a5a]/20 text-[#c85a5a] border-none">IP Bloqueada</Badge></td>
                  </tr>
                  <tr className="border-b border-[#3a362b]/50 hover:bg-[#2a271f]">
                    <td className="px-6 py-3">Ayer, 23:15 PM</td>
                    <td className="px-6 py-3"><span className="text-[#d48c3e] font-medium">Acceso fuera de horario</span></td>
                    <td className="px-6 py-3">soporte@rentaflow.com<br/><span className="text-xs text-[#6b7b45]">IP: 84.12.x.x (España)</span></td>
                    <td className="px-6 py-3"><Badge className="bg-[#d48c3e]/20 text-[#d48c3e] border-none">Investigando</Badge></td>
                  </tr>
                  <tr className="hover:bg-[#2a271f]">
                    <td className="px-6 py-3">25 Mar, 10:02 AM</td>
                    <td className="px-6 py-3"><span className="text-[#c85a5a] font-medium">Extracción masiva datos</span></td>
                    <td className="px-6 py-3">api_key_77x...<br/><span className="text-xs text-[#6b7b45]">IP: Interna AWS</span></td>
                    <td className="px-6 py-3"><Badge className="bg-[#6b7b45]/20 text-[#6b7b45] border-none">Resuelto (Backup)</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {expandedKpi === 'vuln' && (
          <div className="col-span-full mt-4 p-6 bg-[#191812] border border-[#d8d2c4]/50 rounded-xl shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
             <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#f1efe7] flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-[#d8d2c4]" /> Análisis Profundo: Vulnerabilidades
                </h3>
                <p className="text-sm text-[#b7b2a3] mt-1">Auditoría de dependencias de software e infraestructura.</p>
              </div>
              <button onClick={() => setExpandedKpi(null)} className="text-[#b7b2a3] hover:text-[#f1efe7] transition-colors p-1 bg-[#221f18] rounded-md border border-[#3a362b]">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-[#221f18] p-5 rounded-lg border border-[#c85a5a]/30">
              <div className="flex items-start">
                <ShieldAlert className="h-8 w-8 text-[#c85a5a] mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-[#f1efe7]">CVE-2026-3341: Remote Code Execution en parser PDF</h4>
                  <p className="text-sm text-[#b7b2a3] mt-2 leading-relaxed">
                    Nuestra librería de extracción de texto de nóminas (pdf-parse-core v2.1.0) tiene una vulnerabilidad Zero-Day publicada hace 4 horas. Un atacante podría ejecutar código subiendo un PDF malicioso específicamente modificado.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Badge className="bg-[#c85a5a] text-[#191812] hover:bg-[#c85a5a]/90 cursor-pointer">
                      Forzar Parcheo Inmediato (v2.1.1)
                    </Badge>
                    <Badge variant="outline" className="border-[#8a7f5a] text-[#8a7f5a] hover:bg-[#8a7f5a]/10 cursor-pointer">
                      Desactivar Upload de PDFs Temporalmente
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </TooltipProvider>

      <Card className="bg-card border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#f1efe7]">Log de Auditoría de Sistema</CardTitle>
          <CardDescription className="text-[#b7b2a3]">Registro inmutable de eventos críticos administrativos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-[#b7b2a3] p-4 bg-[#191812] border border-[#3a362b] rounded font-mono">
            <div className="flex justify-between border-b border-[#3a362b] pb-2 mb-2">
              <span className="text-[#8a7f5a]">[2026-03-28 08:14:22]</span>
              <span className="text-[#6b7b45]">SYS_UPDATE</span>
              <span>Reglas de fraude documental actualizadas (v4.2)</span>
            </div>
            <div className="flex justify-between border-b border-[#3a362b] pb-2 mb-2">
              <span className="text-[#8a7f5a]">[2026-03-27 15:30:00]</span>
              <span className="text-[#d8d2c4]">API_KEY_REVOKE</span>
              <span>Key pk_live_88x... revocada (Comprometida)</span>
            </div>
            <div className="flex justify-between border-b border-[#3a362b] pb-2 mb-2">
              <span className="text-[#8a7f5a]">[2026-03-27 09:00:11]</span>
              <span className="text-[#c85a5a]">RATE_LIMIT</span>
              <span>Agencia 'InmoElite' baneada 24h por abuso de API</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8a7f5a]">[2026-03-26 11:22:45]</span>
              <span className="text-[#6b7b45]">USER_ROLE_CHANGE</span>
              <span>'carlos.m' elevado a SUPERADMIN por 'founder_1'</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
