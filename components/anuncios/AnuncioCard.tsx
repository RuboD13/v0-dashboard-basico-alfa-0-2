"use client"

// [v0] AnuncioCard component - UI only with callbacks via props

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Target, CheckCircle, Settings, MoreVertical, Calendar, Eye, Edit, BarChart3, Archive } from "lucide-react"
import { Sparkline } from "./Sparkline"
import { formatTime, getHealthColor, getProgressColor } from "@/lib/anuncios-helpers"

interface AnuncioCardProps {
  anuncio: {
    id: string
    referencia: string
    direccion: string
    precio: number
    portal: string
    descripcion: string
    activacion: string
    fotoUrl: string
    nuevosHoy: number
    emailsEnviados: number
    datosCompletos: number
    leadsTotales: number
    aLaEspera: number
    tiempoAhorrado: number
    ultimaActividad: string
    fechaUltimaActividad: Date | null
    estado: "activo" | "pausado" | "archivado"
    healthScore: number
    porcentajeCompletos: number
    sparklineData: number[]
    ejecuciones: number
    consumoMes: number
    Fecha_Activacion_Programada?: string | null
  }
  planLimit: number
  isExpanded: boolean
  onToggleExpand: () => void
  onToggleEstado: (id: string) => void
  onEdit: () => void
  onViewLeads: () => void
  onViewStats: () => void
  onSchedule: () => void
  onArchive: () => void
  onViewCompletos: () => void
}

export function AnuncioCard({
  anuncio,
  planLimit,
  isExpanded,
  onToggleExpand,
  onToggleEstado,
  onEdit,
  onViewLeads,
  onViewStats,
  onSchedule,
  onArchive,
  onViewCompletos,
}: AnuncioCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CardTitle className="text-lg">{anuncio.referencia}</CardTitle>
              <Badge variant={anuncio.estado === "activo" ? "default" : "secondary"}>
                {anuncio.estado === "activo" ? "Activo" : anuncio.estado === "archivado" ? "Archivado" : "Pausado"}
              </Badge>
              {anuncio.Fecha_Activacion_Programada && (
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  Programado
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{anuncio.direccion}</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span>{anuncio.portal}</span>
              <span>€{anuncio.precio.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={anuncio.estado === "activo"} onCheckedChange={() => onToggleEstado(anuncio.id)} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Más opciones del anuncio" title="Más opciones">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onEdit}>
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onViewLeads}>
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Leads
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onViewStats}>
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Estadísticas
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSchedule}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Programar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onArchive}>
                  <Archive className="h-4 w-4 mr-2" />
                  Archivar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{anuncio.leadsTotales}</div>
            <div className="text-xs text-blue-800">Leads Totales</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{anuncio.nuevosHoy}</div>
            <div className="text-xs text-green-800">Nuevos Hoy</div>
          </div>
          <div
            className="text-center p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors"
            onClick={onViewCompletos}
          >
            <div className="text-2xl font-bold text-purple-600">{anuncio.datosCompletos}</div>
            <div className="text-xs text-purple-800">Completos</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{anuncio.aLaEspera}</div>
            <div className="text-xs text-orange-800">A la Espera</div>
          </div>
        </div>

        {/* Health Score & Sparkline */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            <span className="text-sm font-medium">Health Score:</span>
            <span className={`text-lg font-bold ${getHealthColor(anuncio.healthScore)}`}>{anuncio.healthScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">7 días:</span>
            <Sparkline data={anuncio.sparklineData} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Consumo del mes</span>
            <span className="font-medium">
              {anuncio.ejecuciones} / {planLimit}
            </span>
          </div>
          <Progress
            value={(anuncio.ejecuciones / planLimit) * 100}
            className={`h-2 ${getProgressColor((anuncio.ejecuciones / planLimit) * 100)}`}
          />
        </div>

        {/* Expandable Section */}
        {isExpanded && (
          <div className="space-y-3 pt-3 border-t">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{anuncio.emailsEnviados} emails enviados</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-blue-600" />
                <span>{formatTime(anuncio.tiempoAhorrado)} ahorrados</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Última actividad: {anuncio.ultimaActividad}</div>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleExpand}
          className="w-full"
          aria-label={isExpanded ? "Contraer detalles" : "Expandir detalles"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </Button>
      </CardContent>
    </Card>
  )
}
