"use client"

// FIX: Removed duplicate imports of DialogContent, DialogHeader, DialogTitle
// import { DialogTitle } from "@/components/ui/dialog"
// import { DialogHeader } from "@/components/ui/dialog"
// import { DialogContent } from "@/components/ui/dialog"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { useInmobiliaria } from "@/lib/contexts/inmobiliaria-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Building,
  Euro,
  Clock,
  Star,
  FileText,
  User,
  X,
  Home,
  XCircle,
  MoreVertical,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast" // Added useToast hook
import React from "react" // Imported React

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

interface Lead {
  id: string
  IDC?: string
  created_at: string
  Estado?: string
  Pedir_Aval?: boolean
  Nombre?: string
  Correo?: string
  Telefono?: string
  Inmueble?: string
  Fecha_Entrada?: string
  Ingresos?: number
  Documento?: string
  Tipo_Documento?: string
  Codigo_Postal?: string
  Pais?: string
  Persona_2?: string
  Tipo_Documento_2?: string
  Documento_2?: string
  Pais_2?: string
  Ingresos_2?: number
  Persona_3?: string
  Tipo_Documento_3?: string
  Documento_3?: string
  Ingresos_3?: number
  Observaciones?: string
  Recordatorio?: string
  usuario?: string
}

interface Advertisement {
  ida: string // Changed from 'id' to 'ida' to match database schema
  created_at: string
  Referencia?: string
  Direccion?: string
  Precio?: number
  Pais_Aval?: string
  usuario?: string
  Activacion?: string // Changed from boolean to string to support "Activo", "Pausado", "Archivado"
  Portal?: string
  Descripcion?: string
}

interface Communication {
  id: string
  created_at: string
  From?: string
  to?: string
  Email?: string
  Subject?: string
  Text?: string
  Html?: string
  Tipo?: string
  Nombre?: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([])
  const [selectedAdvertisement, setSelectedAdvertisement] = useState<string | null>(null)
  const [communications, setCommunications] = useState<Communication[]>([])
  const [selectedCommunication, setSelectedCommunication] = useState<Communication | null>(null)
  const [isCommDialogOpen, setIsCommDialogOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [availableStatuses, setAvailableStatuses] = useState<string[]>([])
  const [totalLeads, setTotalLeads] = useState(0)
  const [newLeadsToday, setNewLeadsToday] = useState(0)
  const [completedLeads, setCompletedLeads] = useState(0)
  const [conversionRate, setConversionRate] = useState(0)
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const [editFormData, setEditFormData] = useState<Partial<Lead>>({})
  const [selectedPersona, setSelectedPersona] = useState<1 | 2 | 3>(1)
  const [documentStatus, setDocumentStatus] = useState<{ [key: string]: "pending" | "verified" | "not_verified" }>({
    dni: "pending",
    income: "pending",
    person2: "not_verified",
    person3: "not_verified",
  })
  const [isNewLeadDialogOpen, setIsNewLeadDialogOpen] = useState(false)
  const [newLeadFormData, setNewLeadFormData] = useState<Partial<Lead>>({
    Estado: "Pendiente",
    Pedir_Aval: false,
  })
  const [isSubmittingNewLead, setIsSubmittingNewLead] = useState(false)

  const [isReactivateDialogOpen, setIsReactivateDialogOpen] = useState(false)
  const [advertisementToReactivate, setAdvertisementToReactivate] = useState<Advertisement | null>(null)

  const [isAvalDialogOpen, setIsAvalDialogOpen] = useState(false)
  const [avalCalculation, setAvalCalculation] = useState<{
    income: number // Total combined income from all personas
    persona1Income: number
    persona2Income: number
    persona3Income: number
    actualRent: number | null
    minRequiredIncome: number | null
    idealIncome: number | null
    needsAval: boolean
    incomeRatio: number | null
  } | null>(null)

  // isApprovalDialogOpen state is removed because it's now managed by LeadApproveWrapper
  // const [isApprovalDialogOpen, setIsApprovalDialogOpen] = useState(false)

  // FIX: Added toast hook and copy state management
  const { toast } = useToast()
  const [copiedField, setCopiedField] = React.useState<string | null>(null)

  const { inmobiliariaId, inmobiliariaNombre, loading: inmobiliariaLoading } = useInmobiliaria() // Added inmobiliariaNombre

  const supabase = createClient()

  const [selectedLeadIds, setSelectedLeadIds] = useState<string[]>([])
  const [isBulkSelectionMode, setIsBulkSelectionMode] = useState(false)
  const [bulkConfirmationOpen, setBulkConfirmationOpen] = useState(false)
  const [pendingBulkStatus, setPendingBulkStatus] = useState<string | null>(null)

  useEffect(() => {
    if (!inmobiliariaLoading && inmobiliariaId !== null) {
      fetchLeads()
      fetchAdvertisements()
    }
  }, [inmobiliariaId, inmobiliariaLoading])

  useEffect(() => {
    filterLeads()
  }, [searchTerm, statusFilter, selectedAdvertisement, leads, advertisements])

  useEffect(() => {
    calculateMetrics()
  }, [leads, selectedAdvertisement, advertisements])

  const calculateMetrics = () => {
    let leadsToAnalyze = leads

    // Filter by selected advertisement if one is selected
    if (selectedAdvertisement && selectedAdvertisement !== "all") {
      const selectedAd = advertisements.find((ad) => ad.ida === selectedAdvertisement)
      if (selectedAd && selectedAd.Referencia) {
        leadsToAnalyze = leads.filter((lead) => lead.Inmueble === selectedAd.Referencia)
      }
    }

    // Calculate date thresholds
    const now = new Date()
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    // Total Leads (last 30 days)
    const leadsLast30Days = leadsToAnalyze.filter((lead) => {
      const leadDate = new Date(lead.created_at)
      return leadDate >= last30Days
    })
    setTotalLeads(leadsLast30Days.length)

    // Nuevos Hoy (last 24 hours)
    const leadsLast24Hours = leadsToAnalyze.filter((lead) => {
      const leadDate = new Date(lead.created_at)
      return leadDate >= last24Hours
    })
    setNewLeadsToday(leadsLast24Hours.length)

    // Completados (leads with complete data created in last 24 hours)
    const completedLast24Hours = leadsToAnalyze.filter((lead) => {
      const leadDate = new Date(lead.created_at)
      const isComplete = !!(
        lead.Nombre &&
        lead.Correo &&
        lead.Telefono &&
        lead.Ingresos &&
        lead.Inmueble &&
        lead.Estado
      )
      return isComplete && leadDate >= last24Hours
    })
    setCompletedLeads(completedLast24Hours.length)

    const completedTotal = leadsLast30Days.filter((lead) => {
      return !!(lead.Nombre && lead.Correo && lead.Telefono && lead.Ingresos && lead.Inmueble && lead.Estado)
    }).length
    const rate = leadsLast30Days.length > 0 ? Math.round((completedTotal / leadsLast30Days.length) * 100) : 0
    setConversionRate(rate)
  }

  const fetchAdvertisements = async () => {
    try {
      let query = supabase.from("Anuncios").select("*").order("created_at", { ascending: false })

      if (inmobiliariaId) {
        query = query.eq("usuario", inmobiliariaId)
      }

      const { data: adsData, error: adsError } = await query

      if (adsError) throw adsError
      console.log("[v0] Advertisements fetched for leads page:", adsData?.length || 0)
      setAdvertisements(adsData || [])
    } catch (err) {
      console.error("[v0] Error fetching advertisements:", err)
    }
  }

  const fetchLeads = async () => {
    try {
      setLoading(true)

      let dataQuery = supabase.from("Clientes").select("*").order("created_at", { ascending: false })

      if (inmobiliariaId) {
        dataQuery = dataQuery.eq("usuario", inmobiliariaId)
      }

      // Get leads data
      const { data: leadsData, error: leadsError } = await dataQuery

      if (leadsError) throw leadsError

      setLeads(leadsData || [])

      if (leadsData) {
        const uniqueStatuses = Array.from(new Set(leadsData.map((lead) => lead.Estado).filter(Boolean)))
        setAvailableStatuses(uniqueStatuses)
      }
    } catch (err) {
      console.error("[v0] Error fetching leads:", err)
      setError("Error al cargar los leads")
    } finally {
      setLoading(false)
    }
  }

  const fetchCommunications = async (leadEmail: string) => {
    try {
      const { data, error } = await supabase
        .from("Correos")
        .select("*")
        .or(`From.eq.${leadEmail},to.eq.${leadEmail}`)
        .order("created_at", { ascending: false })

      if (error) throw error
      setCommunications(data || [])
    } catch (err) {
      console.error("[v0] Error fetching communications:", err)
    }
  }

  const openCommunicationDetail = (comm: Communication) => {
    setSelectedCommunication(comm)
    setIsCommDialogOpen(true)
  }

  const isCommunicationSent = (comm: Communication) => {
    const tipoValue = comm.Tipo?.toLowerCase().trim()
    const isSent = tipoValue === "enviados" || tipoValue === "enviado"
    // console.log("[v0] Communication Tipo:", comm.Tipo, "-> isSent:", isSent) // This line was removed as per the update
    return isSent
  }

  const reactivateAdvertisement = async () => {
    if (!advertisementToReactivate) return

    try {
      const { error } = await supabase
        .from("Anuncios")
        .update({ Activacion: "Activo" })
        .eq("ida", advertisementToReactivate.ida)

      if (error) throw error

      console.log("[v0] Advertisement reactivated successfully")

      // Update local state
      setAdvertisements(
        advertisements.map((ad) => (ad.ida === advertisementToReactivate.ida ? { ...ad, Activacion: "Activo" } : ad)),
      )

      setIsReactivateDialogOpen(false)
      setAdvertisementToReactivate(null)

      // Refresh advertisements
      await fetchAdvertisements()
    } catch (err) {
      console.error("[v0] Error reactivating advertisement:", err)
      alert("Error al reactivar el anuncio. Por favor, intenta de nuevo.")
    }
  }

  const filterLeads = () => {
    console.log("[v0] Filtering leads with selectedAdvertisement:", selectedAdvertisement)
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.Nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.Correo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.Inmueble?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.Estado === statusFilter)
    }

    if (selectedAdvertisement && selectedAdvertisement !== "all") {
      const selectedAd = advertisements.find((ad) => ad.ida === selectedAdvertisement)
      console.log("[v0] Selected advertisement:", selectedAd)
      if (selectedAd && selectedAd.Referencia) {
        console.log("[v0] Filtering by Referencia:", selectedAd.Referencia)
        // Filter leads where Inmueble field exactly matches the advertisement's Referencia
        filtered = filtered.filter((lead) => {
          const matches = lead.Inmueble === selectedAd.Referencia
          if (matches) {
            console.log("[v0] Lead matches:", lead.Nombre, "- Inmueble:", lead.Inmueble)
          }
          return matches
        })
      }
    }

    console.log("[v0] Filtered leads count:", filtered.length)
    setFilteredLeads(filtered)
  }

  const openLeadDetail = async (lead: Lead) => {
    setSelectedLead(lead)
    setEditFormData(lead)
    setIsEditingPersonalInfo(false)
    // Reset selected persona to 1 when opening a new lead
    setSelectedPersona(1)
    if (lead.Correo) {
      await fetchCommunications(lead.Correo)
    }
  }

  const handleAdvertisementClick = (ad: Advertisement) => {
    if (ad.Activacion === "Pausado") {
      setAdvertisementToReactivate(ad)
      setIsReactivateDialogOpen(true)
    } else {
      console.log("[v0] Selecting advertisement:", ad.ida, "- Referencia:", ad.Referencia)
      setSelectedAdvertisement(ad.ida)
    }
  }

  const savePersonalInfo = async () => {
    if (!selectedLead || !editFormData) return

    try {
      const { error } = await supabase
        .from("Clientes")
        .update({
          Nombre: editFormData.Nombre,
          Correo: editFormData.Correo,
          Telefono: editFormData.Telefono,
          Ingresos: editFormData.Ingresos,
          Inmueble: editFormData.Inmueble,
          Pais: editFormData.Pais,
          Codigo_Postal: editFormData.Codigo_Postal,
          Tipo_Documento: editFormData.Tipo_Documento,
          Documento: editFormData.Documento,
          // Update persona-specific fields based on selectedPersona
          ...(selectedPersona === 1 && {
            Persona_2: editFormData.Persona_2, // Only update if editing persona 1
            Tipo_Documento_2: editFormData.Tipo_Documento_2,
            Documento_2: editFormData.Documento_2,
            Pais_2: editFormData.Pais_2,
            Ingresos_2: editFormData.Ingresos_2,
          }),
          ...(selectedPersona === 2 && {
            Persona_2: editFormData.Persona_2,
            Tipo_Documento_2: editFormData.Tipo_Documento_2,
            Documento_2: editFormData.Documento_2,
            Pais_2: editFormData.Pais_2,
            Ingresos_2: editFormData.Ingresos_2,
          }),
          ...(selectedPersona === 3 && {
            Persona_3: editFormData.Persona_3,
            Tipo_Documento_3: editFormData.Tipo_Documento_3,
            Documento_3: editFormData.Documento_3,
            Ingresos_3: editFormData.Ingresos_3,
          }),
        })
        .eq("id", selectedLead.id)

      if (error) throw error

      const updatedLead = { ...selectedLead, ...editFormData }
      setSelectedLead(updatedLead)
      setLeads(leads.map((lead) => (lead.id === selectedLead.id ? updatedLead : lead)))
      setIsEditingPersonalInfo(false)

      console.log("[v0] Personal information updated successfully")
    } catch (err) {
      console.error("[v0] Error updating personal information:", err)
    }
  }

  const cancelEdit = () => {
    setEditFormData(selectedLead || {})
    setIsEditingPersonalInfo(false)
  }

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase.from("Clientes").update({ Estado: newStatus }).eq("id", leadId)

      if (error) throw error

      // Update local state
      setLeads(leads.map((lead) => (lead.id === leadId ? { ...lead, Estado: newStatus } : lead)))

      console.log("[v0] Lead status updated successfully")
    } catch (err) {
      console.error("[v0] Error updating lead status:", err)
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Validado":
        return "bg-green-100 text-green-800"
      case "Completado":
        return "bg-blue-100 text-blue-800"
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "Rechazado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Added "Datos Completos" and "Datos Incompletos" cases with appropriate colors.
  const getStatusColors = (estado: string | null) => {
    switch (estado) {
      case "Datos Completos":
      case "Completado":
        return {
          bg: "#dcfce7",
          border: "#22c55e",
          text: "#16a34a",
          label: estado === "Datos Completos" ? "Datos Completos" : "Completado",
        }
      case "Datos Incompletos":
        return {
          bg: "#fef3c7",
          border: "#f59e0b",
          text: "#d97706",
          label: "Datos Incompletos",
        }
      case "Validado":
        return {
          bg: "#dbeafe",
          border: "#3b82f6",
          text: "#2563eb",
          label: estado,
        }
      case "Pendiente":
        return {
          bg: "#fef3c7",
          border: "#f59e0b",
          text: "#d97706",
          label: estado,
        }
      case "Rechazado":
        return {
          bg: "#fee2e2",
          border: "#ef4444",
          text: "#dc2626",
          label: estado,
        }
      case "Pedir Aval":
        return {
          bg: "#f3e8ff",
          border: "#a855f7",
          text: "#9333ea",
          label: "Aval Pedido",
        }
      case "Aceptado":
        return {
          bg: "#d1fae5",
          border: "#10b981",
          text: "#059669",
          label: "Aprobado",
        }
      case "Descartado":
        return {
          bg: "#f3f4f6",
          border: "#9ca3af",
          text: "#6b7280",
          label: "Descartado",
        }
      default:
        // For any other Estado value, use neutral colors but display the actual value
        return {
          bg: "#f3f4f6",
          border: "#9ca3af",
          text: "#374151",
          label: estado || "Sin Estado",
        }
    }
  }

  const calculateDataCompleteness = (lead: Lead) => {
    let totalFields = 0
    let filledFields = 0

    // Persona 1 fields (8 fields)
    const persona1Fields = [
      lead.Nombre,
      lead.Correo,
      lead.Telefono,
      lead.Pais,
      lead.Ingresos,
      lead.Codigo_Postal,
      lead.Tipo_Documento,
      lead.Documento,
    ]
    totalFields += 8
    filledFields += persona1Fields.filter((field) => field !== null && field !== undefined && field !== "").length

    // Persona 2 fields (5 fields) - only count if Persona_2 name exists
    if (lead.Persona_2) {
      const persona2Fields = [lead.Persona_2, lead.Pais_2, lead.Ingresos_2, lead.Tipo_Documento_2, lead.Documento_2]
      totalFields += 5
      filledFields += persona2Fields.filter((field) => field !== null && field !== undefined && field !== "").length
    }

    // Persona 3 fields (4 fields) - only count if Persona_3 name exists
    if (lead.Persona_3) {
      const persona3Fields = [lead.Persona_3, lead.Ingresos_3, lead.Tipo_Documento_3, lead.Documento_3]
      totalFields += 4
      filledFields += persona3Fields.filter((field) => field !== null && field !== undefined && field !== "").length
    }

    return Math.round((filledFields / totalFields) * 100)
  }

  const countPersonas = (lead: Lead) => {
    let count = 1 // Always at least Persona 1
    if (lead.Persona_2) count++
    if (lead.Persona_3) count++
    return count
  }

  const calculateIAScore = (lead: Lead) => {
    let score = 0
    if (lead.Nombre) score += 20
    if (lead.Correo) score += 20
    if (lead.Telefono) score += 20
    if (lead.Ingresos && lead.Ingresos > 0) score += 25
    if (lead.Documento) score += 15
    return Math.min(score, 100)
  }

  const formatCurrency = (amount?: number) => {
    if (!amount || amount === 0) return "- €"
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(amount)
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "No especificado"
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getDaysAgo = (dateString?: string) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Hoy"
    if (diffDays === 1) return "Ayer"
    return `Hace ${diffDays} días`
  }

  const getLastCommunication = () => {
    if (communications.length === 0) return null

    const lastComm = communications[0] // Already sorted by created_at desc
    const daysAgo = getDaysAgo(lastComm.created_at)
    const isSent = lastComm.From?.includes(inmobiliariaNombre || "") || false

    return {
      daysAgo,
      type: isSent ? "enviado" : "recibido",
      isSent,
    }
  }

  const updateDocumentStatus = (docType: string, status: "pending" | "verified" | "not_verified") => {
    setDocumentStatus((prev) => ({
      ...prev,
      [docType]: status,
    }))
  }

  const createNewLead = async () => {
    if (!newLeadFormData.Nombre || !newLeadFormData.Correo) {
      alert("Por favor, completa al menos el nombre y el correo electrónico")
      return
    }

    try {
      setIsSubmittingNewLead(true)

      const leadData = {
        ...newLeadFormData,
        usuario: inmobiliariaId,
        created_at: new Date().toISOString(),
      }

      const { data, error } = await supabase.from("Clientes").insert([leadData]).select()

      if (error) throw error

      console.log("[v0] New lead created successfully:", data)

      // Add the new lead to the list
      if (data && data.length > 0) {
        setLeads([data[0], ...leads])
      }

      // Reset form and close dialog
      setNewLeadFormData({
        Estado: "Pendiente",
        Pedir_Aval: false,
      })
      setIsNewLeadDialogOpen(false)

      // Refresh leads
      await fetchLeads()
    } catch (err) {
      console.error("[v0] Error creating new lead:", err)
      alert("Error al crear el lead. Por favor, intenta de nuevo.")
    } finally {
      setIsSubmittingNewLead(false)
    }
  }

  const getDocumentBadge = (status: "pending" | "verified" | "not_verified") => {
    switch (status) {
      case "verified":
        return { className: "bg-green-100 text-green-800 border-green-200 text-xs", text: "✓ Verificado" }
      case "pending":
        return { className: "bg-yellow-100 text-yellow-800 border-yellow-200 text-xs", text: "⏳ Pendiente" }
      case "not_verified":
        return { className: "bg-red-100 text-red-800 border-red-200 text-xs", text: "✗ No verificado" }
      default:
        return { className: "bg-gray-100 text-gray-800 border-gray-200 text-xs", text: "Sin estado" }
    }
  }

  const isLeadComplete = (lead: Lead) => {
    const checks = {
      hasNombre: !!lead.Nombre?.trim(),
      hasCorreo: !!lead.Correo?.trim(),
      hasTelefono: !!lead.Telefono?.trim(),
      hasIngresos: !!(lead.Ingresos && lead.Ingresos > 0),
      hasInmueble: !!lead.Inmueble?.trim(),
    }

    return Object.values(checks).every(Boolean)
  }

  // FIX: Declare openAvalDialog function
  const openAvalDialog = () => {
    if (!selectedLead) return

    // Find the advertisement details to get the rent price
    let actualRent: number | null = null
    if (selectedLead.Inmueble) {
      const ad = advertisements.find((ad) => ad.Referencia === selectedLead.Inmueble)
      actualRent = ad?.Precio || null
    }

    // Calculate total income from all personas
    const persona1Income = selectedLead.Ingresos || 0
    const persona2Income = selectedLead.Ingresos_2 || 0
    const persona3Income = selectedLead.Ingresos_3 || 0
    const totalIncome = persona1Income + persona2Income + persona3Income

    // Calculate required income thresholds
    const minRequiredIncome = actualRent ? actualRent * 2.5 : null // 40% ratio (rent should be max 40% of income)
    const idealIncome = actualRent ? actualRent * 3.33 : null // 30% ratio (rent should be ideally 30% of income)

    // Calculate if aval is needed: total income must be at least 2.5x the rent
    const needsAval = actualRent ? totalIncome < minRequiredIncome! : false

    // Calculate what percentage of income the rent represents
    const incomeRatio = actualRent && totalIncome > 0 ? (actualRent / totalIncome) * 100 : null

    setAvalCalculation({
      income: totalIncome,
      persona1Income,
      persona2Income,
      persona3Income,
      actualRent,
      minRequiredIncome,
      idealIncome,
      needsAval,
      incomeRatio,
    })
    setIsAvalDialogOpen(true)
  }

  // FIX: Added copyToClipboard function
  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      toast({
        title: "Copiado",
        description: `${fieldName} copiado al portapapeles`,
      })
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar al portapapeles",
        variant: "destructive",
      })
    }
  }

  const updateBulkLeadStatus = async (newStatus: string) => {
    setPendingBulkStatus(newStatus)
    setBulkConfirmationOpen(true)
  }

  const executeBulkStatusChange = async () => {
    if (!pendingBulkStatus) return

    const { error } = await supabase.from("Clientes").update({ Estado: pendingBulkStatus }).in("id", selectedLeadIds)

    if (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado de los leads",
        variant: "destructive",
      })
      return
    }

    setLeads((prevLeads) =>
      prevLeads.map((lead) => (selectedLeadIds.includes(lead.id) ? { ...lead, Estado: pendingBulkStatus } : lead)),
    )

    toast({
      title: "Estado actualizado",
      description: `Se actualizó el estado de ${selectedLeadIds.length} lead(s) a ${pendingBulkStatus}`,
    })

    setSelectedLeadIds([])
    setIsBulkSelectionMode(false)
    setBulkConfirmationOpen(false)
    setPendingBulkStatus(null)
  }

  const toggleLeadInConfirmation = (leadId: string) => {
    setSelectedLeadIds((prev) => (prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]))
  }

  const toggleLeadSelection = (leadId: string) => {
    setSelectedLeadIds((prev) => (prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]))
  }

  const toggleSelectAll = () => {
    if (selectedLeadIds.length === filteredLeads.length) {
      setSelectedLeadIds([])
    } else {
      setSelectedLeadIds(filteredLeads.map((lead) => lead.id))
    }
  }

  if (loading || inmobiliariaLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Cargando leads...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      {" "}
      {/* Changed from p-8 */}
      {/* Sidebar and other layout elements would go here if present */}
      <main className="flex-1 overflow-auto">
        {" "}
        {/* Changed from p-8 */}
        <div className="p-6">
          {" "}
          {/* Changed from p-8 */}
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Leads</h2>
              <p className="text-muted-foreground mt-2">Gestión de clientes potenciales</p>
            </div>
            <Button onClick={() => setIsNewLeadDialogOpen(true)}>
              <Users className="h-4 w-4 mr-2" />
              Nuevo Lead
            </Button>
          </div>
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {" "}
            {/* Added mt-8 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalLeads}</div>
                <p className="text-xs text-muted-foreground">Últimos 30 días</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nuevos Hoy</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{newLeadsToday}</div>
                <p className="text-xs text-muted-foreground">Últimas 24 horas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completados</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{completedLeads}</div>
                <p className="text-xs text-muted-foreground">Últimas 24 horas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasa Conversión</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{conversionRate}%</div>
                <p className="text-xs text-muted-foreground">Conversión total</p>
              </CardContent>
            </Card>
          </div>
          {/* Updated section for Active Advertisements */}
          <div className="mt-8 space-y-2">
            {" "}
            {/* Added mt-8 */}
            <div className="flex items-center gap-1.5">
              <Home className="h-4 w-4 text-primary" />
              <h3 className="text-base font-semibold">Anuncios Activos</h3>
              <Badge variant="secondary" className="text-xs px-1.5 py-0">
                {advertisements.filter((ad) => ad.Activacion !== "Archivado").length} anuncios
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
              <Card
                className={`cursor-pointer transition-all hover:shadow-md border-2 px-1 ${
                  selectedAdvertisement === null || selectedAdvertisement === "all"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200"
                }`}
                onClick={() => {
                  console.log("[v0] Selecting all advertisements")
                  setSelectedAdvertisement(null)
                }}
              >
                {/* CHANGE: Reduced padding from p-1 to p-0.5 for more compact cards */}
                <CardContent className="p-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-medium">Todos los Anuncios</p>
                      <p className="text-[10px] text-muted-foreground">Ver todos los leads</p>
                    </div>
                    <Building className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>

              {advertisements
                .filter((ad) => ad.Activacion !== "Archivado")
                .map((ad) => {
                  const isPaused = ad.Activacion === "Pausado"
                  const isActive = ad.Activacion === "Activo"

                  return (
                    <Card
                      key={ad.ida}
                      className={`cursor-pointer transition-all hover:shadow-md border-2 px-5 ${
                        selectedAdvertisement === ad.ida
                          ? "border-primary bg-primary/5"
                          : isPaused
                            ? "border-gray-300 bg-gray-100 opacity-60"
                            : "border-gray-200"
                      }`}
                      onClick={() => handleAdvertisementClick(ad)}
                    >
                      {/* CHANGE: Reduced padding from p-1 to p-0.5 for more compact cards */}
                      <CardContent className="p-0.5">
                        <div className="space-y-0">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1">
                              <p className={`font-medium text-base ${isPaused ? "text-gray-500" : ""}`}>
                                {ad.Referencia || "Sin referencia"}
                              </p>
                              {isPaused && (
                                <Badge
                                  variant="secondary"
                                  className="text-[8px] px-1 py-0 h-3 bg-yellow-100 text-yellow-800"
                                >
                                  Pausado
                                </Badge>
                              )}
                            </div>
                            <Home className={`h-6 w-6 flex-shrink-0 ${isPaused ? "text-gray-400" : "text-primary"}`} />
                          </div>
                          <p
                            className={`text-[10px] truncate pl-0 ${isPaused ? "text-gray-400" : "text-muted-foreground"}`}
                          >
                            {ad.Direccion || "Sin dirección"}
                          </p>
                          <div className="flex items-center justify-between pl-0">
                            <span
                              className={`text-[10px] font-medium ${isPaused ? "text-gray-500" : "text-green-600"}`}
                            >
                              {formatCurrency(ad.Precio)}
                            </span>
                            <Badge variant="outline" className="text-[9px] px-1 py-0 h-3.5">
                              {ad.Portal || "Portal"}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
          {/* Filters */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {" "}
            {/* Added mt-8 */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, email o inmueble..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                {availableStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "Pedir Aval" ? "Aval Pedido" : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline">
                    <MoreVertical className="h-4 w-4 mr-2" />
                    Acciones
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                      setIsBulkSelectionMode(!isBulkSelectionMode)
                      if (isBulkSelectionMode) {
                        setSelectedLeadIds([])
                      }
                    }}
                    className="font-medium text-blue-600"
                  >
                    <Checkbox checked={isBulkSelectionMode} className="mr-2" />
                    Selección Múltiple
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* Leads List */}
          {isBulkSelectionMode ? (
            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {filteredLeads.length > 0 && (
                      <Checkbox
                        checked={selectedLeadIds.length === filteredLeads.length && filteredLeads.length > 0}
                        onCheckedChange={toggleSelectAll}
                        aria-label="Seleccionar todos"
                      />
                    )}
                    <CardTitle>Leads ({filteredLeads.length})</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {selectedLeadIds.length > 0 && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">
                        {selectedLeadIds.length} lead{selectedLeadIds.length > 1 ? "s" : ""} seleccionado
                        {selectedLeadIds.length > 1 ? "s" : ""}
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline">
                            Cambiar estado
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Pendiente")}>
                            Pendiente
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Validado")}>Validado</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Completado")}>
                            Completado
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Rechazado")}>
                            Rechazado
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Aceptado")}>Aceptado</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBulkLeadStatus("Descartado")}>
                            Descartado
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => setSelectedLeadIds([])}>
                      Limpiar selección
                    </Button>
                  </div>
                )}

                {error ? (
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-600">Error al cargar leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-600">{error}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-3">
                    {filteredLeads.length > 0 ? (
                      filteredLeads.map((lead) => {
                        const isComplete = isLeadComplete(lead)
                        const isDescartado = lead.Estado === "Descartado"
                        const isAceptado = lead.Estado === "Aceptado"
                        const completionPercentage = calculateDataCompleteness(lead)
                        const isDataComplete = completionPercentage >= 80 // 80% or more is considered complete
                        const personaCount = countPersonas(lead)

                        // Add checkbox for individual selection
                        const isSelected = selectedLeadIds.includes(lead.id)

                        return (
                          <Card
                            key={lead.id}
                            className={`hover:shadow-md transition-all cursor-pointer ${
                              isSelected // Highlight selected leads
                                ? "ring-2 ring-primary ring-offset-2"
                                : ""
                            } ${
                              isDescartado
                                ? "opacity-40 bg-gray-50 border-gray-300"
                                : isAceptado
                                  ? "border-emerald-200 bg-emerald-50/30 hover:bg-emerald-50/50"
                                  : isDataComplete
                                    ? "border-green-200 bg-green-50/30 hover:bg-green-50/50"
                                    : "border-amber-200 bg-amber-50/30 hover:bg-amber-50/50"
                            }`}
                            onClick={() => openLeadDetail(lead)}
                          >
                            <CardContent className="p-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                  {isBulkSelectionMode && (
                                    <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                                      <Checkbox
                                        checked={isSelected}
                                        onCheckedChange={() => toggleLeadSelection(lead.id)}
                                        className="mr-3"
                                      />
                                    </div>
                                  )}

                                  <div className="relative w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                                    {personaCount === 1 ? (
                                      <User className="h-4 w-4 text-primary" />
                                    ) : (
                                      <Users className="h-4 w-4 text-primary" />
                                    )}
                                    {personaCount > 1 && (
                                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {personaCount}
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="font-semibold text-sm truncate">{lead.Nombre || "Sin nombre"}</h3>

                                      <div className="flex items-center gap-1.5">
                                        {lead.Estado === "Aceptado" && (
                                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                                            <span className="text-xs font-semibold text-emerald-800">✓ Aprobado</span>
                                            <div className="h-3 w-px bg-emerald-400" />
                                            <div className="flex items-center gap-0.5">
                                              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                              <span className="text-xs font-semibold text-emerald-700">
                                                {completionPercentage}%
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                        {lead.Estado !== "Aceptado" && isDataComplete && (
                                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-300">
                                            <span className="text-xs font-semibold text-green-800">✓ Completo</span>
                                            <div className="h-3 w-px bg-green-400" />
                                            <div className="flex items-center gap-0.5">
                                              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                              <span className="text-xs font-semibold text-green-700">
                                                {completionPercentage}%
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                        {lead.Estado !== "Aceptado" && !isDataComplete && (
                                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300">
                                            <span className="text-xs font-semibold text-amber-800">Incompleto</span>
                                            <div className="h-3 w-px bg-amber-400" />
                                            <div className="flex items-center gap-0.5">
                                              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                              <span className="text-xs font-semibold text-amber-700">
                                                {completionPercentage}%
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-xs text-muted-foreground mb-2">
                                      <div className="flex items-center gap-1">
                                        <Mail className="h-3 w-3" />
                                        <span className="truncate">{lead.Correo || "Sin email"}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Phone className="h-3 w-3" />
                                        <span>{lead.Telefono || "Sin teléfono"}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Building className="h-3 w-3" />
                                        <span className="truncate">{lead.Inmueble || "Sin inmueble"}</span>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-xs">
                                      <div className="flex items-center gap-1 text-green-600">
                                        <Euro className="h-3 w-3" />
                                        <span className="font-medium">
                                          {formatCurrency(
                                            (lead.Ingresos || 0) + (lead.Ingresos_2 || 0) + (lead.Ingresos_3 || 0),
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        <span>{formatDate(lead.created_at)}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Quick Actions */}
                                <TooltipProvider>
                                  <div className="flex items-center gap-1 ml-2">
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="h-6 w-6 p-0 bg-transparent"
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            if (lead.Correo) {
                                              window.open(`mailto:${lead.Correo}`, "_blank")
                                            }
                                          }}
                                          disabled={!lead.Correo}
                                        >
                                          <Mail className="h-3 w-3" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Enviar correo</p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="h-6 w-6 p-0 bg-transparent"
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            if (lead.Telefono) {
                                              window.open(`https://wa.me/${lead.Telefono.replace(/\D/g, "")}`, "_blank")
                                            }
                                          }}
                                          disabled={!lead.Telefono}
                                        >
                                          <WhatsAppIcon className="h-3 w-3" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Contactar por WhatsApp</p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <DropdownMenu>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <DropdownMenuTrigger asChild>
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              className="h-6 w-6 p-0 bg-transparent"
                                              onClick={(e) => {
                                                e.stopPropagation()
                                              }}
                                            >
                                              <MoreVertical className="h-3 w-3" />
                                            </Button>
                                          </DropdownMenuTrigger>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Cambiar estado</p>
                                        </TooltipContent>
                                      </Tooltip>
                                      <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Pendiente")
                                          }}
                                        >
                                          Pendiente
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Validado")
                                          }}
                                        >
                                          Validado
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Completado")
                                          }}
                                        >
                                          Completado
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Rechazado")
                                          }}
                                        >
                                          Rechazado
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Aceptado")
                                          }}
                                        >
                                          Aceptado
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            updateLeadStatus(lead.id, "Descartado")
                                          }}
                                        >
                                          Descartado
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </TooltipProvider>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })
                    ) : (
                      <Card>
                        <CardContent className="p-8 text-center">
                          <p className="text-muted-foreground">No se encontraron leads</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="mt-8">
              {error ? (
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">Error al cargar leads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-600">{error}</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-3">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => {
                      const isComplete = isLeadComplete(lead)
                      const isDescartado = lead.Estado === "Descartado"
                      const isAceptado = lead.Estado === "Aceptado"
                      const completionPercentage = calculateDataCompleteness(lead)
                      const isDataComplete = completionPercentage >= 80 // 80% or more is considered complete
                      const personaCount = countPersonas(lead)
                      const isSelected = selectedLeadIds.includes(lead.id)

                      return (
                        <Card
                          key={lead.id}
                          className={`hover:shadow-md transition-all cursor-pointer ${
                            isDescartado
                              ? "opacity-40 bg-gray-50 border-gray-300"
                              : isAceptado
                                ? "border-emerald-200 bg-emerald-50/30 hover:bg-emerald-50/50"
                                : isDataComplete
                                  ? "border-green-200 bg-green-50/30 hover:bg-green-50/50"
                                  : "border-amber-200 bg-amber-50/30 hover:bg-amber-50/50"
                          }`}
                          onClick={() => openLeadDetail(lead)}
                        >
                          <CardContent className="p-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 flex-1">
                                {isBulkSelectionMode && (
                                  <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => toggleLeadSelection(lead.id)}
                                      className="mr-3"
                                    />
                                  </div>
                                )}

                                <div className="relative w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                                  {personaCount === 1 ? (
                                    <User className="h-4 w-4 text-primary" />
                                  ) : (
                                    <Users className="h-4 w-4 text-primary" />
                                  )}
                                  {personaCount > 1 && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                      {personaCount}
                                    </div>
                                  )}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-sm truncate">{lead.Nombre || "Sin nombre"}</h3>

                                    <div className="flex items-center gap-1.5">
                                      {lead.Estado === "Aceptado" && (
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                                          <span className="text-xs font-semibold text-emerald-800">✓ Aprobado</span>
                                          <div className="h-3 w-px bg-emerald-400" />
                                          <div className="flex items-center gap-0.5">
                                            <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                            <span className="text-xs font-semibold text-emerald-700">
                                              {completionPercentage}%
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                      {lead.Estado !== "Aceptado" && isDataComplete && (
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-300">
                                          <span className="text-xs font-semibold text-green-800">✓ Completo</span>
                                          <div className="h-3 w-px bg-green-400" />
                                          <div className="flex items-center gap-0.5">
                                            <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                            <span className="text-xs font-semibold text-green-700">
                                              {completionPercentage}%
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                      {lead.Estado !== "Aceptado" && !isDataComplete && (
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300">
                                          <span className="text-xs font-semibold text-amber-800">Incompleto</span>
                                          <div className="h-3 w-px bg-amber-400" />
                                          <div className="flex items-center gap-0.5">
                                            <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                                            <span className="text-xs font-semibold text-amber-700">
                                              {completionPercentage}%
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-xs text-muted-foreground mb-2">
                                    <div className="flex items-center gap-1">
                                      <Mail className="h-3 w-3" />
                                      <span className="truncate">{lead.Correo || "Sin email"}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Phone className="h-3 w-3" />
                                      <span>{lead.Telefono || "Sin teléfono"}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Building className="h-3 w-3" />
                                      <span className="truncate">{lead.Inmueble || "Sin inmueble"}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-3 text-xs">
                                    <div className="flex items-center gap-1 text-green-600">
                                      <Euro className="h-3 w-3" />
                                      <span className="font-medium">
                                        {formatCurrency(
                                          (lead.Ingresos || 0) + (lead.Ingresos_2 || 0) + (lead.Ingresos_3 || 0),
                                        )}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      <span>{formatDate(lead.created_at)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Quick Actions */}
                              <TooltipProvider>
                                <div className="flex items-center gap-1 ml-2">
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-6 w-6 p-0 bg-transparent"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          if (lead.Correo) {
                                            window.open(`mailto:${lead.Correo}`, "_blank")
                                          }
                                        }}
                                        disabled={!lead.Correo}
                                      >
                                        <Mail className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Enviar correo</p>
                                    </TooltipContent>
                                  </Tooltip>

                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-6 w-6 p-0 bg-transparent"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          if (lead.Telefono) {
                                            window.open(`https://wa.me/${lead.Telefono.replace(/\D/g, "")}`, "_blank")
                                          }
                                        }}
                                        disabled={!lead.Telefono}
                                      >
                                        <WhatsAppIcon className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Contactar por WhatsApp</p>
                                    </TooltipContent>
                                  </Tooltip>

                                  <DropdownMenu>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-6 w-6 p-0 bg-transparent"
                                            onClick={(e) => {
                                              e.stopPropagation()
                                            }}
                                          >
                                            <MoreVertical className="h-3 w-3" />
                                          </Button>
                                        </DropdownMenuTrigger>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Cambiar estado</p>
                                      </TooltipContent>
                                    </Tooltip>
                                    <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Pendiente")
                                        }}
                                      >
                                        Pendiente
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Validado")
                                        }}
                                      >
                                        Validado
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Completado")
                                        }}
                                      >
                                        Completado
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Rechazado")
                                        }}
                                      >
                                        Rechazado
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Aceptado")
                                        }}
                                      >
                                        Aceptado
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateLeadStatus(lead.id, "Descartado")
                                        }}
                                      >
                                        Descartado
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </TooltipProvider>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">No se encontraron leads</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      {/* New Lead Dialog */}
      <Dialog open={isNewLeadDialogOpen} onOpenChange={setIsNewLeadDialogOpen}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[70vw] max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="flex flex-row items-center justify-between pb-3 border-b">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <DialogTitle className="text-lg font-semibold">Crear Nuevo Lead</DialogTitle>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Completa la información del nuevo cliente potencial
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsNewLeadDialogOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Información Personal */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4" />
                  Información Personal
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={newLeadFormData.Nombre || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Nombre: e.target.value })}
                      placeholder="Juan Pérez García"
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      value={newLeadFormData.Correo || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Correo: e.target.value })}
                      placeholder="juan@ejemplo.com"
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Teléfono</label>
                    <Input
                      value={newLeadFormData.Telefono || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Telefono: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">País</label>
                    <Input
                      value={newLeadFormData.Pais || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Pais: e.target.value })}
                      placeholder="España"
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Código Postal</label>
                    <Input
                      value={newLeadFormData.Codigo_Postal || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Codigo_Postal: e.target.value })}
                      placeholder="28001"
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Ingresos Mensuales (€)</label>
                    <Input
                      type="number"
                      value={newLeadFormData.Ingresos || ""}
                      onChange={(e) =>
                        setNewLeadFormData({ ...newLeadFormData, Ingresos: Number.parseFloat(e.target.value) || 0 })
                      }
                      placeholder="2000"
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentación */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  Documentación
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Tipo de Documento</label>
                    <Select
                      value={newLeadFormData.Tipo_Documento || ""}
                      onValueChange={(value) => setNewLeadFormData({ ...newLeadFormData, Tipo_Documento: value })}
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DNI">DNI</SelectItem>
                        <SelectItem value="NIE">NIE</SelectItem>
                        <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Número de Documento</label>
                    <Input
                      value={newLeadFormData.Documento || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Documento: e.target.value })}
                      placeholder="12345678A"
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información del Inmueble */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Building className="h-4 w-4" />
                  Información del Inmueble
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Referencia del Inmueble</label>
                    <Select
                      value={newLeadFormData.Inmueble || ""}
                      onValueChange={(value) => setNewLeadFormData({ ...newLeadFormData, Inmueble: value })}
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Seleccionar inmueble" />
                      </SelectTrigger>
                      <SelectContent>
                        {advertisements.map((ad) => (
                          <SelectItem key={ad.ida} value={ad.Referencia || ""}>
                            {ad.Referencia} - {ad.Direccion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Fecha de Entrada Deseada</label>
                    <Input
                      type="date"
                      value={newLeadFormData.Fecha_Entrada || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Fecha_Entrada: e.target.value })}
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estado y Opciones */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Star className="h-4 w-4" />
                  Estado y Opciones
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Estado</label>
                    <Select
                      value={newLeadFormData.Estado || "Pendiente"}
                      onValueChange={(value) => setNewLeadFormData({ ...newLeadFormData, Estado: value })}
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Seleccionar estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pendiente">Pendiente</SelectItem>
                        <SelectItem value="Validado">Validado</SelectItem>
                        <SelectItem value="Completado">Completado</SelectItem>
                        <SelectItem value="Rechazado">Rechazado</SelectItem>
                        <SelectItem value="Aceptado">Aceptado</SelectItem>
                        <SelectItem value="Descartado">Descartado</SelectItem>
                        {/* Added 'Datos Completos' and 'Datos Incompletos' to the select options */}
                        <SelectItem value="Datos Completos">Datos Completos</SelectItem>
                        <SelectItem value="Datos Incompletos">Datos Incompletos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">¿Pedir Aval?</label>
                    <Select
                      value={newLeadFormData.Pedir_Aval ? "true" : "false"}
                      onValueChange={(value) =>
                        setNewLeadFormData({ ...newLeadFormData, Pedir_Aval: value === "true" })
                      }
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="false">No</SelectItem>
                        <SelectItem value="true">Sí</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Observaciones */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <MessageSquare className="h-4 w-4" />
                  Notas Adicionales
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Observaciones</label>
                    <Input
                      value={newLeadFormData.Observaciones || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Observaciones: e.target.value })}
                      placeholder="Notas sobre el candidato..."
                      className="h-9 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Recordatorio</label>
                    <Input
                      value={newLeadFormData.Recordatorio || ""}
                      onChange={(e) => setNewLeadFormData({ ...newLeadFormData, Recordatorio: e.target.value })}
                      placeholder="Recordatorio para seguimiento..."
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => setIsNewLeadDialogOpen(false)}
              disabled={isSubmittingNewLead}
            >
              Cancelar
            </Button>
            <Button className="flex-1" onClick={createNewLead} disabled={isSubmittingNewLead}>
              {isSubmittingNewLead ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creando...
                </>
              ) : (
                <>
                  <Users className="h-4 w-4 mr-2" />
                  Crear Lead
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Reactivate Advertisement Dialog */}
      <Dialog open={isReactivateDialogOpen} onOpenChange={setIsReactivateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              Reactivar Anuncio
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              ¿Estás seguro de que quieres reactivar el anuncio{" "}
              <span className="font-semibold text-foreground">{advertisementToReactivate?.Referencia}</span>?
            </p>
            {advertisementToReactivate && (
              <div className="p-3 bg-gray-50 rounded-lg border">
                <p className="text-sm font-medium">{advertisementToReactivate.Referencia}</p>
                <p className="text-xs text-muted-foreground">{advertisementToReactivate.Direccion}</p>
                <p className="text-sm font-semibold text-green-600 mt-1">
                  {formatCurrency(advertisementToReactivate.Precio)}
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => {
                setIsReactivateDialogOpen(false)
                setAdvertisementToReactivate(null)
              }}
            >
              Cancelar
            </Button>
            <Button className="flex-1 bg-primary" onClick={reactivateAdvertisement}>
              Reactivar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Aval Dialog */}
      <Dialog open={isAvalDialogOpen} onOpenChange={setIsAvalDialogOpen}>
        <DialogContent className="sm:max-w-lg z-[200]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Solicitud de Aval
            </DialogTitle>
          </DialogHeader>

          {selectedLead && avalCalculation && (
            <div className="space-y-4 py-4">
              {/* Lead Information */}
              <div className="p-4 bg-gray-50 rounded-lg border space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Nombre:</span>
                  <span className="text-sm font-semibold">{selectedLead.Nombre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Email:</span>
                  <span className="text-sm">{selectedLead.Correo}</span>
                </div>

                <div className="pt-2 border-t space-y-1.5">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">Ingresos por Persona:</div>
                  {avalCalculation.persona1Income > 0 && (
                    <div className="flex justify-between pl-2">
                      <span className="text-xs text-muted-foreground">{selectedLead.Nombre || "Persona 1"}:</span>
                      <span className="text-xs font-medium text-green-600">
                        {formatCurrency(avalCalculation.persona1Income)}
                      </span>
                    </div>
                  )}
                  {avalCalculation.persona2Income > 0 && (
                    <div className="flex justify-between pl-2">
                      <span className="text-xs text-muted-foreground">{selectedLead.Persona_2 || "Persona 2"}:</span>
                      <span className="text-xs font-medium text-green-600">
                        {formatCurrency(avalCalculation.persona2Income)}
                      </span>
                    </div>
                  )}
                  {avalCalculation.persona3Income > 0 && (
                    <div className="flex justify-between pl-2">
                      <span className="text-xs text-muted-foreground">{selectedLead.Persona_3 || "Persona 3"}:</span>
                      <span className="text-xs font-medium text-green-600">
                        {formatCurrency(avalCalculation.persona3Income)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1.5 border-t">
                    <span className="text-sm font-semibold text-muted-foreground">Total Ingresos:</span>
                    <span className="text-sm font-bold text-green-600">{formatCurrency(avalCalculation.income)}</span>
                  </div>
                </div>

                {avalCalculation.actualRent && (
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-sm font-medium text-muted-foreground">Precio alquiler:</span>
                    <span className="text-sm font-semibold">{formatCurrency(avalCalculation.actualRent)}</span>
                  </div>
                )}
              </div>

              <div
                className={`p-4 rounded-lg border space-y-3 ${
                  avalCalculation.needsAval ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
                }`}
              >
                <h3
                  className={`text-sm font-semibold ${avalCalculation.needsAval ? "text-red-900" : "text-green-900"}`}
                >
                  Análisis de Requisito de Aval
                </h3>

                {(!avalCalculation.income || avalCalculation.income === 0) && (
                  <div className="p-2 rounded-md bg-orange-100 border border-orange-300">
                    <p className="text-xs font-semibold text-orange-800">⚠️ Datos de Ingresos No Disponibles</p>
                    <p className="text-xs text-orange-700 mt-0.5">
                      No se han proporcionado los ingresos del solicitante. El análisis de aval no puede ser preciso sin
                      esta información.
                    </p>
                  </div>
                )}

                {avalCalculation.actualRent ? (
                  <>
                    {avalCalculation.income > 0 && (
                      <div
                        className={`p-3 rounded-md border ${
                          avalCalculation.needsAval ? "bg-red-100 border-red-300" : "bg-green-100 border-green-300"
                        }`}
                      >
                        <p
                          className={`text-sm font-bold mb-2 ${
                            avalCalculation.needsAval ? "text-red-800" : "text-green-800"
                          }`}
                        >
                          {avalCalculation.needsAval ? "⚠️ REQUIERE AVAL" : "✓ NO REQUIERE AVAL"}
                        </p>
                        <p className={`text-xs ${avalCalculation.needsAval ? "text-red-700" : "text-green-700"}`}>
                          {avalCalculation.needsAval
                            ? "Los ingresos son insuficientes para cubrir el alquiler sin aval."
                            : "Los ingresos son suficientes para cubrir el alquiler sin necesidad de aval."}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Ingresos mínimos requeridos:</span>
                        <span className="font-semibold">{formatCurrency(avalCalculation.minRequiredIncome!)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Ingresos ideales:</span>
                        <span className="font-semibold">{formatCurrency(avalCalculation.idealIncome!)}</span>
                      </div>
                      {avalCalculation.incomeRatio && avalCalculation.income > 0 && (
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-muted-foreground">Tasa de esfuerzo:</span>
                          <span
                            className={`font-bold ${avalCalculation.incomeRatio <= 40 ? "text-green-600" : "text-red-600"}`}
                          >
                            {avalCalculation.incomeRatio.toFixed(1)}%
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground italic">
                        💡 Los ingresos deben ser al menos 2.5x el precio del alquiler (máximo 40% de tasa de esfuerzo).
                        Idealmente 3.3x (30% de tasa de esfuerzo).
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="p-3 rounded-md bg-yellow-100 border border-yellow-300">
                    <p className="text-xs font-medium text-yellow-800">
                      ⚠ No se encontró el precio del alquiler para este inmueble
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setIsAvalDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  className="flex-1"
                  onClick={async () => {
                    if (selectedLead.Correo) {
                      await updateLeadStatus(selectedLead.id, "Pedir Aval")

                      // Update selectedLead state to reflect the change immediately
                      setSelectedLead({ ...selectedLead, Estado: "Pedir Aval" })

                      const subject = encodeURIComponent("Solicitud de Datos de Aval")
                      const body = encodeURIComponent(
                        `Estimado/a ${selectedLead.Nombre},\n\n` +
                          `Necesitamos solicitar información adicional sobre su aval para continuar con el proceso de alquiler.\n\n` +
                          `Por favor, proporcione los siguientes documentos:\n` +
                          `- DNI/NIE del avalista\n` +
                          `- Justificante de ingresos del avalista\n` +
                          `- Declaración de la renta del avalista\n\n` +
                          `Saludos cordiales`,
                      )
                      window.open(`mailto:${selectedLead.Correo}?subject=${subject}&body=${body}`, "_blank")
                      setIsAvalDialogOpen(false)
                    }
                  }}
                  disabled={!selectedLead.Correo}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Solicitud
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* Communication Detail Dialog */}
      <Dialog open={isCommDialogOpen} onOpenChange={setIsCommDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto z-[300]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedCommunication && isCommunicationSent(selectedCommunication) ? (
                <>
                  <span className="text-blue-600">📤 Correo Enviado</span>
                </>
              ) : (
                <>
                  <span className="text-green-600">📥 Correo Recibido</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedCommunication && (
            <div className="space-y-4">
              {/* Email Header Info */}
              <div
                className={`p-4 rounded-lg border ${
                  isCommunicationSent(selectedCommunication)
                    ? "bg-blue-50 border-blue-200"
                    : "bg-green-50 border-green-200"
                }`}
              >
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold min-w-[80px]">De:</span>
                    <span>{selectedCommunication.From || "Sin remitente"}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold min-w-[80px]">Para:</span>
                    <span>{selectedCommunication.to || "Sin destinatario"}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold min-w-[80px]">Asunto:</span>
                    <span>{selectedCommunication.Subject || "Sin asunto"}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold min-w-[80px]">Fecha:</span>
                    <span>
                      {new Date(selectedCommunication.created_at).toLocaleString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-sm font-semibold mb-3">Mensaje:</h3>
                {selectedCommunication.Html ? (
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedCommunication.Html }}
                  />
                ) : selectedCommunication.Text ? (
                  <div className="whitespace-pre-wrap text-sm">{selectedCommunication.Text}</div>
                ) : (
                  <p className="text-sm text-gray-500 italic">Sin contenido</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* Bulk Confirmation Dialog */}
      <Dialog open={bulkConfirmationOpen} onOpenChange={setBulkConfirmationOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-amber-600">
              <XCircle className="h-5 w-5" />
              Confirmar Cambio de Estado
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-medium text-amber-800">
                ⚠️ Esta acción es irreversible. Por favor, revise la selección antes de continuar.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">
                Se cambiará el estado de {selectedLeadIds.length} lead(s) a:{" "}
                <span className="font-bold text-blue-600">{pendingBulkStatus}</span>
              </p>
            </div>

            <div className="max-h-96 overflow-y-auto border rounded-lg">
              <div className="divide-y">
                {selectedLeadIds.map((leadId) => {
                  const lead = leads.find((l) => l.id === leadId)
                  if (!lead) return null

                  return (
                    <div key={leadId} className="p-3 hover:bg-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <Checkbox checked={true} onCheckedChange={() => toggleLeadInConfirmation(leadId)} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{lead.Nombre || "Sin nombre"}</p>
                          <p className="text-xs text-gray-500">{lead.Correo}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {lead.Estado || "Sin estado"}
                          </Badge>
                          <span className="text-gray-400">→</span>
                          <Badge className="text-xs bg-blue-100 text-blue-700">{pendingBulkStatus}</Badge>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {selectedLeadIds.length === 0 && (
              <p className="text-sm text-amber-600 text-center py-4">
                No hay leads seleccionados. Por favor, seleccione al menos un lead.
              </p>
            )}

            <div className="flex justify-end gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setBulkConfirmationOpen(false)
                  setPendingBulkStatus(null)
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={executeBulkStatusChange}
                disabled={selectedLeadIds.length === 0}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Confirmar Cambio
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Dialog open={isApprovalDialogOpen} ... has been moved to LeadApproveWrapper */}
    </div>
  )
}
