import { Heart, Feather } from "lucide-react"

export default function LetterPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream">
      <div className="max-w-2xl mx-auto">
        {/* Letter header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wine/20" />
          <Feather className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Letter container */}
        <div className="bg-paper p-8 md:p-12 shadow-lg border border-border relative">
          {/* Decorative fold corner */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-beige shadow-inner" style={{
            clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
          }} />

          {/* Date */}
          <p className="text-sm text-muted-foreground mb-6 text-right">
            08 de Mayo de 2026
          </p>

          {/* Salutation */}
          <p className="font-[family-name:var(--font-script)] text-2xl text-wine mb-6">
            Mi amor,
          </p>

          {/* Letter body */}
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            <p>
A veces me detengo a pensar en todo lo que hemos construido y no puedo evitar sentirme demasiado afortunada. Lo que tenemos se siente tan estable, tan genuino y tan nuestro, que contigo mi corazón finalmente encontró ese lugar donde puede descansar tranquilo. Me encanta la forma en que nos entendemos incluso en las cosas pequeñas y cómo todo entre nosotros fluye de una manera tan natural.

            </p>

            <p>
También amo saber que cuidamos lo nuestro con la misma intensidad con la que comenzó todo. No es solamente estar juntos, es la tranquilidad de sentir que siempre pertenecemos el uno al otro sin necesidad de explicarlo demasiado. Nuestra relación se convirtió en ese lugar seguro al que siempre quiero volver, y honestamente no hay nada que me haga sentir más plena que despertar cada día sabiendo que te tengo a ti.

            </p>

            <p>
Hay algo increíblemente especial en saber que conozco una versión de ti que nadie más puede ver. Me encanta haber aprendido cada detalle de tu personalidad y conocer todas esas pequeñas partes tuyas que solo aparecen cuando estás conmigo. Cada vez que me compartes tus pensamientos, tus miedos, tus alegrías o incluso las partes más sensibles de ti, siento que me enamoro todavía más de la persona que eres.

            </p>

            <p>
Y honestamente admiro muchísimo la forma en que te entregas a lo nuestro. Me encanta ver cómo das todo de ti incluso en los detalles más pequeños, porque nunca dejas que me sienta sola o poco amada. Eres una persona increíble, y la intensidad con la que amas me hace sentir orgullosa de la relación que hemos construido juntos. Esa versión tuya que existe solo cuando estamos nosotros dos se ha convertido en una de las cosas más valiosas que tengo en mi vida.

            </p>

            <p>
Lo nuestro no es para cualquiera, y creo que esa es una de las razones por las que significa tanto para mí. Muy pocas personas entenderían la intensidad con la que nos amamos o la forma tan profunda en la que nos necesitamos, pero contigo nunca he sentido miedo de amar así. Me encanta sentir que lo nuestro nos pertenece solamente a nosotros, como un pequeño mundo donde siempre terminamos encontrándonos sin importar lo demás.
            </p>

            <p className="pt-4">
Tu amor llegó a iluminar partes de mí que llevaban mucho tiempo sintiéndose apagadas, y desde entonces ya no puedo imaginar mi vida sin ti dentro de ella. Hay una intensidad en la forma en que te busco, te extraño y te necesito que solamente existe contigo. Y aunque han pasado años, sigo teniendo exactamente la misma promesa dentro de mí: voy a seguir entregándome a ti todos los días para que nunca dudes de cuánto te amo.
            </p>

            <p>
Me he acostumbrado tanto a ti que a veces ya no sé dónde termino yo y dónde empiezas tú. Me encanta esa sensación de pertenencia que tenemos, esa seguridad silenciosa de saber que eres mío y que yo soy tuya incluso sin decirlo todo el tiempo. Nunca necesité promesas enormes de tu parte, porque desde hace mucho tiempo me demostraste que estás aquí de verdad, eligiéndome incluso cuando las cosas se complican.
            </p>

            <p>
Me gusta que seas mi lugar seguro, pero también esa persona que logra volverme completamente loca de una forma que nadie más podría. Eres mi obsesión más bonita y la decisión más clara que he tomado en mi vida. Y no importa cuánto tiempo pase, siempre voy a sentirme orgullosa de todo lo que hemos construido tú y yo solos.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="font-[family-name:var(--font-script)] text-xl text-wine">
              Con todo mi amor,
            </p>
            <p className="font-[family-name:var(--font-script)] text-2xl text-wine-light mt-2">
              Por siempre tuya.
            </p>
          </div>

          {/* Heart seal */}
          <div className="absolute bottom-6 left-6">
            <Heart className="w-8 h-8 text-wine fill-wine/30" />
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-8 text-wine/30">
          <span className="text-xl">✿ ❀ ✿</span>
        </div>
      </div>
    </div>
  )
}
