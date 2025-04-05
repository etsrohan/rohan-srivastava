import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description:
      "Description of your first project. Highlight the key features and technologies used.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. What problems did it solve?",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "Description of your third project. What makes it unique?",
    tech: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/yourusername/project3",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-muted rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.link}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
