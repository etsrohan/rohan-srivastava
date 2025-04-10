"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaCopy, FaCheck } from "react-icons/fa";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaYoutube,
} from "react-icons/fa6";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden w-full bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Subtle green glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
      </div>

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_center,transparent_20%,black)]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, opportunities, or
            just to say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto"
        >
          {/* Contact Information */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400" size={20} />
                <a
                  href="mailto:etsrohan@gmail.com"
                  className="text-gray-200 hover:text-green-400 transition-colors"
                >
                  etsrohan@gmail.com
                </a>
              </div>
              <button
                onClick={() => handleCopy("etsrohan@gmail.com", "email")}
                className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <FaCheck className="text-green-400" size={16} />
                ) : (
                  <FaCopy
                    className="text-gray-400 hover:text-green-400"
                    size={16}
                  />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <FaPhone className="text-green-400" size={20} />
                <a
                  href="tel:+919810773119"
                  className="text-gray-200 hover:text-green-400 transition-colors"
                >
                  +91 9810773119
                </a>
              </div>
              <button
                onClick={() => handleCopy("+91 9810773119", "phone")}
                className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <FaCheck className="text-green-400" size={16} />
                ) : (
                  <FaCopy
                    className="text-gray-400 hover:text-green-400"
                    size={16}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a
              href="https://github.com/etsrohan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300"
              aria-label="GitHub"
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
              className="p-3 rounded-full bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300"
              aria-label="LinkedIn"
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
              className="p-3 rounded-full bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300"
              aria-label="Medium"
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
              className="p-3 rounded-full bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300"
              aria-label="YouTube"
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
              className="p-3 rounded-full bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter
                className="text-gray-200 hover:text-blue-400"
                size={24}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
