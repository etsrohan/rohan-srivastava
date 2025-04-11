"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaMapMarkerAlt, FaMedium } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Image from "next/image";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-black m-0 p-0 overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.pageX, y: e.pageY })}
    >
      {/* Background */}
      <div className="group absolute inset-0">
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

      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl p-0 m-0">
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between">
          {/* Text and Links */}
          <div className="flex flex-col items-start text-left max-w-xl px-4">
            <p className="text-gray-200 text-2xl mt-1 pb-0 sm:text-3xl md:text-4xl px-1">
              Hi, I am
            </p>
            <p className="bg-gradient-to-b from-green-200 to-green-500 bg-clip-text pb-0 pt-0 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
              Rohan Srivastava
            </p>
            <p className="text-gray-200 text-l mt-1 p-0 sm:text-xl px-1">
              I design and develop comprehensive applications, guiding projects
              from initial ideation to full-scale execution, and integrating
              advanced backend, frontend, and blockchain solutions.
            </p>
            <div className="flex flex-col items-center md:items-start mt-4 w-full">
              <div className="flex items-center space-x-2 px-1 py-2">
                <FaMapMarkerAlt className="text-gray-200" size={20} />
                <span className="text-gray-200">Noida, UP, India</span>
              </div>
              <div className="flex space-x-4 px-1 py-2">
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
                  <FaYoutube
                    className="text-gray-200 hover:text-red-500"
                    size={24}
                  />
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

          {/* Image */}
          <div className="relative mt-8 md:mt-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-green-500/30">
              <Image
                src="/images/hero/profile.png"
                alt="Rohan Srivastava"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-black/20 backdrop-blur-sm"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-700/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
