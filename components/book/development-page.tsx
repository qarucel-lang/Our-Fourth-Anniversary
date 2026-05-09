import { Heart, Quote } from "lucide-react"

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-paper">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wine/20" />
          <h2 className="text-sm tracking-[0.3em] uppercase text-wine/60">Capítulo II</h2>
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-12 text-center">
          Contigo pierdo la noción de todo
        </h1>

        {/* Editorial three-column layout */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* First column */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/85 first-letter:text-4xl first-letter:font-bold first-letter:text-wine first-letter:float-left first-letter:mr-2">
              Hoy estamos cumpliendo cuatro años juntitos y aunque han pasado tantas cosas desde que comenzamos, contigo el tiempo siempre se siente diferente. Hay días en los que de verdad siento que lo nuestro apenas empezó, porque cuando estoy contigo pierdo por completo la noción del tiempo y todo se vuelve demasiado fácil de disfrutar.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              Y creo que los dos coincidimos en algo: si hace cuatro años alguien nos hubiera dicho que íbamos a llegar hasta aquí, probablemente nos habríamos reído.
            </p>
          </div>

          {/* Second column - Featured quote */}
          <div className="relative bg-lilac-light/30 p-6 rounded-sm flex flex-col justify-center">
            <Quote className="w-8 h-8 text-wine/30 mb-4" />
            <p className="font-[family-name:var(--font-script)] text-2xl text-wine leading-relaxed mb-4">
              Some people search their whole lives for what we have, and I found it in you.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-wine/30" />
              <Heart className="w-4 h-4 text-wine fill-wine/20" />
            </div>
          </div>

          {/* Third column */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/85">
              Todo comenzó de una forma tan intensa que hasta nosotros pensamos que sería algo momentáneo, una de esas cosas que aparecen rápido y desaparecen igual. Pero aquí seguimos, cuatro años después, demostrando que lo nuestro nunca fue algo pasajero. Toda esa intensidad que sentimos desde el principio terminó convirtiéndose en el lugar más real y más seguro que tenemos.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 font-medium">
              Y honestamente, creo que lo más bonito de todo esto es que nunca dejamos de elegirnos.
            </p>
          </div>
        </div>

        {/* Image row - Optimized for real photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-4">
          {/* Photo 1 */}
          <div className="relative group">
            <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-2 transition-transform hover:rotate-0">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src="/us.jpeg" 
                  alt="Momento especial 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-[family-name:var(--font-script)] text-xl text-center text-wine/70"></p>
            </div>
            {/* Washi tape decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-lilac/40 backdrop-blur-sm transform rotate-2 z-10" />
          </div>
          
          {/* Photo 2 */}
          <div className="relative group">
            <div className="bg-white p-4 pb-12 shadow-xl transform rotate-3 transition-transform hover:rotate-0">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src="/love.jpeg" 
                  alt="Momento especial 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-[family-name:var(--font-script)] text-xl text-center text-wine/70"></p>
            </div>
            {/* Washi tape decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-beige/50 backdrop-blur-sm transform -rotate-3 z-10" />
          </div>
        </div>

        {/* Highlighted text box */}
        <div className="mt-16 p-8 border border-wine/20 bg-cream/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-wine/10" />
          <p className="text-xl text-foreground/90 italic">
            {'"'}Hay amores que se sienten eternos incluso desde el principio,
            <br />
            <span className="text-wine font-semibold not-italic mt-2 inline-block">y el nuestro fue uno de ellos.{'"'}</span>
          </p>
        </div>

        {/* Page decoration */}
        <div className="flex justify-center mt-12 text-wine/30">
          <span className="text-2xl tracking-[1em]">✿✿✿</span>
        </div>
      </div>
    </div>
  )
}