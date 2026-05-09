"use client"

import { Heart, Sparkles } from "lucide-react"

export default function ClosingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 paper-texture bg-paper relative overflow-hidden">
      
      {/* Sombras decorativas en las esquinas para dar profundidad de papel real */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.03)]" />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="space-y-12">
          
          {/* Cabecera Minimalista */}
          <div className="animate-in fade-in duration-1000">
            <div className="flex justify-center items-center gap-6 opacity-40">
              <div className="w-12 h-px bg-wine" />
              <Heart className="w-4 h-4 text-wine fill-wine" />
              <div className="w-12 h-px bg-wine" />
            </div>
          </div>

          {/* Bloque Central Principal */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <h2 className="font-[family-name:var(--font-script)] text-5xl md:text-6xl text-wine leading-tight">
              Cuatro años siendo <br /> la mejor parte de mi vida
            </h2>
            
            <div className="flex flex-col items-center">
                <p className="text-xl text-foreground/70 italic font-light tracking-wide">
                 Gracias por no soltarme nunca.
              </p>
              {/* Línea de acento corta bajo el texto */}
              <div className="w-8 h-px bg-wine/20 mt-4" />
            </div>
          </div>

          {/* Texto de Transición - Sin clichés de capítulos */}
          <div className="py-4 animate-in fade-in duration-1000 delay-500">
            <p className="text-stone-500 text-sm md:text-base leading-relaxed tracking-widest uppercase font-light px-4">
No existe una versión de mi vida              <br />
              <span className="text-stone-400">donde tú no seas el centro de todo.</span>
            </p>
          </div>

          {/* Frase Final Destacada */}
          <div className="relative py-8 animate-in fade-in duration-1000 delay-700">
             {/* Sparkles posicionados de forma más artística */}
            <Sparkles className="absolute top-0 left-1/4 w-4 h-4 text-wine/30 animate-pulse" />
            <Sparkles className="absolute bottom-0 right-1/4 w-4 h-4 text-wine/30 animate-pulse delay-500" />
            
            <p className="font-[family-name:var(--font-script)] text-3xl md:text-4xl text-wine/80">
              "Te elijo hoy, mañana y siempre."
            </p>
          </div>

          {/* Pie de Página - Personalizado */}
          <footer className="pt-12 space-y-8 animate-in fade-in duration-1000 delay-1000">
            <div className="inline-block px-6 py-2 border border-wine/10 rounded-full">
              <p className="text-[10px] tracking-[0.5em] uppercase text-wine/60 font-semibold">
                08.05.2022 - 08.05.2026
              </p>
            </div>

            {/* Decoración de Flores: En una sola línea elegante */}
            <div className="flex justify-center gap-4 text-wine/20 text-xl">
              <span>✿</span>
              <span className="scale-125 opacity-40">✿</span>
              <span className="opacity-60 text-base">❀</span>
              <span>✿</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}