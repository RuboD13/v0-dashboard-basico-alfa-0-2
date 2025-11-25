import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Mail, Brain, Calendar, Bell, FileText, CheckCircle2, Clock, User, Building2 } from "lucide-react"

interface StepVisualProps {
  step: string
}

export default function StepVisual({ step }: StepVisualProps) {
  const visuals: Record<string, ReactNode> = {
    "lead-capture": (
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Nuevo Lead Detectado</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <span className="text-xs text-foreground">idealista</span>
              <Badge variant="outline" className="ml-auto text-xs">
                Nuevo
              </Badge>
            </div>
            <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
              <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-xs text-foreground">fotocasa</span>
              <Badge variant="outline" className="ml-auto text-xs">
                3 min
              </Badge>
            </div>
            <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
              <Mail className="w-4 h-4 text-red-500" />
              <span className="text-xs text-foreground">Email directo</span>
              <Badge variant="outline" className="ml-auto text-xs">
                5 min
              </Badge>
            </div>
          </div>
        </div>
      </div>
    ),
    "ai-filter": (
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Validación IA</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-foreground">DNI Verificado</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-foreground">Ingresos: 2.400€/mes</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-foreground">Contrato indefinido</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="pt-2 border-t border-border">
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 w-full justify-center">
                Lead Cualificado
              </Badge>
            </div>
          </div>
        </div>
      </div>
    ),
    calendar: (
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Agenda Automática</span>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-3">
            {["L", "M", "X", "J", "V", "S", "D"].map((day, i) => (
              <div key={i} className="text-center text-xs text-muted-foreground py-1">
                {day}
              </div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`text-center text-xs py-1 rounded ${
                  i === 14
                    ? "bg-primary text-primary-foreground"
                    : i === 16
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "text-foreground"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs text-foreground">15 Nov - 10:00</span>
              <Badge variant="outline" className="ml-auto text-xs">
                Propuesta
              </Badge>
            </div>
          </div>
        </div>
      </div>
    ),
    notifications: (
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Notificaciones</span>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs font-medium text-foreground">Recordatorio enviado</p>
              <p className="text-xs text-muted-foreground">Visita mañana a las 10:00</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
              <p className="text-xs font-medium text-foreground">Feedback recibido</p>
              <p className="text-xs text-muted-foreground">Inquilino: "Muy interesado"</p>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-500">
              <p className="text-xs font-medium text-foreground">WhatsApp enviado</p>
              <p className="text-xs text-muted-foreground">Confirmación de visita</p>
            </div>
          </div>
        </div>
      </div>
    ),
    documents: (
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Documentación</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "DNI_anverso.pdf", status: "complete" },
              { name: "Nóminas_3meses.pdf", status: "complete" },
              { name: "Contrato_trabajo.pdf", status: "complete" },
              { name: "Referencias.pdf", status: "pending" },
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-foreground flex-1 truncate">{doc.name}</span>
                {doc.status === "complete" ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Progreso</span>
              <span className="text-xs font-medium text-foreground">75%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    ),
  }

  return visuals[step] || <div className="w-32 h-32 bg-muted rounded-lg" />
}
