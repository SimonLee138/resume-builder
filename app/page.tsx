'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/AnimatedBackground"
import Link from "next/link"
import AIChatbot from "@/components/AIChatbot"

export default function Page() {
  const [showChatbot, setShowChatbot] = React.useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative">
      <AnimatedBackground />
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Hi, I'm Simon Lee
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Full-Stack Developer | Building AI-powered experiences
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A 5-year-old developer with a passion for creating innovative solutions. Learning AI integration with web technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Download Resume
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Let's Connect
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              You may now add components and start building.
            </p>
            <p className="text-sm text-muted-foreground">
              We've already added the button component for you.
            </p>
            <Button className="mt-2" onClick={() => setShowChatbot(!showChatbot)}>AI Chatbot</Button>
            {showChatbot && <AIChatbot />}
          </div>

          {/* Dark mode hint */}
          <div className="pt-4">
            <p className="font-mono text-xs text-muted-foreground">
              (Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">d</kbd> to toggle dark mode)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
