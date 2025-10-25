"use client"

// [v0] ArchiveDialog component - Confirmation dialog for archiving announcements

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface ArchiveDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  anuncioReferencia: string
  onConfirm: () => void
}

export function ArchiveDialog({ open, onOpenChange, anuncioReferencia, onConfirm }: ArchiveDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" aria-describedby="archive-description">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Archivar Anuncio
          </DialogTitle>
          <DialogDescription id="archive-description">
            ¿Estás seguro de que deseas archivar el anuncio <strong>{anuncioReferencia}</strong>?
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
            <h4 className="font-semibold text-amber-900 mb-2">⚠️ Importante</h4>
            <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
              <li>El anuncio dejará de procesar nuevos leads</li>
              <li>Los leads existentes se mantendrán en el sistema</li>
              <li>Podrás restaurar el anuncio más adelante si es necesario</li>
              <li>Esta acción no elimina el anuncio permanentemente</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            aria-label={`Confirmar archivar anuncio ${anuncioReferencia}`}
          >
            Archivar Anuncio
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
