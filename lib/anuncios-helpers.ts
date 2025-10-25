// [v0] Pure helper functions for anuncios page

/**
 * Formats hours into HH:MM format
 * @param hours - Number of hours (can be decimal)
 * @returns Formatted time string (e.g., "02:30h")
 */
export function formatTime(hours: number): string {
  const totalMinutes = Math.floor(hours * 60)
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}h`
}

/**
 * Returns color class based on health score
 * @param score - Health score (0-100)
 * @returns Tailwind text color class
 */
export function getHealthColor(score: number): string {
  if (score >= 80) return "text-green-600"
  if (score >= 60) return "text-yellow-600"
  if (score >= 40) return "text-orange-600"
  return "text-red-600"
}

/**
 * Returns progress bar color based on percentage
 * @param percentage - Progress percentage (0-100)
 * @returns Tailwind background color class
 */
export function getProgressColor(percentage: number): string {
  if (percentage >= 95) return "bg-red-500"
  if (percentage >= 80) return "bg-orange-500"
  return "bg-blue-500"
}

/**
 * Derives estado from Activacion value
 * @param activacion - Activacion status from database
 * @returns Estado type
 */
export function deriveEstado(activacion: string): "activo" | "pausado" | "archivado" {
  if (activacion === "Activo") return "activo"
  if (activacion === "Archivado") return "archivado"
  return "pausado" // Default for "Pausado" or any other value
}
