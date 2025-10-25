"use client"

import { createClient } from "@/lib/supabase/client"
import { useEffect, useState, useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useInmobiliaria } from "@/lib/contexts/inmobiliaria-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  CheckCircle,
  Loader2,
  Plus,
  Calendar,
  Archive,
  Edit,
  MoreVertical,
  BarChart3,
  Settings,
  ShoppingCart,
  Target,
  Eye,
  Search,
} from "lucide-react"
import { formatPlanValue } from "@/lib/plan-data"

import type { Cliente, Plan, User, AnuncioCard } from "@/types/db"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { notifyError, notifySuccess } from "@/lib/ui"
import { debug, logError } from "@/lib/log" // Added debug and logError
import { AnuncioCardSkeleton } from "@/components/anuncios/AnuncioCardSkeleton"

// [v0] Feature flag for scheduled activation
// TODO: Enable this after running the SQL migration to add the column
// SQL Migration needed:
// ALTER TABLE "Anuncios"
// ADD COLUMN "Fecha_Activacion_Programada" timestamp with time zone;
const SCHEDULED_ACTIVATION_ENABLED = true // Enabled as per requirement

// [A11y] Centralized UI strings for i18n preparation
const t = {
  // Page titles and descriptions
  pageTitle: "Centro de Anuncios",
  pageDescription: "Control operativo y económico por anuncio",

  // Status badges
  statusActive: "Activos",
  statusComplete: "Completos",
  statusPaused: "Pausado",
  statusArchived: "Archivado",

  // Plan consumption
  planConsumption: "Consumo del Plan",
  planChange: "Cambiar Plan",
  planAddons: "Add-ons",
  planUpgrade: "Upgrade plan",
  planCurrent: "Plan Actual",
  planUnlimited: "Plan Ilimitado - Sin restricciones",
  planDataOffline: "Datos offline",

  // Metrics
  metricsExecutions: "Ejecuciones",
  metricsUsed: "Usadas",
  metricsRemaining: "Restantes",
  metricsDaysEstimated: "Días estimados",
  metricsNewToday: "Nuevos hoy",
  metricsEmailsSent: "Emails enviados",
  metricsComplete: "Nº Completos HOY",
  metricsWaiting: "A la espera",
  metricsTimeSaved: "Tiempo ahorrado",

  // Actions
  actionCreate: "Crear Anuncio",
  actionEdit: "Editar",
  actionEditAnnouncement: "Editar anuncio",
  actionViewLeads: "Ver leads filtrados",
  actionViewComplete: 'Ver "Datos completos"',
  actionEditInfoFaqs: "Editar info & FAQs",
  actionViewStats: "Ver Estadísticas",
  actionArchive: "Archivar",
  actionSchedule: "Programar",
  actionSave: "Guardar cambios",
  actionCancel: "Cancelar",
  actionClose: "Cerrar",
  actionClearFilters: "Limpiar filtros",

  // Filters
  filterSearchPlaceholder: "Buscar por referencia o dirección...",
  filterAllPortals: "Todos los portales",
  filterViewArchived: "Ver archivados",
  filterViewingArchived: "Viendo archivados",

  // Results
  resultsShowing: "Mostrando",
  resultsOf: "de",
  resultsAnnouncements: "anuncios",
  resultsArchived: "archivados",
  resultsNoMatch: "No hay anuncios que coincidan con los filtros",
  resultsNoArchived: "No hay anuncios archivados",

  // Dialogs
  dialogScheduleTitle: "Programar Activación",
  dialogScheduleDescription: "Selecciona la fecha y hora en la que quieres que el anuncio se active automáticamente.",
  dialogScheduleFeatureDisabled: "Esta función requiere una migración de base de datos antes de poder usarse.",
  dialogScheduleMigrationRequired: "Migración requerida",
  dialogScheduleDateLabel: "Fecha y hora de activación",

  // Notifications
  notifyArchiveBlocked: "No se puede archivar un anuncio activo. Primero paúsalo.",
  notifyArchiveSuccess: "Anuncio archivado correctamente",
  notifyArchiveError: "No se pudo archivar el anuncio en la base de datos",
  notifyUpdateSuccess: "Anuncio actualizado correctamente",
  notifyUpdateError: "No se pudo actualizar el estado del anuncio en la base de datos",
  notifyCreateSuccess: "Anuncio creado correctamente",
  notifyCreateError: "No se pudo crear el anuncio en la base de datos",
  notifyScheduleSuccess: "Activación programada para",
  notifyScheduleError: "No se pudo programar la activación en la base de datos",
  notifyScheduleFeatureDisabled:
    "La función de programación aún no está habilitada. Consulta el diálogo para más información.",
  notifyScheduleDateRequired: "Por favor selecciona una fecha y hora",
  notifyScheduleDateFuture: "La fecha y hora deben ser en el futuro",

  // Aria labels
  ariaMoreOptions: "Más opciones",
  ariaEditAnnouncement: "Editar anuncio",
  ariaViewStats: "Ver estadísticas",
  ariaScheduleActivation: "Programar activación",
  ariaToggleStatus: "Cambiar estado del anuncio",
  ariaSearchAnnouncements: "Buscar anuncios",
  ariaFilterPortal: "Filtrar por portal",
  ariaViewArchived: "Ver anuncios archivados",
  "aria.closeLeadsPanel": "Cerrar panel de leads", // Added for expanded leads panel
}

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

interface EditFormData {
  referencia: string
  direccion: string
  descripcion: string
  precio: string
  portal: string
  activacion: string
}

type DailyLeadCount = {
  referencia: string
  day_date: string
  lead_count: number
}

export default function AnunciosPage() {
  const router = useRouter()
  const supabase = createClient()

  const { inmobiliariaId, isAdmin, loading: inmobiliariaLoading } = useInmobiliaria()

  const [user, setUser] = useState<User | null>(null)
  const [anunciosCards, setAnunciosCards] = useState<AnuncioCard[]>([])
  const [anunciosError, setAnunciosError] = useState<string | null>(null) // Added error state
  const [loading, setLoading] = useState(true)
  const [creatingAnuncio, setCreatingAnuncio] = useState(false)
  const [processingId, setProcessingId] = useState<string | null>(null) // Moved from existing code
  const [editingAnuncio, setEditingAnuncio] = useState<AnuncioCard | null>(null)
  const [editFormData, setEditFormData] = useState<EditFormData>({
    referencia: "",
    direccion: "",
    descripcion: "",
    precio: "",
    portal: "",
    activacion: "Pausado", // Default value
  })
  const [totalAnuncios, setTotalAnuncios] = useState(0) // Added
  const [totalLeads, setTotalLeads] = useState(0) // Added
  const [totalCompletos, setTotalCompletos] = useState(0) // Added
  const [totalEjecuciones, setTotalEjecuciones] = useState(0) // Added
  const [planLimit, setPlanLimit] = useState(1000) // Moved from existing code
  const [availablePlans, setAvailablePlans] = useState<Plan[]>([])
  const [showPlanSelector, setShowPlanSelector] = useState(false)
  const [currentPlanId, setCurrentPlanId] = useState<number | null>(null)
  const [usingFallbackPlan, setUsingFallbackPlan] = useState(false)
  const [selectedAnuncios, setSelectedAnuncios] = useState<Set<string>>(new Set())
  const [showFilters, setShowFilters] = useState(false)
  const [showProcessingDrawer, setShowProcessingDrawer] = useState(false)
  const [processingAnuncio, setProcessingAnuncio] = useState<AnuncioCard | null>(null)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreationModal, setShowCreationModal] = useState(false)
  const [showScheduleDialog, setShowScheduleDialog] = useState(false)
  const [schedulingAnuncioId, setSchedulingAnuncioId] = useState<string | null>(null)
  const [scheduledDate, setScheduledDate] = useState<string>("")
  const [creationStep, setCreationStep] = useState<CreationStep>({
    step: 1,
    data: {
      referencia: "",
      direccion: "",
      portal: "",
      descripcion: "",
      precio: "",
      activacion: "Pausado",
    },
  })
  const [filterPortal, setFilterPortal] = useState<string>("all")
  const [filterEstado, setFilterEstado] = useState<string>("all")
  const [showInfoFaqsModal, setShowInfoFaqsModal] = useState(false)
  const [showStatsModal, setShowStatsModal] = useState(false)
  const [selectedAnuncioForStats, setSelectedAnuncioForStats] = useState<AnuncioCard | null>(null)
  const [showArchiveDialog, setShowArchiveDialog] = useState(false)
  const [archivingAnuncio, setArchivingAnuncio] = useState<AnuncioCard | null>(null)
  const [expandedLeadsAnuncio, setExpandedLeadsAnuncio] = useState<string | null>(null)
  const [completosLeads, setCompletosLeads] = useState<Cliente[]>([])
  const [loadingCompletos, setLoadingCompletos] = useState(false)
  const [infoFaqsData, setInfoFaqsData] = useState({
    informacionDetallada: "",
    faqs: [{ pregunta: "", respuesta: "" }],
  })

  // State for edit dialog
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [anuncioToEdit, setAnuncioToEdit] = useState<AnuncioCard | null>(null)

  // State for archive dialog
  const [anuncioToArchive, setAnuncioToArchive] = useState<AnuncioCard | null>(null)

  // Helper function to calculate data completeness for a lead
  const calculateDataCompleteness = (lead: Cliente): number => {
    let completeness = 0
    if (lead.Nombre) completeness += 10
    if (lead.Correo) completeness += 20
    if (lead.Telefono) completeness += 20
    if (lead.Ingresos) completeness += 15
    if (lead.Documento) completeness += 15 // Assuming Documento is a key field
    if (lead.Persona_2) completeness += 10
    if (lead.Persona_3) completeness += 5
    if (lead.Persona_4) completeness += 5
    return completeness
  }

  const fetchPlanLimit = useCallback(async () => {
    if (!inmobiliariaId) return

    try {
      const { data: inmobiliariaData, error: inmobiliariaError } = await supabase
        .from("Inmobiliarias")
        .select("Plan")
        .eq("idi", inmobiliariaId)
        .single()

      if (inmobiliariaError) throw inmobiliariaError

      const planId = inmobiliariaData?.Plan
      if (!planId) {
        setPlanLimit(1000)
        setUsingFallbackPlan(true)
        return
      }

      const { data: planesData, error: planesError } = await supabase
        .from("Planes")
        .select("ejecuciones")
        .eq("idp", planId)
        .single()

      if (planesError) throw planesError

      setPlanLimit(planesData.ejecuciones)
      setUsingFallbackPlan(false)
    } catch (err) {
      logError("No se pudo cargar el límite del plan desde Planes", err)
      setPlanLimit(1000)
      setUsingFallbackPlan(true)
    }
  }, [inmobiliariaId, supabase])

  // Helper function to derive Estado from Activacion
  const deriveEstado = (activacion: string): AnuncioCard["estado"] => {
    if (activacion === "Activo") return "activo"
    if (activacion === "Pausado") return "pausado"
    if (activacion === "Archivado") return "archivado"
    return "pausado" // Default to "pausado"
  }

  // [perf] Memoize fetchAnuncios to prevent unnecessary re-fetches
  const fetchAnuncios = useCallback(
    async (forceRefresh = false) => {
      if (!inmobiliariaId) return

      setLoading(true)
      setAnunciosError(null)

      try {
        debug("Fetching anuncios for inmobiliaria", inmobiliariaId)

        // TODO RLS: This filtering logic should ideally be moved to Supabase Row Level Security (RLS) policies.
        // RLS would automatically filter rows at the database level based on the authenticated user's role,
        // eliminating the need for application-level filtering and improving security.
        // For now, we filter in the application: non-admin users only see their own inmobiliaria's anuncios.

        let query = supabase.from("Anuncios").select(
          `
          ida,
          Referencia,
          Direccion,
          Precio,
          Foto_Url,
          Activacion,
          Portal,
          Descripcion,
          usuario
          ${SCHEDULED_ACTIVATION_ENABLED ? ", Fecha_Activacion_Programada" : ""}
        `,
        )

        if (!isAdmin) {
          query = query.eq("usuario", inmobiliariaId)
        }

        const { data: anuncios, error: anunciosError } = await query

        if (anunciosError) {
          logError("Error fetching anuncios", anunciosError)
          notifyError("No se pudo cargar los anuncios desde la base de datos") // Added notification
          throw anunciosError
        }

        if (!anuncios || anuncios.length === 0) {
          debug("No anuncios found")
          setAnunciosCards([])
          setTotalLeads(0)
          setTotalCompletos(0)
          setTotalEjecuciones(0)
          return
        }

        debug("Fetched anuncios", anuncios.length)

        // [v0] Extract all referencias for batch queries
        const referencias = anuncios.map((a) => a.Referencia).filter(Boolean) as string[]

        if (referencias.length === 0) {
          debug("No valid referencias found")
          setAnunciosCards([])
          return
        }

        // [v0] Step 2: Fetch all leads for all referencias in one query using .or()
        const orConditions = referencias.map((ref) => `Inmueble.eq.${ref}`).join(",")
        const { data: allLeads, error: leadsError } = await supabase
          .from("Clientes")
          .select("id, IDC, Inmueble, created_at, Estado, Ingresos, Documento, Persona_2, Persona_3, Persona_4, Correo") // Added Correo
          .or(orConditions)

        if (leadsError) {
          logError("Error fetching leads", leadsError)
          notifyError("Error al cargar los leads asociados a los anuncios") // Added notification
          throw leadsError
        }

        debug("Fetched leads", allLeads?.length || 0)

        const { data: sparklineRawData, error: sparklineError } = await supabase.rpc("get_daily_lead_counts", {
          p_referencias: referencias,
        })

        if (sparklineError) {
          logError("Error fetching sparkline data", sparklineError)
          // Don't throw - continue with empty sparkline data
          notifyError("No se pudieron cargar los datos históricos de leads para los anuncios.") // Added notification
        }

        debug("Fetched sparkline data", sparklineRawData?.length || 0)

        const sparklineMap = new Map<string, number[]>()

        // Generate the last 7 days (UTC aligned to 00:00)
        const today = new Date()
        today.setUTCHours(0, 0, 0, 0)
        const last7Days: string[] = []
        for (let i = 6; i >= 0; i--) {
          const day = new Date(today)
          day.setUTCDate(today.getUTCDate() - i)
          last7Days.push(day.toISOString().split("T")[0]) // YYYY-MM-DD format
        }

        // Initialize sparkline data for all referencias with zeros
        referencias.forEach((ref) => {
          sparklineMap.set(ref, new Array(7).fill(0))
        })

        // Fill in actual counts from RPC response
        if (sparklineRawData) {
          ;(sparklineRawData as DailyLeadCount[]).forEach((row) => {
            const dayIndex = last7Days.indexOf(row.day_date)
            if (dayIndex !== -1) {
              const currentData = sparklineMap.get(row.referencia) || new Array(7).fill(0)
              currentData[dayIndex] = row.lead_count
              sparklineMap.set(row.referencia, currentData)
            }
          })
        }

        // [v0] Fetch all emails for all referencias in one query using .in()
        // [CHANGE] Modified to fetch emails for each lead's email, not just for 'to' column.
        // This is crucial for calculating emails sent to leads.
        const allLeadEmails = allLeads?.map((lead) => lead.Correo).filter(Boolean) || []
        const emailsByLeadEmail = new Map<string, number>()

        if (allLeadEmails.length > 0) {
          debug("Fetching emails for lead emails in batch", allLeadEmails.length)
          const { data: correos, error: correosError } = await supabase
            .from("Correos")
            .select("to")
            .in("to", allLeadEmails)

          if (correosError) {
            logError("Error fetching emails sent to leads", correosError)
            notifyError("Error al cargar los emails enviados a los leads.") // Added notification
            throw correosError
          }

          debug("Fetched emails sent to leads", correos?.length || 0)

          // Count emails per lead email
          if (correos) {
            for (const correo of correos) {
              const email = correo.to
              emailsByLeadEmail.set(email, (emailsByLeadEmail.get(email) || 0) + 1)
            }
          }
        }

        // [v0] Group leads by Inmueble (referencia) for O(1) lookup
        const leadsByReferencia = new Map<string, Cliente[]>()
        allLeads?.forEach((lead) => {
          const ref = lead.Inmueble
          if (!ref) return
          if (!leadsByReferencia.has(ref)) {
            leadsByReferencia.set(ref, [])
          }
          leadsByReferencia.get(ref)!.push(lead)
        })

        // [v0] Now assemble the cards in memory without any additional queries
        const cards: AnuncioCard[] = []
        let totalLeadsSum = 0
        let totalCompletosSum = 0
        let totalEjecucionesSum = 0

        const now = new Date()
        const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000)

        for (const anuncio of anuncios) {
          const referencia = anuncio.Referencia
          if (!referencia) continue

          const leads = leadsByReferencia.get(referencia) || []
          // [CHANGE] Use the emailsByLeadEmail map to calculate emails sent for this announcement's leads
          const emailsEnviados = leads.reduce((sum, lead) => {
            return sum + (emailsByLeadEmail.get(lead.Correo) || 0)
          }, 0)

          const leadsTotales = leads.length
          const nuevosHoy = leads.filter((lead) => new Date(lead.created_at) >= last24h).length

          // [v0] Calculate datosCompletos using the same logic as in leads page
          const datosCompletosCount = leads.filter((lead) => {
            const completeness = calculateDataCompleteness(lead)
            return completeness === 100 && lead.Estado === "Datos completos"
          }).length

          const aLaEspera = leadsTotales - datosCompletosCount

          const sparklineData = sparklineMap.get(referencia) || new Array(7).fill(0)

          // [v0] Calculate ultima actividad
          let ultimaActividadFecha: Date | null = null
          if (leads.length > 0) {
            const sortedLeads = [...leads].sort(
              (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
            )
            ultimaActividadFecha = new Date(sortedLeads[0].created_at)
          }

          let ultimaActividad = "Sin actividad"
          if (ultimaActividadFecha) {
            const diffHours = (now.getTime() - ultimaActividadFecha.getTime()) / (1000 * 60 * 60)
            if (diffHours < 1) {
              ultimaActividad = "Hace menos de 1 hora"
            } else if (diffHours < 24) {
              ultimaActividad = `Hace ${Math.floor(diffHours)} horas`
            } else if (diffHours < 48) {
              ultimaActividad = "Ayer"
            } else {
              const diffDays = Math.floor(diffHours / 24)
              ultimaActividad = `Hace ${diffDays} días`
            }
          }

          const porcentajeCompletos = leadsTotales > 0 ? (datosCompletosCount / leadsTotales) * 100 : 0
          const tiempoAhorrado = (emailsEnviados * 2.27) / 60 // Assuming 2.27 seconds saved per email

          let healthScore = 100
          if (porcentajeCompletos < 20) healthScore -= 25
          if (aLaEspera > leadsTotales * 0.7) healthScore -= 20
          if (nuevosHoy === 0 && leadsTotales > 0) healthScore -= 15
          if (leadsTotales === 0) healthScore -= 40

          const ejecuciones = leadsTotales + emailsEnviados

          cards.push({
            id: String(anuncio.ida),
            referencia: anuncio.Referencia || "Sin referencia",
            direccion: anuncio.Direccion || "Sin dirección",
            precio: anuncio.Precio || 0,
            portal: anuncio.Portal || "Desconocido",
            descripcion: anuncio.Descripcion || "",
            activacion: anuncio.Activacion || "Pausado",
            fotoUrl: anuncio.Foto_Url || "/placeholder.svg?height=200&width=300",
            // [CHANGE] Only include fechaActivacionProgramada if feature is enabled
            ...(SCHEDULED_ACTIVATION_ENABLED && {
              fechaActivacionProgramada: anuncio.Fecha_Activacion_Programada,
            }),
            nuevosHoy,
            emailsEnviados,
            datosCompletos: datosCompletosCount,
            leadsTotales,
            aLaEspera,
            tiempoAhorrado,
            ultimaActividad,
            fechaUltimaActividad: ultimaActividadFecha ? ultimaActividadFecha : undefined, // Ensure this is set
            estado: deriveEstado(anuncio.Activacion || "Pausado"),
            healthScore: Math.max(0, healthScore),
            porcentajeCompletos,
            sparklineData,
            ejecuciones,
            consumoMes: ejecuciones, // Assuming consumoMes is same as total executions for now
          })

          totalLeadsSum += leadsTotales
          totalCompletosSum += datosCompletosCount
          totalEjecucionesSum += ejecuciones
        }

        // [v0] Sort by last activity, keeping archived ads at the bottom
        cards.sort((a, b) => {
          if (a.estado === "archivado" && b.estado !== "archivado") return 1
          if (a.estado !== "archivado" && b.estado === "archivado") return -1
          if (!a.fechaUltimaActividad && !b.fechaUltimaActividad) return 0
          if (!a.fechaUltimaActividad) return 1
          if (!b.fechaUltimaActividad) return -1
          return b.fechaUltimaActividad.getTime() - a.fechaUltimaActividad.getTime()
        })

        setAnunciosCards(cards)
        setTotalLeads(totalLeadsSum)
        setTotalCompletos(totalCompletosSum)
        setTotalEjecuciones(totalEjecucionesSum)
        debug("Anuncios processing complete. Total cards", cards.length)
      } catch (err) {
        logError("Error fetching all data", err) // Catching a broader error for easier debugging
        setAnunciosError("Error al cargar los anuncios y datos asociados. Inténtalo de nuevo más tarde.") // Set more specific error message
      } finally {
        setLoading(false)
      }
    },
    [inmobiliariaId, isAdmin, supabase], // Added isAdmin to dependencies
  )

  // [perf] Wrap updateActivacion in useCallback to create stable reference
  const updateActivacion = useCallback(
    async (ida: string, next: "Activo" | "Pausado") => {
      setProcessingId(ida) // Set processing ID for visual feedback
      try {
        const { error } = await supabase.from("Anuncios").update({ Activacion: next }).eq("ida", ida)

        if (error) {
          notifyError(`No se pudo ${next === "Activo" ? "activar" : "pausar"} el anuncio en la base de datos`)
          throw error
        }

        notifySuccess(`Anuncio ${next === "Activo" ? "activado" : "pausado"} correctamente`)
        await fetchAnuncios() // Refresh the list to reflect changes
      } catch (err) {
        logError("Error al actualizar activación", err)
      } finally {
        setProcessingId(null) // Clear processing ID
      }
    },
    [supabase, fetchAnuncios], // fetchAnuncios is now stable
  )

  const handleOpenArchiveDialog = useCallback(
    (anuncio: AnuncioCard) => {
      if (anuncio.estado === "activo") {
        // Use derived state 'estado'
        notifyError(t.notifyArchiveBlocked)
        return
      }
      setAnuncioToArchive(anuncio)
      setShowArchiveDialog(true)
    },
    [], // No dependencies
  )

  const handleArchiveAnuncio = useCallback(async () => {
    if (!anuncioToArchive) return
    setProcessingId(anuncioToArchive.id) // Set processing ID for visual feedback

    try {
      const { error } = await supabase
        .from("Anuncios")
        .update({ Activacion: "Archivado" })
        .eq("ida", anuncioToArchive.id)

      if (error) {
        notifyError(t.notifyArchiveError)
        throw error
      }

      notifySuccess(t.notifyArchiveSuccess)
      setShowArchiveDialog(false)
      setAnuncioToArchive(null)
      await fetchAnuncios() // Refresh the list
    } catch (err) {
      logError("Error al archivar anuncio", err)
    } finally {
      setProcessingId(null) // Clear processing ID
    }
  }, [anuncioToArchive, supabase, fetchAnuncios]) // fetchAnuncios is now stable

  useEffect(() => {
    if (!inmobiliariaLoading && inmobiliariaId !== null) {
      checkUser()
      fetchAnuncios()
      fetchPlanLimit()
      fetchAvailablePlans() // Corrected: called the function
    }
  }, [inmobiliariaId, inmobiliariaLoading, fetchAnuncios, fetchPlanLimit]) // Added fetchAnuncios and fetchPlanLimit to dependencies

  const fetchAvailablePlans = async () => {
    try {
      debug("Fetching all available plans from Planes table")

      const { data: planesData, error: planesError } = await supabase
        .from("Planes")
        .select("*")
        .order("idp", { ascending: true })

      if (planesError) {
        debug("Error fetching plans", planesError)
        return
      }

      if (planesData && planesData.length > 0) {
        debug("Available plans loaded", planesData)
        setAvailablePlans(planesData)
        // Set currentPlanId based on fetched data if available
        if (planesData.length > 0 && inmobiliariaId) {
          const { data: inmobiliariaData } = await supabase
            .from("Inmobiliarias")
            .select("Plan")
            .eq("idi", inmobiliariaId)
            .single()
          setCurrentPlanId(inmobiliariaData?.Plan)
        }
      }
    } catch (err) {
      debug("Error in fetchAvailablePlans", err)
      notifyError("Error al cargar los planes disponibles.") // Added notification
    }
  }

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push("/login")
      return
    }
    setUser(user)
  }

  const handleVerLeads = useCallback(
    (referencia: string) => {
      router.push(`/dashboard/leads?inmueble=${encodeURIComponent(referencia)}`)
    },
    [router],
  )

  const handleProgramarVisita = useCallback(
    async (leadId: string) => {
      try {
        const { error } = await supabase
          .from("Clientes")
          .update({ visita_propuesta: new Date().toISOString() })
          .eq("id", leadId)

        if (error) {
          notifyError("No se pudo programar la visita en la base de datos")
          throw error
        }

        notifySuccess("Visita programada correctamente")
        await fetchAnuncios() // Refresh the list
      } catch (err) {
        logError("Error al programar visita", err)
      }
    },
    [supabase, fetchAnuncios], // fetchAnuncios is now stable
  )

  const handleViewCompletos = useCallback(
    (referencia: string) => {
      const url = `/dashboard/leads?inmueble=${encodeURIComponent(referencia)}&status=completos`
      router.push(url)
    },
    [router],
  )

  const handleToggleCompletosExpanded = useCallback(
    async (anuncio: AnuncioCard) => {
      if (expandedLeadsAnuncio === anuncio.id) {
        // Collapse if already expanded
        setExpandedLeadsAnuncio(null)
        setCompletosLeads([])
      } else {
        // Expand and fetch leads with "Datos completos" status
        setExpandedLeadsAnuncio(anuncio.id)
        setLoadingCompletos(true)

        try {
          const { data, error } = await supabase
            .from("Clientes")
            .select("id, IDC, Nombre, Correo, Telefono, Ingresos, created_at, Estado, Inmueble")
            .eq("Inmueble", anuncio.referencia)
            .eq("Estado", "Datos completos")
            .order("created_at", { ascending: false })

          if (error) {
            debug("Error fetching completos leads", error)
            notifyError("Error al cargar los leads completos para este anuncio")
            setCompletosLeads([])
          } else {
            debug("Completos leads loaded", data?.length || 0)
            // [CHANGE] Assign fetched leads to the state for the expanded panel
            setCompletosLeads(data || [])
          }
        } catch (err) {
          debug("Error in handleToggleCompletosExpanded", err)
          setCompletosLeads([])
        } finally {
          setLoadingCompletos(false)
        }
      }
    },
    [expandedLeadsAnuncio, supabase], // Removed toast as notifyError is used
  )

  const handleEditar = useCallback(
    async (anuncio: AnuncioCard) => {
      debug(`Loading edit data for anuncio ${anuncio.id} - ${anuncio.referencia}`)

      try {
        const { data: anuncioData, error: anuncioError } = await supabase
          .from("Anuncios")
          .select("*")
          .eq("ida", anuncio.id)
          .single()

        if (anuncioError) {
          debug("Error fetching anuncio data", anuncioError)
          notifyError("No se pudieron cargar los datos del anuncio para edición")
          throw anuncioError
        }

        debug("Anuncio data loaded", anuncioData)

        setAnuncioToEdit(anuncio)
        setEditFormData({
          referencia: anuncioData.Referencia || "",
          direccion: anuncioData.Direccion || "",
          descripcion: anuncioData.Descripcion || "",
          precio: (anuncioData.Precio || 0).toString(),
          portal: anuncioData.Portal || "",
          activacion: anuncioData.Activacion || "Inactivo",
        })
        setShowEditDialog(true) // Open the dialog

        debug("Edit form preloaded with database data")
      } catch (err) {
        logError("Error in handleEditar", err)
        notifyError("Error al cargar los datos para edición")
      }
    },
    [supabase], // Removed toast
  )

  const handleGuardarEdicion = useCallback(
    async (formData: EditFormData) => {
      if (!anuncioToEdit) return

      try {
        const { error } = await supabase
          .from("Anuncios")
          .update({
            Referencia: formData.referencia,
            Direccion: formData.direccion,
            Precio: Number.parseFloat(formData.precio) || 0, // Ensure price is a number
            Portal: formData.portal,
            Descripcion: formData.descripcion,
          })
          .eq("ida", anuncioToEdit.id)

        if (error) {
          notifyError("No se pudo guardar los cambios del anuncio en la base de datos")
          throw error
        }

        notifySuccess(t.notifyUpdateSuccess)
        setShowEditDialog(false)
        setAnuncioToEdit(null)
        await fetchAnuncios() // Refresh the list
      } catch (err) {
        logError("Error al guardar edición", err)
      }
    },
    [anuncioToEdit, supabase, fetchAnuncios], // fetchAnuncios is now stable
  )

  // New handler for Info & FAQs modal
  const handleInfoFaqs = useCallback(
    async (anuncio: AnuncioCard) => {
      debug(`Opening Info & FAQs for anuncio ${anuncio.id}`)

      // Cargar información existente si la hay
      try {
        const { data: anuncioData, error } = await supabase.from("Anuncios").select("*").eq("ida", anuncio.id).single()

        if (!error && anuncioData) {
          setInfoFaqsData({
            informacionDetallada: anuncioData.informacion_detallada || anuncioData.Descripcion || "",
            faqs: anuncioData.faqs ? JSON.parse(anuncioData.faqs) : [{ pregunta: "", respuesta: "" }],
          })
        }
      } catch (err) {
        debug("Error loading info & faqs", err)
        notifyError("Error al cargar la información y FAQs existentes.") // Added notification
      }

      setAnuncioToEdit(anuncio) // Reusing editing state to hold the current anuncio for editing info/faqs
      setShowInfoFaqsModal(true)
    },
    [supabase],
  )

  // New handler to save Info & FAQs
  const handleSaveInfoFaqs = useCallback(async () => {
    if (!anuncioToEdit) return

    try {
      const updateData = {
        informacion_detallada: infoFaqsData.informacionDetallada,
        faqs: JSON.stringify(infoFaqsData.faqs.filter((faq) => faq.pregunta.trim() !== "")),
      }

      const { error } = await supabase.from("Anuncios").update(updateData).eq("ida", anuncioToEdit.id)

      if (error) {
        notifyError("No se pudo guardar la información y FAQs en la base de datos")
        throw error // Throw error to be caught by the outer catch block
      } else {
        notifySuccess("Información y FAQs actualizados correctamente")
        setShowInfoFaqsModal(false)
        setAnuncioToEdit(null)
        await fetchAnuncios() // Refresh list to ensure consistency
      }
    } catch (err) {
      logError("Error al guardar info & faqs", err)
      notifyError("Error al guardar la información y FAQs")
    }
  }, [anuncioToEdit, infoFaqsData, supabase, fetchAnuncios]) // fetchAnuncios is now stable

  // New handler for Statistics modal
  const handleShowStats = useCallback(async (anuncio: AnuncioCard) => {
    debug(`Loading statistics for anuncio ${anuncio.id}`)

    // Fetch actual stats data here from your 'Stats' table or similar
    // For now, populate dummy stats
    const dummyStats = {
      rebotesAltos: Math.random() > 0.5,
      incompletosAlto: Math.random() > 0.7,
      necesidadAval: Math.random() > 0.3,
    }

    setSelectedAnuncioForStats({ ...anuncio, ...dummyStats })
    setShowStatsModal(true)
  }, [])

  // New functions for managing FAQs
  const addFaq = useCallback(() => {
    setInfoFaqsData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { pregunta: "", respuesta: "" }],
    }))
  }, [])

  const removeFaq = useCallback((index: number) => {
    setInfoFaqsData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }))
  }, [])

  const updateFaq = useCallback((index: number, field: "pregunta" | "respuesta", value: string) => {
    setInfoFaqsData((prev) => ({
      ...prev,
      faqs: prev.faqs.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq)),
    }))
  }, [])

  const handleCrearAnuncio = useCallback(
    async (formData: CreationStep["data"]) => {
      // Changed param type to match usage
      if (!inmobiliariaId) return

      try {
        const { error } = await supabase.from("Anuncios").insert({
          Referencia: formData.referencia,
          Direccion: formData.direccion,
          Precio: Number.parseFloat(formData.precio) || 0, // Ensure price is a number
          Portal: formData.portal,
          Descripcion: formData.descripcion || "",
          Activacion: formData.activacion,
          usuario: inmobiliariaId,
          Foto_Url: "", // Default to empty
          // Ensure Fecha_Activacion_Programada is null for new announcements unless specified
          // [CHANGE] Set to current date if activacion is 'Activo' to ensure immediate activation
          Fecha_Activacion_Programada: formData.activacion === "Activo" ? new Date().toISOString() : null,
        })

        if (error) {
          notifyError(t.notifyCreateError)
          throw error
        }

        notifySuccess(t.notifyCreateSuccess)
        setShowCreationModal(false)
        // Reset form and close modal
        setCreationStep({
          step: 1,
          data: {
            referencia: "",
            direccion: "",
            portal: "",
            descripcion: "",
            precio: "",
            activacion: "Pausado",
          },
        })
        await fetchAnuncios() // Refresh the list
      } catch (err) {
        logError("Error al crear anuncio", err)
        notifyError(t.notifyCreateError)
      }
    },
    [inmobiliariaId, supabase, fetchAnuncios], // fetchAnuncios is now stable
  )

  // [perf] Memoize selected metrics calculation
  const selectedMetrics = useMemo(() => {
    return {
      totalAnuncios: selectedAnuncios.size > 0 ? selectedAnuncios.size : totalAnuncios, // Show count of selected if any
      totalLeads:
        selectedAnuncios.size > 0
          ? anunciosCards.filter((a) => selectedAnuncios.has(a.id)).reduce((sum, a) => sum + a.leadsTotales, 0)
          : totalLeads,
      totalCompletos:
        selectedAnuncios.size > 0
          ? anunciosCards.filter((a) => selectedAnuncios.has(a.id)).reduce((sum, a) => sum + a.datosCompletos, 0)
          : totalCompletos,
    }
  }, [selectedAnuncios, totalAnuncios, totalLeads, totalCompletos, anunciosCards])

  const handleSelectAnuncio = useCallback((anuncioId: string, checked: boolean) => {
    setSelectedAnuncios((prev) => {
      const newSelected = new Set(prev)
      if (checked) {
        newSelected.add(anuncioId)
      } else {
        newSelected.delete(anuncioId)
      }
      return newSelected
    })
  }, [])

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedAnuncios(new Set(anunciosCards.map((a) => a.id)))
      } else {
        setSelectedAnuncios(new Set())
      }
    },
    [anunciosCards],
  )

  const handleProcesarAnuncio = useCallback((anuncio: AnuncioCard) => {
    setProcessingAnuncio(anuncio)
    setShowProcessingDrawer(true)
  }, [])

  const getProgressColor = (percentage: number) => {
    if (percentage >= 95) return "bg-red-500"
    if (percentage >= 80) return "bg-orange-500"
    return "bg-blue-500"
  }

  // [perf] Memoize filtered anuncios to prevent recalculation on every render
  const normalizedSearchQuery = useMemo(() => searchQuery.trim().toLowerCase(), [searchQuery])

  const filteredAnuncios = useMemo(
    () =>
      anunciosCards.filter((anuncio) => {
        const matchesSearch =
          !normalizedSearchQuery ||
          anuncio.referencia.toLowerCase().includes(normalizedSearchQuery) ||
          anuncio.direccion.toLowerCase().includes(normalizedSearchQuery)

        const matchesPortal = filterPortal === "all" || anuncio.portal === filterPortal

        if (filterEstado === "archivado") {
          return matchesSearch && matchesPortal && anuncio.estado === "archivado"
        } else {
          // Exclude archived when filterEstado is not "archivado"
          return matchesSearch && matchesPortal && anuncio.estado !== "archivado"
        }
      }),
    [anunciosCards, normalizedSearchQuery, filterPortal, filterEstado],
  )

  // [perf] Memoize unique portals list
  const uniquePortals = useMemo(() => [...new Set(anunciosCards.map((a) => a.portal))].sort(), [anunciosCards])

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    if (score >= 40) return "text-orange-600"
    return "text-red-600"
  }

  const Sparkline = useMemo(
    () =>
      ({ data }: { data: number[] }) => {
        const max = Math.max(...data, 1)
        const min = Math.min(...data)
        const range = max - min || 1

        return (
          <svg width="60" height="20" className="inline-block">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              points={data
                .map((value, index) => {
                  const x = (index / (data.length - 1)) * 60
                  const y = 20 - ((value - min) / range) * 20
                  return `${x},${y}`
                })
                .join(" ")}
            />
          </svg>
        )
      },
    [],
  )

  const formatTime = useCallback((hours: number) => {
    const totalMinutes = Math.floor(hours * 60)
    const h = Math.floor(totalMinutes / 60)
    const m = totalMinutes % 60
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}h`
  }, [])

  const handleScheduleActivation = useCallback(
    async (anuncioId: string) => {
      // [v0] Check feature flag before proceeding
      if (!SCHEDULED_ACTIVATION_ENABLED) {
        notifyError(t.notifyScheduleFeatureDisabled)
        return
      }

      if (!scheduledDate) {
        notifyError(t.notifyScheduleDateRequired)
        return
      }

      const selectedDateTime = new Date(scheduledDate)
      const now = new Date()

      if (selectedDateTime <= now) {
        notifyError(t.notifyScheduleDateFuture)
        return
      }

      setProcessingId(anuncioId) // Set processing ID for visual feedback

      try {
        const { error } = await supabase
          .from("Anuncios")
          .update({
            Fecha_Activacion_Programada: scheduledDate,
            Activacion: "Pausado", // Ensure it's paused before scheduled activation
          })
          .eq("ida", anuncioId)

        if (error) {
          notifyError(t.notifyScheduleError)
          throw error
        }

        notifySuccess(`${t.notifyScheduleSuccess} ${selectedDateTime.toLocaleString("es-ES")}`)

        setShowScheduleDialog(false)
        setScheduledDate("")
        setSchedulingAnuncioId(null)
        await fetchAnuncios()
      } catch (err) {
        logError("Error al programar activación", err)
        notifyError(t.notifyScheduleError)
      } finally {
        setProcessingId(null) // Clear processing ID
      }
    },
    [scheduledDate, supabase, fetchAnuncios], // fetchAnuncios is now stable
  )

  const handleOpenScheduleDialog = useCallback((anuncioId: string) => {
    setSchedulingAnuncioId(anuncioId)
    setScheduledDate("") // Reset date on open
    setShowScheduleDialog(true)
  }, [])

  // Moved the planMetrics and alertConfig calculations outside the conditional return statement
  // to satisfy the ESLint rule "react-hooks/exhaustive-deps" and "react/hook-use-state"

  // [perf] Memoize plan usage calculations
  const planMetrics = useMemo(() => {
    const percentageUsed = planLimit < 1000000 ? (totalEjecuciones / planLimit) * 100 : 0
    const percentageRemaining = 100 - percentageUsed
    const remainingExecutions = planLimit < 1000000 ? planLimit - totalEjecuciones : Number.POSITIVE_INFINITY

    const today = new Date()
    const dayOfMonth = today.getDate()
    const dailyRate = dayOfMonth > 0 ? totalEjecuciones / dayOfMonth : 0
    const daysUntilLimit = dailyRate > 0 ? Math.floor(remainingExecutions / dailyRate) : 999

    return {
      percentageUsed,
      percentageRemaining,
      remainingExecutions,
      dailyRate,
      daysUntilLimit,
    }
  }, [planLimit, totalEjecuciones])

  // [perf] Memoize alert configuration
  const alertConfig = useMemo(() => {
    if (planLimit >= 1000000) return null

    const { percentageUsed, percentageRemaining, remainingExecutions, dailyRate, daysUntilLimit } = planMetrics

    if (percentageUsed >= 100) {
      return {
        level: "critical",
        color: "bg-red-600",
        textColor: "text-red-600",
        borderColor: "border-red-600",
        icon: "🚨",
        title: "Límite Alcanzado",
        message: "Has consumido el 100% de tu plan. Actualiza ahora para continuar.",
        showUpgrade: true,
        cardHighlight: true,
      }
    }
    if (percentageUsed >= 90) {
      return {
        level: "danger",
        color: "bg-red-500",
        textColor: "text-red-600",
        borderColor: "border-red-500",
        icon: "⚠️",
        title: `Solo queda ${percentageRemaining.toFixed(0)}% del plan`,
        message: `Quedan ${remainingExecutions} ejecuciones. A este ritmo, alcanzarás el límite en ${daysUntilLimit} días.`,
        showUpgrade: true,
        cardHighlight: true,
      }
    }
    if (percentageUsed >= 75) {
      return {
        level: "warning",
        color: "bg-orange-500",
        textColor: "text-orange-600",
        borderColor: "border-orange-500",
        icon: "⚠️",
        title: `Queda ${percentageRemaining.toFixed(0)}% del plan`,
        message: `Consumo diario promedio: ${Math.round(dailyRate)} ejecuciones/día. Estimado ${daysUntilLimit} días restantes.`,
        showUpgrade: true,
        cardHighlight: false,
      }
    }
    if (percentageUsed >= 50) {
      return {
        level: "caution",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
        borderColor: "border-yellow-500",
        icon: "📊",
        title: `Queda ${percentageRemaining.toFixed(0)}% del plan`,
        message: `Has usado la mitad de tu plan. Ritmo actual: ${Math.round(dailyRate)} ejecuciones/día.`,
        showUpgrade: false,
        cardHighlight: false,
      }
    }
    return {
      level: "normal",
      color: "bg-green-500",
      textColor: "text-green-600",
      borderColor: "border-green-500",
      icon: "✅",
      title: `Queda ${percentageRemaining.toFixed(0)}% del plan`,
      message: `Consumo saludable. Promedio: ${Math.round(dailyRate)} ejecuciones/día.`,
      showUpgrade: false,
      cardHighlight: false,
    }
  }, [planLimit, planMetrics])

  const handleChangePlan = useCallback(
    async (newPlanId: string) => {
      if (!inmobiliariaId) return

      try {
        const { error } = await supabase
          .from("Inmobiliarias")
          .update({ Plan: Number.parseInt(newPlanId) })
          .eq("idi", inmobiliariaId)

        if (error) {
          notifyError("No se pudo cambiar el plan en la base de datos")
          throw error
        }

        notifySuccess("Plan actualizado correctamente")
        await fetchPlanLimit()
        await fetchAvailablePlans() // Refresh available plans to show correct current plan
      } catch (err) {
        logError("Error al cambiar plan", err)
        notifyError("Error al cambiar el plan")
      }
    },
    [inmobiliariaId, supabase, fetchPlanLimit], // fetchPlanLimit is now stable
  )

  const handleOpenPlanSelector = useCallback(() => {
    setShowPlanSelector(true)
  }, [])

  if (loading || inmobiliariaLoading) {
    return (
      <div className="p-4 md:p-8">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Cargando anuncios...</span>
        </div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="p-6 space-y-6">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4 border-b">
          <div className="space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-foreground">{t.pageTitle}</h1>
                <p className="text-xs text-muted-foreground">{t.pageDescription}</p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-0">
                  {anunciosCards.filter((a) => a.estado === "activo").length} {t.statusActive}
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs px-2 py-0">
                  {totalCompletos} {t.statusComplete}
                </Badge>
              </div>
            </div>

            <Card
              className={`border rounded-lg p-2 transition-all duration-300 ${
                alertConfig?.cardHighlight
                  ? `border-red-500/50 shadow-lg shadow-red-500/20 bg-gradient-to-br from-white via-red-50/30 to-red-100/40 ring-2 ring-red-500/20`
                  : "bg-card border"
              }`}
            >
              <div className="space-y-2">
                {/* Header with remaining percentage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">{t.planConsumption}</h3>
                    {alertConfig && (
                      <Badge
                        variant="outline"
                        className={`${alertConfig.textColor} border-current font-semibold text-xs px-1.5 py-0`}
                      >
                        {alertConfig.icon} {alertConfig.title}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {alertConfig?.showUpgrade && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            size="sm"
                            className={`h-7 text-xs ${
                              planMetrics.percentageUsed >= 100
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg"
                                : "border border-muted-foreground/30 bg-transparent hover:bg-muted/50 text-foreground"
                            }`}
                          >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            {t.planChange}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                          <div className="px-2 py-1.5 text-sm font-semibold">Planes Disponibles</div>
                          {availablePlans.map((plan) => (
                            <DropdownMenuItem
                              key={plan.idp}
                              onClick={() => handleChangePlan(plan.idp.toString())}
                              className={`flex flex-col items-start gap-1 p-3 ${
                                currentPlanId === plan.idp ? "bg-primary/10" : ""
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span className="font-semibold">{plan.Nombre}</span>
                                <span className="text-sm font-bold">€{plan.Precio}/mes</span>
                              </div>
                              <div className="text-xs text-muted-foreground space-y-0.5">
                                <div>
                                  {plan.Usuarios} usuarios • {formatPlanValue(plan.ejecuciones)} ejecuciones
                                </div>
                                <div>
                                  {formatPlanValue(plan.Anuncios)} anuncios • Soporte: {plan.Soporte}
                                </div>
                              </div>
                              {currentPlanId === plan.idp && (
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {t.planCurrent}
                                </Badge>
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          {t.planAddons}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <ShoppingCart className="h-3 w-3 mr-2" />
                          +50 ejecuciones - €29
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ShoppingCart className="h-3 w-3 mr-2" />
                          +100 ejecuciones - €49
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleOpenPlanSelector}>
                          <Settings className="h-3 w-3 mr-2" />
                          {t.planUpgrade}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Plan usage card */}
                <div className="flex items-center gap-2 p-2 bg-card rounded-lg border shadow-sm">
                  {usingFallbackPlan && (
                    <div className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-medium rounded">
                      {t.planDataOffline}
                    </div>
                  )}
                  <div className="text-center p-1.5 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">{totalEjecuciones.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">{t.metricsExecutions}</div>
                  </div>
                  <div className="text-center p-1.5 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">{planLimit < 1000000 ? planMetrics.daysUntilLimit : "∞"}</div>
                    <div className="text-[10px] text-muted-foreground">{t.metricsDaysEstimated}</div>
                  </div>
                </div>

                {/* Usage stats */}
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center p-1.5 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">{totalEjecuciones.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">{t.metricsUsed}</div>
                  </div>
                  <div className="text-center p-1.5 bg-muted/50 rounded-lg">
                    <div className={`text-lg font-bold ${alertConfig?.textColor || "text-foreground"}`}>
                      {planLimit < 1000000 ? planMetrics.remainingExecutions.toLocaleString() : "∞"}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{t.metricsRemaining}</div>
                  </div>
                  <div className="text-center p-1.5 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">{planLimit < 1000000 ? planMetrics.daysUntilLimit : "∞"}</div>
                    <div className="text-[10px] text-muted-foreground">{t.metricsDaysEstimated}</div>
                  </div>
                </div>

                {/* Progress bar and details */}
                {planLimit < 1000000 ? (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>
                        {totalEjecuciones.toLocaleString()} / {formatPlanValue(planLimit)} {t.metricsExecutions}
                      </span>
                      <span className="font-semibold">{planMetrics.percentageUsed.toFixed(1)}% usado</span>
                    </div>
                    <Progress
                      value={planMetrics.percentageUsed}
                      className={`h-2 ${alertConfig?.color || "bg-blue-500"}`}
                    />

                    {/* Alert message */}
                    {alertConfig && (
                      <div
                        className={`flex items-start gap-2 p-2 rounded-lg border ${alertConfig.borderColor} ${alertConfig.level === "critical" || alertConfig.level === "danger" ? "bg-red-50" : alertConfig.level === "warning" ? "bg-orange-50" : alertConfig.level === "caution" ? "bg-yellow-50" : "bg-green-50"}`}
                      >
                        <span className="text-sm">{alertConfig.icon}</span>
                        <div className="flex-1">
                          <p className={`text-xs font-medium ${alertConfig.textColor}`}>{alertConfig.message}</p>
                          {alertConfig.showUpgrade && (
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              💡 Considera ampliar tu plan para evitar interrupciones en el servicio.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-1">
                    <p className="text-xs font-medium text-green-600">{t.planUnlimited}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Ejecuciones utilizadas este mes: {totalEjecuciones.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {anunciosError ? (
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Error al cargar anuncios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600">{anunciosError}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex gap-3 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder={t.filterSearchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      aria-label={t.ariaSearchAnnouncements}
                    />
                  </div>
                </div>

                <select
                  value={filterPortal}
                  onChange={(e) => setFilterPortal(e.target.value)}
                  className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label={t.ariaFilterPortal}
                >
                  <option value="all">{t.filterAllPortals}</option>
                  {uniquePortals.map((portal) => (
                    <option key={portal} value={portal}>
                      {portal}
                    </option>
                  ))}
                </select>

                <button
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-dashed border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => setShowCreationModal(true)}
                  aria-label={t.actionCreate}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                    <Plus className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-medium text-sm">{t.actionCreate}</span>
                    <span className="text-[10px] text-muted-foreground">· 3 pasos</span>
                  </div>
                </button>

                <button
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-dashed transition-all cursor-pointer group ${
                    filterEstado === "archivado"
                      ? "border-gray-500 bg-gray-100 hover:bg-gray-200"
                      : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
                  }`}
                  onClick={() => {
                    setFilterEstado(filterEstado === "archivado" ? "all" : "archivado")
                  }}
                  aria-label={t.ariaViewArchived}
                  aria-pressed={filterEstado === "archivado"}
                >
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors shrink-0">
                    <Target className="h-3 w-3 text-gray-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-medium text-sm">
                      {filterEstado === "archivado" ? t.filterViewingArchived : t.filterViewArchived}
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {t.resultsShowing} <strong className="text-foreground">{filteredAnuncios.length}</strong> {t.resultsOf}{" "}
                  <strong className="text-foreground">{anunciosCards.length}</strong> {t.resultsAnnouncements}
                  {filterEstado === "archivado" && ` ${t.resultsArchived}`}
                </span>
                {(normalizedSearchQuery || filterPortal !== "all" || filterEstado !== "all") && (
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setFilterPortal("all")
                      setFilterEstado("all") // Also reset filterEstado when clearing
                    }}
                    className="text-xs text-primary hover:underline"
                  >
                    {t.actionClearFilters}
                  </button>
                )}
              </div>
            </div>

            {loading && anunciosCards.length === 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <AnuncioCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredAnuncios.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {filterEstado === "archivado" ? t.resultsNoArchived : t.resultsNoMatch}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAnuncios.map((anuncio) => (
                  <Card
                    key={anuncio.id}
                    className={
                      anuncio.estado === "pausado"
                        ? "transition-all duration-200 hover:shadow-md border-l-4 border-l-yellow-400 bg-muted/30 opacity-75"
                        : anuncio.estado === "activo"
                          ? "transition-all duration-200 hover:shadow-md border-l-4 border-l-primary/20"
                          : "transition-all duration-200 hover:shadow-md border-l-4 border-l-gray-400 bg-muted/50"
                    }
                  >
                    <CardHeader className="pb-0 pt-3">
                      <div className="space-y-1">
                        {/* Title row */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold text-base truncate">{anuncio.referencia}</h3>
                              <Badge
                                variant={
                                  anuncio.estado === "activo"
                                    ? "default"
                                    : anuncio.estado === "pausado"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={`text-[10px] px-1.5 py-0 ${
                                  anuncio.estado === "pausado"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                                    : anuncio.estado === "archivado"
                                      ? "bg-gray-100 text-gray-600"
                                      : ""
                                }`}
                              >
                                {anuncio.activacion}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground truncate mt-0.5">{anuncio.direccion}</p>
                          </div>

                          <div className="flex items-center gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs px-2 bg-transparent"
                              onClick={() => handleOpenScheduleDialog(anuncio.id)}
                              disabled={anuncio.estado === "archivado" || !SCHEDULED_ACTIVATION_ENABLED} // Disable if archived or feature flag off
                              title={!SCHEDULED_ACTIVATION_ENABLED ? t.dialogScheduleFeatureDisabled : t.ariaScheduleActivation}
                              aria-label={t.ariaScheduleActivation}
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              {t.actionSchedule}
                            </Button>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 w-7 p-0"
                                  aria-label={t.ariaMoreOptions}
                                  title={t.ariaMoreOptions}
                                >
                                  <MoreVertical className="h-3.5 w-3.5" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEditar(anuncio)}>
                                  <Edit className="h-3.5 w-3.5 mr-2" />
                                  {t.actionEditAnnouncement}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleViewCompletos(anuncio.referencia)}>
                                  <CheckCircle className="h-3.5 w-3.5 mr-2" />
                                  {t.actionViewComplete}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleInfoFaqs(anuncio)}>
                                  <Settings className="h-3.5 w-3.5 mr-2" />
                                  {t.actionEditInfoFaqs}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleShowStats(anuncio)}>
                                  <BarChart3 className="h-3.5 w-3.5 mr-2" />
                                  {t.actionViewStats}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleOpenArchiveDialog(anuncio)}
                                  className="text-orange-600"
                                  disabled={anuncio.estado === "archivado"} // Disable if already archived
                                >
                                  <Archive className="h-3.5 w-3.5 mr-2" />
                                  {t.actionArchive}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>

                        <div className="flex justify-center mt-1">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 h-7 text-xs"
                            onClick={() => handleVerLeads(anuncio.referencia)}
                            disabled={anuncio.estado === "archivado"} // Disable if archived
                          >
                            <Eye className="h-3 w-3 mr-1.5" />
                            {t.actionViewLeads} ({anuncio.leadsTotales})
                          </Button>
                        </div>

                        <div className="flex items-center justify-center gap-3 py-0.5">
                          {SCHEDULED_ACTIVATION_ENABLED && anuncio.fechaActivacionProgramada && (
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              Programado: {new Date(anuncio.fechaActivacionProgramada).toLocaleDateString("es-ES")}
                            </Badge>
                          )}
                          <span className="text-sm font-medium">
                            {processingId === anuncio.id ? "Procesando..." : anuncio.activacion}
                          </span>
                          <Switch
                            checked={anuncio.estado === "activo"}
                            onCheckedChange={() => {
                              const next = anuncio.activacion === "Activo" ? "Pausado" : "Activo"
                              updateActivacion(anuncio.id, next)
                            }}
                            disabled={processingId === anuncio.id || anuncio.estado === "archivado"} // Disable if archived or processing
                            className="scale-125"
                            aria-label={t.ariaToggleStatus}
                          />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-1.5 pt-2 pb-3">
                      <div>
                        <h4 className="text-xs font-semibold mb-0.5 text-muted-foreground">
                          Rendimiento (últimas 24h)
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{anuncio.nuevosHoy}</div>
                            <div className="text-[10px] text-muted-foreground">{t.metricsNewToday}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{anuncio.emailsEnviados}</div>
                            <div className="text-[10px] text-muted-foreground">{t.metricsEmailsSent}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">{anuncio.datosCompletos}</div>
                            <div className="text-[10px] text-muted-foreground">{t.metricsComplete}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">{anuncio.aLaEspera}</div>
                            <div className="text-[10px] text-muted-foreground">{t.metricsWaiting}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-indigo-600">
                              {formatTime(anuncio.tiempoAhorrado)}
                            </div>
                            <div className="text-[10px] text-muted-foreground">{t.metricsTimeSaved}</div>
                          </div>
                        </div>
                      </div>

                      {/* Consumo del anuncio (health score) */}
                      <div>
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-semibold text-muted-foreground">Consumo del anuncio</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground">Tendencia 7d</span>
                            <div className="text-green-600">
                              <Sparkline data={anuncio.sparklineData} />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs">Ejecuciones: {anuncio.ejecuciones}</span>
                          <span className="text-xs">
                            {planLimit < 1000000
                              ? ((anuncio.ejecuciones / planLimit) * 100).toFixed(1) + "% del plan"
                              : "∞% del plan"}
                          </span>
                        </div>

                        <Progress
                          value={planLimit < 1000000 ? (anuncio.ejecuciones / planLimit) * 100 : 0}
                          className="h-1"
                        />
                      </div>

                      {/* Quick Actions */}
                      <div className="flex gap-1 pt-0.5 border-t">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent text-xs h-7"
                          onClick={() => handleEditar(anuncio)}
                          title={t.actionEditAnnouncement}
                          aria-label={t.ariaEditAnnouncement}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          {t.actionEdit}
                        </Button>
                        <Button
                          size="sm"
                          variant={expandedLeadsAnuncio === anuncio.id ? "default" : "outline"}
                          className="flex-1 bg-transparent text-xs h-7"
                          onClick={() => handleToggleCompletosExpanded(anuncio)}
                          disabled={anuncio.estado === "archivado"} // Disable if archived
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {t.actionViewComplete} ({anuncio.datosCompletos})
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent text-xs h-7"
                          onClick={() => handleInfoFaqs(anuncio)}
                        >
                          <Settings className="h-3 w-3 mr-1" />
                          {t.actionEditInfoFaqs}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 bg-transparent"
                          onClick={() => handleShowStats(anuncio)}
                          disabled={anuncio.estado === "archivado"} // Disable if archived
                          title={t.ariaViewStats}
                          aria-label={t.ariaViewStats}
                        >
                          <BarChart3 className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-[10px] text-muted-foreground pt-0.5 border-t">
                        Última actividad: {anuncio.ultimaActividad}
                      </div>
                    </CardContent>
                  </Card>

      {/* Expanded panel for leads with complete data */}
{expandedLeadsAnuncio === anuncio.id && (
  <Card className="bg-muted/30 border-l-4 border-l-green-500/40">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm">
          Leads con Datos Completos - {anuncio.referencia}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setExpandedLeadsAnuncio(null);
            setCompletosLeads([]);
          }}
          aria-label={t["aria.closeLeadsPanel"]}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      {loadingCompletos ? (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      ) : completosLeads.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          No hay leads con datos completos para este anuncio
        </p>
      ) : (
        <div className="space-y-2">
          {completosLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center justify-between p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{lead.Nombre}</p>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-xs text-muted-foreground">{lead.Correo}</p>
                  {lead.Telefono && (
                    <p className="text-xs text-muted-foreground">{lead.Telefono}</p>
                  )}
                </div>
                {lead.Ingresos && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Ingresos: {lead.Ingresos}€
                  </p>
                )}
              </div>
              <Button
                size="sm"
                onClick={() => handleProgramarVisita(lead.id)}
                className="ml-2"
              >
                <UserCheck className="h-3.5 w-3.5 mr-1" />
                Programar visita
              </Button>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
)}
