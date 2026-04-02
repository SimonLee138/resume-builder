"use client"

import * as React from "react"

type Bubble = {
  id: number
  left: string
  top: string
  width: string
  height: string
  animationDelay: string
  animationDuration: string
}

function createBubbles(count: number): Bubble[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 6 + 2}px`,
    height: `${Math.random() * 6 + 2}px`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  }))
}

function createDots(count: number): Bubble[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: "4px",
    height: "4px",
    animationDelay: `${Math.random() * 4}s`,
    animationDuration: `${Math.random() * 2 + 3}s`,
  }))
}

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = React.useState<Bubble[]>(() =>
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: "50%",
      top: "50%",
      width: "4px",
      height: "4px",
      animationDelay: "0s",
      animationDuration: "3s",
    }))
  )

  const [dots, setDots] = React.useState<Bubble[]>(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: "50%",
      top: "50%",
      width: "4px",
      height: "4px",
      animationDelay: "0s",
      animationDuration: "4s",
    }))
  )

  React.useEffect(() => {
    setBubbles(createBubbles(50))
    setDots(createDots(20))
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={`bubble-${bubble.id}`}
            className="absolute rounded-full bg-blue-400/20 dark:bg-blue-300/30 animate-pulse"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.width,
              height: bubble.height,
              animationDelay: bubble.animationDelay,
              animationDuration: bubble.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Floating dots with different animations */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={`dot-${dot.id}`}
            className="absolute bg-purple-400/40 dark:bg-purple-300/50 rounded-full animate-bounce"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.width,
              height: dot.height,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          />
        ))}
      </div>
    </div>
  )
}