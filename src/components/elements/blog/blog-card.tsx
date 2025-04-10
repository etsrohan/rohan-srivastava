"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BlogPost } from "./blog-data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full h-full"
    >
      <Card className="h-full w-full backdrop-blur-md bg-black/40 border border-green-500/10 hover:border-green-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] group overflow-hidden p-0 flex flex-col">
        {/* Blog Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge
              variant="secondary"
              className="bg-green-800/40 text-green-200 border border-green-500/20 backdrop-blur-sm"
            >
              {post.category === "medium" ? "Medium" : "YouTube"}
            </Badge>
          </div>

          {/* Read Time Badge */}
          <div className="absolute top-4 left-4 z-20">
            <Badge
              variant="secondary"
              className="bg-green-800/40 text-green-200 border border-green-500/20 backdrop-blur-sm"
            >
              {post.readTime}
            </Badge>
          </div>
        </div>

        <CardHeader className="pt-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 h-[4.5rem]">
            {post.description}
          </p>
        </CardHeader>

        <Separator className="bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300" />

        <CardContent className="pt-4 flex-shrink-0">
          <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            <span>{post.date}</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-2 pt-2 pb-4 mt-auto">
          <Button
            variant="outline"
            className="bg-green-500/5 text-green-200 border border-green-500/20 hover:bg-green-500/10 transition-colors backdrop-blur-sm"
            onClick={() => window.open(post.link, "_blank")}
          >
            {post.category === "medium" ? "Read Article" : "Watch Video"}
            <FaExternalLinkAlt className="ml-2 w-3 h-3" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
