// [v0] Database type definitions based on esq_BBDD_23_10_25.json
// Only includes fields actually used in the application

// Anuncios table
export interface Anuncio {
  ida: number // bigint PK
  created_at: string // timestamp with time zone
  Referencia: string | null
  Direccion: string | null
  Precio: number | null // numeric
  Foto_Url: string | null
  usuario: number | null // numeric
  Activacion: string | null
  Portal: string | null
  Descripcion: string | null
  Fecha_Activacion_Programada?: string | null
}

// Clientes table
export interface Cliente {
  id: number // bigint PK
  IDC: number | null // numeric
  created_at: string // timestamp with time zone
  Estado: string | null // USER-DEFINED enum
  "Pedir Aval": boolean | null
  Nombre: string | null
  Correo: string | null
  Telefono: string | null
  Inmueble: string | null
  Fecha_Entrada: string | null // timestamp with time zone
  Ingresos: number | null // numeric
  Documento: string | null
  Tipo_Documento: string | null
  Codigo_Postal: string | null
  Pais: string | null
  Persona_2: string | null
  Tipo_Documento_2: string | null
  Documento_2: string | null
  Pais_2: string | null
  Ingresos_2: number | null
  Persona_3: string | null
  Tipo_Documento_3: string | null
  Documento_3: string | null
  Ingresos_3: number | null
  Obsevaciones: string | null
  Recordatorio: boolean | null
  usuario: number | null
  visita_propuesta: boolean | null
  aceptado: boolean | null
  Fecha_Datos_Completos: string | null
  "fecha de visita": string | null // date
  "visista completada": boolean | null
}

// Correos table
export interface Correo {
  id: number // bigint PK
  created_at: string // timestamp with time zone
  "Id Mensaje": string // NOT NULL
  From: string | null
  to: string | null
  Email: string | null
  Subject: string | null
  Text: string | null
  Html: string | null
  Tipo: string | null
  Nombre: string | null
  usuario: number | null
}

// Planes table
export interface Plan {
  idp: number // bigint PK
  created_at: string // timestamp with time zone
  Nombre: string | null
  ejecuciones: number | null // numeric
  Usuarios: number | null // numeric
  Anuncios: number | null // numeric
  Soporte: string | null
  Precio: number | null // numeric
}

// Inmobiliarias table
export interface Inmobiliaria {
  idi: number // bigint PK
  created_at: string // timestamp with time zone
  Nombre: string | null
  Direccion: string | null
  Telefono: string | null
  "Mail contacto": string | null
  "Mail sistema": string | null
  Whatsapp: string | null
  "Persona de Contacto": string | null
  Plan: number | null // numeric - references Planes.idp
}

// Perfiles table
export interface Perfil {
  idp: number // bigint PK
  created_at: string // timestamp with time zone
  usuario: string | null
  inmobiliaria: number | null // numeric - references Inmobiliarias.idi
  is_admin: boolean | null
}

// User type from Supabase Auth
export interface User {
  id: string
  email?: string
  user_metadata?: {
    [key: string]: unknown
  }
}

export interface AnuncioCard {
  id: string
  referencia: string
  direccion: string
  precio: number
  portal: string
  descripcion: string
  activacion: string
  fotoUrl: string
  fechaActivacionProgramada?: string | null
  nuevosHoy: number
  emailsEnviados: number
  datosCompletos: number
  leadsTotales: number
  aLaEspera: number
  tiempoAhorrado: number
  ultimaActividad: string
  fechaUltimaActividad: Date | null
  estado: "activo" | "pausado" | "archivado"
  healthScore: number
  porcentajeCompletos: number
  sparklineData: number[]
  ejecuciones: number
  consumoMes: number
}
