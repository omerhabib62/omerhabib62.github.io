"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevConsole from "@/components/DevConsole";
import ArchitecturePlayground from "@/components/ArchitecturePlayground";
import ApiExplorer from "@/components/ApiExplorer";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { 
  Server, 
  Database, 
  Brain, 
  GitFork, 
  ShieldAlert, 
  Download, 
  Send, 
  Terminal, 
  Cpu, 
  Search,
  Briefcase,
  Layers
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const consoleElement = document.getElementById("console");
      if (consoleElement) {
        consoleElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      title: "DostAI — AI-Native Nutrition Tracker",
      description: "A high-performance wellness and diet planning platform replacing traditional entry logs with fluid natural language processing. Validated through strict Zod union assertions.",
      tech: ["Next.js", "React", "Supabase", "Gemini API", "TypeScript", "Vercel"],
      metrics: "AI-Native NLP Parser",
      githubUrl: "https://github.com/omerhabib62/dost-fitness",
      liveUrl: "https://dost-fitness.vercel.app/",
      highlights: [
        "Natural language logging converting user text into structured nutritional records.",
        "Secure Supabase authentication and instant Postgres CRUD pipelines.",
        "Dynamic calorie and zone computations engineered with zero-delay edge routing."
      ]
    },
    {
      title: "TaskBreak — AI Task Decomposer Agent",
      description: "Next-gen agentic workflow demo that breaks massive, chaotic project briefs into structured, serial execution checklists automatically.",
      tech: ["Next.js", "TypeScript", "Gemini Pro", "Supabase", "GitHub Actions"],
      metrics: "Agentic Task Decomposer",
      githubUrl: "https://github.com/omerhabib62/taskbreak",
      highlights: [
        "Parses messy, unstructured lists into standardized database schemas.",
        "Pre-configured GitHub actions managing automated continuous integrations.",
        "Embedded webhook tracing monitoring downstream queue execution."
      ]
    },
    {
      title: "Mercenary Starter API (Boilerplate)",
      description: "A fully dockerized, modular starter ecosystem written in NestJS. Built specifically to eliminate boilerplate cycles for FinTech and high-load SaaS platforms.",
      tech: ["NestJS", "PostgreSQL", "Redis", "Stripe", "Docker", "Swagger"],
      metrics: "10+ Hours Saved Per Repo",
      githubUrl: "https://github.com/omerhabib62/mercenary-api-starter",
      highlights: [
        "Pre-integrated Role-Based Access Control (RBAC) and Stripe billing layers.",
        "Security baseline equipped with Helmet headers and automated rate limiters.",
        "Instantly compile-ready Docker configuration and full OpenAPI documentation."
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
    },
    {
      title: "Apna Khata B2B Wholesale Market",
      description: "Custom digital bidding and trading platform automating agricultural produce inventory and price settling.",
      tech: ["Laravel", "Node.js", "MySQL", "Socket.io", "AWS S3"],
      metrics: "Real-time Auction Engine",
      highlights: [
        "Real-time farmer-to-distributor auction channels via WebSockets.",
        "End-to-end perishable inventory logistics tracking.",
        "Dynamic commission allocations on transactions."
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
          
          {/* 1. Hero & Branding */}
          <section className="text-center md:text-left pt-6 md:pt-12 space-y-6">
            <div className="space-y-4">
              {/* Dynamic Availability Tag */}
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-mono text-slate-700 shadow-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Available for Senior Consulting & Architecture Roles
              </div>

              {/* Bold Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-pl-purple">
                Omer Bin Habib
              </h1>
              
              {/* Core Tagline */}
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-pl-purple via-pl-magenta to-pl-purple">
                Senior Systems Engineer + Growth Architect
              </h2>

              <p className="max-w-3xl text-sm sm:text-base text-slate-600 font-sans font-medium leading-relaxed">
                Karachi-based Senior Software Engineer (6+ YOE) & MSBA candidate at KSBL. 
                I bridge product roadmap metrics and systems engineering to build production-grade APIs, 
                high-throughput Redis event pipelines, pgvector vector search setups, and cost-optimized 
                AI routing logic.
              </p>
            </div>

            {/* Micro Call-to-Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-pl-purple text-white font-bold rounded font-mono text-xs cursor-pointer hover:bg-slate-800 active:scale-95 transition-all shadow-[0_4px_15px_rgba(56,0,60,0.25)]"
              >
                DISPATCH_PROPOSAL()
              </a>
              <a 
                href="/resume.pdf" 
                download="Omer_Bin_Habib_Resume.pdf"
                className="px-6 py-3 bg-white border border-gray-200 text-slate-700 font-bold rounded font-mono text-xs cursor-pointer hover:border-pl-purple hover:text-pl-purple hover:shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-500" /> DOWNLOAD_RESUME.PDF
              </a>
            </div>

            {/* Impact Metric Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8">
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-pl-purple">6+ YOE</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Systems Dev</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-emerald-600">90% Reduction</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Groops Database Load</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-pl-magenta">357 Tests</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Jest Code Coverage</p>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-3 sm:p-4 font-mono text-center md:text-left pl-top-ribbon pt-5">
                <p className="text-xl sm:text-2xl font-black text-indigo-600">&lt;1ms Sync</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Redis WebSockets Targets</p>
              </div>
            </div>
          </section>

          {/* 2. Interactive Terminal Console */}
          <section id="console" className="space-y-4 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-5 h-5 text-pl-purple" /> 01 // Interactive Developer Shell
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Execute local queries on Omer's system parameters in real time.
              </p>
            </div>
            <DevConsole />
          </section>

          {/* 3. Systems Architecture Playground */}
          <section id="architecture" className="space-y-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Layers className="w-5 h-5 text-pl-purple" /> 02 // Interactive Systems Architecture
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Click modules to audit details on event streams, LLM gateways, and payment ledger designs.
              </p>
            </div>
            <ArchitecturePlayground />
          </section>

          {/* 4. REST API Explorer */}
          <section id="api-explorer" className="space-y-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Server className="w-5 h-5 text-pl-purple" /> 03 // Swagger REST API Explorer
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Simulate HTTP requests and test response latency on our isolated backend APIs.
              </p>
            </div>
            <ApiExplorer />
          </section>

          {/* 5. Featured Projects Grid */}
          <section id="projects" className="space-y-6">
            <div className="space-y-1 text-center md:text-left border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <GitFork className="w-5 h-5 text-pl-purple" /> 04 // Featured Deployments
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Production-grade applications, AI agents, and open-source system packages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p, idx) => (
                <ProjectCard key={idx} {...p} />
              ))}
            </div>
          </section>

          {/* 6. Experience Timeline */}
          <section id="experience" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Career Left Bar */}
            <div className="lg:col-span-1 space-y-4 text-center lg:text-left font-sans">
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center lg:justify-start gap-2">
                  <Briefcase className="w-5 h-5 text-pl-purple" /> 05 // Career Pipeline Log
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Standardized path tracking work records and key accomplishments.
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                6+ Years architecting backend structures for UK B2B startups, e-commerce networks, 
                and recruitment platforms. Recognized for standardizing clean architectures, 
                optimizing cache bounds, and slashing server overheads.
              </p>
              
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-4 text-xs font-mono text-left pl-top-ribbon pt-5">
                <p className="text-pl-purple font-bold mb-1">⚡ Core Highlights</p>
                <div className="text-slate-500 space-y-1.5">
                  <p>• 6+ Modules, 357 Jest tests for Spot platform</p>
                  <p>• 13 modules, 73 migrations for Groops ledger</p>
                  <p>• 7 micro-scanners fanned out in parallel queues</p>
                  <p>• OWASP-compliant recruitment schema blueprints</p>
                </div>
              </div>
            </div>

            {/* Timeline Right Grid */}
            <div className="lg:col-span-2">
              <Timeline />
            </div>
          </section>

          {/* 7. Skill Matrix Grid */}
          <section className="space-y-6">
            <div className="space-y-1 text-center md:text-left border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold font-mono text-pl-purple flex items-center justify-center md:justify-start gap-2">
                <Cpu className="w-5 h-5 text-pl-purple" /> 06 // Stacks & Technical Toolkit
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                System languages, databases, architectures, and cloud services used in daily workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-pl-purple">// System Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "Python", "JavaScript", "SQL (PostgreSQL)", "PHP", "HTML5/CSS3"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-emerald-600">// Stacks & ORMs</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["NestJS (Clean)", "Next.js", "Node.js", "ExpressJS", "Laravel", "TypeORM", "LAMP Stack"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-pl-magenta">// Data & Message Queues</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "Redis", "BullMQ Ingestion", "pgvector (Hybrid Search)", "SQLite", "MySQL", "AWS S3"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-indigo-600">// AI & Observability</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Claude/OpenAI APIs", "LangGraph Agentic", "DSPy Pipelines", "RAG Structures", "Langfuse Tracing", "Sentry Errors", "Pino Logging"].map((s, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-100 border border-gray-200 px-2 py-0.5 rounded text-slate-600 hover:text-pl-purple cursor-default transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Contact Form API Gateway */}
          <section id="contact" className="max-w-2xl mx-auto space-y-6 text-center font-sans">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-pl-purple font-sans">Initialize System Query</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                Connect directly with Omer. Submitting this form simulates a high-priority 
                BullMQ queue ingestion that routes notifications instantly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 pl-card-shadow rounded-lg p-5 sm:p-6 text-left shadow-xl space-y-6">
              <div className="bg-slate-50 px-3 sm:px-4 py-2 border border-gray-200 rounded flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1.5 text-slate-600 font-bold">
                <span>Endpoint:</span>
                <span className="text-pl-purple truncate">POST https://omerhabib62.io/api/contact</span>
              </div>
              
              {/* Linked Contact Form redirect fallback to email */}
              <form 
                action="https://formspree.io/f/xgegkeqo" // User can configure this, default structure is direct redirect form
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 font-bold block">SENDER_NAME</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-slate-900 font-mono outline-none focus:border-pl-purple focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 font-bold block">SENDER_EMAIL</label>
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
                  <label className="text-[10px] font-mono text-slate-500 font-bold block">QUERY_PAYLOAD_MESSAGE</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide a project overview or senior role details..."
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-slate-900 font-mono outline-none focus:border-pl-purple focus:bg-white resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-pl-purple hover:bg-slate-800 text-white font-bold rounded font-mono text-xs cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5 fill-white" /> DISPATCH_COMMUNICATION_INGEST()
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
