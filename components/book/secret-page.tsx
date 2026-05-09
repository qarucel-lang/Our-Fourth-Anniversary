"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

export default function EternalPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#4a453e] selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden font-light">
      
      {/* Fondo con textura de papel y auras lila */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-200/20 blur-[120px] rounded-full animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/30 blur-[100px] rounded-full" />

      {/* SECCIÓN 1: LA PORTADA (Lo primero que ve) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center border-b border-stone-200/50">
        <header className="mb-12 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-px bg-stone-300" />
            <Heart size={14} className="text-purple-300 fill-purple-50" strokeWidth={1} />
            <div className="w-10 h-px bg-stone-300" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400">Mayo 08, 2026</p>
        </header>

        <div className="space-y-6 max-w-2xl animate-in fade-in duration-1000 delay-300">
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-[#2d2a26]">
            Para ti, <br /> 
            <span className="text-purple-400/70">siempre.</span>
          </h1>
          <p className="text-sm md:text-lg text-stone-500 italic max-w-sm mx-auto leading-relaxed">
            Antes de que sigas bajando, recuerda que lo que sigue es solo un pedacito de todo lo que guardo aquí dentro.
          </p>
        </div>

        {/* Indicador de scroll o botón suave */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-40">
          <p className="text-[9px] uppercase tracking-[0.4em]">Desliza para leer</p>
          <div className="w-px h-12 bg-stone-400" />
        </div>
      </section>

      {/* SECCIÓN 2: LA CARTA (Aparece al bajar) */}
      <section className="relative max-w-3xl mx-auto px-8 py-24 md:py-40">
        <article className="space-y-16">
          <div className="flex justify-start">
            <Sparkles size={20} className="text-purple-200" />
          </div>

          <div className="prose prose-stone max-w-none space-y-12">
            <p className="text-2xl md:text-3xl font-serif italic text-stone-800 leading-relaxed border-l-2 border-purple-100 pl-8">
              Ocho horas de diferencia suenan como algo imposible para cualquiera, pero contigo nunca se ha sentido así.
            </p>

            <div className="space-y-8 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                A pesar de los horarios tan opuestos, nunca hemos dejado que eso se convierta en un obstáculo real entre nosotros. Me hace muy feliz ver cómo seguimos eligiéndonos todos los días y cómo siempre encontramos la manera de estar presentes incluso cuando el tiempo parece que se nos viene en contra.
              </p>
              
              <p>
                Mucha gente probablemente se rendiría viviendo algo así, pero tú me das una tranquilidad que hace que cada segundo de espera valga la pena. Incluso desde el otro lado del mundo, siempre encuentras la forma de hacerme sentir que estás aquí conmigo. Me encanta pensar que mientras tú empiezas tu día, yo estoy terminando el mío, y aun así siempre terminamos encontrándonos en nuestro propio punto medio.
              </p>

              <p className="text-xl font-serif text-stone-800 italic">
                Lo que más valoro es que nunca hemos dejado que el cansancio o el ritmo de cada uno nos termine alejando. A veces el mundo se siente enorme, pero tú haces que todo se reduzca a nosotros dos cada vez que nos hacemos un espacio para hablar.
              </p>
            </div>

            <p className="text-3xl md:text-4xl font-serif text-[#2d2a26] tracking-tighter mt-12 animate-pulse">
              Siempre estoy en casa cuando estoy contigo.
            </p>
          </div>

          {/* Cierre final */}
          <footer className="pt-24 border-t border-stone-200 flex flex-col items-center space-y-6">
            <p className="text-sm font-serif italic text-stone-400">Con todo mi amor,</p>
            <p className="text-2xl tracking-[0.4em] uppercase text-purple-400/80">Tuya</p>
            <div className="flex gap-2 pt-4">
              <Heart size={12} fill="#d8b4fe" className="text-purple-300" />
              <Heart size={12} fill="#d8b4fe" className="text-purple-300" />
              <Heart size={12} fill="#d8b4fe" className="text-purple-300" />
            </div>
          </footer>
        </article>
      </section>

      {/* Grano de papel opcional */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}