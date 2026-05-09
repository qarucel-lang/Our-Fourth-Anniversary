import { Heart, Camera } from "lucide-react"

const moments = [
  { src: "/sungwon.jpeg", caption: "", rotate: "-rotate-2" },
  { src: "/wonysh.jpeg", caption: "", rotate: "rotate-1" },
  { src: "/winrina.jpeg", caption: "", rotate: "-rotate-1" },
  { src: "/ianstella.jpeg", caption: "", rotate: "rotate-2" },
  { src: "/marhoon.jpeg", caption: "", rotate: "-rotate-3" },
  { src: "/heehoon.jpeg", caption: "", rotate: "rotate-1" },
]

export default function MomentsPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-paper">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-wine/20" />
          <Camera className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
Every version of us        </h1>
        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-10">
I’m so deeply, hopelessly in love with you.        </p>

        {/* Scrapbook collage */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-4 text-3xl text-wine/20 hidden md:block">✿</div>
          <div className="absolute bottom-20 right-8 text-2xl text-wine/20 hidden md:block">❀</div>
          
          {/* Photo grid - scrapbook style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {moments.map((moment, index) => (
              <div
                key={index}
                className={`relative transform ${moment.rotate} hover:scale-105 transition-transform duration-300`}
              >
                {/* Polaroid frame */}
                <div className="bg-white p-3 pb-12 shadow-lg group">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {/* IMAGEN JPEG */}
                    <img 
                      src={moment.src} 
                      alt={moment.caption}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    {/* Overlay suave decorativo */}
                    <div className="absolute inset-0 bg-wine/5 pointer-events-none" />
                  </div>
                  
                  {/* Caption area */}
                  <p className="font-[family-name:var(--font-script)] text-base text-wine-light text-center absolute bottom-3 left-0 right-0 px-2 leading-tight">
                    {moment.caption}
                  </p>
                </div>

                {/* Decorative tape (Washi Tape) */}
                {index % 3 === 0 && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-lilac/40 backdrop-blur-[1px] transform rotate-3 shadow-sm z-10" />
                )}
                {index % 3 === 1 && (
                  <div className="absolute -top-2 left-1/3 w-10 h-4 bg-beige/60 backdrop-blur-[1px] transform -rotate-6 shadow-sm z-10" />
                )}
                {index % 3 === 2 && (
                  <>
                    <div className="absolute -top-1 left-2 w-8 h-3 bg-lilac/30 backdrop-blur-[1px] transform -rotate-12 shadow-sm z-10" />
                    <div className="absolute -top-1 right-2 w-8 h-3 bg-lilac/30 backdrop-blur-[1px] transform rotate-12 shadow-sm z-10" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative note */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-lilac-light/40 transform -rotate-1 border border-wine/5">
            <span className="text-wine/60">✿</span>
            <p className="font-[family-name:var(--font-script)] text-lg text-wine">
I'm so lucky it was you.            </p>
            <span className="text-wine/60">✿</span>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute bottom-4 left-4 text-wine/20 text-xs hidden md:block tracking-widest">
          ─ MEMORIAS ─
        </div>
      </div>
    </div>
  )
}