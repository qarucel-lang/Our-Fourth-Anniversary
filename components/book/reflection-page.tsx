import { Heart, Sparkles } from "lucide-react"

export default function ReflectionPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-wine/20" />
          <Sparkles className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
Desde el primer instante        </h1>
        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-12">
Porque lo nuestro no necesitó tiempo para ser real.
        </p>

        {/* Essay-style content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground/90 first-letter:text-5xl first-letter:font-bold first-letter:text-wine first-letter:float-left first-letter:mr-3 first-letter:mt-1">
Sigo sin creer que sea posible conectarse con alguien así desde el primer instante. Antes de ti, yo ni siquiera sabía que se podía sentir una atracción tan fuerte por alguien que apenas acabas de conocer, pero contigo todo pasó de una forma tan natural que nunca me dio miedo sentir tanto.
          </p>

          <p className="text-foreground/85">
No fue algo que tuvimos que construir lentamente ni algo que necesitara tiempo para sentirse real; simplemente pasó. Desde el primer día nuestras conversaciones fluyeron tan bien que poco a poco comenzamos a acercarnos más, coqueteando entre nosotros hasta que toda esa intensidad empezó a salir sola.
          </p>

          {/* Decorative divider */}
          <div className="flex justify-center py-4">
            <Heart className="w-6 h-6 text-wine fill-wine/20" />
          </div>

          <p className="text-foreground/85">
Y creo que una de las cosas más bonitas de nosotros es que nunca tuve que esconder ninguna parte de mí para que te quedaras. Desde el principio me hiciste sentir que podía mostrarte cada parte de mi personalidad, mis cambios de humor, mi intensidad y todas esas cosas que normalmente me cuesta dejar salir con alguien más. Contigo todo se siente natural. Estar contigo se siente bien incluso en mis peores días. 
    </p>

          <p className="text-foreground/85">
           
          </p>
        </div>

        {/* Highlighted quote */}
        <div className="mt-10 p-8 bg-lilac-light/30 border-l-4 border-wine/40">
          <p className="font-[family-name:var(--font-script)] text-2xl md:text-3xl text-wine text-center">
            {'"'}It's not just that I love you; it's the fact that I actually like the person I am when I'm with you{'"'}
          </p>
        </div>

        {/* Signature */}
        <div className="mt-8 text-right">
          <p className="font-[family-name:var(--font-script)] text-xl text-wine-light">
            K ♡ C
          </p>
          <div className="flex justify-end mt-2 text-wine/40">
            <span>✿ ❀ ✿</span>
          </div>
        </div>
      </div>
    </div>
  )
}
