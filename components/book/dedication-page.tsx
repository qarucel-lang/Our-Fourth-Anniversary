import { Heart } from "lucide-react"

export default function DedicationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 paper-texture bg-paper">
      <div className="max-w-lg w-full text-center">
        {/* Decorative top element */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-wine/30" />
        </div>

        {/* Main dedication */}
        <div className="space-y-8">
          <p className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-wine leading-relaxed">
            Para ti...
          </p>

          <div className="flex justify-center">
            <Heart className="w-6 h-6 text-wine fill-wine/20" />
          </div>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
            El único que conoce todas mis versiones,
            <br />
            y las ama todas.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            Gracias por ser mi lugar seguro y demostrarme que el amor verdadero no solo existe, sino que es paciente, amable y siempre encuentra la manera de crecer, incluso en los momentos difíciles.
            <br />
             <span className="text-wine font-medium">Te amo, hoy y en todas mis vidas</span>.
          </p>
        </div>

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <span className="text-wine/40">✿</span>
            <div className="w-16 h-px bg-wine/30" />
            <span className="text-wine/40">✿</span>
          </div>
        </div>

        {/* Handwritten signature */}
        <p className="font-[family-name:var(--font-script)] text-2xl text-wine-light mt-8">
          Con todo mi amor
        </p>
      </div>
    </div>
  )
}
