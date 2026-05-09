import { Heart, MapPin, Sparkles } from "lucide-react"

const memories = [
  { 
    src: "/viaje1.jpeg",
    title: "Nuestro primer viaje",
    location: "Un lugar especial",
    description: "Donde descubrimos que el mundo se siente pequeño si estamos juntos.",
    date: "2022"
  },
  { 
    src: "/aniv1.jpeg",
    title: "El primer año",
    location: "Donde todo comenzó",
    description: "La confirmación de que esto no era solo algo pasajero.",
    date: "2023"
  },
  { 
    src: "/sorpresa.jpeg",
    title: "La sorpresa",
    location: "En casa",
    description: "Cuando entendí que no necesito grandes escenarios, solo a ti.",
    date: "2024"
  },
  { 
    src: "/aventura.jpeg",
    title: "Aventura inesperada",
    location: "Donde nos perdimos",
    description: "El mejor día que no planeamos. Gracias por los errores perfectos.",
    date: "2025"
  },
]

export default function TimelineMemories() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-cream/50 paper-texture overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Header Minimalista */}
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.8em] text-wine/40 mb-4">Chronology of us</p>
          <h1 className="text-5xl md:text-6xl font-serif text-wine italic">Historias grabadas.</h1>
        </div>

        {/* Línea Central Estética */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-wine/20 via-wine/5 to-transparent hidden md:block" />

        <div className="space-y-24 md:space-y-40">
          {memories.map((memory, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Imagen con marco tipo Film Strip */}
              <div className="flex-1 w-full group">
                <div className="relative p-2 bg-wine/5 rounded-sm overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img 
                      src={memory.src} 
                      alt={memory.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                  {/* Decoración de película */}
                  <div className="absolute top-0 bottom-0 left-4 w-4 flex flex-col justify-around py-4 opacity-20 group-hover:opacity-40">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white rounded-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenido del Recuerdo */}
              <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} space-y-4`}>
                <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                  <span className="text-[10px] font-bold text-wine/30 tracking-widest">{memory.date}</span>
                  <div className="w-8 h-px bg-wine/20" />
                  <Sparkles className="w-3 h-3 text-wine/30" />
                </div>
                
                <h3 className="text-3xl font-serif text-wine leading-none">{memory.title}</h3>
                
                <div className={`flex items-center gap-1 text-[11px] uppercase tracking-wider text-wine/50 ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                  <MapPin className="w-3 h-3" />
                  <span>{memory.location}</span>
                </div>

                <p className="font-serif italic text-foreground/70 leading-relaxed max-w-sm mx-auto md:mx-0">
                  "{memory.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de la página */}
        <div className="mt-40 text-center space-y-4">
          <div className="w-12 h-px bg-wine/30 mx-auto" />
          <p className="font-[family-name:var(--font-script)] text-2xl text-wine/60">
            Y lo mejor está por venir.
          </p>
        </div>
      </div>
    </div>
  )
}