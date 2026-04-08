import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  GitBranch,
  Monitor,
  Layers,
  Zap,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "MUI", "Bootstrap"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    skills: ["Node.js", "PHP"]
  },
  {
    title: "Full-Stack Frameworks",
    icon: Layers,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    skills: ["Next.js", "YII2"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Tools & Technologies",
    icon: Zap,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    skills: ["Git", "Linux"]
  },
  {
    title: "Languages",
    icon: Code,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    skills: ["JavaScript", "TypeScript", "PHP", "Java"]
  }
];

export default function Page() {
  return (
    <div className="min-h-full p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`rounded-t-lg ${category.bgColor} pb-4`}>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-full border">
            <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}