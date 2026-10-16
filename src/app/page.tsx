import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import DevConsole from "@/components/DevConsole";
import ArchitecturePlayground from "@/components/ArchitecturePlayground";
import ApiExplorer from "@/components/ApiExplorer";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex items-center gap-2 text-xs font-medium border rounded-full px-3 py-1 text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  {DATA.availability}
                </div>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage src="/me.jpg" alt={DATA.name} className="object-cover" />
                <AvatarFallback className="text-2xl font-semibold">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-pretty leading-relaxed text-muted-foreground">{DATA.summary}</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-2">
              {DATA.cvs.map((cv) => (
                <a key={cv.href} href={cv.href} download={cv.file}>
                  <Badge className="cursor-pointer h-8 px-4 text-xs">{cv.label}</Badge>
                </a>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>Work with me:</span>
              {DATA.freelance.map((f) => (
                <a key={f.href} href={f.href} target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary" className="cursor-pointer h-8 px-4 text-xs">{f.label}</Badge>
                </a>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-6">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <div className="flex items-start gap-x-3 justify-between">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="font-semibold leading-tight">{education.school}</div>
                    <div className="text-sm text-muted-foreground">{education.degree}</div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.start} - {education.end}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.skills.map((group, gi) => (
              <BlurFade key={group.group} delay={BLUR_FADE_DELAY * 10 + gi * 0.05}>
                <p className="text-xs font-medium text-muted-foreground mb-2">{group.group}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center"
                    >
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="playground" className="md:relative md:left-1/2 md:-translate-x-1/2 md:w-[min(64rem,calc(100vw-3rem))] flex flex-col gap-10">
        <div className="flex flex-col gap-y-3 items-center text-center">
          <div className="border bg-primary rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Playground</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interactive pieces built for this site</h2>
          <p className="text-muted-foreground text-balance">
            A terminal, a simplified architecture explorer and a simulated API console.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Developer shell</h3>
          <p className="text-sm text-muted-foreground">Type commands to query my experience and projects.</p>
          <DevConsole />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Architecture explorer</h3>
          <p className="text-sm text-muted-foreground">Pick a project to see how its main pieces fit together.</p>
          <ArchitecturePlayground />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">REST API explorer</h3>
          <p className="text-sm text-muted-foreground">Simulated requests against a mock API. Nothing is sent anywhere.</p>
          <ApiExplorer />
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>

      <footer className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          {Object.values(DATA.contact.social).map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {social.name}
            </a>
          ))}
          {DATA.freelance.map((f) => (
            <a
              key={f.href}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {f.label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} {DATA.name}</p>
        <p>
          This site counts visits with Cloudflare Web Analytics: no cookies and no tracking across sites.
        </p>
      </footer>
    </main>
  );
}
