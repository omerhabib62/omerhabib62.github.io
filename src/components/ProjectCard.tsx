import { ExternalLink, Cpu, CheckCircle, FileText } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  highlights?: string[];
}

export default function ProjectCard({
  title,
  description,
  tech,
  metrics,
  githubUrl,
  liveUrl,
  docsUrl,
  highlights
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col justify-between hover:border-pl-purple/40 hover:scale-[1.01] transition-all duration-300 group pl-card-shadow pl-card-shadow-hover pl-top-ribbon pt-7">
      <div className="space-y-4">
        {/* Title & Status */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-slate-800 text-base group-hover:text-pl-purple transition-colors">
              {title}
            </h4>
            <span className="inline-block text-[10px] font-mono font-bold bg-pl-purple/10 border border-pl-purple/20 px-2 py-0.5 rounded text-pl-purple shadow-sm">
              {metrics}
            </span>
          </div>
          <Cpu className="w-5 h-5 text-slate-400 group-hover:text-pl-purple transition-colors" />
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          {description}
        </p>

        {/* Bullet Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-sans">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stacks & Links */}
      <div className="space-y-4 pt-4 border-t border-gray-100 mt-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono font-semibold bg-slate-100 border border-gray-200 text-slate-600 px-2 py-0.5 rounded hover:text-pl-purple transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-pl-purple transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              CODEBASE
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pl-purple hover:text-pl-magenta font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO
            </a>
          )}
          {docsUrl && (
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-pl-purple transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> ARCHITECTURE DOC
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
