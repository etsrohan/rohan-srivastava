import { ExperienceSection } from "@/components/elements/experience/experience-section";
import { HeroSection } from "@/components/elements/hero/hero-section";
import { SkillsSection } from "@/components/elements/skill/skills-section";
import { ProjectsSection } from "@/components/elements/projects/projects-section";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full font-sans bg-background">
        <main className="flex flex-col gap-[0px] items-center w-full h-full">
          <section
            id="hero"
            className="w-full min-h-screen p-0 m-0 flex flex-col justify-center"
          >
            <HeroSection />
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <ExperienceSection />
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <SkillsSection />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <ProjectsSection />
          </section>

          {/* Blog Section */}
          <section
            id="blog"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <h2 className="text-2xl font-bold">Blog</h2>
            <p>
              Read my latest articles and insights on web development,
              technology trends, and software engineering.
            </p>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
              If you’d like to get in touch, feel free to send me a message
              using the form below.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
