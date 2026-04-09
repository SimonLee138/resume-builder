'use client'

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

const projectCategories = ["All", "Web", "AI-powered", "Full-Stack"]

const projects = [
  {
    title: "Resume AI Assistant",
    description:
      "An AI-powered resume builder with interview-ready summaries, skill suggestions, and one-click export.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    category: "AI-powered",
    demo: "#",
    github: "#"
  },
  {
    title: "Portfolio Studio",
    description:
      "A modern portfolio platform with custom sections, case studies, and responsive presentation.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Web",
    demo: "#",
    github: "#"
  },
  {
    title: "AI Chat Dashboard",
    description:
      "A conversational dashboard for AI agents with chat history, templates, and analytics.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "AI", "Supabase", "Tailwind CSS"],
    category: "AI-powered",
    demo: "#",
    github: "#"
  },
  {
    title: "Job Board Full-Stack",
    description:
      "A full-stack job listing platform with authentication, filters, and company profiles.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack",
    demo: "#",
    github: "#"
  },
  {
    title: "Marketing Launch Page",
    description:
      "A polished launch page with animated hero, testimonials, and lead capture form.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    category: "Web",
    demo: "#",
    github: "#"
  }
]

export default function Page() {
  const [category, setCategory] = React.useState("All")

  const filteredProjects = React.useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category]
  )

  return (
    <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">
            Featured work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my best projects, from AI-enhanced experiences to fully featured web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                category === option
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/70 text-muted-foreground hover:bg-muted"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-4 text-sm text-muted-foreground">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-primary hover:bg-primary/10 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-2 hover:bg-muted transition"
                >
                  <IconBrandGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
