import { DATA } from "@/data/resume";

export default function ContactSection() {
  const inputClass =
    "w-full bg-background border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-ring";
  return (
    <div className="border rounded-xl p-6 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Hiring, or have a project in mind? Send a message below or write to{" "}
          <a href={`mailto:${DATA.contact.email}`} className="text-foreground underline underline-offset-4">
            {DATA.contact.email}
          </a>
          .
        </p>
        <form
          action="https://formspree.io/f/xgegkeqo"
          method="POST"
          className="w-full max-w-md space-y-3 text-left"
        >
          <input type="text" name="name" required placeholder="Name" aria-label="Name" className={inputClass} />
          <input type="email" name="email" required placeholder="Email" aria-label="Email" className={inputClass} />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell me about the role or project"
            aria-label="Message"
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-md text-sm cursor-pointer hover:opacity-90 transition-opacity"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
