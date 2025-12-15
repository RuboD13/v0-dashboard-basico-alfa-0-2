import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo funciona el periodo de prueba?",
      answer:
        "Obtienes acceso completo a todas las funcionalidades durante 14 días sin necesidad de tarjeta de crédito. Puedes cancelar en cualquier momento sin cargos.",
    },
    {
      question: "¿Se integra con mis portales inmobiliarios actuales?",
      answer:
        "Sí, nos integramos con Idealista, Fotocasa, y los principales portales españoles. También conectamos con Gmail, Google Calendar, WhatsApp y más.",
    },
    {
      question: "¿Es seguro almacenar documentos sensibles?",
      answer:
        "Absolutamente. Utilizamos encriptación de nivel bancario, cumplimos con GDPR, y tus datos están alojados en servidores europeos con certificación ISO 27001.",
    },
    {
      question: "¿Puedo personalizar la marca para mis clientes?",
      answer:
        "En los planes Pro y Enterprise, puedes personalizar completamente los colores, logo y dominio para que parezca tu propia plataforma.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground text-pretty">Resuelve tus dudas antes de empezar</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
