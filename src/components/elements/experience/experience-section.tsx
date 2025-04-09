import React from "react";
import {
  experiences,
  backgroundElements,
} from "@/components/elements/experience/experience";
import { ExperienceCard } from "@/components/elements/experience/experience-card";

export function ExperienceSection() {
  return (
    <div className="relative flex flex-col h-auto w-full items-center justify-center min-h-screen py-16 px-16 md:px-8 overflow-hidden">
      {/* Darker background */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Subtle green glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.2),transparent_70%)]" />
      </div>

      {/* Static background with randomly positioned green circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {backgroundElements.map((element, i) => {
          const { width, height, left, top, opacity } = element;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-green-500"
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

      {/* Section title */}
      <h2 className="text-4xl font-bold bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent mb-12 relative z-10 md:text-5xl">
        Experience
      </h2>

      {/* Timeline container */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500/30" />

        {/* Experience cards */}
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              index={index}
              isEven={(index + 1) % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
