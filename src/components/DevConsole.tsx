"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Maximize2, Minimize2, Play, Circle } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function DevConsole() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const welcomeMessage = (
    <div className="space-y-1">
      <p className="text-pl-purple font-bold">Omer Bin Habib - Senior Systems Console v1.0.0</p>
      <p className="text-slate-600 text-sm">Type <span className="text-emerald-600 font-semibold">help</span> to view available system commands or <span className="text-pl-purple font-semibold">curl -X GET /api/stats</span> to query developer metrics.</p>
      <div className="border-t border-gray-200 my-2" />
    </div>
  );

  useEffect(() => {
    setHistory([{ command: "system_init", output: welcomeMessage }]);
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700 py-1">
          <div><span className="text-pl-purple font-bold">help</span> - Display list of console commands</div>
          <div><span className="text-emerald-600 font-bold">skills</span> - Print senior toolkit & stacks</div>
          <div><span className="text-pl-purple font-bold">projects</span> - List high-impact SaaS deployments</div>
          <div><span className="text-emerald-600 font-bold">experience</span> - Fetch engineering career history</div>
          <div><span className="text-indigo-600 font-bold">education</span> - Query degrees & certifications</div>
          <div><span className="text-indigo-600 font-bold">curl -X GET /api/stats</span> - Print live developer JSON metrics</div>
          <div><span className="text-red-500 font-bold">sudo rm -rf /</span> - Attempt high-level core wipe</div>
          <div><span className="text-slate-500 font-bold">clear</span> - Purge terminal scrollback history</div>
        </div>
      );
    } else if (trimmedCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (trimmedCmd === "skills") {
      response = (
        <div className="space-y-2 text-sm text-slate-800 font-mono">
          <p className="text-emerald-600 font-bold font-sans"># Technical Stacks Matrix</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 p-3 rounded bg-white shadow-sm">
            <div>
              <p className="text-pl-purple font-bold">// Core Backend</p>
              <p className="text-xs text-slate-600">NestJS (Clean Architecture), Node.js, TypeScript, Python, Laravel, ExpressJS</p>
            </div>
            <div>
              <p className="text-emerald-600 font-bold">// Data & Pipelines</p>
              <p className="text-xs text-slate-600">PostgreSQL (daily), pgvector (hybrid search), Redis (Upstash, BullMQ job queues), TypeORM, MySQL, SQLite</p>
            </div>
            <div>
              <p className="text-indigo-600 font-bold">// AI & LLM Systems</p>
              <p className="text-xs text-slate-600">Claude/OpenAI APIs, LangGraph, DSPy, RAG pipelines, Langfuse observability</p>
            </div>
            <div>
              <p className="text-amber-600 font-bold">// DevOps & Cloud</p>
              <p className="text-xs text-slate-600">AWS (EC2, RDS, S3), Docker, GitHub Actions CI/CD, Sentry, Prometheus, Grafana</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "projects") {
      response = (
        <div className="space-y-3 text-sm text-slate-700">
          <p className="text-pl-purple font-bold font-sans text-base"># Key Deployments & Impact</p>
          <div className="space-y-3">
            <div className="border-l-2 border-pl-purple pl-3">
              <p className="font-bold text-slate-900">1. Groops — Community Monetization Backend</p>
              <p className="text-xs text-slate-500">Stripe Connect financial ledgers, BullMQ/Redis webhook queues, pgvector hybrid search reducing DB load by <span className="text-emerald-600 font-semibold">90%</span>.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-3">
              <p className="font-bold text-slate-900">2. Spot — AI Mental Health Platform</p>
              <p className="text-xs text-slate-500">6 modules, 357 Jest tests, EWMA risk scoring pipeline, tiered LLM model routing, CSV parser for 20+ headers.</p>
            </div>
            <div className="border-l-2 border-indigo-500 pl-3">
              <p className="font-bold text-slate-900">3. Audit-this-engine — Agency Code Intelligence Platform</p>
              <p className="text-xs text-slate-500">7 static-analysis engines, BullMQ fan-out/fan-in, prompt caching, full financial market analysis (TAM/SAM/SOM).</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "experience") {
      response = (
        <div className="space-y-2 text-sm text-slate-700 font-mono">
          <p className="text-indigo-600 font-bold font-sans"># Carrier Pipeline Logs</p>
          <div className="space-y-2">
            <div>
              <p className="text-slate-900 font-bold">[Jan 2026 - Present] Senior Engineer & Consultant (Independent)</p>
              <p className="text-xs text-slate-500">Designing architecture and AI/data pipelines for UK-based SaaS startups (Spot, Groops, Audit-this).</p>
            </div>
            <div>
              <p className="text-slate-900 font-bold">[May 2023 - Dec 2025] Software Engineer | Blocship</p>
              <p className="text-xs text-slate-500">SLO definition, real-time commission engine optimization for 10K+ users, Socket.io + Redis integration.</p>
            </div>
            <div>
              <p className="text-slate-900 font-bold">[Apr 2021 - May 2023] Software Engineer | Sybrid (Pvt) Ltd</p>
              <p className="text-xs text-slate-500">Led multi-persona requirements (FiTE, recruitment platform), customized admin dashboards.</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "education") {
      response = (
        <div className="space-y-2 text-sm text-slate-700">
          <p className="text-pl-purple font-bold"># Education Registry</p>
          <p className="text-slate-900 font-semibold">MS in Business Analytics (MSBA) <span className="text-slate-500 font-normal">| KSBL (Expected: 2027)</span></p>
          <p className="text-xs text-emerald-600 pl-4">- Focusing on financial modeling, willingness-to-pay frameworks, and decision-science pipelines.</p>
          <p className="text-slate-900 font-semibold">BS in Computer Science (BSCS) <span className="text-slate-500 font-normal">| SZABIST (Graduated: 2020)</span></p>
          
          <p className="text-pl-purple font-bold mt-2"># Selected Certifications</p>
          <div className="text-xs text-slate-500 space-y-1 pl-4 font-mono">
            <div>• IBM Cloud Computing (2025) - <a href="https://www.coursera.org/account/accomplishments/verify/EL9NUHQT2FZF" target="_blank" rel="noopener noreferrer" className="text-pl-purple font-semibold hover:underline">Verify</a></div>
            <div>• IBM Software Engineering (2025) - <a href="https://www.coursera.org/account/accomplishments/verify/JHB51DAZGCT6" target="_blank" rel="noopener noreferrer" className="text-pl-purple font-semibold hover:underline">Verify</a></div>
            <div>• NestJS / Laravel APIs & PHP Secure Coding - LinkedIn</div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "curl -x get /api/stats") {
      response = (
        <pre className="text-slate-800 text-xs font-mono p-2.5 rounded bg-slate-100 overflow-x-auto border border-gray-200 pl-scrollbar">
{`{
  "developer": "Omer Bin Habib",
  "role": "Senior Backend Engineer / Growth Architect",
  "status": "active_consulting",
  "metrics": {
    "years_of_experience": 6.2,
    "primary_stack": ["NestJS", "TypeScript", "Python", "PostgreSQL", "Redis"],
    "performance_milestones": {
      "groops_search_reduction_pct": 90.0,
      "spot_backend_test_coverage_count": 357,
      "messaging_sync_target": "<1ms"
    },
    "academic_integration": {
      "degree": "MSBA @ KSBL",
      "specialization": "Decision-Science & Financial Sizing"
    },
    "security_alignment": "OWASP-compliant",
    "availability": "Remote / UK & GCC timezone compatible"
  },
  "uptime_status": "100% Core Operational"
}`}
        </pre>
      );
    } else if (trimmedCmd.startsWith("sudo ")) {
      response = (
        <div className="space-y-2 text-sm text-red-600 font-mono font-bold animate-pulse">
          <p>⚠️ CRITICAL WARNING: CORE SYSTEM ACCESS DETECTED</p>
          <p>[!!!] ATTEMPTING SYSTEM DESTRUCTION: sudo rm -rf /</p>
          <p className="pl-4 text-slate-800">Progress: [||||||||||||||||||||||||||||||] 100%</p>
          <p className="text-yellow-600">... Wait! Error intercept. Firewalls fully active.</p>
          <p className="text-emerald-600">Nice try, operator! Access denied. Resume preserved safely on PostgreSQL cloud database.</p>
        </div>
      );
    } else if (trimmedCmd === "") {
      response = null;
    } else {
      response = (
        <p className="text-red-500 text-sm">
          Command not found: "{cmd}". Type <span className="text-emerald-600 font-semibold font-mono">help</span> to view all commands.
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
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white border-2 border-pl-purple hover:bg-slate-50 px-4 py-2 rounded-md shadow-lg text-pl-purple cursor-pointer transition-all duration-300 font-mono text-xs font-bold"
      >
        <Terminal className="w-4 h-4 animate-pulse text-pl-purple" />
        Restore Developer Console
      </button>
    );
  }

  return (
    <div 
      onClick={handleTerminalClick}
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 shadow-xl flex flex-col font-mono text-left 
        ${isMaximized ? "fixed inset-4 z-50" : "h-[450px] w-full max-w-4xl mx-auto"}`}
    >
      {/* Terminal Title Bar */}
      <div className="bg-pl-purple px-4 py-3 flex items-center justify-between border-b border-pl-purple select-none text-white">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-pl-lime" />
          <span className="text-xs font-bold text-slate-100">terminal@omer-habib-backend:~</span>
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
        className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 pl-scrollbar bg-slate-50 relative text-slate-800"
      >
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_98%,rgba(0,0,0,0.03)_98%)] bg-[length:100%_12px] pointer-events-none" />
        
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.command !== "system_init" && item.command !== "system_restart" && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-pl-purple font-bold">visitor@terminal</span>
                <span className="text-slate-400">❯</span>
                <span className="text-slate-900 font-bold">{item.command}</span>
              </div>
            )}
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="bg-slate-100 p-3 border-t border-gray-200 flex items-center gap-2 text-xs sm:text-sm">
        <span className="text-pl-purple font-bold hidden sm:inline">omer@backend-terminal</span>
        <span className="text-pl-purple font-bold sm:hidden">omer</span>
        <span className="text-pl-magenta font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a command (e.g., "help", "skills", "curl -X GET /api/stats")...'
          className="flex-1 bg-transparent border-none outline-none text-slate-900 font-mono placeholder-slate-400 text-sm focus:ring-0 p-0"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
        />
        <button 
          onClick={() => handleCommand(input)}
          className="text-pl-purple hover:text-pl-magenta cursor-pointer transition-colors p-1"
          title="Run Command"
        >
          <Play className="w-4 h-4 fill-pl-purple/10" />
        </button>
      </div>
    </div>
  );
}
