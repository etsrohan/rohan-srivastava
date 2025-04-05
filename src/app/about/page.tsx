export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg mb-6">
          I&apos;m a passionate Full Stack Developer with expertise in modern
          web technologies. I love building scalable applications and solving
          complex problems through elegant solutions.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Python, Databases (SQL, NoSQL)</li>
          <li>DevOps: Docker, CI/CD, Cloud Platforms</li>
          <li>Tools: Git, VS Code, Agile Methodologies</li>
        </ul>
      </div>
    </div>
  );
}
