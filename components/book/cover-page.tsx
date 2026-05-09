import { Heart, Sparkles } from "lucide-react"

export default function CoverPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 paper-texture bg-cream">
      <div className="relative max-w-2xl w-full">
        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-wine/30" />
        <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-wine/30" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-wine/30" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-wine/30" />

        {/* Main content */}
        <div className="bg-card/80 backdrop-blur-sm p-8 md:p-12 text-center border border-border shadow-2xl">
          {/* Small decorative elements */}
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-wine/50" />
            <Heart className="w-4 h-4 text-wine fill-wine/30" />
            <Sparkles className="w-4 h-4 text-wine/50" />
          </div>

          {/* Photo placeholder */}
          <div className="relative mx-auto mb-8 w-64 h-80 md:w-72 md:h-96">
            <div className="absolute inset-0 bg-lilac-light/30 transform rotate-3 shadow-lg" />
            <div className="absolute inset-0 bg-beige transform -rotate-2 shadow-lg" />
           <img
  src="/Untitled139.jpg"
  alt="Kei and me"
  className="relative w-full h-full object-cover border-8 border-white shadow-xl"
/>
            {/* Tape decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-lilac/40 transform -rotate-2 shadow-sm" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-wine mb-4 tracking-tight">
            Fourth Anniversary
          </h1>
          
          {/* Subtitle */}
          <p className="font-[family-name:var(--font-script)] text-2xl md:text-3xl text-wine-light mb-6">
            Our Story
          </p>

          {/* Editorial detail */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="tracking-widest uppercase">08/05/2022</span>
            <span className="w-8 h-px bg-border" />
            <span className="tracking-widest uppercase">08/05/2026</span>
          </div>

          {/* Decorative flowers */}
          <div className="flex justify-center gap-4 mt-8 text-wine/40">
            <span className="text-2xl">✿</span>
            <span className="text-lg mt-1">❀</span>
            <span className="text-2xl">✿</span>
          </div>
        </div>

        {/* Bottom instruction */}
        <p className="text-center mt-8 text-sm text-muted-foreground animate-pulse">
          ↓
        </p>
      </div>
    </div>
  )
}
