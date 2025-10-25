/**
 * Debug logging utility that only logs in development environment
 * @param message - The message to log
 * @param data - Optional data to log alongside the message
 */
export function debug(message: string, data?: unknown): void {
  if (process.env.NODE_ENV === "development") {
    if (data !== undefined) {
      console.log(`[debug] ${message}`, data)
    } else {
      console.log(`[debug] ${message}`)
    }
  }
}

/**
 * Error logging utility for critical errors (logs in all environments)
 * @param message - The error message
 * @param error - The error object or data
 */
export function logError(message: string, error?: unknown): void {
  console.error(`[error] ${message}`, error)
}

/**
 * Warning logging utility (logs in all environments)
 * @param message - The warning message
 * @param data - Optional data to log
 */
export function logWarn(message: string, data?: unknown): void {
  console.warn(`[warn] ${message}`, data)
}
