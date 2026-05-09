"use client"

import { Music, Heart, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

// Para encontrar el Spotify ID de una canción:
// 1. Abre Spotify y busca la canción
// 2. Click derecho > Compartir > Copiar enlace de la canción
// 3. El ID está después de "track/" - ejemplo: https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v
//    El ID sería: 0tgVpDi06FyKpA1z0VMD4v

const playlist = [
  { 
    title: "You Rock My World",
    artist: "Michael Jackson", 
    note: "Our love is true because of you",
    spotifyId: "1Lhwn4PqeGpM4LTVUowW76"
  },
  { 
    title: "Everybody Here Wants You", 
    artist: "Jeff Buckley", 
    note: "But I tell you I'm the one",
    spotifyId: "2bcvooA6HEmVUneEGJnNZD"
  },
  { 
    title: "Japanese Denim",
    artist: "Daniel Caesar", 
    note: "You're my four leaf clover",
    spotifyId: "7IVukH71OXfAu3KudrrizN"
  },
  { 
    title: "Kingston", 
    artist: "Faye Webster", 
    note: "The day that I met you I started dreaming",
    spotifyId: "5WbfFTuIldjL9x7W6y5l7R"
  },
  { 
    title: "The Way", 
    artist: "Ariana Grande feat. Mac Miller", 
    note: "I love the way you make me feel",
    spotifyId: "5FhVKyPvQ2rnimFwNAxu2C"
  },
  { 
    title: "Sweetest Devotion", 
    artist: "Adele", 
    note: "You're my light, you're my darkness",
    spotifyId: "10tHyoc3wSA5scOVZuMcFm"
  },
  { 
    title: "Turning Page", 
    artist: "Sleeping At Last", 
    note: "I surrender who I’ve been for who you are",
    spotifyId: "2kfGoV9a5dbSKCNmUWH2ZF"
  },
  { 
    title: "Never Stop", 
    artist: "Safetysuit", 
    note: "I will never stop choosing you babe",
    spotifyId: "2bljOXGO29CXwd23GxuDZM"
  },
]

export default function MusicPage() {
  const [expandedSong, setExpandedSong] = useState<number | null>(null)

  const togglePlayer = (index: number) => {
    setExpandedSong(expandedSong === index ? null : index)
  }

  return (
    <div className="min-h-screen p-6 md:p-12 paper-texture bg-cream overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-wine/20" />
          <Music className="w-4 h-4 text-wine" />
          <div className="flex-1 h-px bg-wine/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-2 text-center">
          Our Love Playlist
        </h1>
        <p className="font-[family-name:var(--font-script)] text-xl text-wine-light text-center mb-8">
          Every song reminds me of you.
        </p>

        {/* Vinyl record decoration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-foreground/90 flex items-center justify-center shadow-xl"
              style={{ animation: 'spin 8s linear infinite' }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/40" />
              <div className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full border border-foreground/30" />
              <div className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full border border-foreground/20" />
              <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-wine flex items-center justify-center">
                <Heart className="w-3 h-3 md:w-5 md:h-5 text-white fill-white/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="space-y-3">
          {playlist.map((song, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-border bg-card">
              {/* Song row */}
              <button
                onClick={() => togglePlayer(index)}
                className="w-full flex items-center gap-4 p-4 hover:bg-lilac-light/20 transition-colors text-left"
              >
                {/* Play indicator */}
                <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                  {expandedSong === index ? (
                    <Volume2 className="w-4 h-4 text-wine" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-wine/50" />
                  )}
                </div>
                
                {/* Song info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{song.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                </div>
                
                {/* Note */}
                <p className="hidden md:block font-[family-name:var(--font-script)] text-sm text-wine-light italic max-w-[200px] truncate">
                  {song.note}
                </p>
                
                {/* Heart */}
                <Heart className="w-4 h-4 text-wine fill-wine/30 shrink-0" />
              </button>

              {/* Spotify embed - expands when clicked */}
              {expandedSong === index && (
                <div className="px-4 pb-4">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-script)] text-lg text-wine-light">
          </p>
          <div className="flex justify-center gap-2 mt-4 text-wine/40">
            <span>♪</span>
            <span>♫</span>
            <span>♪</span>
          </div>
        </div>
      </div>
    </div>
  )
}
