"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeLab() {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const formatTime = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });

    setTime(formatTime());
    const timer = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: "SplitEase",
      category: "Expense Management",
      status: "Operational",
      description:
        "Room-based expense splitting platform. Self-hosted with automatic CI/CD deployments.",
      tech: ["Docker", "Nginx", "GHCR", "Next.js"],
      link: "https://splitease.harishbs.in",
    },
    {
      name: "n8n",
      category: "Automation",
      status: "Coming Soon",
      description:
        "Workflow automation tool to connect and sync data between different applications and services.",
      tech: ["Docker", "Node.js", "PostgreSQL"],
    },
    {
      name: "Supabase",
      category: "Database & Auth",
      status: "Coming Soon",
      description:
        "Developing a self-hosted Supabase instance for localized backend management and data sovereignty.",
      tech: ["Docker", "PostgreSQL", "Go", "Realtime"],
    },
  ];

  const specs = [
    ["Instance", "the-harish-machine"],
    ["CPU", "1 AMD vCPU (BLR1)"],
    ["RAM", "2 GB Memory"],
    ["Disk", "35 GB NVMe Storage"],
    ["OS", "Ubuntu 25.04 x64"],
  ];

  return (
    <div className="min-h-screen bg-black text-white text-sm">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xs uppercase tracking-widest hover:text-gray-400 transition-colors">
            ← Harish Barathi S
          </Link>
          <nav className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/#experience" className="hover:text-white transition-colors">Exp</Link>
            <Link href="/lab" className="text-white transition-colors">Lab</Link>
            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="py-24 md:py-28">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
            Self-Hosted Infrastructure
          </p>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
            Home Lab
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Exploring infrastructure, virtualization, and network security through a
            personal testing environment. My home lab serves as a playground for
            self-hosting services and learning modern DevOps practices.
          </p>
          <div className="mt-10 flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <span>Home Lab</span>
            <span>{time}</span>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-white/10">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-8 border-b-2 border-white/40">
            Services
          </h2>
          <div className="space-y-12">
            {services.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-base">
                    {s.link ? (
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                      >
                        {s.name} ↗
                      </a>
                    ) : (
                      s.name
                    )}
                  </h3>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {s.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  {s.category}
                </div>
                <p className="text-gray-400 leading-relaxed mb-3">{s.description}</p>
                <div className="text-xs text-gray-500">{s.tech.join(" · ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 border-t border-white/10">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            The Machine
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Powered by the-harish-machine.
          </p>
          <ul className="text-xs">
            {specs.map(([k, v], i) => (
              <li
                key={i}
                className="flex justify-between py-2.5 border-b border-white/10"
              >
                <span className="text-gray-500 uppercase tracking-widest">{k}</span>
                <span className="text-gray-300">{v}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="py-16 border-t border-white/10">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-6 border-b-2 border-white/40">
            Contact
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
            Always excited about new challenges and innovative systems. Reach out if
            you want to discuss building something exceptional.
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
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between text-xs text-gray-500 uppercase tracking-widest">
          <span>© 2026 Harish Barathi S</span>
          <Link href="/" className="hover:text-white transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
