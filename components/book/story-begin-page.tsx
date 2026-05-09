import { Heart, Calendar } from "lucide-react"

export default function StoryBeginPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wine/20" />
          <h2 className="text-sm tracking-[0.3em] uppercase text-wine/60">Capítulo I</h2>
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
Tan loca por ti como el primer día        </h1>
        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-12">
Cuatro años siendo el lugar donde siempre quiero estar.        </p>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Text column */}
          <div className="space-y-6">
            {/* Date badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lilac-light/50 rounded-full text-sm">
              <Calendar className="w-4 h-4 text-wine" />
              <span className="text-foreground font-medium">Mayo 2022</span>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 first-letter:text-5xl first-letter:font-bold first-letter:text-wine first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Han pasado cuatro años y todavía hay momentos en los que me cuesta creer que realmente te encotré.
            </p>

            <p className="text-base leading-relaxed text-foreground/80">
            A veces pienso en todo lo que hemos vivido juntos y sigo sintiendo exactamente lo mismo que al principio: demasiadas cosas al mismo tiempo, demasiadas ganas de ti y demasiado amor acumulándose dentro de mí.            
            </p>
            

            {/* Pull quote */}
            <blockquote className="border-l-4 border-wine/40 pl-6 py-2 my-8">
              <p className="font-[family-name:var(--font-script)] text-2xl text-wine italic">
                {'"'}My  soul  was  made  to  love  yours...{'"'}
              </p>
            </blockquote>

            <p className="text-base leading-relaxed text-foreground/80">
            Y aunque nunca me ha costado decirte cuánto te amo, hay veces en las que las palabras simplemente no alcanzan para explicar todo lo que haces sentir dentro de mí. Estoy tan loca por ti que este regalito terminó convirtiéndose en otro intento de demostrarte una mínima parte de todo lo que llevo guardado para ti.
            </p>
          </div>

          {/* Image column */}
          <div className="relative">
            {/* Scrapbook elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-lilac/20 transform rotate-2 rounded-sm" />
            
{/* Main photo frame */}
<div className="relative bg-white p-4 shadow-xl transform -rotate-1">
  <div className="aspect-[4/5] overflow-hidden">
    <img
      src="/Untitled141_20241108130135.jpg"
      alt="Nuestro primer encuentro"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Photo caption */}
  <p className="font-[family-name:var(--font-script)] text-lg text-wine-light mt-3 text-center">
    Ciel and Kei
  </p>
</div>

            {/* Decorative tape */}
            <div className="absolute -top-2 left-1/4 w-12 h-5 bg-beige/60 transform -rotate-12 shadow-sm" />
            <div className="absolute -bottom-2 right-1/4 w-10 h-5 bg-lilac/40 transform rotate-6 shadow-sm" />

            {/* Small flower decoration */}
            <div className="absolute -bottom-6 -right-2 text-2xl text-wine/30">✿</div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 text-wine/40">
            <span>❀</span>
            <span>•</span>
            <span>❀</span>
            <span>•</span>
            <span>❀</span>
          </div>
        </div>
      </div>
    </div>
  )
}
