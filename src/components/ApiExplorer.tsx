"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Play, RefreshCw, Terminal, CheckCircle2 } from "lucide-react";

interface ApiEndpoint {
  method: "GET" | "POST";
  path: string;
  description: string;
  summary: string;
  parameters?: { name: string; type: string; required: boolean; description: string; default?: string }[];
  requestBody?: Record<string, any>;
  responseBody: Record<string, any>;
}

export default function ApiExplorer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [inputs, setInputs] = useState<Record<string, string>>({
    name: "John Doe",
    email: "john@example.com",
    message: "Hi Omer, let's build an AI pipeline."
  });
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [results, setResults] = useState<Record<number, { status: number; time: string; body: string; headers: Record<string, string> }>>({});

  const endpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/profile",
      summary: "Fetch overall developer credentials",
      description: "Returns professional summary, core tech stacks, and active growth parameters.",
      responseBody: {
        engineer: "Omer Bin Habib",
        title: "Senior Backend Engineer & Growth Architect",
        experience: "5+ Years",
        academics: {
          degree: "MS in Business Analytics (MSBA)",
          institution: "KSBL (expected 2027)",
          focus: "Decision science, financial modeling, pricing frameworks"
        },
        focus_areas: [
          "Scalable NestJS Backends",
          "AI/LLM pipelines (Claude/OpenAI)",
          "High-throughput queues (BullMQ/Redis)",
          "Hybrid database lookups (pgvector/Postgres)"
        ],
        contact: {
          email: "omer.habib62@gmail.com",
          linkedin: "https://www.linkedin.com/in/omer-bin-habib/",
          github: "https://github.com/omerhabib62"
        }
      }
    },
    {
      method: "GET",
      path: "/api/projects",
      summary: "Query high-impact deployments database",
      description: "Queries the complete portfolio database of production-grade B2B SaaS backends.",
      parameters: [
        { name: "featured", type: "boolean", required: false, description: "Filter only featured projects", default: "true" }
      ],
      responseBody: {
        count: 3,
        results: [
          {
            name: "Groops",
            segment: "B2B Social & Community Monetization",
            stack: ["NestJS", "PostgreSQL", "Upstash Redis", "Stripe Connect", "BullMQ"],
            performance_gain: "pgvector hybrid search reduced database load by 90%",
            modules: 13,
            migrations: 73
          },
          {
            name: "Spot",
            segment: "AI Mental Health Platform",
            stack: ["NestJS", "Claude API", "NeverBounce", "Postmark", "Jest"],
            performance_gain: "99.8% uptime clinical risk alert pipeline with EWMA analysis",
            tests_coverage: "357 automated Jest tests"
          },
          {
            name: "Audit-this-engine",
            segment: "Agency Code-Intelligence Engine",
            stack: ["NestJS", "TypeORM", "BullMQ", "Prompt-Caching", "Claude API"],
            performance_gain: "7 static analysis tool runners fanned out in parallel queues"
          }
        ]
      }
    },
    {
      method: "POST",
      path: "/api/contact",
      summary: "Dispatch a priority communication",
      description: "Validates email structures and queues contact signals directly in Omer's backend system.",
      requestBody: {
        name: "string",
        email: "string",
        message: "string"
      },
      responseBody: {
        success: true,
        message: "Signal received and queued successfully.",
        job_id: "bullmq_job_912f20ba8bc1",
        estimated_response_hours: 12
      }
    }
  ];

  const handleInputChange = (field: string, val: string) => {
    setInputs((prev) => ({ ...prev, [field]: val }));
  };

  const handleExecute = (idx: number) => {
    setLoadingIndex(idx);
    const latency = Math.floor(Math.random() * 25) + 8; // Simulated fast response between 8ms and 33ms

    setTimeout(() => {
      let bodyData = {};
      if (endpoints[idx].method === "POST") {
        bodyData = {
          success: true,
          message: `Thank you ${inputs.name}! Contact request ingested successfully.`,
          payload_received: {
            name: inputs.name,
            email: inputs.email,
            message: inputs.message
          },
          job_id: `bullmq_job_${Math.random().toString(16).slice(2, 14)}`,
          queue_priority: "high",
          ping_ms: latency
        };
      } else {
        bodyData = endpoints[idx].responseBody;
      }

      setResults((prev) => ({
        ...prev,
        [idx]: {
          status: endpoints[idx].method === "POST" ? 201 : 200,
          time: `${latency}ms`,
          body: JSON.stringify(bodyData, null, 2),
          headers: {
            "content-type": "application/json; charset=utf-8",
            "x-powered-by": "NestJS-Mercenary-API-Starter",
            "cache-control": "public, max-age=3600",
            "x-response-time": `${latency}ms`,
            "connection": "keep-alive"
          }
        }
      }));
      setLoadingIndex(null);
    }, 600); // 600ms loading effect
  };

  return (
    <div className="space-y-4">
      <div className="border border-gray-800 rounded-lg overflow-hidden glassmorphism">
        {/* API Title Header */}
        <div className="bg-gray-950/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 font-mono text-xs gap-2">
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Terminal className="w-4 h-4 text-cyber-emerald" />
            <span className="font-bold text-gray-400">interactive-api-swagger v2.1.0</span>
          </div>
          <div className="text-gray-500 flex items-center gap-1.5 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" /> Base URL: <span className="text-cyber-emerald">localhost:3000</span>
          </div>
        </div>

        {/* Endpoints Loop */}
        <div className="divide-y divide-gray-900">
          {endpoints.map((ep, idx) => {
            const isExpanded = expandedIndex === idx;
            const isGet = ep.method === "GET";
            const methodBg = isGet ? "bg-cyan-500/10 border-cyan-500/30 text-cyber-cyan" : "bg-emerald-500/10 border-emerald-500/30 text-cyber-emerald";
            const result = results[idx];

            return (
              <div key={idx} className="bg-black/25">
                {/* Expandable Title Bar */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full px-4 py-4 flex items-center justify-between hover:bg-white/2 cursor-pointer transition-colors text-left"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${methodBg}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm text-white font-bold">{ep.path}</span>
                    <span className="text-xs text-gray-400 hidden md:inline">— {ep.summary}</span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Expanded Box */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-4 border-t border-gray-900/60 bg-black/40 space-y-6">
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">{ep.description}</p>

                    {/* Parameters or Inputs */}
                    {ep.parameters && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Query Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs font-mono text-left border-collapse border border-gray-900 rounded bg-black/30">
                            <thead>
                              <tr className="bg-gray-950/40 text-gray-400 border-b border-gray-900">
                                <th className="p-2 border-r border-gray-900">Name</th>
                                <th className="p-2 border-r border-gray-900">Type</th>
                                <th className="p-2 border-r border-gray-900">Required</th>
                                <th className="p-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ep.parameters.map((p, pIdx) => (
                                <tr key={pIdx} className="border-b border-gray-900/50">
                                  <td className="p-2 font-bold text-white border-r border-gray-900">{p.name}</td>
                                  <td className="p-2 border-r border-gray-900 text-cyber-cyan">{p.type}</td>
                                  <td className="p-2 border-r border-gray-900 text-yellow-500">{p.required ? "true" : "false"}</td>
                                  <td className="p-2 text-gray-400">{p.description} {p.default && `(default: ${p.default})`}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* POST Request Body Inputs */}
                    {ep.method === "POST" && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Request Parameters</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3 bg-black/30 p-3 sm:p-4 rounded border border-gray-900">
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-cyber-cyan font-bold block">NAME</label>
                              <input
                                type="text"
                                value={inputs.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="w-full bg-gray-950 border border-gray-800 rounded px-2.5 py-1.5 text-xs text-white font-mono outline-none focus:border-cyber-cyan"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-cyber-cyan font-bold block">EMAIL</label>
                              <input
                                type="email"
                                value={inputs.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full bg-gray-950 border border-gray-800 rounded px-2.5 py-1.5 text-xs text-white font-mono outline-none focus:border-cyber-cyan"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-cyber-cyan font-bold block">MESSAGE</label>
                              <textarea
                                value={inputs.message}
                                rows={2}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                className="w-full bg-gray-950 border border-gray-800 rounded px-2.5 py-1.5 text-xs text-white font-mono outline-none focus:border-cyber-cyan resize-none"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 block font-bold">RAW JSON STRUCTURE</label>
                            <pre className="p-3 bg-gray-950 border border-gray-900 rounded text-[10px] font-mono text-gray-500 overflow-x-auto h-[125px] block py-4">
{`{
  "name": "${inputs.name}",
  "email": "${inputs.email}",
  "message": "${inputs.message.slice(0, 30)}..."
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleExecute(idx)}
                        disabled={loadingIndex === idx}
                        className="px-4 py-2 bg-cyber-emerald hover:bg-emerald-600 active:scale-95 disabled:opacity-50 text-black font-semibold rounded font-mono text-xs cursor-pointer flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      >
                        {loadingIndex === idx ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> EXECUTING...
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-black" /> EXECUTE ENDPOINT
                          </>
                        )}
                      </button>
                      {result && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-emerald">
                          <CheckCircle2 className="w-4 h-4" /> SUCCESS • {result.time}
                        </div>
                      )}
                    </div>

                    {/* Execution Results */}
                    {result && (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-gray-900/80 pt-4">
                        <div className="lg:col-span-2 space-y-1.5">
                          <label className="text-[10px] font-mono text-gray-400 block font-bold">RESPONSE BODY</label>
                          <pre className="p-4 bg-gray-950 border border-gray-800 rounded text-xs font-mono text-cyber-cyan overflow-x-auto max-h-[300px] cyber-scrollbar">
                            {result.body}
                          </pre>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-gray-400 block font-bold">HEADERS</label>
                          <pre className="p-3 bg-gray-950 border border-gray-800 rounded text-[10px] font-mono text-gray-500 overflow-x-auto max-h-[300px] cyber-scrollbar space-y-1">
                            {Object.entries(result.headers).map(([key, val]) => (
                              <div key={key} className="truncate">
                                <span className="text-gray-400">{key}:</span> {val}
                              </div>
                            ))}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
