"use client";

import React, { useRef } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Cpu,
  Check,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import ShaderBackground from "../components/ShaderBackground";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: "Tipster Arena",
    description:
      "Social platform for sports tipsters with verified track records, real-time chat, tip tracking, and community features. 12k+ tips shared, 3.2k active tipsters.",
    image: "/screenshots/tipster-arena.png",
    url: "https://www.tipster-arena.com",
    tags: ["Next.js", "React", "Django", "WebSockets", "PostgreSQL"],
    category: "Full-Stack Platform",
    featured: true,
  },
  {
    title: "SportsBlock",
    description:
      "Decentralised sports social platform built on Hive Blockchain. Pure sports discussions with real crypto rewards. No politics, no drama, no noise.",
    image: "/screenshots/sportsblock.png",
    url: "https://www.sportsblock.app",
    tags: ["React", "Hive Blockchain", "Node.js", "Web3"],
    category: "Blockchain / Web3",
    featured: true,
  },
  {
    title: "Naas Town Centre",
    description:
      "Commercial shopping centre website featuring store directory, visitor information, opening hours, and parking details for one of Kildare's busiest retail destinations.",
    image: "/screenshots/naas-town-centre.png",
    url: "https://www.naastowncentre.ie",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Commercial Website",
  },
  {
    title: "Newbridge Retail Park",
    description:
      "Retail park website with store listings, EV charging information, visitor guides, and leasing enquiries. Serves major retailers including SuperValu, Maxi Zoo, and DID Electrical.",
    image: "/screenshots/retail-park-newbridge.png",
    url: "https://www.retailparknewbridge.ie",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Commercial Website",
  },
  {
    title: "Showgrounds Shopping Centre",
    description:
      "Shopping centre website for Clonmel's premier retail destination featuring Marks & Spencer, TK Maxx, and more. Includes store directory, parking info, and news section.",
    image: "/screenshots/showgrounds.png",
    url: "https://www.showgrounds.ie",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Commercial Website",
  },
  {
    title: "The Courtyard Newbridge",
    description:
      "Shopping centre website for The Courtyard in Newbridge. Features store directory, visitor info, 24/7 parking details, and leasing enquiries.",
    image: "/screenshots/courtyard-newbridge.png",
    url: "https://courtyardshoppingcentre.ie",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Commercial Website",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "Vercel", category: "Hosting" },
  { name: "Figma", category: "Design" },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Full-Stack Product Development",
    description:
      "Building Tipster Arena, SportsBlock, and commercial websites for retail centres across Ireland. Working with AI-assisted development tools.",
    tech: "Next.js, Django, Hive Blockchain, Cursor AI, ShadCN UI",
  },
  {
    year: "2023",
    title: "Backend & DevOps",
    description:
      "Django frameworks, REST APIs, Redis, Docker, Nginx, web scraping with Beautiful Soup, and task automation with Cron Jobs.",
    tech: "Django, Docker, Nginx, Redis, Postman",
  },
  {
    year: "2022",
    title: "Database Engineering",
    description:
      "Data modelling, query optimisation, and database administration with MySQL and PostgreSQL.",
    tech: "MySQL, PostgreSQL",
  },
  {
    year: "2021",
    title: "Python & Deployment",
    description:
      "Python programming, version control with Git, and cloud deployment across Vercel, Heroku, and Sevalla.",
    tech: "Python, Git, Vercel, Heroku",
  },
  {
    year: "2020",
    title: "Web Development Foundations",
    description:
      "Started the journey with HTML, JavaScript, and CSS. Built first websites and discovered a passion for frontend development.",
    tech: "HTML, CSS, JavaScript",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-black text-neutral-100 relative">
      <ShaderBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-tight">
              PB
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["Work", "About", "Stack", "Timeline", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <a
              href="mailto:paulblanche21@gmail.com"
              className="hidden md:inline-flex items-center gap-2 text-sm text-black bg-white rounded-full px-4 py-2 font-medium hover:bg-white/90 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 mb-8">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-white/70 tracking-wide">
                    Available for work
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="leading-[0.9] text-white tracking-tighter"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block text-[clamp(3rem,10vw,7rem)] font-bold">
                  Paul
                </span>
                <span className="block text-[clamp(3rem,10vw,7rem)] font-bold">
                  Blanche
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Frontend developer specialising in React, Next.js &amp;
                TypeScript. Building products people love, from social platforms
                to commercial sites.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:paulblanche21@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300 backdrop-blur"
                >
                  <Mail className="w-4 h-4" />
                  <span>paulblanche21@gmail.com</span>
                </a>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center gap-8 text-sm text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Tipperary, Ireland</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>React / Next.js</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl">
                <Image
                  src="/portfolio-photo.png"
                  alt="Paul Blanche"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "grayscale(100%) contrast(1.1)",
                  }}
                  width={800}
                  height={1000}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-white/70 font-medium">
                    5+ years building for the web
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <section id="work" className="relative z-20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-sm text-white/40 tracking-widest uppercase mb-3">
                  Portfolio
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  Selected Work
                </h2>
              </div>
              <p className="hidden sm:block text-sm text-white/40 max-w-xs text-right">
                A selection of projects I&apos;ve designed and built — from
                full-stack platforms to commercial websites.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured projects - large cards */}
          <div className="space-y-8 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden lg:block" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-4">
                            <span className="w-6 h-px bg-white/20" />
                            {project.category}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-white/50 leading-relaxed mb-6">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-white/[0.06] text-white/50 border border-white/[0.06]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                            <span>Visit Site</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
          </div>

          {/* Remaining projects - grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-3">
                          <span className="w-4 h-px bg-white/20" />
                          {project.category}
                        </div>
                        <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 text-[11px] rounded-full bg-white/[0.04] text-white/40 border border-white/[0.05]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm text-white/40 tracking-widest uppercase mb-3">
                About
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
                Building things
                <br />
                <span className="text-white/40">that matter.</span>
              </h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  I&apos;m a frontend developer based in Tipperary, Ireland,
                  specialising in React, Next.js, and modern web technologies. I
                  build everything from full-stack social platforms to
                  professional commercial websites.
                </p>
                <p>
                  I don&apos;t charge by the hour. I want clients to be happy
                  with their website and if they are, we agree a price
                  accordingly. My focus is always on delivering real value
                  through clean design and solid engineering.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me working on my
                  own products like Tipster Arena and SportsBlock, or exploring
                  new technologies that push the boundaries of what&apos;s
                  possible on the web.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 overflow-hidden">
                <video
                  className="w-full rounded-xl"
                  controls
                  poster="/portfolio-photo.png"
                  preload="metadata"
                >
                  <source src="/Tipster.mp4" type="video/mp4" />
                </video>
                <p className="mt-4 text-sm text-white/30 text-center">
                  Tipster Arena demo walkthrough
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="relative z-20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm text-white/40 tracking-widest uppercase mb-3">
                Technologies
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Tech Stack
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.05}>
                <div className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <p className="font-medium text-sm tracking-tight">
                    {tech.name}
                  </p>
                  <p className="text-[11px] text-white/30 mt-1">
                    {tech.category}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-20 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm text-white/40 tracking-widest uppercase mb-3">
                Journey
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Timeline
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 mt-1.5 ${
                          i === 0
                            ? "bg-white border-white"
                            : "bg-transparent border-white/30"
                        }`}
                      />
                    </div>
                    <div className="pb-2">
                      <p className="text-sm text-white/30 font-medium mb-1">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <p className="text-xs text-white/25">{item.tech}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="relative z-20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm text-white/40 tracking-widest uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Let&apos;s work together.
              </h2>
              <p className="text-white/40 max-w-md mx-auto">
                I&apos;m always interested in new projects and opportunities.
                Whether you need a website, web app, or full-stack platform
                &mdash; let&apos;s talk.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a
                href="mailto:paulblanche21@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <Mail className="w-4 h-4" />
                <span>paulblanche21@gmail.com</span>
              </a>
              <a
                href="https://github.com/blanchy21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </AnimatedSection>

          <div className="border-t border-white/[0.06] pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-white/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Tipperary, Ireland</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/30">
                {projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 transition-colors hidden lg:block"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
              <p className="text-sm text-white/20">
                &copy; {new Date().getFullYear()} Paul Blanche
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
