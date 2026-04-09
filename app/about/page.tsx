import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">
            About me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Who I am
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A quick introduction to my work, experience, and the projects that define my skillset.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="h-full shadow-lg">
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <p>
                I build modern web experiences with AI-enhanced workflows, responsive design, and clean user interactions.
              </p>
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl border border-border bg-background p-6">
                  <h2 className="text-lg font-semibold mb-3">What I do</h2>
                  <p className="text-muted-foreground">
                    Creating polished interfaces, intelligent tools, and performance-conscious applications using the latest web technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-slate-200 dark:bg-slate-800 text-[14px] py-3 px-4">
                    Learning AI
                  </Badge>
                  <Badge className="bg-slate-200 dark:bg-slate-800 text-[14px] py-3 px-4">
                    Open
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-3xl">
              <p className="text-lg font-medium text-muted-foreground">Photo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
