"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma la configuración inicial?",
    answer:
      "La configuración básica toma menos de 30 minutos. Nuestro equipo te guía paso a paso para conectar tus portales, calendario y configurar las respuestas automáticas. Para planes Enterprise ofrecemos onboarding personalizado.",
  },
  {
    question: "¿Es compatible con mi CRM actual?",
    answer:
      "Sí, RentAFlow se integra con los principales CRMs del sector inmobiliario a través de nuestra API y Zapier. Ofrecemos integraciones nativas con Salesforce, HubSpot, Pipedrive y otros. Consulta la lista completa de integraciones.",
  },
  {
    question: "¿Qué pasa con la seguridad de los datos sensibles?",
    answer:
      "La seguridad es nuestra prioridad. Todos los documentos se cifran en reposo y en tránsito (AES-256). Cumplimos con RGPD y LOPD. Los datos se almacenan en servidores dentro de la UE con certificaciones ISO 27001.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar en cualquier momento sin penalización. Tu acceso continuará hasta el final del período de facturación. Ofrecemos un mes de prueba gratis sin compromiso y sin tarjeta de crédito.",
  },
  {
    question: "¿Qué soporte técnico incluye mi plan?",
    answer:
      "Todos los planes incluyen soporte por email con tiempo de respuesta de 24h. Los planes Professional y Enterprise incluyen soporte prioritario con chat en vivo y tiempo de respuesta de 2h. Enterprise incluye además un account manager dedicado.",
  },
  {
    question: "¿La IA puede responder en varios idiomas?",
    answer:
      "Sí, nuestra IA soporta español, catalán, inglés, francés y alemán. Detecta automáticamente el idioma del lead y responde en el mismo idioma, o puedes configurar un idioma por defecto para cada propiedad.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
