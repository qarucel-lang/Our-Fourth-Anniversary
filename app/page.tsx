"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

// Import all pages
import CoverPage from "@/components/book/cover-page"
import DedicationPage from "@/components/book/dedication-page"
import StoryBeginPage from "@/components/book/story-begin-page"
import DevelopmentPage from "@/components/book/development-page"
import LoveListPage from "@/components/book/love-list-page"
import MomentsPage from "@/components/book/moments-page"
import MusicPage from "@/components/book/music-page"
import ReflectionPage from "@/components/book/reflection-page"
import ChallengesPage from "@/components/book/challenges-page"
import DistancePage from "@/components/book/distance-page"
import ChoicePage from "@/components/book/choice-page"
import LetterPage from "@/components/book/letter-page"
import ClosingPage from "@/components/book/closing-page"
import FinalPage from "@/components/book/final-page"

const pages = [
  // Las 5 primeras se mantienen igual
  { id: 1, component: CoverPage },
  { id: 2, component: DedicationPage },
  { id: 3, component: ChallengesPage },
  { id: 4, component: StoryBeginPage },
  { id: 5, component: DevelopmentPage },
  // Nuevo orden solicitado
  { id: 6, component: MomentsPage },
  { id: 7, component: ReflectionPage },
  { id: 8, component: LoveListPage },
  { id: 9, component: DistancePage },
  { id: 10, component: MusicPage },
  { id: 11, component: ChoicePage },
  { id: 12, component: LetterPage },
  { id: 13, component: ClosingPage },
  { id: 14, component: FinalPage },
]

export default function RomanticBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPage = (pageIndex: number) => {
    if (isAnimating || pageIndex < 0 || pageIndex >= pages.length) return
    setIsAnimating(true)
    setCurrentPage(pageIndex)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(currentPage - 1)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextPage()
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevPage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, isAnimating])

  const CurrentPageComponent = pages[currentPage].component

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Page container */}
      <div className="relative w-full min-h-screen">
        {/* Current page */}
        <div
          className={cn(
            "w-full min-h-screen transition-all duration-500 ease-out",
            isAnimating && "opacity-0 scale-95"
          )}
        >
          <CurrentPageComponent />
        </div>

        {/* Navigation */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isAnimating}
            className={cn(
              "p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg",
              "transition-all duration-300 hover:bg-accent hover:scale-110",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
            aria-label="Página anterior"
          >
            <ChevronUp className="w-5 h-5 text-wine" />
          </button>

          <div className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border shadow-lg">
            <Heart className="w-4 h-4 text-wine fill-wine/30" />
            <span className="text-sm font-medium text-foreground">
              {currentPage + 1} / {pages.length}
            </span>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isAnimating}
            className={cn(
              "p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg",
              "transition-all duration-300 hover:bg-accent hover:scale-110",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
            aria-label="Siguiente página"
          >
            <ChevronDown className="w-5 h-5 text-wine" />
          </button>
        </div>

        {/* Page indicator dots */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentPage === index
                  ? "bg-wine scale-125"
                  : "bg-border hover:bg-accent"
              )}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}