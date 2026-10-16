"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Play, RefreshCw, Terminal, CheckCircle2 } from "lucide-react";

interface ApiEndpoint {
  method: "GET" | "POST";
  path: string;
  description: string;
  summary: string;
  parameters?: { name: string; type: string; required: boolean; description: string; default?: string }[];
  requestBody?: Record<string, unknown>;
  responseBody: Record<string, unknown>;
}

export default function ApiExplorer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [inputs, setInputs] = useState<Record<string, string>>({
    name: "John Doe",
    email: "john@example.com",
    message: "Hi Omer, let's talk about a backend role."
  });
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [results, setResults] = useState<Record<number, { status: number; time: string; body: string; headers: Record<string, string> }>>({});

  const endpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/profile",
      summary: "Fetch overall developer credentials",
      description: "Returns professional summary and core tech stacks.",
      responseBody: {
        engineer: "Omer Bin Habib",
        title: "Software Engineer, backend-focused (Node.js, TypeScript, NestJS, PostgreSQL)",
        experience: "6 years",
        academics: {
          degree: "MS in Business Analytics (MSBA)",
          institution: "KSBL (final semester, graduating Dec 2026)"
        },
        focus_areas: [
          "REST APIs in NestJS on PostgreSQL",
          "Reliability: idempotent writes, retries, queues",
          "AI-assisted backend work (Claude, OpenAI, Gemini APIs)",
          "Moving toward data / analytics engineering"
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
      summary: "List featured projects",
      description: "Returns featured backend projects.",
      parameters: [
        { name: "featured", type: "boolean", required: false, description: "Filter only featured projects", default: "true" }
      ],
      responseBody: {
        count: 3,
        results: [
          {
            name: "Groops",
            segment: "Platform for organisations (Blocship)",
            stack: ["NestJS", "Lumen", "Laravel", "PostgreSQL"],
            implementation: "Backend moved from Lumen to Laravel to NestJS; Clean Architecture",
            modules: 16,
            migrations: 73,
            entities: 81,
            test_suites: 472
          },
          {
            name: "Spot",
            segment: "UK B2B workplace wellbeing SaaS",
            stack: ["NestJS", "TypeScript", "PostgreSQL", "Stripe Connect"],
            implementation: "Tiered subscription billing, GDPR data handling, timezone-aware processing. Deployed on Render, never launched to users.",
            automated_tests: 357,
            migrations: 18
          },
          {
            name: "AgencyView",
            segment: "Reporting platform for a UK SaaS founder",
            stack: ["PostgreSQL", "Scheduled pipeline"],
            implementation: "Deterministic report engine, output filtered by user role",
            report_types: 13
          }
        ]
      }
    },
    {
      method: "POST",
      path: "/api/contact",
      summary: "Dispatch a priority communication",
      description: "Mock endpoint showing request validation and a queued-job response shape.",
      requestBody: {
        name: "string",
        email: "string",
        message: "string"
      },
      responseBody: {
        success: true,
        message: "Message received and queued.",
        job_id: "bullmq_job_912f20ba8bc1"
      }
    }
  ];

  const handleInputChange = (field: string, val: string) => {
    setInputs((prev) => ({ ...prev, [field]: val }));
  };

  const handleExecute = (idx: number) => {
    setLoadingIndex(idx);

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
          queue_priority: "high"
        };
      } else {
        bodyData = endpoints[idx].responseBody;
      }

      setResults((prev) => ({
        ...prev,
        [idx]: {
          status: endpoints[idx].method === "POST" ? 201 : 200,
          time: "simulated",
          body: JSON.stringify(bodyData, null, 2),
          headers: {
            "content-type": "application/json; charset=utf-8",
            "x-powered-by": "NestJS-Mercenary-API-Starter",
            "cache-control": "public, max-age=3600",
            "connection": "keep-alive"
          }
        }
      }));
      setLoadingIndex(null);
    }, 600); // 600ms loading effect
  };

  return (
    <div className="space-y-4">
      <div className="border border-border rounded-lg overflow-hidden bg-card  font-sans">
        {/* API Title Header */}
        <div className="bg-primary px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary font-mono text-xs gap-2 text-primary-foreground">
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-primary-foreground">interactive-api-swagger</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-1.5 self-start sm:self-auto font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Base URL: <span className="text-emerald-500">localhost:3000</span>
          </div>
        </div>

        {/* Endpoints Loop */}
        <div className="divide-y divide-border">
          {endpoints.map((ep, idx) => {
            const isExpanded = expandedIndex === idx;
            const isGet = ep.method === "GET";
            const methodBg = isGet ? "bg-cyan-50 border-cyan-200 text-cyan-700" : "bg-emerald-50 border-emerald-200 text-emerald-700";
            const result = results[idx];

            return (
              <div key={idx} className="bg-card">
                {/* Expandable Title Bar */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted cursor-pointer transition-colors text-left"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${methodBg}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm text-foreground font-bold">{ep.path}</span>
                    <span className="text-xs text-muted-foreground hidden md:inline">— {ep.summary}</span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Expanded Box */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-4 border-t border-border bg-muted space-y-6">
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{ep.description}</p>

                    {/* Parameters or Inputs */}
                    {ep.parameters && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">Query Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs font-mono text-left border-collapse border border-border rounded bg-card">
                            <thead>
                              <tr className="bg-muted text-muted-foreground border-b border-border">
                                <th className="p-2 border-r border-border">Name</th>
                                <th className="p-2 border-r border-border">Type</th>
                                <th className="p-2 border-r border-border">Required</th>
                                <th className="p-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ep.parameters.map((p, pIdx) => (
                                <tr key={pIdx} className="border-b border-border">
                                  <td className="p-2 font-bold text-foreground border-r border-border">{p.name}</td>
                                  <td className="p-2 border-r border-border text-foreground font-semibold">{p.type}</td>
                                  <td className="p-2 border-r border-border text-muted-foreground font-semibold">{p.required ? "true" : "false"}</td>
                                  <td className="p-2 text-muted-foreground">{p.description} {p.default && `(default: ${p.default})`}</td>
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
                        <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">Request Parameters</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3 bg-card p-3 sm:p-4 rounded border border-border shadow-sm">
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-muted-foreground font-bold block">NAME</label>
                              <input
                                type="text"
                                value={inputs.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="w-full bg-muted border border-border rounded px-2.5 py-1.5 text-xs text-foreground font-mono outline-none focus:border-primary"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-muted-foreground font-bold block">EMAIL</label>
                              <input
                                type="email"
                                value={inputs.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full bg-muted border border-border rounded px-2.5 py-1.5 text-xs text-foreground font-mono outline-none focus:border-primary"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-mono text-muted-foreground font-bold block">MESSAGE</label>
                              <textarea
                                value={inputs.message}
                                rows={2}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                className="w-full bg-muted border border-border rounded px-2.5 py-1.5 text-xs text-foreground font-mono outline-none focus:border-primary resize-none"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-muted-foreground block font-bold">RAW JSON STRUCTURE</label>
                            <pre className="p-3 bg-muted border border-border rounded text-[10px] font-mono text-muted-foreground overflow-x-auto h-[125px] block py-4">
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
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 disabled:opacity-50 text-primary-foreground font-bold rounded font-mono text-xs cursor-pointer flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        {loadingIndex === idx ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> EXECUTING...
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-white" /> EXECUTE ENDPOINT
                          </>
                        )}
                      </button>
                      {result && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> SUCCESS • {result.time}
                        </div>
                      )}
                    </div>

                    {/* Execution Results */}
                    {result && (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-border pt-4">
                        <div className="lg:col-span-2 space-y-1.5">
                          <label className="text-[10px] font-mono text-muted-foreground block font-bold">RESPONSE BODY</label>
                          <pre className="p-4 bg-muted border border-border rounded text-xs font-mono text-foreground overflow-x-auto max-h-[300px] pl-scrollbar">
                            {result.body}
                          </pre>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-muted-foreground block font-bold">HEADERS</label>
                          <pre className="p-3 bg-muted border border-border rounded text-[10px] font-mono text-muted-foreground overflow-x-auto max-h-[300px] pl-scrollbar space-y-1">
                            {Object.entries(result.headers).map(([key, val]) => (
                              <div key={key} className="truncate">
                                <span className="text-muted-foreground font-bold">{key}:</span> {val}
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
