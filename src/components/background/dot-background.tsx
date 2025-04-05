import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground() {
  return (
    <div className="relative flex flex-col h-full w-full items-center justify-center bg-black m-0 p-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_center,transparent_20%,black)]" />
      <p className="relative z-20 bg-gradient-to-b from-green-200 text-center to-green-500 bg-clip-text p-8 pb-0 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
        Rohan Srivastava
      </p>
      <p className="relative z-20 text-center text-green-100 text-2xl mt-1 pb-8">
        Full Stack Blockchain Developer
      </p>
    </div>
  );
}
