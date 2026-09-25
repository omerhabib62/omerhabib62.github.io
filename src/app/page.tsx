"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevConsole from "@/components/DevConsole";
import ArchitecturePlayground from "@/components/ArchitecturePlayground";
import ApiExplorer from "@/components/ApiExplorer";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import {
  Server,
  Download,
  Send,
  Terminal,
  Cpu,
  GitFork,
  Briefcase,
  Layers
} from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "Mercenary Starter API — NestJS Boilerplate",
      description: "A dockerized, modular NestJS starter for SaaS backends, so a new project begins with access control, billing, security headers and API docs already wired in.",
      tech: ["NestJS", "PostgreSQL", "Redis", "Stripe", "Docker", "Swagger"],
      metrics: "Open-Source Backend Starter",
      githubUrl: "https://github.com/omerhabib62/mercenary-api-starter",
      highlights: [
        "Role-based access control and Stripe billing layers pre-integrated.",
        "Security baseline with Helmet headers and rate limiting.",
        "Docker configuration and full OpenAPI documentation out of the box."
      ]
    },
    {
      title: "Groops — Community Platform Backend",
      description: "Backend for a community monetisation platform, first built at Blocship and continued as independent consulting work.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "pgvector", "Redis", "BullMQ", "Stripe Connect"],
      metrics: "16 Modules · 73 Migrations · 81 Entities",
      highlights: [
        "Stripe Connect with an ACID-compliant ledger, so commission splits either complete fully or roll back.",
        "Retriable BullMQ workers for webhook ingestion, so payment events are not dropped.",
        "Replaced scan-based text search with pgvector hybrid search layered over Redis.",
        "Clean Architecture across 16 NestJS modules, with 472 test suites."
      ]
    },
    {
      title: "MaidMe — Real-Time Booking Backend",
      description: "Home services marketplace for providers in Norway. The Laravel backend was already live and couldn't hold socket connections, so rather than rewrite a running product I added a NestJS socket server beside it.",
      tech: ["Laravel", "NestJS", "Socket.io"],
      metrics: "Socket Server Beside a Live Backend",
      highlights: [
        "Real-time booking updates pushed to clients over WebSockets.",
        "In-app support chat on the same socket server.",
        "Laravel kept the business logic and data; the socket server handled only live connections."
      ]
    },
    {
      title: "ALLDost — Activity & Nutrition Tracker",
      description: "A wellness app that turns plain-language meal and workout entries into structured records, with model output validated against Zod schemas.",
      tech: ["Next.js", "React", "Supabase", "Gemini API", "TypeScript", "Vercel"],
      metrics: "Natural-Language Parser",
      githubUrl: "https://github.com/omerhabib62/dost-fitness",
      liveUrl: "https://dost-fitness.vercel.app/",
      docsUrl: "https://gist.github.com/omerhabib62/e1be2f3b324144731b7afafd03799174",
      highlights: [
        "Plain-language logging converted into structured nutrition and activity records.",
        "Supabase authentication with row-level security on PostgreSQL.",
        "Cached food lookups, so repeated entries stop hitting the model."
      ]
    },
    {
      title: "TaskBreak — AI Task Decomposer",
      description: "An agentic workflow demo that breaks long, unstructured project briefs into ordered, structured checklists.",
      tech: ["Next.js", "TypeScript", "Gemini Pro", "Supabase", "GitHub Actions"],
      metrics: "Agentic Task Decomposer",
      githubUrl: "https://github.com/omerhabib62/taskbreak",
      highlights: [
        "Parses messy, unstructured lists into standardised database schemas.",
        "GitHub Actions for continuous integration.",
        "Webhook tracing to monitor downstream queue execution."
      ]
    },
    {
      title: "Apna Khata — Produce Market Transactions",
      description: "Laravel app for Pakistan's produce markets, where farmers sold fruit and vegetables to market traders at the rates they were offered. Built at Blocship.",
      tech: ["Laravel", "PHP", "MySQL", "AWS S3"],
      metrics: "Transaction Tracking",
      highlights: [
        "I built the transaction tracking between farmers and traders.",
        "One of six products I worked on with the Blocship backend team."
      ]
    },
    {
      title: "Pro-Forma Real Estate Investment Engine",
      description: "Dynamic financial calculation calculator modeling complex real-estate equity cascades, including IRR hurdles and waterfall cash allocations.",
      tech: ["Python", "Streamlit", "Pandas", "NumPy"],
      metrics: "Waterfall Calculations",
      githubUrl: "https://github.com/omerhabib62/pro-forma-investment-engine",
      liveUrl: "https://pro-forma-investment-engine.streamlit.app/",
      highlights: [
        "Replaces bulky Excel models with high-performance real-time caching.",
        "Computes IRR thresholds and multi-tier equity distributions dynamically.",
        "Enables variable holding timelines with instantaneous layout updates."
      ]
    },
    {
      title: "Sales Analytics Pipeline Dashboard",
      description: "Financial business analytics system converting chaotic CSV sales data into highly interactive Profit & Loss dashboards.",
      tech: ["Python", "Streamlit", "Pandas", "Data Cleaning"],
      metrics: "Instant P&L Generation",
      githubUrl: "https://github.com/omerhabib62/streamlit-financial-dashboard",
      liveUrl: "https://sales-financial.streamlit.app/",
      highlights: [
        "Processes raw finance reports with automated sanitization scripts.",
        "Generates interactive visualizations on cash margins instantly.",
        "Provides exportable reports matching standard audit criteria."
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-pl-grid bg-pl-light text-foreground selection:bg-pl-purple/35 selection:text-white">
      {/* Navbar */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 relative">
        {/* Cool Ambient Light Blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-72 h-72 rounded-full bg-pl-purple/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-pl-magenta/5 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-pl-lime/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-24">

          {/* Hero & Branding */}
          <section className="text-center md:text-left pt-6 md:pt-12 space-y-6">
            <div className="space-y-4">
              {/* Dynamic Availability Tag */}
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-mono text-slate-700 shadow-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Available now — full-time or contract
              </div>

              {/* Bold Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-pl-purple">
                Omer Bin Habib
              </h1>

              {/* Core Tagline */}
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-pl-purple via-pl-magenta to-pl-purple">
                Software Engineer · Backend-focused · Node.js, NestJS &amp; TypeScript · PostgreSQL
              </h2>

              <p className="max-w-3xl text-sm sm:text-base text-slate-600 font-sans font-medium leading-relaxed">
                Karachi-based software engineer with six years&apos; experience, mostly on the backend,
                and an MSBA candidate at KSBL. I build REST APIs in Node.js and NestJS on PostgreSQL,
                along with the reliability work around them — idempotent writes, retries, queue-based
                processing and scheduled jobs. I also integrate LLMs where they earn their place, with
                schema-validated output and tiered model routing to keep costs bounded.
              </p>
            </div>

            {/* Micro Call-to-Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-pl-purple text-white font-bold rounded font-mono text-xs cursor-pointer hover:bg-slate-800 active:scale-95 transition-all shadow-[0_4px_15px_rgba(56,0,60,0.25)]"
              >
                Contact me
              </a>
              <a
                href="/resume.pdf"
                download="Omer_Bin_Habib_Backend_Engineer.pdf"
                className="px-6 py-3 bg-white border border-gray-200 text-slate-700 font-bold rounded font-mono text-xs cursor-pointer hover:border-pl-purple hover:text-pl-purple hover:shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-500" /> CV — Backend &amp; AI
              </a>
              <a
                href="/resume-analytics.pdf"
                download="Omer_Bin_Habib_Business_Analytics.pdf"
                className="px-6 py-3 bg-white border border-gray-200 text-slate-700 font-bold rounded font-mono text-xs cursor-pointer hover:border-pl-purple hover:text-pl-purple hover:shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-500" /> CV — Analytics
              </a>
            </div>

            {/* Impact Metric Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8">
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-pl-purple">6+ YOE</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Software Engineering</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-emerald-600">pgvector</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Hybrid Search on Groops</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-pl-magenta">357 Tests</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Automated Tests (Spot)</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-indigo-600">Socket.io</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Real-Time Booking &amp; Chat</p>
              </div>
            </div>
          </section>

          {/* 01. Experience Timeline */}
          <section id="experience" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Career Left Bar */}
            <div className="lg:col-span-1 space-y-4 text-center lg:text-left font-sans">
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center lg:justify-start gap-2">
                  <Briefcase className="w-5 h-5 text-pl-purple" /> 01 // Experience
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Where I&apos;ve worked and what I built there.
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Six years building backends for UK SaaS founders, marketplaces and recruitment
                platforms — NestJS and Laravel APIs, PostgreSQL and MySQL schemas, queues and
                scheduled jobs.
              </p>

              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-4 text-xs font-mono text-left pl-top-ribbon pt-5">
                <p className="text-pl-purple font-bold mb-1">⚡ Core Highlights</p>
                <div className="text-slate-500 space-y-1.5">
                  <p>• 357 automated tests on the Spot backend</p>
                  <p>• 16 NestJS modules, 73 migrations, 81 entities on Groops</p>
                  <p>• NestJS socket server added beside a live Laravel backend (MaidMe)</p>
                  <p>• OWASP-aligned bilingual recruitment platform (FiTE)</p>
                </div>
              </div>
            </div>

            {/* Timeline Right Grid */}
            <div className="lg:col-span-2">
              <Timeline />
            </div>
          </section>

          {/* 02. Featured Projects Grid */}
          <section id="projects" className="space-y-6">
            <div className="space-y-1 text-center md:text-left border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <GitFork className="w-5 h-5 text-pl-purple" /> 02 // Featured Projects
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Backend systems, client products and open-source work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p, idx) => (
                <ProjectCard key={idx} {...p} />
              ))}
            </div>
          </section>

          {/* 03. Skill Matrix Grid */}
          <section id="skills" className="space-y-6">
            <div className="space-y-1 text-center md:text-left border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Cpu className="w-5 h-5 text-pl-purple" /> 03 // Stacks &amp; Technical Toolkit
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                System languages, databases, architectures, and cloud services used in daily workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-pl-purple">// System Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "JavaScript", "Python", "SQL (PostgreSQL)", "PHP", "HTML5/CSS3"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-emerald-600">// Frameworks &amp; ORMs</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["NestJS (Clean)", "Node.js", "ExpressJS", "Laravel", "Lumen", "Next.js", "TypeORM", "Socket.io"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-pl-magenta">// Data &amp; Message Queues</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "MySQL", "Redis", "BullMQ", "pgvector (Hybrid Search)", "SQLite", "AWS S3"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-sky-600">// DevOps &amp; Testing</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Docker", "GitHub Actions", "Swagger / OpenAPI", "Jest", "Mocha", "AWS (Lambda, RDS, EC2)", "nginx"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-indigo-600">// AI &amp; Observability</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Claude/OpenAI APIs", "LangGraph Agentic", "pgvector Hybrid Retrieval", "Langfuse Tracing", "Sentry Errors", "Pino Logging"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 04. Playground — interactive demos */}
          <section id="playground" className="space-y-12">
            <div className="space-y-1 text-center md:text-left border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-5 h-5 text-pl-purple" /> 04 // Playground
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Interactive pieces I built for this site — a terminal, an architecture explorer and a simulated API console.
              </p>
            </div>

            <div id="console" className="space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                  <Terminal className="w-4 h-4 text-pl-purple" /> Developer Shell
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Type commands to query my experience and projects.
                </p>
              </div>
              <DevConsole />
            </div>

            <div id="architecture" className="space-y-4">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-sm font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                  <Layers className="w-4 h-4 text-pl-purple" /> Systems Architecture
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Click a module to see how the event streams, LLM routing and payment ledger fit together.
                </p>
              </div>
              <ArchitecturePlayground />
            </div>

            <div id="api-explorer" className="space-y-4">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-sm font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                  <Server className="w-4 h-4 text-pl-purple" /> REST API Explorer
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Simulated requests against a mock API, showing how I document and shape endpoints.
                </p>
              </div>
              <ApiExplorer />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="max-w-2xl mx-auto space-y-6 text-center font-sans">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-pl-purple font-sans">Get in touch</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                Hiring, or have a project in mind? Send a message and I&apos;ll reply by email.
              </p>
            </div>

            <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 sm:p-6 text-left shadow-xl space-y-6">
              <form
                action="https://formspree.io/f/xgegkeqo"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 font-bold block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-slate-900 font-mono outline-none focus:border-pl-purple focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 font-bold block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. contact@company.com"
                      className="w-full bg-slate-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-slate-900 font-mono outline-none focus:border-pl-purple focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 font-bold block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role or project..."
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-slate-900 font-mono outline-none focus:border-pl-purple focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-pl-purple hover:bg-slate-800 text-white font-bold rounded font-mono text-xs cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5 fill-white" /> Send message
                </button>
              </form>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
