"use client"

import { Calendar } from "lucide-react"

export default function RomanticPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#f4f0ec] flex items-center">
      
      {/* CONTENEDOR */}
      <div className="max-w-4xl w-full mx-auto md:translate-x-4">
        
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#7a3d5c]/20" />
          <h2 className="text-sm tracking-[0.3em] uppercase text-[#7a3d5c]/60">
            The purity of us
          </h2>
          <div className="flex-1 h-px bg-[#7a3d5c]/20" />
        </div>

        {/* TITULO */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#7a3d5c] text-center mb-2">
Paz en medio de mi caos        </h1>

        <p className="text-xl italic text-[#b06a8c] text-center mb-10">
Gracias por quedarte incluso cuando ni yo misma me entiendo.        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXTO ACTUALIZADO */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs space-y-6 text-left">
              
              <blockquote className="border-l-4 border-[#b06a8c]/40 pl-5">
                <p className="text-xl italic text-[#7a3d5c]">
                  "Me gusta que contigo puedo ser un desastre sin que sea un problema."
                </p>
              </blockquote>

              <p className="text-base leading-relaxed text-[#5e4a45]">
                Puedo estar de malas, puedo no saber qué hacer con mi vida o simplemente no decir nada y sé que no me vas a juzgar por eso. 
              </p>

              <p className="text-base leading-relaxed text-[#7b6a65]">
                Gracias por no cansarte de mis mil personalidades y por quedarte en medio de mi caos todos los días.
              </p>

            </div>
          </div>

          {/* POLAROID CON IMAGEN */}
          <div className="flex justify-center">
            
            <div className="relative scale-105">
              
              {/* fondo decorativo */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#e8dfe2] rotate-2 rounded-sm" />
              
              {/* polaroid */}
              <div className="relative bg-white p-4 shadow-xl -rotate-1">
                
                {/* ESPACIO DE LA FOTO */}
                <div className="w-[240px] h-[280px] bg-[#ddd] overflow-hidden">
                  <img 
                    src="/jangkku.jpeg" // Asegúrate de que la extensión sea correcta (.jpg, .png, etc.)
                    alt="Jangkku"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <p className="text-center text-sm mt-3 text-[#b06a8c] font-serif italic">
                  Eternal Love
                </p>
              </div>

              {/* cintas (washi tape) */}
              <div className="absolute -top-2 left-1/4 w-12 h-4 bg-[#e5cfd6]/60 -rotate-12 backdrop-blur-sm" />
              <div className="absolute -bottom-2 right-1/4 w-10 h-4 bg-[#d8c8c2]/60 rotate-6 backdrop-blur-sm" />

            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-center mt-12 text-[#7a3d5c]/40">
          ✿ ・ ✿ ・ ✿
        </div>

      </div>
    </div>
  )
}