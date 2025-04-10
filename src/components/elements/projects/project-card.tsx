import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Project } from "./project-data";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-black/80 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] group overflow-hidden p-0">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge
              variant="secondary"
              className="bg-green-800/60 text-green-200 border border-green-500/30"
            >
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pt-4">
          <CardTitle className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </CardDescription>
        </CardHeader>

        <Separator className="bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300" />

        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="bg-green-500/10 text-green-200 border border-green-500/30 hover:bg-green-500/20 transition-colors cursor-default group-hover:border-green-500/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-2 pt-2 pb-4">
          {project.links.map((link, linkIndex: number) => (
            <a
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
