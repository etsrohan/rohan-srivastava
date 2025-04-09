"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skillCategories } from "./skill-categories";
import { containerVariants, itemVariants } from "./animation-variants";

export function SkillsSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
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
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of
            expertise across various domains of software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full backdrop-blur-sm bg-black/80 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-[1.02] group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <Separator className="bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300" />
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-green-500/10 text-green-200 border border-green-500/30 hover:bg-green-500/20 transition-colors cursor-default group-hover:border-green-500/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
