import { Heart, Globe, Sparkles } from "lucide-react"

export default function DistancePage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream overflow-hidden">
      <div className="max-w-3xl mx-auto relative">

        {/* Decorative sparkles */}
        <Sparkles className="absolute top-6 left-0 w-4 h-4 text-wine/20" />
        <Sparkles className="absolute top-16 right-4 w-3 h-3 text-wine/20" />

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-wine/20" />
          <Globe className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
Coincidir a pesar de todo
        </h1>

        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-3">
Donde el horario deja de importar si estamos juntos.
        </p>

        {/* Small phrase */}
        <p className="text-center text-sm tracking-[0.25em] uppercase text-foreground/40 mb-14">
          long distance never changed the way i loved you
        </p>

        {/* Text */}
        <div className="space-y-6 text-lg leading-relaxed mb-14">

          <p className="text-foreground/90">
Ocho horas de diferencia suenan como algo imposible para cualquiera, pero contigo nunca se ha sentido así. A pesar de los horarios completamente opuestos, nunca hemos dejado que eso se convierta en un obstáculo real para nosotros. Me hace tan feliz ver la forma en que ambos seguimos eligiéndonos todos los días y cómo siempre encontramos la manera de estar presentes incluso cuando el tiempo parece estar en nuestro contra.
          </p>
Mucha gente probablemente se rendiría viviendo algo así, pero tú me das una tranquilidad que hace que cada segundo de espera valga completamente la pena. Incluso desde el otro lado del mundo, siempre encuentras la manera de hacerme sentir acompañado. Me encanta pensar que mientras tú comienzas tu día, yo estoy terminando el mío, y aún así siempre terminamos encontrándonos en algún punto.
          <p className="text-foreground/85">

          </p>

          <p className="text-foreground/85">
Lo que más valoro de nosotros es que nunca hemos permitido que el cansancio o la rutina de nuestras propias vidas nos aleje. A veces el mundo se siente enorme, pero tú logras que se reduzca a nosotros dos cada vez que nos hacemos un espacio para coincidir.          </p>
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-script)] text-3xl text-wine leading-relaxed">
Donde tú estés, es exactamente donde quiero estar.          </p>
        </div>

        {/* MX → ES */}
        <div className="relative py-10">

          {/* Line */}
          <div className="absolute top-1/2 left-[20%] right-[20%] border-t-2 border-dashed border-wine/30 -translate-y-1/2" />

          {/* Heart */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-cream border-2 border-wine/20 flex items-center justify-center shadow-sm">
              <Heart className="w-6 h-6 text-wine fill-wine/20 animate-pulse" />
            </div>

            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground/40 whitespace-nowrap">
              8 hours apart
            </p>
          </div>

          {/* Countries */}
          <div className="flex justify-between items-center">

            {/* Mexico */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-lilac-light/40 border border-wine/20 flex items-center justify-center mb-4 shadow-sm">
                <span className="text-3xl">🇲🇽</span>
              </div>

              <p className="text-lg font-semibold text-foreground">
                México
              </p>

              <p className="text-sm text-muted-foreground">
                
              </p>
            </div>

            {/* Spain */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-lilac-light/40 border border-wine/20 flex items-center justify-center mb-4 shadow-sm">
                <span className="text-3xl">🇪🇸</span>
              </div>

              <p className="text-lg font-semibold text-foreground">
                España
              </p>

              <p className="text-sm text-muted-foreground">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}