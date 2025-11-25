import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la configuración inicial?",
    answer:
      "Solo 30 minutos. Nuestro equipo te guía paso a paso para configurar tu cuenta, conectar tu correo y personalizar las respuestas automáticas. No necesitas conocimientos técnicos.",
  },
  {
    question: "¿Qué integraciones incluye RentAFlow?",
    answer:
      "Nos integramos con Idealista, Fotocasa, Gmail, Outlook, Google Calendar, Microsoft Calendar, WhatsApp Business y las principales plataformas inmobiliarias de España. Si necesitas una integración específica, contacta con nosotros.",
  },
  {
    question: "¿Cómo funciona el white-label?",
    answer:
      "Tu logo, tu dominio, tu correo. Configuramos todo para que los inquilinos solo vean tu marca en emails, formularios y comunicaciones. Nunca aparecerá el nombre de RentAFlow.",
  },
  {
    question: "¿Es seguro para datos sensibles como DNI?",
    answer:
      "Absolutamente. Todos los datos se almacenan en servidores en la UE con cifrado en tránsito y reposo. Cumplimos con RGPD y tenemos certificaciones de seguridad específicas para datos personales.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, sin compromiso de permanencia. Puedes cancelar tu suscripción cuando quieras desde tu panel de control. Tus datos se mantienen disponibles durante 30 días por si cambias de opinión.",
  },
  {
    question: "¿Qué pasa si supero el límite de leads de mi plan?",
    answer:
      "Te avisamos cuando estés cerca del límite. Puedes subir de plan en cualquier momento o pagar un extra por leads adicionales. Nunca se detendrá el servicio sin avisarte primero.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground text-pretty">Todo lo que necesitas saber antes de empezar.</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
