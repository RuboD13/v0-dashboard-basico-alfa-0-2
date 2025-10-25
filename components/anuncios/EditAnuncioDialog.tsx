"use client"

// [v0] EditAnuncioDialog component - Dialog for editing announcement details

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Lock, LockOpen, AlertCircle } from "lucide-react"
import { MapEmbed } from "@/components/MapEmbed"

interface EditFormData {
  referencia: string
  direccion: string
  descripcion: string
  precio: string
  portal: string
  activacion: string
}

interface EditAnuncioDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  anuncioReferencia: string
  formData: EditFormData
  onUpdateFormData: (data: EditFormData) => void
  onSave: () => void
  isReferenciaEditable: boolean
  onToggleReferenciaEditable: () => void
}

export function EditAnuncioDialog({
  open,
  onOpenChange,
  anuncioReferencia,
  formData,
  onUpdateFormData,
  onSave,
  isReferenciaEditable,
  onToggleReferenciaEditable,
}: EditAnuncioDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} aria-describedby="edit-dialog-description">
      <DialogContent className="sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] max-h-[90vh] overflow-y-auto z-[100]">
        <DialogHeader>
          <DialogTitle>Editar Anuncio - {anuncioReferencia}</DialogTitle>
          <DialogDescription id="edit-dialog-description">
            Modifique los datos del anuncio. Los cambios se guardarán en la base de datos.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Referencia Field */}
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="referencia" className="text-right pt-2">
              Referencia
            </Label>
            <div className="col-span-3 space-y-2">
              <div className="flex gap-2">
                <Input
                  id="referencia"
                  value={formData.referencia}
                  onChange={(e) => onUpdateFormData({ ...formData, referencia: e.target.value })}
                  className="flex-1"
                  placeholder="Referencia del inmueble"
                  disabled={!isReferenciaEditable}
                />
                <Button
                  type="button"
                  variant={isReferenciaEditable ? "default" : "outline"}
                  size="icon"
                  onClick={onToggleReferenciaEditable}
                  title={isReferenciaEditable ? "Bloquear campo" : "Desbloquear para editar"}
                >
                  {isReferenciaEditable ? <LockOpen className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                </Button>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-md p-2 text-xs text-amber-800">
                <div className="flex gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Campo crítico:</p>
                    <p className="mt-0.5">
                      Este campo debe coincidir exactamente con la "Referencia Interna" de Idealista o Fotocasa para que
                      los leads se listen correctamente y evitar conflictos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direccion Field with Map */}
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="direccion" className="text-right">
              Dirección
            </Label>
            <div className="col-span-3 space-y-2">
              <Input
                id="direccion"
                value={formData.direccion}
                onChange={(e) => onUpdateFormData({ ...formData, direccion: e.target.value })}
              />
              <MapEmbed address={formData.direccion} height={200} />
              <p className="text-xs text-muted-foreground">
                Edite la dirección para actualizar la vista previa del mapa
              </p>
            </div>
          </div>

          {/* Descripcion Field */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="descripcion" className="text-right">
              Descripción
            </Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => onUpdateFormData({ ...formData, descripcion: e.target.value })}
              className="col-span-3"
              placeholder="Descripción del anuncio"
            />
          </div>

          {/* Precio Field */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="precio" className="text-right">
              Precio
            </Label>
            <Input
              id="precio"
              type="number"
              value={formData.precio}
              onChange={(e) => onUpdateFormData({ ...formData, precio: e.target.value })}
              className="col-span-3"
              placeholder="0"
            />
          </div>

          {/* Portal Field */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="portal" className="text-right">
              Portal
            </Label>
            <Input
              id="portal"
              value={formData.portal}
              onChange={(e) => onUpdateFormData({ ...formData, portal: e.target.value })}
              className="col-span-3"
              placeholder="Portal de publicación"
            />
          </div>

          {/* Activacion Field */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="activacion" className="text-right">
              Estado
            </Label>
            <Select
              value={formData.activacion}
              onValueChange={(value) => onUpdateFormData({ ...formData, activacion: value })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Seleccionar estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Activo">Activo</SelectItem>
                <SelectItem value="Pausado">Pausado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={onSave}>Guardar cambios</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
