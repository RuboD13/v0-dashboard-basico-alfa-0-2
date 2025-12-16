"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma la configuración inicial?",
    answer:
      "La configuración básica toma menos de 30 minutos. Conectamos tu cuenta de Idealista (u otro portal) y configuramos las respuestas automáticas. Para la integración con WhatsApp, nuestro equipo te asiste en el proceso.",
  },
  {
    question: "¿Funciona solo con Idealista?",
    answer:
      "No, RentAFlow está optimizado para Idealista pero funciona con Pisos.com, Fotocasa, Habitaclia y cualquier portal que envíe leads por email. También puedes conectar formularios de tu propia web.",
  },
  {
    question: "¿Se integra con mi CRM?",
    answer:
      "Sí, puedes enviar los datos de tus leads a cualquier CRM que acepte leads mediante correo electrónico. La información se envía automáticamente cuando un lead cumple los criterios que configures.",
  },
  {
    question: "¿La verificación de inquilinos es automática?",
    answer:
      "RentAFlow solicita automáticamente los datos y documentos a cada candidato (DNI, justificantes de ingresos, etc.). El sistema calcula análisis como la tasa de esfuerzo, pero la verificación y decisión final siempre es tuya.",
  },
  {
    question: "¿Qué pasa con la seguridad de los datos sensibles?",
    answer:
      "Cumplimos con RGPD y LOPD. Todos los documentos se cifran y los datos se almacenan en servidores dentro de la Unión Europea. Solo tú y tu equipo tienen acceso a la información de tus leads.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar en cualquier momento sin penalización. Tu acceso continuará hasta el final del período de facturación. Ofrecemos un mes de prueba gratis para early-adopters.",
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
