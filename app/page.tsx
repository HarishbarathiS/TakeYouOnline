"use client";

import React, { useEffect } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Menu, X, Server, Package, Box, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GithubHeatmap from "@/components/GithubHeatmap";

export default function Portfolio() {
  const [time, setTime] = React.useState<string>('00:00');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isArchitectureMode, setIsArchitectureMode] = React.useState(false);

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

    return () => {
      clearInterval(timer);
    };
  }, []);

  const projects = [
    {
      title: "SplitOne",
      category: "Product",
      year: "2025",
      description:
        "An expense splitting app designed to provide an intuitive and smooth experience. Features include simple onboarding, clear navigation, ability to scan and upload bills, item-wise splitting, and Pay with UPI.",
      architecture: "Built on a serverless architecture using Next.js for both frontend and API routes. Supabase provides a managed PostgreSQL database and handles authentication. The app leverages OCR integration for bill scanning and real-time database subscriptions for instant updates on expense splits.",
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
      description:
        "An end-to-end task management platform for streamlined project workflow approvals. Developed a dynamic workflow system where project managers create tasks that pass through multiple review and correction stages, with automatic routing based on task status. Integrated versioned file uploads, access control, and a clean UI for team collaboration, ensuring transparent task histories and improved turnaround efficiency.",
      architecture: "Utilizes a state-machine based workflow engine. Next.js manages the application state and server-side rendering for optimal performance. Supabase acts as the backend-as-a-service, handling complex role-based access control (RBAC) and storing versioned file metadata, while actual files are secured in Supabase Storage.",
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
      category: "Python Package",
      year: "2024",
      description:
        "🏆 3rd Place Winner at Hackathon - A command-line tool for MySQL database version control. Track modifications in database schema and data, similar to Git for Databases. Features include change tracking (git diff) for database schema and data modifications, and a Flask-based Web Interface for intuitive table relationship visualization.",
      architecture: "A Python CLI tool that interfaces directly with MySQL information_schema tables to detect drifts. It implements a local versioning commit system similar to Git's internal object database. A lightweight Flask server creates a local web interface for visualizing the database schema graph dynamically.",
      tech: ["Python", "Flask", "MySQL", "JavaScript", "TypeScript"],
      link: "https://github.com/HarishbarathiS/dit",
      achievement: "3rd Place - Hackathon Winner",
    },

    {
      title: "SyncWithMates",
      category: "Learning Project",
      year: "2024",
      description:
        "An interactive watch party platform built to learn WebRTC, allowing users to stream and interact with friends in real-time.",
      architecture: "Implements a peer-to-peer (P2P) architecture using WebRTC for low-latency video and audio streaming. A Next.js server acts as the signaling server to establish initial connections (SDP exchange). MongoDB persists user room sessions and chat history.",
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



  return (
    <div className="min-h-screen bg-black text-white font-sans noise">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Desktop Nav Pill - centered */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
          <div className="px-8 py-3">
            <nav className="flex items-center gap-10 text-xs font-mono text-gray-400">
              <a href="#work" className="hover:text-white transition-colors">WORK</a>
              <a href="#experience" className="hover:text-white transition-colors">EXP</a>
              <a href="/lab" className="hover:text-white transition-colors">LAB</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Nav - left-side hamburger pill */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <div className="relative">
          <button
            className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 p-2 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col gap-1">
              <a href="#work" className="text-sm font-mono text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5" onClick={() => setIsMobileMenuOpen(false)}>WORK</a>
              <a href="#experience" className="text-sm font-mono text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5" onClick={() => setIsMobileMenuOpen(false)}>EXP</a>
              <a href="/lab" className="text-sm font-mono text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5" onClick={() => setIsMobileMenuOpen(false)}>LAB</a>
              <a href="#about" className="text-sm font-mono text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
              <div className="h-[1px] bg-white/10 mx-1 my-1"></div>
              <div className="px-3 py-1 flex justify-between items-center">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Time</span>
                <span className="text-[10px] font-mono text-gray-400">{time}</span>
              </div>
              <div className="px-3 py-1 flex justify-between items-center">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Location</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-gray-400">Chennai</span>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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
            <div className="flex flex-col items-start max-w-2xl">
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Engineer</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold tracking-tight leading-tight text-white mb-6">
                Harish Barathi S
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                I build scalable systems and products — turning ideas into things that feel intuitive and practical to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work" className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                  View My Work
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="mailto:iharishbarathis@gmail.com" className="px-6 py-3 border border-white/15 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center">
                  Get in touch
                </a>
              </div>
            </div>
          </section>

          {/* Experience & Freelance Section */}
          <section id="experience" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="max-w-4xl">
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


            </div>
          </section>

          {/* Solutions Section */}
          <section id="work" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="mb-12 md:mb-16 flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Solutions</h2>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                  / Systems and applications I&apos;ve built
                </p>
              </div>

              {/* Architecture Mode Toggle */}
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${!isArchitectureMode ? 'text-white' : 'text-gray-600'}`}>
                  Overview
                </span>
                <button
                  onClick={() => setIsArchitectureMode(!isArchitectureMode)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isArchitectureMode ? 'bg-blue-500' : 'bg-gray-700'
                    } relative z-20`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isArchitectureMode ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                </button>
                <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${isArchitectureMode ? 'text-white' : 'text-gray-600'}`}>
                  Architecture
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group perspective-1000 h-[500px]">
                  <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isArchitectureMode ? 'rotate-y-180' : 'rotate-y-0'}`}>

                    {/* FRONT FACE (Project Details) */}
                    <div className="absolute inset-0 backface-hidden">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="h-full glass-dark rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col group/card relative overflow-hidden">
                          <div className="flex justify-between items-start mb-6 relative z-10">
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

                          <div className="mb-4 relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover/card:scale-110 transition-transform duration-500">
                                {project.category === "Product" && <Box size={14} className="animate-pulse" />}
                                {project.category === "Python Package" && <Package size={14} className="animate-pulse" />}
                                {project.category === "Learning Project" && <BookOpen size={14} className="animate-pulse" />}
                              </div>
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400/80 font-bold">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold group-hover/card:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                          </div>

                          {project.achievement && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20 text-[10px] font-mono uppercase tracking-wider mb-4 w-fit relative z-10">
                              🏆 {project.achievement}
                            </div>
                          )}

                          <div className="flex-grow relative z-10">
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-mono text-white group-hover:gap-4 transition-all relative z-10">
                            VIEW PROJECT
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* BACK FACE (Architecture Diagram) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="h-full glass-dark rounded-3xl p-6 md:p-8 border border-white/5 overflow-hidden relative flex flex-col">
                        <div className="absolute inset-0 bg-blue-950/20 z-0"></div>
                        <div className="absolute inset-0 network-grid opacity-20 z-0"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-heading font-bold text-blue-400">Architecture</h3>
                            <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-mono text-blue-300 uppercase">
                              System Design
                            </div>
                          </div>

                          <div className="flex-grow relative rounded-xl overflow-hidden border border-white/10 group/diagram cursor-pointer bg-black/50">
                            {/* Placeholder for Dynamic Diagram Image */}
                            <Image
                              src="https://placehold.co/600x400/0f172a/3b82f6?text=Architecture+Diagram"
                              alt={`${project.title} Architecture`}
                              fill
                              className="object-cover opacity-80 group-hover/diagram:opacity-100 group-hover/diagram:scale-105 transition-all duration-700"
                            />

                            {/* Diagram Overlay Info */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                                {project.architecture}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lab Section Preview */}
          <section id="lab" className="py-16 md:py-32 border-t border-white/5 relative z-10 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Home Lab</h2>
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">/ Private infrastructure and experiments</p>
                </div>

                <div className="space-y-6 text-gray-400 leading-relaxed font-light mb-10">
                  <p className="text-xl text-white">
                    Exploring the world of <span className="text-blue-400">self-hosting</span>.
                  </p>
                  <p>
                    I host my own cloud infrastructure to maintain full control over my data and
                    experiment with production-grade architectures.
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

          {/* GitHub Activity Section */}
          <section className="py-16 md:py-24 border-t border-white/5 relative z-10">
            <GithubHeatmap />
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
