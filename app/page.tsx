"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const date = new Date();
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyesRef.current) {
        const eyes = eyesRef.current.querySelectorAll(".eye");
        eyes.forEach((eye) => {
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const angle = Math.atan2(
            e.clientY - eyeCenterY,
            e.clientX - eyeCenterX
          );
          const distance = Math.min(
            8,
            Math.sqrt(
              Math.pow(e.clientX - eyeCenterX, 2) +
                Math.pow(e.clientY - eyeCenterY, 2)
            ) / 10
          );

          const pupilX = Math.cos(angle) * distance;
          const pupilY = Math.sin(angle) * distance;

          const pupil = eye.querySelector(".pupil") as HTMLElement;
          if (pupil) {
            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
          }
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "SplitEase",
      year: "2025",
      description:
        "A room-based expense sharing platform with real-time collaboration through invite links, allowing users to join rooms, view summaries, and resolve shared costs transparently.",
      tech: [
        "Next.js",
        "Supabase",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      link: "https://splitease-up.railway.app/",
    },
    {
      title: "Infophere",
      year: "2025",
      description:
        "An end-to-end task management platform for streamlined project workflow approvals. Developed a dynamic workflow system where project managers create tasks that pass through multiple review and correction stages, with automatic routing based on task status. Integrated versioned file uploads, access control, and a clean UI for team collaboration, ensuring transparent task histories and improved turnaround efficiency.",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Vercel",
      ],
      link: "https://github.com/HarishbarathiS/infophere",
    },
    {
      title: "Dit",
      year: "2024",
      description:
        "🏆 3rd Place Winner at Hackathon - A command-line tool for MySQL database version control. Track modifications in database schema and data, similar to Git for Databases. Features include change tracking (git diff) for database schema and data modifications, and a Flask-based Web Interface for intuitive table relationship visualization.",
      tech: ["Python", "Flask", "MySQL", "JavaScript", "TypeScript"],
      link: "https://github.com/HarishbarathiS/dit",
      achievement: "3rd Place - Hackathon Winner",
    },

    {
      title: "SyncWithMates",
      year: "2024",
      description:
        "An interactive watch party platform to stream and interact with friends.",
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
      company: "HealthPilot",
      role: "Software Developer Intern",
      period: "June 2025 - Present",
      location: "Chennai",
      description:
        "Building a platform to scale doctor&apos;s expertise beyond their time and presence by automating administrative tasks such as user onboarding, privilege management, personalized care plans for patients.",
      achievements: [
        "Designed the database schema for the application to handle various things like medical records, patient data and doctor appointments and made sure to be scalable for millions of users",
        "Currently working on the integration AI of solutions like Speech to Text, Speaker diarisation and a knowledge base for context to created LLM",
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
        "Developed the integration pipeline between the Whisper speech-to-text model with backend and frontend for seamless functionality",
        "Created an intuitive results page with Dynamic capabilities to showcase detailed scores and comprehensive performance analysis",
      ],
      tech: ["Python", "Flask", "JavaScript", "Whisper"],
    },
  ];

  const freelanceWork = [
    {
      project: "Employee Task Management System",
      client: "Unknown..",
      period: "2025 - Present",
      // type: "6 months",
      description:
        "Built a scalable task management system for the company to manage their tasks and projects.",
      deliverables: [
        "Task management system with real-time updates",
        "User authentication and authorization",
        "Task assignment and tracking",
        "Project management",
        "Task prioritization",
        "Task status tracking",
        "Task completion tracking",
        "Task completion tracking",
      ],
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Vercel",
      ],
    },
    // {
    //   project: "Data Analytics Pipeline",
    //   client: "FinanceFlow Inc.",
    //   period: "2022 - 2023",
    //   type: "4 months",
    //   description:
    //     "Developed automated data processing pipeline for financial analytics, handling millions of transactions daily.",
    //   deliverables: [
    //     "ETL pipeline processing 5M+ records daily",
    //     "Real-time dashboard with custom visualizations",
    //     "Automated reporting system with email notifications",
    //     "Data validation and error handling mechanisms",
    //   ],
    //   tech: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
    // },
    // {
    //   project: "Mobile App Backend",
    //   client: "HealthTech Startup",
    //   period: "2021 - 2022",
    //   type: "8 months",
    //   description:
    //     "Created backend infrastructure for healthcare mobile app with patient data management and appointment scheduling.",
    //   deliverables: [
    //     "HIPAA-compliant API with secure authentication",
    //     "Appointment scheduling system with calendar integration",
    //     "Push notification service for reminders",
    //     "Patient data encryption and secure storage",
    //   ],
    //   tech: ["Go", "MongoDB", "AWS", "Firebase"],
    // },
    // {
    //   project: "DevOps Automation",
    //   client: "Multiple Clients",
    //   period: "2020 - Present",
    //   type: "Ongoing",
    //   description:
    //     "Providing DevOps consulting and automation solutions for various startups and small businesses.",
    //   deliverables: [
    //     "CI/CD pipeline setup and optimization",
    //     "Infrastructure as Code using Terraform",
    //     "Monitoring and alerting system implementation",
    //     "Cost optimization and security audits",
    //   ],
    //   tech: ["Docker", "Kubernetes", "Terraform", "AWS"],
    // },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium">Harish Barathi S</span>
            {/* <span className="text-gray-400 ml-2">Software Engineer</span> */}
          </div>
          <div className="text-xs text-gray-400">Building the future</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                  Crafting software
                  <br />
                  that solves
                  <br />
                  <span className="italic">real problems</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am passionate about building scalable systems, elegant
                  architectures, and tools that make a difference.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gray-900 rounded-sm relative overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Animated Eyes */}
                    <div
                      ref={eyesRef}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex space-x-8">
                        {/* Left Eye */}
                        <div className="eye relative w-16 h-16 bg-white rounded-full border-2 border-gray-600 flex items-center justify-center">
                          <div className="pupil w-6 h-6 bg-black rounded-full transition-transform duration-75 ease-out"></div>
                        </div>
                        {/* Right Eye */}
                        <div className="eye relative w-16 h-16 bg-white rounded-full border-2 border-gray-600 flex items-center justify-center">
                          <div className="pupil w-6 h-6 bg-black rounded-full transition-transform duration-75 ease-out"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section className="py-20 border-t border-gray-800">
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-2">Selected Work</h2>
              <p className="text-gray-400 text-sm">
                Systems and applications I&apos;ve built
              </p>
            </div>

            <div className="space-y-1">
              {projects.map((project, index) => {
                const ProjectCard = ({
                  children,
                }: {
                  children: React.ReactNode;
                }) => (
                  <div
                    className="group border-b border-gray-900 py-6 cursor-pointer transition-all duration-300 hover:bg-gray-900/50"
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  >
                    {children}
                  </div>
                );

                const cardContent = (
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {project.year}
                        </span>
                        {project.achievement && (
                          <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded border border-yellow-600/30">
                            🏆 {project.achievement}
                          </span>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-gray-300 text-sm mb-3 group-hover:text-white transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded group-hover:bg-white group-hover:text-black transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div key={index}>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <ProjectCard>{cardContent}</ProjectCard>
                      </a>
                    ) : (
                      <ProjectCard>{cardContent}</ProjectCard>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 border-t border-gray-800">
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-2">Experience</h2>
              <p className="text-gray-400 text-sm">
                Professional journey and key achievements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience Column */}
              <div>
                <h3 className="text-lg font-medium mb-8 text-gray-300 border-b border-gray-800 pb-2">
                  Internship
                </h3>
                <div className="space-y-10">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer transition-all duration-300"
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}
                    >
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-1">
                          {exp.period}
                        </div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-300 transition-colors duration-300">
                          {exp.role}
                        </h4>
                        <div className="text-gray-400 mb-3">
                          {exp.company} • {exp.location}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-xs text-gray-400 flex items-start"
                            >
                              <span className="text-gray-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded group-hover:bg-gray-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {index < experiences.length - 1 && (
                        <div className="mt-10 border-b border-gray-900"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Freelancing Column */}
              <div>
                <h3 className="text-lg font-medium mb-8 text-gray-300 border-b border-gray-800 pb-2">
                  Freelancing
                </h3>
                <div className="space-y-10">
                  {freelanceWork.map((work, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer transition-all duration-300"
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}
                    >
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-1">
                          {work.period}
                        </div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-gray-300 transition-colors duration-300">
                          {work.project}
                        </h4>
                        <div className="text-gray-400 mb-3">{work.client}</div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {work.description}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                          Deliverables
                        </h5>
                        <ul className="space-y-1">
                          {work.deliverables.map((deliverable, delIndex) => (
                            <li
                              key={delIndex}
                              className="text-xs text-gray-400 flex items-start"
                            >
                              <span className="text-gray-600 mr-2">•</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {work.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-gray-900 text-gray-400 rounded group-hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {index < freelanceWork.length - 1 && (
                        <div className="mt-10 border-b border-gray-900"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-light mb-6">About</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg font-light">
                    I&apos;m a software engineer with{" "}
                    <span className="font-medium text-blue-400">1 year</span> of
                    experience building systems that solve real problems.
                  </p>

                  <p className="text-sm text-gray-400">
                    Currently working as a{" "}
                    <strong>software engineer intern</strong> at HealthPilot —
                    building a platform to scale doctor&apos;s expertise beyond
                    their time and presence by automating administrative tasks
                    such as user onboarding, privilege management, and
                    personalized care plans for patients.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-400 uppercase tracking-wider">
                    Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Flask",
                      "Node.js",
                      "Supabase",
                      "PostgreSQL",
                      "MySQL",
                      "MongoDB",
                      "Docker",
                      "Git",
                      "Tailwind CSS",
                      "Whisper",
                    ].map((skill) => (
                      <div key={skill} className="py-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-400 uppercase tracking-wider">
                    Certifications
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="font-medium">
                        Azure AI-900 Fundamentals
                      </div>
                      <div className="text-gray-400 text-xs">Microsoft</div>
                    </div>
                    <div>
                      <div className="font-medium">
                        Machine Learning Specialization
                      </div>
                      <div className="text-gray-400 text-xs">
                        DeepLearning.AI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 border-t border-gray-800">
            <div className="text-center">
              <h2 className="text-2xl font-light mb-6">
                Let&apos;s build something together
              </h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Always excited about new challenges and innovative projects.
                Reach out if you want to discuss building something meaningful.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:iharishbarathis@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://github.com/HarishbarathiS"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harishbarathisivasubramanian/"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400">
          <div>© 2025 Harish Barathi S</div>
        </div>
      </footer>
    </div>
  );
}
