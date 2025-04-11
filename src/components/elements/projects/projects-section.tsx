"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { projectCategories, projects } from "./project-data";
import {
  containerVariants,
  filterVariants,
  backgroundElements,
} from "./animation-variants";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  // Default to the first category instead of "All"
  const [activeFilter, setActiveFilter] = useState(projectCategories[0].title);

  // Filter projects based on selected category
  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Subtle green glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
      </div>

      {/* Static background with randomly positioned green circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {backgroundElements.map((element, i) => {
          const { width, height, left, top, opacity } = element;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-green-500 blur-[100px]"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work across various domains including
            blockchain, web development, backend systems, and game development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeFilter === category.title ? "default" : "outline"}
              className={cn(
                "rounded-full transition-all duration-300 flex items-center gap-2",
                activeFilter === category.title
                  ? "bg-green-400 hover:bg-green-500 text-black"
                  : "border-green-500/50 text-green-400 hover:bg-green-500/15 hover:text-green-400"
              )}
              onClick={() => setActiveFilter(category.title)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
