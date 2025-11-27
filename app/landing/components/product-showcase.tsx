"use client"

import { useState } from "react"

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "workflow">("dashboard")

  return (
    <section className="py-24 bg-gradient-to-b from-porcelain to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4 text-balance">Panel de control potente y sencillo</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto text-pretty">
            Visualiza todas tus propiedades, leads y métricas en tiempo real
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 border border-silk">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "dashboard" ? "bg-text-dark text-white" : "text-text-muted hover:text-text-dark"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "workflow" ? "bg-text-dark text-white" : "text-text-muted hover:text-text-dark"
              }`}
            >
              Flujo de Trabajo
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-silk overflow-hidden">
          {activeTab === "dashboard" ? (
            <div className="p-8">
              {/* Dashboard Preview */}
              <div className="bg-porcelain rounded-2xl p-8 border border-silk">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-silk">
                  <div>
                    <h3 className="text-2xl font-bold text-text-dark mb-1">Centro de Anuncios</h3>
                    <p className="text-sm text-text-muted">Control operativo y económico por anuncio</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-text-muted">4 Activos</div>
                      <div className="text-sm text-text-muted">214 Completos</div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-silk">
                    <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                    <div className="text-sm text-text-muted">Nuevos hoy</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-silk">
                    <div className="text-3xl font-bold text-green-600 mb-2">101</div>
                    <div className="text-sm text-text-muted">Emails enviados</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-silk">
                    <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                    <div className="text-sm text-text-muted">Completos HOY</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-silk">
                    <div className="text-3xl font-bold text-orange-600 mb-2">54</div>
                    <div className="text-sm text-text-muted">A la espera</div>
                  </div>
                </div>

                {/* Property Card */}
                <div className="bg-white rounded-xl border border-silk p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-bold text-text-dark">Jose Maria de Pereda 2</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          Activo
                        </span>
                      </div>
                      <p className="text-sm text-text-muted">Calle Jose Maria de Pereda 17</p>
                    </div>
                    <button className="px-4 py-2 bg-text-dark text-white text-sm rounded-lg hover:bg-primary transition-colors">
                      Ver leads filtrados (59)
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-4 pt-4 border-t border-silk">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-dark mb-1">03:49h</div>
                      <div className="text-xs text-text-muted">Tiempo ahorrado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-dark mb-1">160</div>
                      <div className="text-xs text-text-muted">Ejecuciones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-dark mb-1">40.0%</div>
                      <div className="text-xs text-text-muted">Del plan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-dark mb-1">7d</div>
                      <div className="text-xs text-text-muted">Tendencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8">
              {/* Workflow Schematic */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-text-dark mb-6">Flujo de trabajo automatizado</h3>

                {/* Step 1 */}
                <div className="flex items-start space-x-4 p-6 bg-porcelain rounded-xl border-l-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-2">1. Recogida de datos del lead</h4>
                    <p className="text-sm text-text-muted mb-3">
                      El sistema captura automáticamente cada consulta de los portales y envía una respuesta
                      personalizada en segundos.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-silk text-xs font-mono text-text-muted">
                      POST /api/leads/capture → Auto-response sent → Lead stored
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4 p-6 bg-porcelain rounded-xl border-l-4 border-green-500">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-2">2. Validación con IA</h4>
                    <p className="text-sm text-text-muted mb-3">
                      IA verifica requisitos (ingresos, garantías, documentos) antes de aprobar la visita. Solo leads
                      calificados pasan al siguiente nivel.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-silk text-xs font-mono text-text-muted">
                      GET /api/validation/check → AI score: 87% → Status: APPROVED
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4 p-6 bg-porcelain rounded-xl border-l-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-2">3. Programación de visita</h4>
                    <p className="text-sm text-text-muted mb-3">
                      El sistema sincroniza con tu calendario, envía invitaciones y recordatorios automáticos a
                      inquilino y agente.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-silk text-xs font-mono text-text-muted">
                      POST /api/visits/schedule → Calendar sync → Notifications sent
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-4 p-6 bg-porcelain rounded-xl border-l-4 border-orange-500">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark mb-2">4. Gestión documental</h4>
                    <p className="text-sm text-text-muted mb-3">
                      Recopila DNI, nóminas, contrato laboral y documentos legales. Todo organizado para firmar el
                      contrato rápidamente.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-silk text-xs font-mono text-text-muted">
                      POST /api/documents/upload → OCR processing → Contract ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
