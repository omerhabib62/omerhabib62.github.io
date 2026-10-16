"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Maximize2, Minimize2, Play, Circle } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function DevConsole() {
  const welcomeMessage = (
    <div className="space-y-1">
      <p className="text-foreground font-bold">Omer Bin Habib - Developer Console v1.0.0</p>
      <p className="text-muted-foreground text-sm">Type <span className="text-emerald-600 font-semibold">help</span> to view available system commands or <span className="text-foreground font-semibold">curl -X GET /api/stats</span> to query developer metrics.</p>
      <div className="border-t border-border my-2" />
    </div>
  );

  const [history, setHistory] = useState<HistoryItem[]>(() => [{ command: "system_init", output: welcomeMessage }]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    if (trimmedCmd === "help") {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground py-1">
          <div><span className="text-foreground font-bold">help</span> - Display list of console commands</div>
          <div><span className="text-emerald-600 font-bold">skills</span> - Print toolkit & stacks</div>
          <div><span className="text-foreground font-bold">projects</span> - List key projects</div>
          <div><span className="text-emerald-600 font-bold">experience</span> - Fetch engineering career history</div>
          <div><span className="text-indigo-600 font-bold">education</span> - Query degrees & certifications</div>
          <div><span className="text-indigo-600 font-bold">curl -X GET /api/stats</span> - Print developer profile as JSON</div>
          <div><span className="text-red-500 font-bold">sudo rm -rf /</span> - Attempt high-level core wipe</div>
          <div><span className="text-muted-foreground font-bold">clear</span> - Purge terminal scrollback history</div>
        </div>
      );
    } else if (trimmedCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (trimmedCmd === "skills") {
      response = (
        <div className="space-y-2 text-sm text-foreground font-mono">
          <p className="text-emerald-600 font-bold font-sans"># Technical Stacks Matrix</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-border p-3 rounded bg-card shadow-sm">
            <div>
              <p className="text-foreground font-bold">{"// Core Backend"}</p>
              <p className="text-xs text-muted-foreground">NestJS, Node.js, TypeScript, Express, PHP (Laravel, Lumen), Python (FastAPI)</p>
            </div>
            <div>
              <p className="text-emerald-600 font-bold">{"// Data & Queues"}</p>
              <p className="text-xs text-muted-foreground">PostgreSQL, MySQL, Redis, BullMQ, TypeORM, SQLite, pgvector</p>
            </div>
            <div>
              <p className="text-indigo-600 font-bold">{"// AI & LLM"}</p>
              <p className="text-xs text-muted-foreground">Claude, OpenAI and Gemini APIs, LangGraph, Langfuse, Zod-validated output</p>
            </div>
            <div>
              <p className="text-amber-600 font-bold">{"// DevOps & Testing"}</p>
              <p className="text-xs text-muted-foreground">Docker, nginx, GitHub Actions, Sentry, Pino, Jest, Playwright, AWS (Lambda, RDS, S3, EC2)</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "projects") {
      response = (
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="text-foreground font-bold font-sans text-base"># Key Projects</p>
          <div className="space-y-3">
            <div className="border-l-2 border-primary pl-3">
              <p className="font-bold text-foreground">1. Groops (Blocship)</p>
              <p className="text-xs text-muted-foreground">NestJS on Clean Architecture: 16 modules, 73 migrations, 81 entities, 472 test suites. Backend moved from Lumen to Laravel to NestJS.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-3">
              <p className="font-bold text-foreground">2. Spot (independent)</p>
              <p className="text-xs text-muted-foreground">UK workplace wellbeing SaaS: Stripe Connect tiered billing, GDPR handling, 357 tests, 18 migrations. Deployed on Render, never launched to users.</p>
            </div>
            <div className="border-l-2 border-indigo-500 pl-3">
              <p className="font-bold text-foreground">3. MaidMe (Blocship)</p>
              <p className="text-xs text-muted-foreground">NestJS socket server added beside a live Laravel backend for real-time booking and support chat.</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "experience") {
      response = (
        <div className="space-y-2 text-sm text-muted-foreground font-mono">
          <p className="text-indigo-600 font-bold font-sans"># Career History</p>
          <div className="space-y-2">
            <div>
              <p className="text-foreground font-bold">[Jan 2026 - Present] Independent Consultant</p>
              <p className="text-xs text-muted-foreground">Backend engineer for UK SaaS clients (Spot, AgencyView, spot-nlp-sidecar), plus client work in Denmark and Pakistan.</p>
            </div>
            <div>
              <p className="text-foreground font-bold">[May 2023 - Dec 2025] Software Engineer | Blocship</p>
              <p className="text-xs text-muted-foreground">Backend across nine products in a team of six Flutter and frontend developers plus one QA; technically the only backend engineer.</p>
            </div>
            <div>
              <p className="text-foreground font-bold">[Apr 2021 - May 2023] Software Engineer | Sybrid (Pvt) Ltd</p>
              <p className="text-xs text-muted-foreground">FiTE, a bilingual Laravel hiring portal with four user groups; MySQL stored procedures for profile scoring.</p>
            </div>
            <div>
              <p className="text-foreground font-bold">[Sep 2020 - Apr 2021] Associate Developer | TAFSOL Technologies</p>
              <p className="text-xs text-muted-foreground">Athletes Guide e-store and platform; timesheet management app.</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "education") {
      response = (
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-foreground font-bold"># Education</p>
          <p className="text-foreground font-semibold">MS in Business Analytics (MSBA) <span className="text-muted-foreground font-normal">| KSBL (final semester, graduating Dec 2026)</span></p>
          <p className="text-xs text-muted-foreground pl-4">- CGPA 3.12 on a 4.0 scale after the 2nd semester.</p>
          <p className="text-foreground font-semibold">BSc Computer Science <span className="text-muted-foreground font-normal">| SZABIST, 2016-2020</span></p>

          <p className="text-foreground font-bold mt-2"># Certifications</p>
          <div className="text-xs text-muted-foreground space-y-1 pl-4 font-mono">
            <div>• Microsoft Power BI</div>
            <div>• Generative AI with Large Language Models (DeepLearning.AI with AWS)</div>
            <div>• Introduction to Cloud Computing (IBM, 2025)</div>
            <div>• Git and GitHub Essentials (IBM, 2025)</div>
            <div>• Building RESTful APIs in Laravel (LinkedIn Learning, 2022)</div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "curl -x get /api/stats") {
      response = (
        <pre className="text-foreground text-xs font-mono p-2.5 rounded bg-muted overflow-x-auto border border-border pl-scrollbar">
{`{
  "developer": "Omer Bin Habib",
  "role": "Software Engineer, backend-focused (Node.js, TypeScript, NestJS, PostgreSQL)",
  "years_of_experience": 6,
  "status": "independent consultant, open to work",
  "numbers": {
    "spot_automated_tests": 357,
    "groops_modules": 16,
    "groops_migrations": 73,
    "agencyview_report_types": 13
  },
  "education": "MSBA at KSBL, graduating Dec 2026",
  "location": "Karachi, Pakistan (remote, or relocation after Dec 2026)"
}`}
        </pre>
      );
    } else if (trimmedCmd.startsWith("sudo ")) {
      response = (
        <div className="space-y-2 text-sm text-red-600 font-mono font-bold animate-pulse">
          <p>⚠️ CRITICAL WARNING: CORE SYSTEM ACCESS DETECTED</p>
          <p>[!!!] ATTEMPTING SYSTEM DESTRUCTION: sudo rm -rf /</p>
          <p className="text-yellow-600">... Wait! Error intercept. Firewalls fully active.</p>
          <p className="text-emerald-600">Nice try, operator! Access denied. Nothing was deleted.</p>
        </div>
      );
    } else if (trimmedCmd === "") {
      response = null;
    } else {
      response = (
        <p className="text-red-500 text-sm">
          Command not found: &quot;{cmd}&quot;. Type <span className="text-emerald-600 font-semibold font-mono">help</span> to view all commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-card border-2 border-primary hover:bg-muted px-4 py-2 rounded-md shadow-lg text-foreground cursor-pointer transition-all duration-300 font-mono text-xs font-bold"
      >
        <Terminal className="w-4 h-4 animate-pulse text-foreground" />
        Restore Developer Console
      </button>
    );
  }

  return (
    <div 
      onClick={handleTerminalClick}
      className={`bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 shadow-xl flex flex-col font-mono text-left 
        ${isMaximized ? "fixed inset-4 z-50" : "h-[450px] w-full max-w-4xl mx-auto"}`}
    >
      {/* Terminal Title Bar */}
      <div className="bg-primary px-4 py-3 flex items-center justify-between border-b border-primary select-none text-primary-foreground">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-primary-foreground">omer@portfolio:~</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button 
              title="Minimize"
              onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Circle className="w-3.5 h-3.5 fill-yellow-500 text-yellow-600" />
            </button>
            <button 
              title={isMaximized ? "Restore Size" : "Maximize"}
              onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Circle className="w-3.5 h-3.5 fill-green-500 text-green-600" />
            </button>
            <button 
              title="Close"
              onClick={(e) => { e.stopPropagation(); setHistory([{ command: "system_restart", output: welcomeMessage }]); }}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Circle className="w-3.5 h-3.5 fill-red-500 text-red-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Terminal Output Panel */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 pl-scrollbar bg-muted relative text-foreground"
      >
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_98%,rgba(0,0,0,0.03)_98%)] bg-[length:100%_12px] pointer-events-none" />
        
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.command !== "system_init" && item.command !== "system_restart" && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-foreground font-bold">visitor@terminal</span>
                <span className="text-muted-foreground">❯</span>
                <span className="text-foreground font-bold">{item.command}</span>
              </div>
            )}
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="bg-muted p-3 border-t border-border flex items-center gap-2 text-xs sm:text-sm">
        <span className="text-foreground font-bold hidden sm:inline">omer@backend-terminal</span>
        <span className="text-foreground font-bold sm:hidden">omer</span>
        <span className="text-muted-foreground font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a command (e.g., "help", "skills", "curl -X GET /api/stats")...'
          className="flex-1 bg-transparent border-none outline-none text-foreground font-mono placeholder-muted-foreground text-sm focus:ring-0 p-0"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
        />
        <button 
          onClick={() => handleCommand(input)}
          className="text-foreground hover:text-foreground cursor-pointer transition-colors p-1"
          title="Run Command"
        >
          <Play className="w-4 h-4 fill-foreground/10" />
        </button>
      </div>
    </div>
  );
}
