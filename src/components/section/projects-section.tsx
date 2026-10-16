import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Projects</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Backend systems and own projects</h2>
          <p className="text-muted-foreground text-balance text-center">
            Client work, work from my roles, and my own projects.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {DATA.projects.map((p, id) => (
          <BlurFade key={p.title} delay={BLUR_FADE_DELAY * 12 + id * 0.03} className="h-full">
            <div className="flex flex-col h-full border border-border rounded-xl p-5 gap-3 hover:ring-2 hover:ring-muted transition-all duration-200">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.context}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              <p className="text-[11px] font-medium font-mono">{p.stat}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-[11px] font-medium h-6 w-fit px-2">
                    {t}
                  </Badge>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="flex flex-wrap gap-3 text-xs">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label} <ArrowUpRight className="h-3 w-3" aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
