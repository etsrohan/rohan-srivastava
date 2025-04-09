"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { projectCategories, projects } from "./project-data";
import { containerVariants, filterVariants } from "./animation-variants";
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
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blurred green balls */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-3/4 left-1/3 w-[400px] h-[400px] bg-green-500/15 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_center,transparent_20%,black)]" />
      </div>

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
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "border-green-500/30 text-green-400 hover:bg-green-500/10"
              )}
              onClick={() => setActiveFilter(category.title)}
            >
              {category.icon}
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
