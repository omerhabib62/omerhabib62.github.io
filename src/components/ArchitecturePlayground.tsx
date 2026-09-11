"use client";

import React, { useState } from "react";
import { Server, Database, Brain, GitFork, ArrowRight, Zap, RefreshCw, BarChart2 } from "lucide-react";

type ProjectId = "spot" | "groops" | "audit";

interface ArchitectureNode {
  id: string;
  name: string;
  type: "input" | "process" | "ai" | "data" | "external";
  description: string;
  tech?: string;
}

interface ArchitectureFlow {
  id: string;
  title: string;
  metric: string;
  description: string;
  nodes: ArchitectureNode[];
  edges: { from: string; to: string; label?: string }[];
  extendedExplainer: string[];
}

export default function ArchitecturePlayground() {
  const [activeProject, setActiveProject] = useState<ProjectId>("spot");

  const flows: Record<ProjectId, ArchitectureFlow> = {
    spot: {
      id: "spot",
      title: "Spot: Clinical Risk-Scoring & LLM Routing Engine",
      metric: "Tiered Model Routing | Latency Fallback",
      description: "An AI-powered employee mental health check-in platform. Features automated clinical risk scoring based on free-text inputs, historical user baseline drift calculations, and tiered LLM model routing.",
      nodes: [
        { id: "input", name: "User Check-In", type: "input", description: "Free-text mental wellness report, parsed via validation layers.", tech: "Next.js UI" },
        { id: "nlp", name: "Clinical NLP Engine", type: "process", description: "Feature extraction, EWMA (Exponentially Weighted Moving Average) drift analysis against user history.", tech: "TypeScript" },
        { id: "router", name: "Tiered LLM Router", type: "ai", description: "Routes low-risk to Haiku. Triggers fallback to Claude Sonnet for high-confidence warnings.", tech: "Claude API / Prompt Caching" },
        { id: "batch", name: "Timezone Batch Jobs", type: "process", description: "Groups risk-signals into timezone-aware queues.", tech: "NestJS Scheduling" },
        { id: "postmark", name: "Verified Delivery", type: "external", description: "Dunning sync & NeverBounce verified communications.", tech: "Postmark / NeverBounce Webhooks" },
        { id: "db", name: "Relational Ledger", type: "data", description: "18 migrations, isolated GDPR-compliant data tables.", tech: "PostgreSQL / TypeORM" }
      ],
      edges: [
        { from: "input", to: "nlp", label: "Free-Text Input" },
        { from: "nlp", to: "router", label: "Signal Score" },
        { from: "router", to: "db", label: "Anonymized Logs" },
        { from: "nlp", to: "batch", label: "High Risk Alerts" },
        { from: "batch", to: "postmark", label: "Secure Email Trigger" }
      ],
      extendedExplainer: [
        "Clinical Risk-Scoring: NLP pipeline extracts sentiments and matches clinical indicators, comparing user baseline signals via EWMA.",
        "Model Cost Routing: Intelligent API gateways evaluate queries, routing standard reports to Claude Haiku (£) and escalating critical diagnostics to Claude Sonnet (£££), so the expensive model only runs where it matters.",
        "Timezone-Aware Delivery: Strict scheduling blocks emails during off-hours, queuing them in specialized redis clusters with NeverBounce verification."
      ]
    },
    groops: {
      id: "groops",
      title: "Groops: Creator Monetization ledger & Query Engine",
      metric: "pgvector Hybrid Search | ACID Financial Ledger",
      description: "A community platform enabling nested user cohorts, Stripe Connect distribution layers, and pgvector hybrid search.",
      nodes: [
        { id: "stripe", name: "Stripe Connect Gateway", type: "external", description: "Collects community subscription sales.", tech: "Stripe Webhooks" },
        { id: "ledger", name: "ACID Ledger Engine", type: "process", description: "Enforces double-entry bookkeeping with strict zero discrepancy targets.", tech: "NestJS / PostgreSQL Transactions" },
        { id: "queues", name: "BullMQ Job Pools", type: "process", description: "Persistent, retriable task runners managing webhook queues.", tech: "Upstash Redis" },
        { id: "search", name: "Hybrid Search Engine", type: "ai", description: "pgvector vector similarity search + Redis cache index.", tech: "pgvector / Redis Caching" },
        { id: "db", name: "Community Database", type: "data", description: "16 modules, 73 migrations, 81 entities.", tech: "PostgreSQL" }
      ],
      edges: [
        { from: "stripe", to: "queues", label: "High-Throughput Webhooks" },
        { from: "queues", to: "ledger", label: "Deduplicated Events" },
        { from: "ledger", to: "db", label: "Ledger Update" },
        { from: "db", to: "search", label: "Index Sync" }
      ],
      extendedExplainer: [
        "Double-entry bookkeeping: Multi-wallet splits and payouts are transactional, guaranteeing financial transactions either succeed completely or roll back safely.",
        "Query efficiency: heavy text searches bypass raw relational scans by using pgvector embeddings layered over Redis caching.",
        "Persistent Webhooks: Retriable BullMQ workers prevent dropped transactions under strict rate limiting."
      ]
    },
    audit: {
      id: "audit",
      title: "Audit-this-engine: Fan-Out Code Analysis Orchestration",
      metric: "Parallel Scanners | LLM Diagnostics Cache",
      description: "Agency code-intelligence pipeline. Orchestrates multiple static analysis tools, caching prompts and caching diagnostic runs to analyze git codebases dynamically.",
      nodes: [
        { id: "scan", name: "Scan Endpoint", type: "input", description: "Receives raw Git URL payloads.", tech: "Express / Next" },
        { id: "fan", name: "Fan-Out Scheduler", type: "process", description: "Orchestrates parallel scanning jobs.", tech: "BullMQ Manager" },
        { id: "scanners", name: "Static Analysis Tools", type: "process", description: "Independent micro-scanners processing code syntax.", tech: "Dockerized Security Frameworks" },
        { id: "enricher", name: "LLM Diagnostic Enricher", type: "ai", description: "Applies Claude tool-calling & cache layers.", tech: "OpenAI / Claude API" },
        { id: "db", name: "Diagnostic Database", type: "data", description: "Stores persistent telemetry and scan traces.", tech: "PostgreSQL" }
      ],
      edges: [
        { from: "scan", to: "fan", label: "Payload Ingestion" },
        { from: "fan", to: "scanners", label: "Parallel Launch" },
        { from: "scanners", to: "enricher", label: "Combine Reports" },
        { from: "enricher", to: "db", label: "Persist Analysis" }
      ],
      extendedExplainer: [
        "Fan-Out/Fan-In Pattern: Decomposes a single repo scan into separate asynchronous scanner jobs that run concurrently, then combines their reports.",
        "Smart LLM Caching: Reuses structural prompts and analysis templates to minimize token overhead and keep API billing under strict bounds."
      ]
    }
  };

  const getIcon = (type: ArchitectureNode["type"]) => {
    switch (type) {
      case "input": return <Zap className="w-5 h-5 text-pl-purple" />;
      case "process": return <Server className="w-5 h-5 text-indigo-600" />;
      case "ai": return <Brain className="w-5 h-5 text-emerald-600" />;
      case "data": return <Database className="w-5 h-5 text-amber-600" />;
      case "external": return <GitFork className="w-5 h-5 text-rose-500" />;
    }
  };

  const getNodeStyles = (type: ArchitectureNode["type"]) => {
    switch (type) {
      case "input": return "border-cyan-200 bg-cyan-50/40 text-cyan-800 shadow-sm";
      case "process": return "border-purple-200 bg-purple-50/40 text-pl-purple shadow-sm";
      case "ai": return "border-emerald-200 bg-emerald-50/40 text-emerald-800 shadow-sm";
      case "data": return "border-amber-200 bg-amber-50/40 text-amber-800 shadow-sm";
      case "external": return "border-rose-200 bg-rose-50/40 text-rose-800 shadow-sm";
    }
  };

  return (
    <div className="space-y-6">
      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(Object.keys(flows) as ProjectId[]).map((projId) => (
          <button
            key={projId}
            onClick={() => setActiveProject(projId)}
            className={`px-4 py-2.5 rounded-md font-mono text-xs font-semibold border transition-all cursor-pointer ${
              activeProject === projId
                ? "bg-pl-purple border-pl-purple text-white shadow-sm"
                : "border-gray-200 bg-white text-slate-500 hover:text-slate-900 hover:border-gray-300"
            }`}
          >
            {flows[projId].id.toUpperCase()} MODULE
          </button>
        ))}
      </div>

      {/* Main Visual Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
        {/* Visual Graph Panel */}
        <div className="lg:col-span-2 bg-white pl-card-shadow rounded-lg p-6 flex flex-col justify-between min-h-[400px] border border-gray-200">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-3 mb-4 gap-2">
              <h4 className="font-sans font-bold text-slate-900 text-base sm:text-lg">{flows[activeProject].title}</h4>
              <span className="text-xs font-mono bg-pl-purple/10 border border-pl-purple/20 px-2.5 py-1 rounded text-pl-purple font-bold self-start sm:self-center">
                {flows[activeProject].metric}
              </span>
            </div>
            <p className="text-sm text-slate-600 font-sans mb-6 leading-relaxed">
              {flows[activeProject].description}
            </p>
          </div>

          {/* Render Flow Nodes Map */}
          <div className="flex flex-col gap-3 py-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {flows[activeProject].nodes.map((node) => (
                <div
                  key={node.id}
                  className={`border rounded-lg p-4 flex flex-col justify-between gap-2 hover:scale-[1.02] transition-transform duration-300 ${getNodeStyles(node.type)}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold opacity-60">
                      [{node.type.toUpperCase()}]
                    </span>
                    {getIcon(node.type)}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-slate-900 text-sm">{node.name}</h5>
                    <p className="text-[11px] text-slate-500 leading-normal mt-1">{node.description}</p>
                  </div>
                  {node.tech && (
                    <span className="text-[10px] font-mono opacity-80 border-t border-slate-200/80 pt-1.5 mt-1 block">
                      ⚡ {node.tech}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-mono gap-1.5">
            <span className="flex items-center gap-1.5 self-center sm:self-auto text-pl-purple font-bold">
              <Zap className="w-3.5 h-3.5 text-pl-magenta animate-pulse" /> Live System Mock Engine
            </span>
            <span className="self-center sm:self-auto text-slate-400">Interactive Data Pipelines</span>
          </div>
        </div>

        {/* Explainers Sidebar */}
        <div className="bg-white pl-card-shadow rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
              <BarChart2 className="w-4 h-4 text-pl-magenta" />
              <h4 className="font-sans font-bold text-slate-900 text-sm">System Pipeline Architecture</h4>
            </div>

            <div className="space-y-4">
              {flows[activeProject].extendedExplainer.map((sentence, idx) => {
                const parts = sentence.split(":");
                return (
                  <div key={idx} className="space-y-1">
                    <h5 className="text-xs font-mono font-bold text-pl-purple">❯ {parts[0]}</h5>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed pl-3 border-l border-gray-200">
                      {parts[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
