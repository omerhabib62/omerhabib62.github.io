import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-gray-950/60 py-10 font-mono text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-bold">
            <Cpu className="w-4 h-4 text-cyber-cyan" />
            <span>omerhabib<span className="text-cyber-cyan">.io</span></span>
          </div>
          <p className="text-gray-600 text-[10px]">
            Engineered on Next.js 16 + Tailwind CSS v4. Fully static-optimized.
          </p>
        </div>

        {/* System Telemetry & Status */}
        <div className="flex items-center gap-2 bg-gray-950 px-3 py-1.5 rounded border border-gray-900 text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
          <span className="text-gray-400">System Telemetry:</span>
          <span className="text-cyber-emerald font-bold">100% Operational</span>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/omerhabib62" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/omer-bin-habib/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="https://medium.com/@omer.habib" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="Medium"
            >
              <span className="font-sans font-bold text-xs hover:text-white transition-colors">M</span>
            </a>
          </div>
          <p className="text-[10px] text-gray-600">
            © {new Date().getFullYear()} Omer Bin Habib. All systems reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
