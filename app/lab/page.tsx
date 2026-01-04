"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Server, HardDrive, Shield, Activity, ExternalLink, Cpu, Globe, Lock, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function HomeLab() {
    const [time, setTime] = useState<Date | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const services = [
        {
            name: "SplitEase",
            category: "Expense Management",
            status: "Operational",
            description: "Room-based expense splitting platform BETTER THAN SPLITWISE.",
            tech: ["Docker", "Nginx", "GHCR", "Next.js"],
            icon: <img src="/splitease.svg" alt="SplitEase" className="w-6 h-6 object-contain" />,
            stats: "Active Usage"
        },
        {
            name: "n8n",
            category: "Automation",
            status: "Coming Soon",
            description: "Workflow automation tool to connect and sync data between different applications and services.",
            tech: ["Docker", "Node.js", "PostgreSQL"],
            icon: <img src="/n8n-color.png" alt="n8n" className="w-6 h-6 object-contain" />,
            stats: "15+ Workflows"
        },
        {
            name: "Supabase",
            category: "Database & Auth",
            status: "Coming Soon",
            description: "Developing a self-hosted Supabase instance for localized backend management and data sovereignty.",
            tech: ["Docker", "PostgreSQL", "Go", "Realtime"],
            icon: <img src="/supabase-logo.svg" alt="Supabase" className="w-6 h-6 object-contain" />,
            stats: "Planning Phase"
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
                            <Link href="/" className="text-sm font-heading font-semibold tracking-tight hover:text-gray-300 transition-colors flex items-center gap-2">
                                <ArrowLeft size={16} />
                                <span>Harish Barathi S</span>
                            </Link>

                            <div className="flex items-center gap-4">
                                <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-400">
                                    <Link href="/#work" className="hover:text-white transition-colors">WORK</Link>
                                    <Link href="/#experience" className="hover:text-white transition-colors">EXP</Link>
                                    <Link href="/lab" className="text-white font-bold transition-colors">LAB</Link>
                                    <Link href="/#about" className="hover:text-white transition-colors">ABOUT</Link>
                                </nav>

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
                            <Link href="/#work" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>WORK</Link>
                            <Link href="/#experience" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>EXP</Link>
                            <Link href="/lab" className="text-white font-bold transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>LAB</Link>
                            <Link href="/#about" className="hover:text-white transition-colors p-2" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* External Location Marker (Desktop Only) */}
            <div className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-3">
                <div className="flex flex-col items-end">
                    <span className="hidden md:block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Local Time</span>
                    <span className="text-xs font-mono text-white">
                        {time ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) : '00:00:00'}
                    </span>
                </div>
                <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
                <div className="flex flex-col items-end">
                    <span className="hidden md:block text-[10px] text-gray-400 font-mono uppercase tracking-widest">Location</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-white uppercase">Home Lab</span>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                    </div>
                </div>
            </div>

            <main className="pt-32 pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
                            <Cpu className="w-3 h-3 text-blue-400" />
                            <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Self-Hosted Infrastructure
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient">
                            Home Lab
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                            Exploring infrastructure, virtualization, and network security through a personal testing environment.
                            My home lab serves as a playground for self-hosting services and learning modern DevOps practices.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group glass-dark rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase tracking-widest border ${service.status === "Coming Soon"
                                            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                            : "bg-green-500/10 text-green-400 border-green-500/20"
                                            }`}>
                                            {service.status}
                                        </span>
                                        <span className="text-[10px] text-gray-600 mt-2 font-mono">{service.category}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-3">
                                    {service.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] px-2 py-1 bg-white/5 text-gray-500 rounded font-mono uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-gray-500">{service.stats}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lab Setup/Spec Section */}
                    <section className="mt-32 pt-16 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-heading font-bold mb-8 transition-transform cursor-default">
                                    The <span className="text-blue-400">Heart</span> of the Lab
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-light">
                                    <p>
                                        Powered by <strong>the-harish-machine</strong>
                                    </p>

                                    <div className="p-6 glass-dark rounded-2xl border border-white/10 mt-10">
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            <Cpu size={18} className="text-purple-400" />
                                            VM Specifications
                                        </h4>
                                        <ul className="space-y-3 text-sm font-mono">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500">Instance</span>
                                                <span>the-harish-machine</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500">CPU</span>
                                                <span>1 AMD vCPU (BLR1)</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500">RAM</span>
                                                <span>2 GB Memory</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500">Disk</span>
                                                <span>35 GB NVMe Storage</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="text-gray-500">OS</span>
                                                <span>Ubuntu 25.04 x64</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center relative">
                                {/* Network Grid Background */}
                                <div className="absolute inset-0 network-grid opacity-25 z-0"></div>

                                <div className="relative w-full aspect-square max-w-md overflow-hidden px-4 py-4 z-10 flex items-center justify-center">
                                    {/* Rotating Scanner Rings */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                        <div className="w-[85%] h-[85%] rounded-full border-t-2 border-r-2 border-blue-500/40 animate-rotate-slow"></div>
                                        <div className="absolute w-[75%] h-[75%] rounded-full border-b-2 border-l-2 border-purple-500/40 animate-rotate-slow-reverse"></div>
                                        <div className="absolute w-[65%] h-[65%] rounded-full border-t border-indigo-500/40 animate-rotate-slow delay-500"></div>
                                    </div>

                                    {/* Animated Request Pulses converging from outside */}
                                    <div className="absolute inset-0 pointer-events-none z-0">
                                        {/* From Left */}
                                        <div className="absolute top-[20%] w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-request-to-center-left"></div>
                                        <div className="absolute top-[60%] w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-request-to-center-left delay-1000"></div>

                                        {/* From Right */}
                                        <div className="absolute top-[35%] w-28 h-[1px] bg-gradient-to-l from-transparent via-pink-400 to-transparent animate-request-to-center-right delay-500"></div>
                                        <div className="absolute top-[75%] w-24 h-[1px] bg-gradient-to-l from-transparent via-indigo-400 to-transparent animate-request-to-center-right delay-1500"></div>

                                        {/* From Top */}
                                        <div className="absolute left-[30%] w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-request-to-center-top delay-300"></div>
                                        <div className="absolute left-[70%] w-[1px] h-20 bg-gradient-to-b from-transparent via-purple-300 to-transparent animate-request-to-center-top delay-1200"></div>

                                        {/* From Bottom */}
                                        <div className="absolute left-[40%] w-[1px] h-28 bg-gradient-to-t from-transparent via-pink-300 to-transparent animate-request-to-center-bottom delay-700"></div>
                                        <div className="absolute left-[80%] w-[1px] h-24 bg-gradient-to-t from-transparent via-indigo-300 to-transparent animate-request-to-center-bottom delay-1700"></div>
                                    </div>

                                    {/* Central Icon */}
                                    <div className="relative z-10">
                                        <div className="w-48 h-48 bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 flex items-center justify-center group hover:scale-105 transition-transform duration-500 relative overflow-hidden animate-pulse-glow">
                                            {/* Pulse absorption visual inside */}
                                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <Server size={80} className="text-blue-500 group-hover:text-white transition-colors duration-500 relative z-10" />

                                            {/* HUD Metrics inside the core */}
                                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="flex flex-col items-center">
                                                    <span className="hud-label italic">CPU</span>
                                                    <span className="hud-value">12%</span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <span className="hud-label italic">PING</span>
                                                    <span className="hud-value">0.8ms</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* External HUD Labels */}
                                        <div className="absolute -top-8 -left-8 flex flex-col items-start animate-fade-in delay-500">
                                            <span className="hud-label">Uptime</span>
                                            <span className="hud-value">99.99%</span>
                                        </div>
                                        <div className="absolute -bottom-8 -right-8 flex flex-col items-end animate-fade-in delay-1000">
                                            <span className="hud-label">Status</span>
                                            <span className="hud-value text-green-400">OPERATIONAL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <div className="mt-32 glass-dark rounded-[2.5rem] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Want to talk shop?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            If you&apos;re also into self-hosting or DevOps, I&apos;d love to connect and share experiences.
                        </p>
                        <Link
                            href="mailto:iharishbarathis@gmail.com"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-medium"
                        >
                            Get in Touch
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 relative z-10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-mono">
                    <div>© 2025 HARISH BARATHI S</div>
                    <div className="flex gap-8">
                        <Link href="/" className="hover:text-white transition-colors">BACK TO PORTFOLIO</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
