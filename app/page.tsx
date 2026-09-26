import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05050a] text-white">
      {/* Background glow effects (static) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/5 bg-[#05050a]/70 px-6 backdrop-blur-md md:px-16">
        <span className="text-lg font-semibold tracking-tight">
          Danish<span className="text-indigo-400">.dev</span>
        </span>
        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <a
          href="https://wa.me/918791349068"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.85.5 3.664 1.447 5.247L2.057 22l4.883-1.361A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.181a8.152 8.152 0 01-4.16-1.14l-.298-.177-3.096.862.83-3.027-.194-.31A8.163 8.163 0 013.82 12c0-4.51 3.669-8.18 8.18-8.18 4.512 0 8.181 3.67 8.181 8.18 0 4.512-3.669 8.181-8.18 8.181z" />
          </svg>
          Let&apos;s Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-14 px-6 pb-16 pt-36 md:flex-row md:justify-between md:gap-10 md:px-10">
        {/* Left: text content */}
        <FadeIn className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
            🟢 Available for new opportunities
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Danish
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-white/60 md:text-xl">
            A Full Stack Developer building fast, reliable web applications with
            Java, Spring Boot, React &amp; Next.js.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {["Java", "Spring Boot", "React", "Next.js", "PHP", "Laravel", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Right: profile photo */}
        <FadeIn
          className="relative flex shrink-0 items-center justify-center"
          delay={0.15}
          y={0}
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white/10 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <img
              src="/profile.png"
              alt="Danish"
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-10">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
            Building reliable software, end to end
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
            I&apos;m a Full Stack Developer who enjoys working across the whole
            stack — Java and Spring Boot APIs on the backend, React and
            Next.js interfaces on the frontend, and PHP with Laravel when a
            project calls for it. I like taking an idea from a rough
            requirement to something real people actually use: a proper
            database, a clean API, and an interface that feels fast and easy
            to use.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/60">
            Right now I&apos;m building three things at once — an LMS, a CRM,
            and a college website — each on its own stack, with real
            databases and APIs behind them.
          </p>
        </FadeIn>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-10">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Skills
          </span>
          <h2 className="mt-3 mb-12 max-w-2xl text-3xl font-bold md:text-4xl">
            Tools I build with
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Backend",
              items: ["Java", "Spring Boot", "PHP", "Laravel"],
            },
            {
              title: "Frontend",
              items: ["React", "Next.js", "Bootstrap","JavaScript"],
            },
            {
              title: "Database & Tools",
              items: ["MySQL", "Git Hub", "Fast APIs","VS Code"],
            },
          ].map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-indigo-400/30 hover:bg-white/[0.04]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-10">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Projects
          </span>
          <h2 className="mt-3 mb-12 max-w-2xl text-3xl font-bold md:text-4xl">
            Things I&apos;ve built
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Presence360 LMS",
              tag: "Java · Next.js",
              description:
                "A Learning Management System backend for Presence360, delivering enterprise training courses such as Code of Conduct and POSH for SheelaFoam / Kurlon. Handles SCORM course upload and progress tracking, with mobile number + OTP based learner login.",
              tech: ["Java", "Spring Boot", "Next.js", "MySQL"],
            },
            {
              title: "Presence360 CRM",
              tag: "Java · React",
              description:
                "A CRM system built for the Presence360 platform to manage customer and lead records — a separate service from the LMS, sharing the same client ecosystem.",
              tech: ["Java", "Spring Boot", "React", "MySQL"],
            },
            {
              title: "College Website",
              tag: "PHP · Laravel",
              description:
                "A full college website covering admissions, courses, and contact/enquiry information — built on PHP and Laravel with a real database behind it.",
              tech: ["PHP", "Laravel", "MySQL"],
            },
          ].map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/[0.04]">
                <span className="mb-3 w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cyan-300/80">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 text-white/60">
            Have a project in mind, or just want to say hi? Reach out.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:farooquidanish04@gmail.com"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
            >
              Email Me
            </a>
            <span
              className="cursor-not-allowed rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-white/40"
              aria-disabled="true"
            >
              LinkedIn
            </span>
            <a
              href="https://github.com/Danishfarooqui0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Danish. Web Tech Solution.
      </footer>
    </main>
  );
}