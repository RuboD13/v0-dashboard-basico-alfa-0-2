import { toast } from "@/hooks/use-toast"

/**
 * Display a consistent error toast notification
 * @param message - The error message to display
 */
export function notifyError(message: string) {
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  })
}

/**
 * Display a consistent success toast notification
 * @param message - The success message to display
 */
export function notifySuccess(message: string) {
  toast({
    title: "Éxito",
    description: message,
  })
}
