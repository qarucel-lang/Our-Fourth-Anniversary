"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export default function TogetherPage() {
  const startDate = new Date("2022-05-08T00:00:00")
  const endDate = new Date("2026-05-08T00:00:00")

  const [timePassed, setTimePassed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date()

      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (days < 0) {
        months--

        const previousMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate()

        days += previousMonthDays
      }

      if (months < 0) {
        years--
        months += 12
      }

      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      const totalDuration = endDate.getTime() - startDate.getTime()
      const currentDuration = now.getTime() - startDate.getTime()

      const percentage = Math.min(
        (currentDuration / totalDuration) * 100,
        100
      )

      setTimePassed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      })

      setProgress(percentage)
    }

    updateCounter()

    const interval = setInterval(updateCounter, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-paper paper-texture flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full text-center">

        {/* Main title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-wine mb-4 tracking-wide">
            4 YEARS
          </h1>

          <p className="text-lg md:text-xl uppercase tracking-[0.4em] text-wine-light">
            Been Together
          </p>
        </div>

        {/* Photos */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-14">

          {/* Left photo */}
          <div className="flex flex-col items-center">
            <img
              src="/martin.jpeg"
              alt="martin"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover grayscale border-4 border-border shadow-md"
            />

            <p className="mt-5 text-xl font-semibold text-foreground">
              Kei
            </p>
          </div>

          {/* Heart */}
          <Heart className="w-8 h-8 text-wine fill-wine/20" />

          {/* Right photo */}
          <div className="flex flex-col items-center">
            <img
              src="/juhoon.jpeg"
              alt="juhoon"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover grayscale border-4 border-border shadow-md"
            />

            <p className="mt-5 text-xl font-semibold text-foreground">
              Ciel
            </p>
          </div>
        </div>

        {/* Real-time counter */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-14">

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.years}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Years
            </p>
          </div>

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.months}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Months
            </p>
          </div>

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.days}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Days
            </p>
          </div>

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.hours}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Hours
            </p>
          </div>

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.minutes}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Minutes
            </p>
          </div>

          <div className="bg-card border border-border p-5 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-wine">
              {timePassed.seconds}
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">
              Seconds
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">

          <div className="relative w-full h-3 bg-beige rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-wine transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />

            {/* Heart marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `calc(${progress}% - 10px)` }}
            >
              <Heart className="w-5 h-5 text-wine fill-wine/20" />
            </div>
          </div>

          <div className="flex justify-between mt-4 text-sm text-foreground/60">
            <span>08 · 05 · 2022</span>
            <span>08 · 05 · 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}