"use client";

import Link from "next/link";
import GithubHeatmap from "@/components/GithubHeatmap";
import { useClock } from "@/lib/useClock";

export default function Portfolio() {
  const time = useClock();

  const projects = [
    {
      title: "SplitOne",
      category: "Product",
      year: "2025",
      description: (
        <>
          An expense splitting app with{" "}
          <span className="text-white font-medium">300+ users</span>, designed
          to provide an intuitive and smooth experience. Features include simple
          onboarding, clear navigation, ability to scan and upload bills,
          item-wise splitting, and Pay with UPI.
        </>
      ),
      tech: [
        "Next.js",
        "Supabase",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      link: "https://splitease.harishbs.in",
    },
    {
      title: "Infosphere",
      category: "Product",
      year: "2025",
      description: (
        <>
          An end-to-end task management platform with{" "}
          <span className="text-white font-medium">176+ active projects</span>{" "}
          being worked on, built for streamlined project workflow approvals.
          Developed a dynamic workflow system where project managers create
          tasks that pass through multiple review and correction stages, with
          automatic routing based on task status. Integrated versioned file
          uploads, access control, and a clean UI for team collaboration.
        </>
      ),
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Vercel",
      ],
      link: "https://github.com/HarishbarathiS/infosphere",
    },
    {
      title: "Tinybrain",
      category: "Systems Design",
      year: "2026",
      description:
        "A data-plane / control-plane split for an embedded-analytics product. The control plane owns dashboard definitions, the job queue, and the agent registry, while lightweight agents run each job's SQL against a local DuckDB and post results back — never accepting inbound connections. Includes a full design doc covering the plane boundary, protocol, and migration plan.",
      tech: ["Python", "DuckDB", "Docker", "REST APIs"],
      link: "https://github.com/HarishbarathiS/tiny-brain",
    },
    {
      title: "NSFW Check Service",
      category: "Microservice",
      year: "2026",
      description:
        "A standalone image-moderation microservice that classifies an image as safe or NSFW. Exposes a versioned, API-key-authenticated endpoint with health checks, packaged as a CUDA-free Docker image and deployed on Render.",
      tech: ["Python", "FastAPI", "PyTorch", "Docker", "Render"],
      link: "https://nsfw-check-service.onrender.com/docs",
    },
    {
      title: "Dit",
      category: "Python Package",
      year: "2024",
      description:
        "3rd Place Winner at Hackathon — a command-line tool for MySQL database version control. Track modifications in database schema and data, similar to Git for Databases. Features change tracking for schema and data modifications, and a Flask-based web interface for relationship visualization.",
      tech: ["Python", "Flask", "MySQL", "JavaScript", "TypeScript"],
      link: "https://github.com/HarishbarathiS/dit",
    },
    {
      title: "SyncWithMates",
      category: "Learning Project",
      year: "2024",
      description:
        "An interactive watch party platform built to learn WebRTC, allowing users to stream and interact with friends in real-time.",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "MongoDB",
        "Vercel",
      ],
      link: "https://github.com/HarishbarathiS/SyncWithMates-CN-project",
    },
  ];

  const experiences = [
    {
      company: "Dell Technologies",
      role: "Software Engineer - 1",
      period: "August 2026 - Present",
      location: "India",
      description: "Working in the BIOS / Firmware Engineering Team.",
      achievements: [],
      tech: [],
    },
    {
      company: "Dell Technologies",
      role: "Software Engineer Intern",
      period: "February 2026 - June 2026",
      location: "India",
      description:
        "Worked on the BIOS/Firmware team to automate parts of the development workflow, reducing manual effort and speeding up delivery cycles.",
      achievements: [
        "Built a multi-step agent workflow to automate the work of an automation engineer, backed by a knowledge base with traceability and observability built in.",
        "Built the infrastructure for an AI system that determines the scope of a BIOS change — using a queue system to absorb request spikes, and exposing both an API for system-to-system communication and a UI layer for application-level use.",
      ],
      tech: ["Python", "LLMs", "CLI Agents", "Redis", "MinIO", "REST APIs"],
    },
    {
      company: "HealthPilot",
      role: "Software Developer Intern",
      period: "June 2025 - February 2026",
      location: "Chennai",
      description:
        "Building a platform to scale doctor's expertise beyond their time and presence by automating administrative tasks such as user onboarding, privilege management, and personalized care plans for patients.",
      achievements: [
        "Designed the database schema to handle medical records, patient data and doctor appointments, ensuring scalability for millions of users.",
        "Currently working on the integration of AI solutions like Speech to Text, Speaker diarisation and a knowledge base for LLM context.",
      ],
      tech: ["React", "JavaScript", "TypeScript", "MySQL"],
    },
    {
      company: "Daira EdTech",
      role: "Software Developer Intern",
      period: "September 2024 - December 2024",
      location: "Chennai",
      description:
        "Contributed to the development of Jiveesha, a web application designed to evaluate students with reading and speaking disabilities by creating personalized assessments to enhance performance.",
      achievements: [
        "Developed the integration pipeline between the Whisper speech-to-text model with backend and frontend for seamless functionality.",
        "Created an intuitive results page with dynamic capabilities to showcase detailed scores and performance analysis.",
      ],
      tech: ["Python", "Flask", "JavaScript", "Whisper"],
    },
  ];

  return (
    <div className="min-h-screen text-white text-sm">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest">HBS</span>
          <nav className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Exp
            </a>
            <a href="/lab" className="hover:text-white transition-colors">
              Lab
            </a>
            <a href="#now" className="hover:text-white transition-colors">
              Now
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="py-24 md:py-32">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
            Engineer
          </p>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
            Harish Barathi S
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
            I build products, the systems behind them, and take things apart to
            understand them — usually over-engineering somewhere along the way.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest">
            <a
              href="#work"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              Work
            </a>
            <a
              href="mailto:iharishbarathis@gmail.com"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="mt-10 flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <span>Chennai, IN</span>
            <span>{time}</span>
          </div>
        </section>

        {/* Now */}
        <section id="now" className="py-16 section-divide scroll-mt-16">
          <div className="flex items-baseline gap-3 mb-6">
            <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 border-b-2 border-white/40">
              Now
            </h2>
            <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
              {/* <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span> */}
              (What I am currently working on)
            </span>
          </div>
          <div className="space-y-4 text-gray-400 leading-relaxed max-w-xl">
            <p className="text-base text-white">
              Reverse engineering the HeyCyan smart glasses.
            </p>
            <p>
              Tearing down the firmware and companion app to swap out the stock
              assistant for my own AI — and take back control of the data layer,
              so what the glasses see and hear stays on my terms.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 section-divide scroll-mt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-8 border-b-2 border-white/40">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  {exp.period}
                </div>
                <h3 className="text-base mb-1">{exp.role}</h3>
                <div className="text-gray-400 mb-3">
                  {exp.company} — {exp.location}
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="text-gray-500 leading-relaxed flex gap-3"
                      >
                        <span>—</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.tech.length > 0 && (
                  <div className="text-xs text-gray-500">
                    {exp.tech.join(" · ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-16 section-divide scroll-mt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-8 border-b-2 border-white/40">
            Proof of Work
          </h2>
          <div className="space-y-12">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-base group-hover:text-gray-400 transition-colors">
                    {p.title} ↗
                  </h3>
                  <span className="text-xs text-gray-500">{p.year}</span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  {p.category}
                </div>
                <p className="text-gray-400 leading-relaxed mb-3">
                  {p.description}
                </p>
                <div className="text-xs text-gray-500">
                  {p.tech.join(" · ")}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Lab */}
        <section className="py-16 section-divide">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            Home Lab
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
            I host my own cloud infrastructure to maintain full control over my
            data and experiment with production-grade architectures.
          </p>
          <Link
            href="/lab"
            className="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-gray-400 transition-colors"
          >
            Explore Home Lab ↗
          </Link>
        </section>

        {/* GitHub */}
        <section className="py-16 section-divide">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            GitHub Contributions
          </h2>
          <GithubHeatmap />
        </section>

        {/* About */}
        <section id="about" className="py-16 section-divide scroll-mt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            About
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed max-w-xl mb-10">
            <p>
              A software engineer with 1 year of experience building systems
              that solve real-world problems.
            </p>
            <p>
              Currently working as a Software Engineer at Dell Technologies on
              the BIOS / Firmware team, where I automate parts of the
              development workflow and build AI systems that speed up delivery
              cycles.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Technologies
            </h3>
            <p className="text-gray-400">
              {[
                "Python",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Flask",
                "Node.js",
                "Supabase",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Docker",
                "Git",
              ].join(" · ")}
            </p>
          </div>
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Certifications
            </h3>
            <p className="text-gray-400">
              Azure AI-900 Fundamentals — Microsoft
              <br />
              Machine Learning — DeepLearning.AI
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 section-divide">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            Contact
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
            Always excited about new challenges and innovative systems. Reach
            out if you want to discuss building something exceptional.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest">
            <a
              href="mailto:iharishbarathis@gmail.com"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/HarishbarathiS"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harishbarathisivasubramanian/"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@harishbarathi?si=azC1oDP3DMeZuI1J"
              className="underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              YouTube
            </a>
          </div>
        </section>
      </main>

      <footer className="section-divide py-8">
        <div className="max-w-3xl mx-auto px-6 text-xs text-gray-500 uppercase tracking-widest">
          © 2026 Harish Barathi S
        </div>
      </footer>
    </div>
  );
}
