import { Heart, Sparkles } from "lucide-react"

export default function FinalPage() {
  const startDate = "08/05/2022";
  const endDate = "08/05/2026";
  const barCodeDate = "08 05 22 26";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 paper-texture bg-cream">
      <div className="relative max-w-2xl w-full aspect-[3/4] md:aspect-auto">
        
        {/* Decorative corner elements - Más sutiles */}
        <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-wine/20" />
        <div className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-wine/20" />
        <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b border-l border-wine/20" />
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-wine/20" />

        {/* Main content - Contraportada */}
        <div className="bg-card/90 backdrop-blur-sm p-10 md:p-16 text-center border border-border shadow-2xl flex flex-col items-center justify-between min-h-[650px] overflow-hidden">
          
          {/* Top decoration - Reducida para elegancia */}
          <div className="flex justify-center gap-1.5 mb-10 opacity-60">
            <Sparkles className="w-3.5 h-3.5 text-wine" />
            <Heart className="w-3.5 h-3.5 text-wine fill-wine/20" />
            <Sparkles className="w-3.5 h-3.5 text-wine" />
          </div>

          {/* Central Message - Jerarquía Refinada */}
          <div className="space-y-6 flex-1 flex flex-col justify-center items-center max-w-lg">
            <div className="h-px w-16 bg-wine/10 mb-6" />
            
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-foreground/90 leading-tight italic tracking-tight">
              Created by me. Inspired by you.
            </p>
            
            <p className="font-[family-name:var(--font-script)] text-5xl md:text-6xl text-wine leading-none pt-4">
              Reserved exclusively
            </p>
                   <p className="font-[family-name:var(--font-script)] text-5xl md:text-6xl text-wine leading-none pt-4">
              for us, forever.
            </p>
            
            <div className="h-px w-16 bg-wine/10 mt-10" />
          </div>

          {/* Bottom elements */}
          <div className="w-full mt-16 space-y-10">
            
            {/* Sello con Corazón Animado - Más Integrado */}
            <div className="relative flex justify-center scale-90">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-wine/10 rounded-full animate-ping pointer-events-none opacity-60" />
              <button className="group relative flex items-center justify-center w-20 h-20 bg-wine rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95">
                <Heart className="w-8 h-8 text-white fill-white/90 animate-pulse-slow" />
                <div className="absolute inset-1.5 rounded-full border border-white/10" />
              </button>
            </div>

            {/* Barcode & Dates - Diseño Editorial */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex gap-[1.5px] h-7 items-end mb-1 opacity-50">
                {[...barCodeDate.replace(/\s/g, "")].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-foreground" 
                    style={{ 
                      width: i % 4 === 0 ? '2.5px' : i % 2 === 0 ? '1.5px' : '0.5px', 
                      height: `${60 + Math.sin(i) * 20}%` 
                    }} 
                  />
                ))}
              </div>
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono uppercase opacity-80">
                {startDate} — {endDate}
              </p>
            </div>

            {/* Decorative flowers & Edition Detail */}
            <div className="space-y-4 pt-4 border-t border-border mx-10">
              <div className="flex justify-center gap-4 text-wine/30">
                <span className="text-xl">✿</span>
                <span className="text-sm mt-1">❀</span>
                <span className="text-xl">✿</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/80 font-medium">
                Fourth Anniversary Edition · Vol. I
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}