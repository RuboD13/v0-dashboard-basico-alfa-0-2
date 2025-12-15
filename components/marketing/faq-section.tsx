import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma la configuración inicial?",
    answer:
      "La configuración básica toma menos de 30 minutos. Nuestro equipo te guía paso a paso en la conexión de tus portales inmobiliarios, calendario y personalización de respuestas automáticas.",
  },
  {
    question: "¿Es compatible con mi CRM o software actual?",
    answer:
      "RentAFlow se integra con los principales CRMs inmobiliarios y herramientas como Idealista, Fotocasa, Google Calendar, Outlook y WhatsApp Business. También ofrecemos API para integraciones personalizadas en el plan Enterprise.",
  },
  {
    question: "¿Qué pasa con la seguridad y privacidad de los datos?",
    answer:
      "Todos los datos están encriptados y almacenados en servidores en la UE cumpliendo con RGPD. Contamos con certificaciones de seguridad ISO 27001 y auditorías externas periódicas. Los documentos sensibles tienen acceso restringido y trazabilidad completa.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar en cualquier momento sin penalizaciones. Si cancelas, mantendrás acceso hasta el final de tu período de facturación actual y podrás exportar todos tus datos.",
  },
  {
    question: "¿Qué tipo de soporte técnico incluye?",
    answer:
      "Todos los planes incluyen soporte por email con respuesta en menos de 24h. Los planes Professional y Enterprise incluyen soporte prioritario con respuesta en menos de 4h. Enterprise incluye además un gestor de cuenta dedicado y soporte telefónico.",
  },
  {
    question: "¿La IA puede realmente validar inquilinos de forma confiable?",
    answer:
      "Nuestra IA analiza documentos (DNI, nóminas, contratos) con un 98% de precisión. Sin embargo, siempre recomendamos que un humano revise y apruebe antes de proceder con la visita. La IA acelera el proceso pero tú mantienes el control final.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            ¿Tienes dudas? Aquí respondemos las preguntas más comunes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿No encuentras la respuesta que buscas?</p>
          <Button variant="outline">Contactar con Soporte</Button>
        </div>
      </div>
    </section>
  )
}
