"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaMapMarkerAlt, FaMedium } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative flex flex-col h-screen w-full items-center justify-center bg-black m-0 p-0"
      onMouseMove={(e) => setMousePos({ x: e.pageX, y: e.pageY })}
    >
      {/* Background */}
      <div className="group">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Magnified Background Dots Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition duration-300"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(#707070 2px, transparent 2px)",
            clipPath: `circle(50px at ${mousePos.x}px ${mousePos.y}px)`,
          }}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_center,transparent_20%,black)]" />
      </div>
      {/* Hero Card */}
      <p className="relative z-20 text-center text-gray-200 text-2xl mt-1 pb-0 p-8 sm:text-3xl md:text-4xl">
        Hi, my name is
      </p>
      <p className="relative z-20 bg-gradient-to-b from-green-200 text-center to-green-500 bg-clip-text p-8 pb-0 pt-0 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
        Rohan Srivastava
      </p>
      <p className="relative z-20 text-center text-gray-200 text-xl mt-1 p-0 sm:text-2xl">
        Full Stack Blockchain Developer
      </p>
      <div className="relative z-20 flex flex-row items-center mt-2">
        <div className="flex items-center space-x-2 p-2">
          <FaMapMarkerAlt className="text-gray-200" size={20} />
          <span className="text-gray-200">Noida, UP, India</span>
        </div>
        <div className="flex space-x-4 p-2">
          <a
            href="https://github.com/etsrohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-gray-200 hover:text-purple-500"
              size={24}
            />
          </a>
          <a
            href="https://linkedin.com/in/etsrohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-gray-200 hover:text-blue-500"
              size={24}
            />
          </a>
          <a
            href="https://medium.com/@jaadugar117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium
              className="text-gray-200 hover:text-green-500"
              size={24}
            />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLmQCur5NKVCUc-g12cvjGRyp-W11SdeLw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-gray-200 hover:text-red-500" size={24} />
          </a>

          <a
            href="https://x.com/etsrohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className="text-gray-200 hover:text-blue-400"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
