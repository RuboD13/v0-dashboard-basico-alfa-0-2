"use client"

// [v0] InfoFaqsDialog component - Dialog for managing detailed info and FAQs

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus, X } from "lucide-react"

interface Faq {
  pregunta: string
  respuesta: string
}

interface InfoFaqsData {
  informacionDetallada: string
  faqs: Faq[]
}

interface InfoFaqsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  anuncioReferencia: string
  data: InfoFaqsData
  onUpdateData: (data: InfoFaqsData) => void
  onSave: () => void
}

export function InfoFaqsDialog({
  open,
  onOpenChange,
  anuncioReferencia,
  data,
  onUpdateData,
  onSave,
}: InfoFaqsDialogProps) {
  const addFaq = () => {
    onUpdateData({
      ...data,
      faqs: [...data.faqs, { pregunta: "", respuesta: "" }],
    })
  }

  const removeFaq = (index: number) => {
    onUpdateData({
      ...data,
      faqs: data.faqs.filter((_, i) => i !== index),
    })
  }

  const updateFaq = (index: number, field: "pregunta" | "respuesta", value: string) => {
    const newFaqs = [...data.faqs]
    newFaqs[index] = { ...newFaqs[index], [field]: value }
    onUpdateData({ ...data, faqs: newFaqs })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto z-[100]"
        aria-describedby="info-faqs-description"
      >
        <DialogHeader>
          <DialogTitle>Información Detallada & FAQs - {anuncioReferencia}</DialogTitle>
          <DialogDescription id="info-faqs-description">
            Añada información detallada del inmueble y preguntas frecuentes para ayudar a los candidatos.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Información Detallada */}
          <div className="space-y-2">
            <Label htmlFor="info-detallada">Información Detallada del Inmueble</Label>
            <Textarea
              id="info-detallada"
              value={data.informacionDetallada}
              onChange={(e) => onUpdateData({ ...data, informacionDetallada: e.target.value })}
              placeholder="Describe características especiales, servicios incluidos, normas de la comunidad, etc."
              className="min-h-[100px]"
              aria-label="Información detallada del inmueble"
            />
          </div>

          {/* FAQs Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Preguntas Frecuentes (FAQs)</Label>
              <Button size="sm" variant="outline" onClick={addFaq} aria-label="Añadir nueva pregunta frecuente">
                <Plus className="h-4 w-4 mr-1" />
                Añadir FAQ
              </Button>
            </div>

            {data.faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">FAQ #{index + 1}</Label>
                  {data.faqs.length > 1 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFaq(index)}
                      className="text-red-600 hover:text-red-700"
                      aria-label={`Eliminar FAQ ${index + 1}`}
                      title={`Eliminar FAQ ${index + 1}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Pregunta frecuente..."
                    value={faq.pregunta}
                    onChange={(e) => updateFaq(index, "pregunta", e.target.value)}
                    aria-label={`Pregunta ${index + 1}`}
                  />
                  <Textarea
                    placeholder="Respuesta detallada..."
                    value={faq.respuesta}
                    onChange={(e) => updateFaq(index, "respuesta", e.target.value)}
                    className="min-h-[80px]"
                    aria-label={`Respuesta ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={onSave}>Guardar Información</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
