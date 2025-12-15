export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Integrado con las plataformas que ya usas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {/* Idealista */}
          <div className="flex items-center justify-center">
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-lg font-bold text-foreground">Idealista</span>
            </div>
          </div>

          {/* Fotocasa */}
          <div className="flex items-center justify-center">
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-lg font-bold text-foreground">Fotocasa</span>
            </div>
          </div>

          {/* Google Calendar */}
          <div className="flex items-center justify-center">
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-lg font-bold text-foreground">📅 Calendar</span>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center">
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-lg font-bold text-foreground">💬 WhatsApp</span>
            </div>
          </div>

          {/* RGPD Badge */}
          <div className="flex items-center justify-center col-span-2 md:col-span-1">
            <div className="px-6 py-3 bg-success/10 rounded-lg border border-success/20">
              <span className="text-sm font-bold text-success">🔒 RGPD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
