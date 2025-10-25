"use client"

// [v0] CreateAnuncioDialog component - Multi-step dialog for creating announcements

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface CreationStep {
  step: number
  data: {
    referencia: string
    direccion: string
    portal: string
    descripcion: string
    precio: string
    activacion: string
  }
}

interface CreateAnuncioDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  creationStep: CreationStep
  onUpdateStep: (step: CreationStep) => void
  onSubmit: () => void
  isCreating: boolean
}

export function CreateAnuncioDialog({
  open,
  onOpenChange,
  creationStep,
  onUpdateStep,
  onSubmit,
  isCreating,
}: CreateAnuncioDialogProps) {
  const updateData = (field: string, value: string) => {
    onUpdateStep({
      ...creationStep,
      data: { ...creationStep.data, [field]: value },
    })
  }

  const nextStep = () => {
    if (creationStep.step < 3) {
      onUpdateStep({ ...creationStep, step: creationStep.step + 1 })
    } else {
      onSubmit()
    }
  }

  const prevStep = () => {
    if (creationStep.step > 1) {
      onUpdateStep({ ...creationStep, step: creationStep.step - 1 })
    } else {
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" aria-describedby="create-dialog-description">
        <DialogHeader>
          <DialogTitle>Crear Anuncio - Paso {creationStep.step} de 3</DialogTitle>
          <DialogDescription id="create-dialog-description">
            Complete los datos del anuncio en 3 pasos para publicarlo en el portal seleccionado.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full ${step <= creationStep.step ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>

          {/* Step 1: Basic Data */}
          {creationStep.step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Datos básicos</h3>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="titulo">Título</Label>
                  <Input
                    id="titulo"
                    value={creationStep.data.referencia}
                    onChange={(e) => updateData("referencia", e.target.value)}
                    placeholder="Referencia del anuncio"
                  />
                </div>
                <div>
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input
                    id="direccion"
                    value={creationStep.data.direccion}
                    onChange={(e) => updateData("direccion", e.target.value)}
                    placeholder="Dirección completa"
                  />
                </div>
                <div>
                  <Label htmlFor="portal">Portal</Label>
                  <Select value={creationStep.data.portal} onValueChange={(value) => updateData("portal", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar portal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Idealista">Idealista</SelectItem>
                      <SelectItem value="Fotocasa">Fotocasa</SelectItem>
                      <SelectItem value="Habitaclia">Habitaclia</SelectItem>
                      <SelectItem value="Pisos.com">Pisos.com</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Complete Details */}
          {creationStep.step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Detalles completos</h3>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="descripcion">Descripción</Label>
                  <Textarea
                    id="descripcion"
                    value={creationStep.data.descripcion}
                    onChange={(e) => updateData("descripcion", e.target.value)}
                    placeholder="Descripción del inmueble"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="precio">Precio</Label>
                    <Input
                      id="precio"
                      type="number"
                      value={creationStep.data.precio}
                      onChange={(e) => updateData("precio", e.target.value)}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Activation */}
          {creationStep.step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Activación</h3>
              <div className="space-y-4">
                <div>
                  <Label>Estado inicial</Label>
                  <Select
                    value={creationStep.data.activacion}
                    onValueChange={(value) => updateData("activacion", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Activo">Crear como Activo</SelectItem>
                      <SelectItem value="Pausado">Guardar en Pausado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Resumen</h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="font-medium">Referencia:</span> {creationStep.data.referencia}
                    </p>
                    <p>
                      <span className="font-medium">Dirección:</span> {creationStep.data.direccion}
                    </p>
                    <p>
                      <span className="font-medium">Portal:</span> {creationStep.data.portal}
                    </p>
                    <p>
                      <span className="font-medium">Estado:</span> {creationStep.data.activacion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={prevStep}>
              {creationStep.step === 1 ? "Cancelar" : "Anterior"}
            </Button>

            <Button onClick={nextStep} disabled={isCreating}>
              {isCreating && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {creationStep.step === 3 ? "Crear Anuncio" : "Siguiente"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
