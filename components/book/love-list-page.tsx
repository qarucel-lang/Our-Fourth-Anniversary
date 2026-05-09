import { Heart, Star } from "lucide-react"

const loveItems = [
  { emoji: "♡゙𑩓ׄ𔗨ִ", text: "La manera en la que me besas como si nunca fuera suficiente."},
  { emoji: "✿ ☽", text: "Como tus abrazos siempre logran hacerme sentir en paz." },
  { emoji: "𓇼ྀི྇ ", text: "La sensación de tener tus manos sobre mí."},
  { emoji: "✶᭪", text: "La sensación de tranquilidad que me da dormir contigo." },
  { emoji: "♥︎ ᩙ༊", text: "La manera en que te ríes de mí por cualquier cosa porque te gusta verme enojada." },
  { emoji: "♬゙ ࣪ ∗ ۪", text: "Los momentos en los que te pones hiperactivo." },
  { emoji: "❁ ࣪ ∗  ۪", text: "La manera tan intensa en la que me miras." },
  { emoji: "❀ ᘓ ࣪  ∗", text: "Cómo me haces sentir segura incluso en mis peores días." },
  { emoji: "𔓕ீ۪", text: "Cómo buscas estar conmigo incluso en el día más pesado." },
  { emoji: "𓏶ீ۪", text: "La manera en la que me haces tuya y marcas mi cuerpo con tus besos."},
  { emoji: "❤︎ 𝄞 ♡", text: "La forma en que me haces sentir amada." },
  { emoji: "❦ ", text: "La forma en que me haces sentir entendida incluso cuando no sé explicarme bien." },
]

export default function LoveListPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-wine/20" />
          <Star className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
          Cosas que amo de ti
        </h1>
        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-10">
Porque amarte es lo más fácil que he hecho.        </p>

        {/* Love cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {loveItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative p-4 md:p-5 bg-card border border-border shadow-md
                transition-transform hover:scale-105 hover:shadow-lg
                ${index % 3 === 0 ? 'transform -rotate-1' : ''}
                ${index % 3 === 1 ? 'transform rotate-1' : ''}
                ${index % 3 === 2 ? 'transform -rotate-2' : ''}
              `}
            >
              {/* Decorative tape on some cards */}
              {index % 4 === 0 && (
                <div className="absolute -top-2 left-1/4 w-8 h-3 bg-lilac/50 transform -rotate-6" />
              )}
              {index % 4 === 2 && (
                <div className="absolute -top-2 right-1/4 w-10 h-3 bg-beige/70 transform rotate-3" />
              )}
              
              <span className="text-2xl mb-2 block">{item.emoji}</span>
              <p className="text-sm md:text-base text-foreground/85 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <div className="inline-block p-4 bg-lilac-light/30 rounded-sm transform rotate-1">
            <Heart className="w-5 h-5 text-wine fill-wine/30 mx-auto mb-2" />
            <p className="font-[family-name:var(--font-script)] text-lg text-wine">
It’s everything about you, always.            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-between mt-8 px-8 text-wine/30">
          <span className="text-xl">✿</span>
          <span className="text-lg">❀</span>
          <span className="text-xl">✿</span>
        </div>
      </div>
    </div>
  )
}
