import type React from "react"

interface IntegrationIconProps {
  name: string
}

const IntegrationIcon: React.FC<IntegrationIconProps> = ({ name }) => {
  const icons: Record<string, React.ReactElement> = {
    Idealista: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#8BC53F" />
        <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
          id
        </text>
      </svg>
    ),
    Fotocasa: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#E31837" />
        <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
          fc
        </text>
      </svg>
    ),
    Habitaclia: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#FF6600" />
        <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
          hb
        </text>
      </svg>
    ),
    "Pisos.com": (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#0066CC" />
        <path
          d="M16 8c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 3.7 3.8-1c1.2.6 2.5 1 3.9 1 4.4 0 8-3.6 8-8s-3.6-8-7.7-8z"
          fill="white"
        />
      </svg>
    ),
    WhatsApp: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#25D366" />
        <path
          d="M16 8c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 3.7 3.8-1c1.2.6 2.5 1 3.9 1 4.4 0 8-3.6 8-8s-3.6-8-7.7-8z"
          fill="white"
        />
      </svg>
    ),
    Gmail: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#EA4335" />
        <path d="M8 12l8 5 8-5v10H8z" fill="white" />
        <path d="M8 12l8 5 8-5" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    Calendar: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#4285F4" />
        <rect x="8" y="10" width="16" height="14" rx="2" fill="white" />
        <rect x="10" y="8" width="2" height="4" fill="#4285F4" />
        <rect x="20" y="8" width="2" height="4" fill="#4285F4" />
        <rect x="10" y="16" width="4" height="4" fill="#4285F4" />
      </svg>
    ),
    Drive: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#FBBC04" />
        <path d="M10 22l6-10 6 10H10z" fill="white" />
      </svg>
    ),
  }

  return (
    icons[name] || (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="4" fill="#9CA3AF" />
        <circle cx="16" cy="16" r="6" fill="white" />
      </svg>
    )
  )
}

export default IntegrationIcon
