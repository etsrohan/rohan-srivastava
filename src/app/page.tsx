import { ExperienceSection } from "@/components/elements/experience/experience-section";
import { HeroSection } from "@/components/elements/hero/hero-section";
import { SkillsSection } from "@/components/elements/skill/skills-section";
import { ProjectsSection } from "@/components/elements/projects/projects-section";
import { BlogSection } from "@/components/elements/blog/blog-section";
import { ContactSection } from "@/components/elements/contact/contact-section";

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
            <BlogSection />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="w-full h-auto p-0 m-0 flex flex-col justify-center items-center"
          >
            <ContactSection />
          </section>
        </main>
      </div>
    </>
  );
}
