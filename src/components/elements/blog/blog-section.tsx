"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogPosts, categories, Category } from "./blog-data";
import {
  backgroundElements,
  containerVariants,
  filterVariants,
} from "./animation-variants";
import { BlogCard } from "./blog-card";

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("medium");

  const filteredPosts = blogPosts.filter(
    (post) => post.category === selectedCategory
  );

  return (
    <section className="relative py-20 overflow-hidden w-full">
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

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent mb-4">
            Content & Media
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My articles on Medium and video tutorials on YouTube covering web
            development, software engineering, and tech insights.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={filterVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category: Category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
