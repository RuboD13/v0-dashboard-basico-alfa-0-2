// [v0] ProcessingSheet component - Side sheet for showing processing details

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Settings } from "lucide-react"
import { formatTime, getHealthColor } from "@/lib/anuncios-helpers"

interface ProcessingAnuncio {
  referencia: string
  direccion: string
  portal: string
  estado: string
  leadsTotales: number
  datosCompletos: number
  emailsEnviados: number
  tiempoAhorrado: number
  healthScore: number
  porcentajeCompletos: number
}

interface ProcessingSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  anuncio: ProcessingAnuncio | null
}

export function ProcessingSheet({ open, onOpenChange, anuncio }: ProcessingSheetProps) {
  if (!anuncio) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>{anuncio.referencia}</SheetTitle>
          <SheetDescription>{anuncio.direccion}</SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <Badge variant={anuncio.estado === "activo" ? "default" : "secondary"}>
              {anuncio.estado === "activo" ? "Activo" : "Pausado"}
            </Badge>
            <span className="text-sm text-muted-foreground">{anuncio.portal}</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{anuncio.leadsTotales}</div>
              <div className="text-sm text-blue-800">Leads Totales</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{anuncio.datosCompletos}</div>
              <div className="text-sm text-green-800">Completos</div>
            </div>
          </div>

          {/* Health Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Health Score</span>
              <span className={`text-lg font-bold ${getHealthColor(anuncio.healthScore)}`}>{anuncio.healthScore}</span>
            </div>
            <Progress value={anuncio.healthScore} className="h-2" />
          </div>

          {/* Completion Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tasa de Completitud</span>
              <span className="text-lg font-bold">{anuncio.porcentajeCompletos.toFixed(1)}%</span>
            </div>
            <Progress value={anuncio.porcentajeCompletos} className="h-2" />
          </div>

          {/* Additional Stats */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Emails enviados</span>
              </div>
              <span className="font-medium">{anuncio.emailsEnviados}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Tiempo ahorrado</span>
              </div>
              <span className="font-medium">{formatTime(anuncio.tiempoAhorrado)}</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
