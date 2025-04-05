import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I&apos;m Rohan Srivastava
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-6">
        Full Stack Developer passionate about building innovative solutions
      </p>
      <div className="flex gap-4 mt-8">
        <Button asChild>
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}
