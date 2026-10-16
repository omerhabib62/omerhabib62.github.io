"use client";

import React, { useState } from "react";
import { Server, Database, Brain, GitFork, ArrowRight, Zap, RefreshCw, BarChart2 } from "lucide-react";

type ProjectId = "spot" | "maidme" | "sidecar";

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
      title: "Spot: Billing, GDPR Handling and Scheduled Processing",
      metric: "357 tests | 18 migrations",
      description: "Backend for a UK B2B workplace wellbeing SaaS. Deployed on Render but never launched to users. This is a simplified view of how its main pieces fit together.",
      nodes: [
        { id: "api", name: "REST API", type: "input", description: "Requests validated and routed by NestJS modules.", tech: "NestJS / TypeScript" },
        { id: "billing", name: "Tiered Billing", type: "external", description: "Subscription tiers handled through Stripe Connect.", tech: "Stripe Connect" },
        { id: "jobs", name: "Scheduled Jobs", type: "process", description: "Daily processing that is timezone-aware, with overlapping runs fixed at the source.", tech: "Queues / cron" },
        { id: "gdpr", name: "GDPR Handling", type: "process", description: "Hard delete, anonymisation and data export.", tech: "NestJS" },
        { id: "db", name: "Database", type: "data", description: "18 migrations on PostgreSQL.", tech: "PostgreSQL" }
      ],
      edges: [
        { from: "api", to: "billing" },
        { from: "api", to: "db" },
        { from: "jobs", to: "db" },
        { from: "gdpr", to: "db" }
      ],
      extendedExplainer: [
        "Cost drivers: The deployment was heading for its hosting provider's usage ceiling. I traced it to queue settings, an uptime check waking the database every minute, and overlapping scheduled jobs, and fixed each at its source instead of upgrading the plan.",
        "Missed records: Daily processing silently left out contacts and accounts because it filtered on the wrong field. I fixed the cause and verified end to end against a local database reproducing the deployed data.",
        "Repeat safety: Writes are idempotent, external calls retry with backoff, and slow work runs on queues instead of in the request path."
      ]
    },
    maidme: {
      id: "maidme",
      title: "MaidMe: Socket Server Beside a Laravel Backend",
      metric: "NestJS + Socket.io",
      description: "Home-services marketplace for providers in Norway. The live Laravel backend could not hold socket connections, so a separate NestJS socket server was added beside it instead of migrating a running product.",
      nodes: [
        { id: "client", name: "Provider and Customer Apps", type: "input", description: "Open a socket connection for live updates.", tech: "Socket.io clients" },
        { id: "socket", name: "NestJS Socket Server", type: "process", description: "Handles only live connections: real-time booking management and in-app support chat.", tech: "NestJS / Socket.io" },
        { id: "laravel", name: "Laravel Backend", type: "external", description: "Keeps the business logic and the data.", tech: "Laravel" }
      ],
      edges: [
        { from: "client", to: "socket" },
        { from: "socket", to: "laravel" }
      ],
      extendedExplainer: [
        "Why a second server: Laravel could not hold socket connections, and rewriting a running product was the riskier path.",
        "Division of work: The socket server handles live connections only. Laravel stays the source of business logic and data.",
        "Scope: Commission and payout work went on hold when the client went quiet, so it is not part of this story."
      ]
    },
    sidecar: {
      id: "sidecar",
      title: "spot-nlp-sidecar: Python Service Beside Spot",
      metric: "FastAPI | 3 endpoints",
      description: "A Python FastAPI service built to run alongside Spot, with three endpoints. Same status as Spot: never launched to users.",
      nodes: [
        { id: "pii", name: "PII Redaction", type: "process", description: "Named-entity recognition with language detection.", tech: "spaCy / langdetect" },
        { id: "outlier", name: "Outlier Scoring", type: "ai", description: "Scores records that look unusual against the rest.", tech: "scikit-learn Isolation Forest" },
        { id: "sentiment", name: "Sentiment Gating", type: "ai", description: "Uses sentence embeddings to gate on sentiment.", tech: "sentence-transformers" },
        { id: "svc", name: "FastAPI Service", type: "input", description: "Exposes the three endpoints with pydantic validation.", tech: "FastAPI / uvicorn / pydantic" }
      ],
      edges: [
        { from: "svc", to: "pii" },
        { from: "svc", to: "outlier" },
        { from: "svc", to: "sentiment" }
      ],
      extendedExplainer: [
        "Why Python: The NLP and scikit-learn libraries live in Python, so the NestJS backend calls a small service instead of reimplementing them.",
        "Privacy first: PII redaction is one of the three endpoints, so text can be cleaned before it goes anywhere else."
      ]
    }
  };

  const getIcon = (type: ArchitectureNode["type"]) => {
    switch (type) {
      case "input": return <Zap className="w-5 h-5 text-foreground" />;
      case "process": return <Server className="w-5 h-5 text-indigo-600" />;
      case "ai": return <Brain className="w-5 h-5 text-emerald-600" />;
      case "data": return <Database className="w-5 h-5 text-amber-600" />;
      case "external": return <GitFork className="w-5 h-5 text-rose-500" />;
    }
  };

  const getNodeStyles = () => "border-border bg-muted/40 text-foreground shadow-sm";

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
                ? "bg-primary border-primary text-primary-foreground shadow-sm"
                : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {flows[projId].id}
          </button>
        ))}
      </div>

      {/* Main Visual Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
        {/* Visual Graph Panel */}
        <div className="lg:col-span-2 bg-card  rounded-lg p-6 flex flex-col justify-between min-h-[400px] border border-border">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 mb-4 gap-2">
              <h4 className="font-sans font-bold text-foreground text-base sm:text-lg">{flows[activeProject].title}</h4>
              <span className="text-xs font-mono bg-foreground/10 border border-foreground/20 px-2.5 py-1 rounded text-foreground font-bold self-start sm:self-center">
                {flows[activeProject].metric}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-6 leading-relaxed">
              {flows[activeProject].description}
            </p>
          </div>

          {/* Render Flow Nodes Map */}
          <div className="flex flex-col gap-3 py-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {flows[activeProject].nodes.map((node) => (
                <div
                  key={node.id}
                  className={`border rounded-lg p-4 flex flex-col justify-between gap-2 hover:scale-[1.02] transition-transform duration-300 ${getNodeStyles()}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold opacity-60">
                      [{node.type.toUpperCase()}]
                    </span>
                    {getIcon(node.type)}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-foreground text-sm">{node.name}</h5>
                    <p className="text-[11px] text-muted-foreground leading-normal mt-1">{node.description}</p>
                  </div>
                  {node.tech && (
                    <span className="text-[10px] font-mono opacity-80 border-t border-border pt-1.5 mt-1 block">
                      ⚡ {node.tech}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-muted-foreground font-mono gap-1.5">
            <span className="flex items-center gap-1.5 self-center sm:self-auto text-foreground font-bold">
              <Zap className="w-3.5 h-3.5 text-muted-foreground animate-pulse" /> Simplified diagram
            </span>
            <span className="self-center sm:self-auto text-muted-foreground">Click a tab to switch project</span>
          </div>
        </div>

        {/* Explainers Sidebar */}
        <div className="bg-card  rounded-lg p-6 border border-border flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <BarChart2 className="w-4 h-4 text-muted-foreground" />
              <h4 className="font-sans font-bold text-foreground text-sm">Notes</h4>
            </div>

            <div className="space-y-4">
              {flows[activeProject].extendedExplainer.map((sentence, idx) => {
                const cut = sentence.indexOf(":");
                const parts = [sentence.slice(0, cut), sentence.slice(cut + 1)];
                return (
                  <div key={idx} className="space-y-1">
                    <h5 className="text-xs font-mono font-bold text-foreground">❯ {parts[0]}</h5>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed pl-3 border-l border-border">
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
