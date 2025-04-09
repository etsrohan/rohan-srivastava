"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Experience } from "@/components/elements/experience/experience";
import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export function ExperienceCard({
  experience,
  index,
  isEven,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot - more prominent */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-500 z-10 shadow-[0_0_15px_rgba(34,197,94,0.7)]" />

      {/* Card positioned on alternating sides */}
      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:ml-auto md:pl-6" : "md:mr-auto md:pr-6"
        }`}
      >
        {/* Card wrapper with subtle border */}
        <div
          className={`relative p-[1px] rounded-lg overflow-hidden transition-all duration-300 ${
            isHovered ? "scale-[1.02]" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle border gradient */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: [
                "linear-gradient(0deg, rgba(34,197,94,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                "linear-gradient(150deg, rgba(34,197,94,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                "linear-gradient(180deg, rgba(34,197,94,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                "linear-gradient(210deg, rgba(34,197,94,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                "linear-gradient(360deg, rgba(34,197,94,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              boxShadow: "0 0 10px rgba(34,197,94,0.1)",
            }}
          />

          {/* Experience Card */}
          <Card
            className={`relative backdrop-blur-md bg-black/80 border-0 shadow-lg`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {/* Company Logo */}
              {experience.logo && (
                <div className="relative w-12 h-12 rounded-md overflow-hidden bg-white/10 flex-shrink-0">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div>
                <CardTitle className="bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent font-bold">
                  {experience.role}
                </CardTitle>
                <CardDescription className="text-green-500/80">
                  {experience.company}
                </CardDescription>
                <CardDescription className="text-green-500/80">
                  {experience.period}
                </CardDescription>
              </div>
            </CardHeader>
            <Separator className="my-2 bg-green-500/20" />
            <CardContent>
              <div className="text-white mb-4 whitespace-pre-line">
                {experience.description.split("\n").map((line, index) => {
                  const colonIndex = line.indexOf(":");
                  if (colonIndex > 0) {
                    const title = line.substring(0, colonIndex + 1);
                    const content = line.substring(colonIndex + 1);
                    return (
                      <p key={index}>
                        <span className="font-bold">{title}</span>
                        {content}
                      </p>
                    );
                  }
                  return <p key={index}>{line}</p>;
                })}
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-green-500/10 text-green-200 border border-green-500/30 hover:bg-green-500/20 transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
