import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
}

export default function Timeline() {
  const experiences: TimelineItem[] = [
    {
      role: "Backend Engineer — Independent Consultant",
      company: "Independent Consultant (UK & Global Remote)",
      location: "Karachi (Hybrid) | London (Remote)",
      period: "Jan 2026 – Present",
      description: [
        "Sole backend architect reporting directly to Founders, leading implementation and database configurations across three UK B2B SaaS startups.",
        "Built Spot (AI Employee Mental Health Platform): engineered a clinical risk-scoring EWMA analysis pipeline, multi-LLM model routing gate (Claude Haiku to Sonnet fallback), Stripe seat-based prorated billing, and a multi-header CSV parsing ETL.",
        "Continued on Groops, first built at Blocship: ACID ledger financial splits via Stripe Connect, BullMQ queue webhook ingestion, and pgvector + Redis hybrid search in place of scan-based text queries.",
        "Developed Audit-this-engine (Agency Code-Intelligence): built a 7-tool static analysis fan-out process, and calculated full TAM/SAM market modeling using MSBA frameworks."
      ],
      skills: ["NestJS", "TypeScript", "Python", "BullMQ", "Redis", "pgvector", "Stripe Connect", "Claude API", "Jest", "Docker"]
    },
    {
      role: "Software Engineer",
      company: "Blocship",
      location: "Karachi, Pakistan",
      period: "May 2023 – Dec 2025",
      description: [
        "Backend development across six production products in Node.js (Express, NestJS) and PHP (Laravel, Lumen), working in a cross-functional team with frontend, product, design and QA.",
        "MaidMe (home services marketplace, Norway): the Laravel backend was already live and could not hold socket connections, so rather than rewrite a running product I added a dedicated NestJS socket server beside it for real-time booking and in-app support chat.",
        "Groops (social platform for organisations): NestJS alongside a Lumen service, covering group membership and engagement — the project I later continued as an independent consultant.",
        "QR-code points trading for payments (NestJS): point issuance, redemption and transfer written transactionally. Disgo (Express): streaming rooms with a social feed. Hubfiit and Apna Khata (Laravel): fitness tracking and an online produce marketplace.",
        "Across all six: REST API design documented with Swagger, JWT authentication and input validation, MySQL and PostgreSQL data modelling and migrations, code review, and production support."
      ],
      skills: ["Node.js", "ExpressJS", "NestJS", "Laravel", "Lumen", "Socket.io", "Redis", "PostgreSQL", "MySQL", "Swagger", "TypeORM"]
    },
    {
      role: "Software Engineer",
      company: "Sybrid (Pvt) Ltd (A Lakson Group Company)",
      location: "Karachi, Pakistan",
      period: "April 2021 – May 2023",
      description: [
        "Led requirements and database schemas for FiTE, a cross-border (Japan-Pakistan) multi-persona recruitment ecosystem, ensuring full compliance with OWASP secure coding procedures.",
        "Developed internal resource administration and task-backlog dashboards to automate resource distribution pipelines across multiple client verticals.",
        "Built secure multilingual APIs utilizing LAMP stack with strict rate limiting rules."
      ],
      skills: ["PHP", "Laravel", "MySQL", "AWS S3", "Docker", "REST APIs", "OWASP Security"]
    },
    {
      role: "Associate Developer",
      company: "TAFSOL Technologies (Pvt) Ltd",
      location: "Karachi, Pakistan",
      period: "Sept 2020 – April 2021",
      description: [
        "Integrated multi-channel payment gateways and developed dynamic content builders in custom PHP applications.",
        "Recognized as Employee of the Month (October 2020) for outstanding product delivery and API integrations."
      ],
      skills: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "API Integrations"]
    }
  ];

  return (
    <div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-8 font-sans">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative pl-6 md:pl-8 group">
          {/* Glowing Anchor Point */}
          <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300 group-hover:border-pl-purple group-hover:bg-pl-purple/15 group-hover:shadow-[0_0_8px_rgba(56,0,60,0.4)] transition-all duration-300" />

          {/* Time Tag */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1 font-bold">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {exp.period}
            </span>
            <span className="flex items-center gap-1 font-bold">
              <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
            </span>
          </div>

          {/* Core Content */}
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-slate-850 text-base group-hover:text-pl-purple transition-colors">
                {exp.role}
              </h4>
              <p className="text-xs text-pl-purple font-mono font-bold">
                {exp.company}
              </p>
            </div>

            {/* List Achievements */}
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-none pl-0">
              {exp.description.map((bullet, bIdx) => (
                <li key={bIdx} className="relative pl-4">
                  <span className="absolute left-0 text-pl-magenta font-bold">›</span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Skill Chips */}
            {exp.skills && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-mono bg-slate-100 border border-gray-200 text-slate-500 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
