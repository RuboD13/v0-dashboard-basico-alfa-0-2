"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la configuración inicial?",
      answer:
        "La configuración básica toma menos de 5 minutos. Solo necesitas conectar tus portales inmobiliarios y configurar tus preferencias de respuesta automática. Nuestro equipo de onboarding está disponible para ayudarte si lo necesitas.",
    },
    {
      question: "¿Puedo usar mi propia marca (white-label)?",
      answer:
        "Sí, los planes Pro y Enterprise incluyen funcionalidades white-label. Puedes usar tu propio dominio, logo, colores y hasta personalizar los emails automáticos con tu identidad de marca.",
    },
    {
      question: "¿Qué portales inmobiliarios soportan?",
      answer:
        "Actualmente tenemos integración directa con Idealista, Fotocasa, Habitaclia, Pisos.com y más de 20 portales españoles. También soportamos integración por email para cualquier otro portal.",
    },
    {
      question: "¿Cómo funciona la validación de inquilinos con IA?",
      answer:
        "Nuestra IA analiza las respuestas de los leads y verifica automáticamente requisitos como rango salarial, documentación necesaria y preferencias de alquiler. Puedes configurar los criterios según tus necesidades.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Sí, no hay permanencia mínima. Puedes cancelar tu suscripción en cualquier momento desde el panel de control. Si cancelas, tendrás acceso hasta el final del período de facturación.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Absolutamente. Cumplimos con RGPD y utilizamos encriptación de nivel bancario. Todos los documentos sensibles se almacenan de forma segura y solo son accesibles por usuarios autorizados.",
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 bg-porcelain">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">Preguntas frecuentes</h2>
          <p className="mt-4 text-lg text-secondary/60">Todo lo que necesitas saber sobre RentAFlow</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-base px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-secondary/70 pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
