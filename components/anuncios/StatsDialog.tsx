"use client"

// [v0] StatsDialog component - Dialog for showing detailed statistics

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sparkline } from "./Sparkline"
import { formatTime } from "@/lib/anuncios-helpers"

interface StatsAnuncio {
  referencia: string
  leadsTotales: number
  datosCompletos: number
  porcentajeCompletos: number
  healthScore: number
  sparklineData: number[]
  rebotesAltos?: boolean
  incompletosAlto?: boolean
  necesidadAval?: boolean
  ejecuciones: number
  tiempoAhorrado: number
  portal: string
  estado: string
  ultimaActividad: string
}

interface StatsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  anuncio: StatsAnuncio | null
  planLimit: number
}

export function StatsDialog({ open, onOpenChange, anuncio, planLimit }: StatsDialogProps) {
  if (!anuncio) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto" aria-describedby="stats-description">
        <DialogHeader>
          <DialogTitle>Estadísticas - {anuncio.referencia}</DialogTitle>
          <DialogDescription id="stats-description">
            Análisis detallado del rendimiento, consumo y calidad de leads del anuncio.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Métricas Principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{anuncio.leadsTotales}</div>
              <div className="text-sm text-blue-800">Leads Totales</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{anuncio.datosCompletos}</div>
              <div className="text-sm text-green-800">Datos Completos</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{anuncio.porcentajeCompletos.toFixed(1)}%</div>
              <div className="text-sm text-purple-800">Tasa Conversión</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{anuncio.healthScore}</div>
              <div className="text-sm text-orange-800">Health Score</div>
            </div>
          </div>

          {/* Tendencia Semanal */}
          <div className="space-y-3">
            <h4 className="font-semibold">Tendencia de Leads (7 días)</h4>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Actividad diaria</span>
                <div className="text-green-600" aria-label="Gráfico de tendencia de leads de los últimos 7 días">
                  <Sparkline data={anuncio.sparklineData} />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {anuncio.sparklineData.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="font-medium">{value}</div>
                    <div className="text-muted-foreground">D{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Análisis de Calidad */}
          <div className="space-y-3">
            <h4 className="font-semibold">Análisis de Calidad</h4>
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Rebotes de email</span>
                <Badge variant={anuncio.rebotesAltos ? "destructive" : "secondary"}>
                  {anuncio.rebotesAltos ? "Alto" : "Normal"}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Datos incompletos</span>
                <Badge variant={anuncio.incompletosAlto ? "destructive" : "secondary"}>
                  {anuncio.incompletosAlto ? "Alto" : "Normal"}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Necesidad de aval</span>
                <Badge variant={anuncio.necesidadAval ? "destructive" : "secondary"}>
                  {anuncio.necesidadAval ? "Requerido" : "No requerido"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Consumo y Rendimiento */}
          <div className="space-y-3">
            <h4 className="font-semibold">Consumo y Rendimiento</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ejecuciones del mes</span>
                  <span className="font-medium">{anuncio.ejecuciones}</span>
                </div>
                <Progress
                  value={(anuncio.ejecuciones / planLimit) * 100}
                  className="h-2"
                  aria-label={`Progreso de ejecuciones: ${((anuncio.ejecuciones / planLimit) * 100).toFixed(1)}%`}
                />
                <div className="text-xs text-muted-foreground">
                  {((anuncio.ejecuciones / planLimit) * 100).toFixed(1)}% del plan utilizado
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tiempo ahorrado</span>
                  <span className="font-medium">{formatTime(anuncio.tiempoAhorrado)}</span>
                </div>
                <div className="text-xs text-muted-foreground">Basado en 1.27 min/email procesado</div>
              </div>
            </div>
          </div>

          {/* Distribución por Portal */}
          <div className="space-y-3">
            <h4 className="font-semibold">Información del Portal</h4>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">{anuncio.portal}</span>
                <Badge variant="outline">{anuncio.estado}</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">Última actividad: {anuncio.ultimaActividad}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
