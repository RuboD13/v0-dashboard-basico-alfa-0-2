"use client"

import { useState } from "react"
import Image from "next/image"
import { Code2, LayoutDashboard } from "lucide-react"

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "api">("dashboard")

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">
            Una plataforma potente y fácil de usar
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            Dashboard intuitivo y API completa para integraciones personalizadas
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "dashboard"
                ? "bg-primary text-chalk shadow-lg"
                : "bg-porcelain text-text-muted hover:bg-silk"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "api" ? "bg-primary text-chalk shadow-lg" : "bg-porcelain text-text-muted hover:bg-silk"
            }`}
          >
            <Code2 className="w-5 h-5" />
            API
          </button>
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === "dashboard" && (
            <div className="bg-gradient-to-br from-porcelain to-unohana p-4 md:p-8 rounded-2xl border border-silk shadow-2xl animate-fadeIn">
              <Image
                src="/images/image.png"
                alt="RentAFlow Dashboard Preview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-chalk p-4 rounded-lg border border-silk">
                  <div className="text-2xl font-bold text-primary mb-1">24</div>
                  <div className="text-sm text-text-muted">Nuevos leads hoy</div>
                </div>
                <div className="bg-chalk p-4 rounded-lg border border-silk">
                  <div className="text-2xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-text-muted">Visitas programadas</div>
                </div>
                <div className="bg-chalk p-4 rounded-lg border border-silk">
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-text-muted">Contratos firmados</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-silk shadow-2xl animate-fadeIn">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Endpoint de ejemplo</div>
                  <div className="bg-[#0d0d0d] p-4 rounded-lg font-mono text-sm">
                    <span className="text-green-400">POST</span> <span className="text-blue-400">/api/v1/leads</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Request</div>
                  <pre className="bg-[#0d0d0d] p-4 rounded-lg font-mono text-sm text-gray-300 overflow-x-auto">
                    {`{
  "property_id": "abc123",
  "name": "María García",
  "email": "maria@email.com",
  "phone": "+34 600 123 456",
  "message": "Interesada en visitar",
  "source": "idealista",
  "validation": {
    "income_verified": true,
    "guarantor_available": true
  }
}`}
                  </pre>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Response</div>
                  <pre className="bg-[#0d0d0d] p-4 rounded-lg font-mono text-sm text-gray-300 overflow-x-auto">
                    {`{
  "lead_id": "lead_xyz789",
  "status": "validated",
  "auto_response_sent": true,
  "visit_suggested": "2024-01-15T10:00:00Z",
  "score": 95,
  "next_action": "schedule_visit"
}`}
                  </pre>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="bg-[#0d0d0d] p-4 rounded-lg border border-gray-800">
                    <div className="text-green-400 font-semibold mb-1">99.9%</div>
                    <div className="text-xs text-gray-400">Uptime API</div>
                  </div>
                  <div className="bg-[#0d0d0d] p-4 rounded-lg border border-gray-800">
                    <div className="text-green-400 font-semibold mb-1">&lt;100ms</div>
                    <div className="text-xs text-gray-400">Latencia promedio</div>
                  </div>
                  <div className="bg-[#0d0d0d] p-4 rounded-lg border border-gray-800">
                    <div className="text-green-400 font-semibold mb-1">50+</div>
                    <div className="text-xs text-gray-400">Endpoints disponibles</div>
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
