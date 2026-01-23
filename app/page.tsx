"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Menu, X, Server } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [time, setTime] = React.useState<string>('00:00');
  const eyesRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    // Function to format time
    const formatTime = () => {
      return new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
    };

    // Set initial time on client
    setTime(formatTime());

    // Update time every second
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);

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
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
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
      link: "https://splitease.harishbs.in",
    },
    {
      title: "Infosphere",
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
      link: "https://github.com/HarishbarathiS/infosphere",
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
      company: "Dell Technologies",
      role: "Software Engineer Intern",
      period: "Starting Soon",
      location: "India",
      description:
        "Preparing to join the Client Solution Group Engineering Team",
      achievements: [],
      tech: [],
    },
    {
      company: "HealthPilot",
      role: "Software Developer Intern",
      period: "June 2025 - Present",
      location: "Chennai",
      description:
        "Building a platform to scale doctor's expertise beyond their time and presence by automating administrative tasks such as user onboarding, privilege management, personalized care plans for patients.",
      achievements: [
        "Designed the database schema for the application to handle various things like medical records, patient data and doctor appointments and made sure to be scalable for millions of users",
        "Currently working on the integration of AI solutions like Speech to Text, Speaker diarisation and a knowledge base for context to create LLM",
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
      client: "B2k",
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
      ],
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Vercel",
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans noise">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[95%] max-w-5xl">
        <div className="border-beam-container bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
          <div className="border-beam"></div>
          <div className="px-6 py-3 relative z-10">
            <div className="flex justify-between items-center">
              <div className="text-sm font-heading font-semibold tracking-tight">
                <span>Harish Barathi S</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-400">
                  <a href="#work" className="hover:text-white transition-colors">WORK</a>
                  <a href="#experience" className="hover:text-white transition-colors">EXP</a>
                  <a href="/lab" className="hover:text-white transition-colors uppercase">Lab</a>
                  <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-white p-1"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-2 p-4 glass-dark rounded-3xl border border-white/10 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4 text-sm font-mono text-gray-400">
              <a href="#work" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>WORK</a>
              <a href="#experience" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>EXP</a>
              <a href="/lab" className="hover:text-white transition-colors p-2 uppercase" onClick={() => setIsMobileMenuOpen(false)}>Lab</a>
              <a href="#about" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
            </nav>
            <div className="h-[1px] bg-white/10 w-full"></div>
            <div className="flex flex-col gap-3 p-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Local Time</span>
                <span className="text-xs font-mono text-white">
                  {time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Location</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white uppercase">Chennai, IN</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* External Location Marker (Desktop Only) */}
      <div className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="hidden md:block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Local Time</span>
          <span className="text-xs font-mono text-white">
            {time}
          </span>
        </div>
        <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
        <div className="flex flex-col items-end">
          <span className="hidden md:block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Location</span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-white uppercase">Chennai, IN</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center relative z-10 pt-20 md:pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 xl:col-span-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-gradient">
                  Crafting software
                  <br className="hidden md:block" />
                  <span className="md:hidden"> </span>
                  that solves{" "}
                  <span className="italic font-light text-white/60">
                    real problems
                  </span>
                </h1>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-xl md:max-w-2xl font-light mb-8 md:mb-0">
                  A software engineer passionate about building scalable systems,
                  elegant architectures, and products that make a meaningful difference.
                </p>
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                    View My Work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a href="mailto:iharishbarathis@gmail.com" className="px-8 py-4 glass text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex">
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Eye Section Integrated into Grid but shifted */}
              <div className="lg:col-span-12 xl:col-span-4 flex justify-center xl:justify-end mt-8 lg:mt-0">
                <div className="relative group scale-50 sm:scale-75 lg:scale-100">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Ripple Waves - Vibrant background-themed colors */}
                    <div className="ripple text-blue-500/40"></div>
                    <div className="ripple text-purple-500/40"></div>
                    <div className="ripple text-indigo-500/40"></div>
                    <div className="ripple text-blue-400/30"></div>

                    {/* Main Ball Container */}
                    <div className="relative w-full h-full bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 overflow-hidden z-10">
                      <div
                        ref={eyesRef}
                        className="flex space-x-10"
                      >
                        {/* Left Eye */}
                        <div className="eye relative w-16 h-16 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center shadow-inner">
                          <div className="pupil w-7 h-7 bg-black rounded-full transition-transform duration-75 ease-out shadow-lg"></div>
                        </div>
                        {/* Right Eye */}
                        <div className="eye relative w-16 h-16 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center shadow-inner">
                          <div className="pupil w-7 h-7 bg-black rounded-full transition-transform duration-75 ease-out shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                / Systems and applications I&apos;ve built
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="h-full glass-dark rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[10px] px-3 py-1 bg-white/5 text-gray-400 rounded-full font-mono uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-600 font-mono text-xs">{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {project.achievement && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20 text-[10px] font-mono uppercase tracking-wider mb-4 w-fit">
                        🏆 {project.achievement}
                      </div>
                    )}

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono text-white group-hover:gap-4 transition-all">
                      VIEW PROJECT
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Lab Section Preview */}
          <section id="lab" className="py-10 md:py-22 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Home Lab</h2>
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">/ Private infrastructure and experiments</p>
                </div>

                <div className="space-y-6 text-gray-400 leading-relaxed font-light mb-10">
                  <p className="text-xl text-white">
                    Exploring the world of <span className="text-blue-400">self-hosting</span> and
                    <span className="text-purple-400"> high-performance computing</span>.
                  </p>
                  <p>
                    I host my own cloud infrastructure to maintain full control over my data and
                    experiment with production-grade architectures in a localized environment.
                  </p>
                </div>

                <Link
                  href="/lab"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-medium group"
                >
                  Explore Home Lab
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center justify-center relative scale-90 md:scale-100">
                <div className="absolute inset-0 network-grid opacity-20 z-0"></div>
                <div className="relative w-full aspect-square max-w-md flex items-center justify-center">

                  {/* Central SVG Layer for Connections */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">

                      {/* Lines from Center (200, 200) to Nodes */}
                      {/* SplitEase (60, 60) */}
                      <path d="M 200 200 L 60 60" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" className="animate-shimmer" strokeOpacity="0.4" />
                      {/* n8n (340, 60) */}
                      <path d="M 200 200 L 340 60" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 6" className="animate-shimmer" strokeOpacity="0.4" />
                      {/* Supabase (200, 360) */}
                      <path d="M 200 200 L 200 360" stroke="#34d399" strokeWidth="2" strokeDasharray="6 6" className="animate-shimmer" strokeOpacity="0.4" />

                      {/* Moving Data Packets */}
                      <rect width="8" height="8" x="-4" y="-4" fill="#60a5fa" className="animate-shimmer">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 60 60" rotate="auto" begin="0s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#60a5fa" className="animate-shimmer" opacity="0.4">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 60 60" rotate="auto" begin="0.3s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#60a5fa" className="animate-shimmer" opacity="0.2">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 60 60" rotate="auto" begin="0.6s" />
                      </rect>

                      {/*} <rect width="8" height="8" x="-4" y="-4" fill="#a78bfa" className="animate-shimmer">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 200 L 340 60" rotate="auto" begin="0s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#a78bfa" className="animate-shimmer" opacity="0.4">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 200 L 340 60" rotate="auto" begin="0.2s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#a78bfa" className="animate-shimmer" opacity="0.2">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 200 L 340 60" rotate="auto" begin="0.4s" />
                      </rect>

                      <rect width="8" height="8" x="-4" y="-4" fill="#34d399" className="animate-shimmer">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M 200 200 L 200 360" rotate="auto" begin="0s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#34d399" className="animate-shimmer" opacity="0.4">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M 200 200 L 200 360" rotate="auto" begin="0.4s" />
                      </rect>
                      <rect width="8" height="8" x="-4" y="-4" fill="#34d399" className="animate-shimmer" opacity="0.2">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M 200 200 L 200 360" rotate="auto" begin="0.8s" />
                      </rect>*/}
                    </svg>
                  </div>

                  {/* Central Node: The-Harish-Machine */}
                  <div className="relative z-20">
                    <div className="w-32 h-32 bg-blue-500/10 backdrop-blur-3xl rounded-3xl border border-blue-500/30 flex flex-col items-center justify-center group hover:border-blue-500/50 transition-all duration-500">
                      <Server size={48} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-[8px] font-mono mt-2 text-blue-300 uppercase opacity-60">Master Node</span>
                    </div>
                  </div>

                  {/* Orbiting Service Nodes */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* SplitEase Node */}
                    <div className="absolute top-[15%] left-[15%] pointer-events-auto group -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:border-blue-400/50 transition-colors duration-500 shadow-xl">
                        <Image src="/splitease.svg" alt="SplitEase" width={40} height={40} className="object-contain" />
                      </div>
                      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-[14px] font-mono whitespace-nowrap">
                        <span className="text-gray-500 block uppercase tracking-tighter text-[12px]">App</span>
                        <span className="text-blue-400 font-bold">SplitEase</span>
                      </div>
                    </div>

                    {/* n8n Node */}
                    <div className="absolute top-[15%] right-[15%] pointer-events-auto group translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:border-red-400/50 transition-colors duration-500 shadow-xl">
                        <Image src="/n8n-color.png" alt="n8n" width={40} height={40} className="object-contain" />
                      </div>
                      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-right text-[14px] font-mono whitespace-nowrap">
                        <span className="text-gray-500 block uppercase tracking-tighter text-[12px]">Automation</span>
                        <span className="text-purple-400 font-bold">n8n</span>
                      </div>
                    </div>

                    {/* Supabase Node */}
                    <div className="absolute top-[90%] left-[50%] pointer-events-auto group -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:border-green-400/50 transition-colors duration-500 shadow-xl">
                        <Image src="/supabase-logo.svg" alt="Supabase" width={40} height={40} className="object-contain" />
                      </div>
                      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-[14px] font-mono whitespace-nowrap">
                        <span className="text-gray-500 block uppercase tracking-tighter text-[12px]">Backend as a Service</span>
                        <span className="text-green-400 font-bold">Supabase</span>
                      </div>
                    </div>
                  </div>

                  {/* Ambient Decorative Orbit */}
                  <div className="absolute w-[85%] h-[85%] rounded-full border border-white/5 animate-rotate-slow opacity-20 pointer-events-none"></div>
                  <div className="absolute w-[65%] h-[65%] rounded-full border border-white/5 animate-rotate-slow-reverse opacity-10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience & Freelance Section */}
          <section id="experience" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Experience Column */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-4">Professional Experience</h2>
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">/ Internships & Roles</p>
                </div>

                <div className="space-y-16">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l border-white/10 group">
                      <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                      <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-2">{exp.period}</div>
                      <h4 className="text-xl font-heading font-bold mb-1">{exp.role}</h4>
                      <div className="text-blue-400 font-medium mb-4">{exp.company} • {exp.location}</div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-gray-500 flex items-start leading-relaxed">
                            <span className="text-white mr-3 mt-1.5 w-1 h-1 rounded-full bg-white shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-[10px] px-2 py-1 bg-blue-500/5 text-blue-500 rounded border border-white/5 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Freelancing Column */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-4">Freelance Projects</h2>
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">/ Client work</p>
                </div>

                <div className="space-y-16">
                  {freelanceWork.map((work, index) => (
                    <div key={index} className="glass-dark rounded-3xl p-6 md:p-8 border border-white/5">
                      <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-2">{work.period}</div>
                      <h4 className="text-xl font-heading font-bold mb-1">{work.project}</h4>
                      <div className="text-purple-400 font-medium mb-4">{work.client}</div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{work.description}</p>

                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {work.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="text-xs text-gray-500 flex items-center leading-relaxed">
                            <ArrowUpRight className="w-3 h-3 text-gray-700 mr-2" />
                            {deliverable}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {work.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-[10px] px-2 py-1 bg-purple-500/5 text-purple-400 rounded border border-purple-500/10 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About & Technologies Section */}
          <section id="about" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8">Background</h2>
                <div className="space-y-6 text-gray-400 leading-relaxed font-light">
                  <p className="text-xl text-white">
                    A software engineer with{" "}
                    <span className="text-blue-400 font-medium">1 year</span> of
                    experience building systems that solve real-world problems.
                  </p>

                  <p>
                    Currently, working as a <strong>Software Engineer Intern</strong> at <span className="text-white">HealthPilot</span>,
                    focusing on scaling medical expertise through automation. My work involves
                    building robust administrative platforms and integrating AI solutions to improve
                    patient care plans.
                  </p>

                  <p>
                    I thrive in the intersection of <span className="text-white">clean code</span> and
                    <span className="text-white"> scalable architecture</span>. My goal is always to
                    deliver products that are not just functional, but exceptional.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">/ Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Python", "JavaScript", "TypeScript", "React.js", "Next.js",
                      "Flask", "Node.js", "Supabase", "PostgreSQL", "MySQL",
                      "MongoDB", "Docker", "Git",
                    ].map((skill) => (
                      <div key={skill} className="px-4 py-2 glass-dark rounded-xl border border-white/5 text-sm hover:border-white/20 transition-colors">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">/ Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Azure AI-900 Fundamentals", issuer: "Microsoft" },
                      { title: "Machine Learning", issuer: "DeepLearning.AI" }
                    ].map((cert, i) => (
                      <div key={i} className="p-4 glass-dark rounded-xl border border-white/5">
                        <div className="font-bold text-sm mb-1">{cert.title}</div>
                        <div className="text-gray-500 text-xs font-mono">{cert.issuer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-32 border-t border-white/5 relative z-10">
            <div className="glass-dark rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

              <h2 className="text-3xl md:text-6xl font-heading font-bold mb-6 md:mb-8 transition-transform group-hover:scale-[1.02] duration-500">
                Let&apos;s build something <span className="text-white/40 italic">meaningful</span>
              </h2>
              <p className="text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                Always excited about new challenges and innovative systems.
                Reach out if you want to discuss building something exceptional.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:iharishbarathis@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-medium w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <div className="flex gap-4 w-full sm:w-auto justify-center">
                  <a
                    href="https://github.com/HarishbarathiS"
                    className="flex items-center justify-center w-14 h-14 glass text-white rounded-full hover:bg-white/10 transition-all border border-white/10"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harishbarathisivasubramanian/"
                    className="flex items-center justify-center w-14 h-14 glass text-white rounded-full hover:bg-white/10 transition-all border border-white/10"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main >

      {/* Footer */}
      < footer className="border-t border-white/5 py-12 relative z-10" >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-mono">
          <div>© 2025 HARISH BARATHI S</div>
        </div>
      </footer >
    </div >
  );
}
