import { HeroSection } from "@/components/elements/hero-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full font-sans bg-background">
        <main className="flex flex-col gap-[32px] items-center w-full h-full">
          <section
            id="hero"
            className="w-full min-h-screen flex flex-col justify-center"
          >
            <HeroSection />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="w-2xl min-h-screen p-8 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold">About Me</h2>
            <p>
              I am a seasoned developer with over 10 years of experience in
              frontend development, specializing in modern web technologies and
              building scalable applications.
            </p>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="w-2xl min-h-screen p-8 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold">Projects</h2>
            <p>
              Explore some of the projects I have worked on. From innovative web
              apps to complex software solutions, see what I have built.
            </p>
          </section>

          {/* Blog Section */}
          <section
            id="blog"
            className="w-2xl min-h-screen p-8 flex flex-col justify-center"
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
            className="w-2xl min-h-screen p-8 flex flex-col justify-center"
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
