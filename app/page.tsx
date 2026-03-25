import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const projects = [
  {
    title: "OTC Platform",
    description:
      "Over-the-counter trading experience for digital assets—flows, pricing, and execution built for clarity and trust.",
    tag: "Product",
    href: "https://otc.yesbit.io/",
  },
  {
    title: "Bitcoin Layer 2 Platform",
    description:
      "MVP exploring Layer 2 concepts on Bitcoin: onboarding, core interactions, and a path from prototype to production.",
    tag: "Platform",
    href: "https://2sands.vercel.app/",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden border-b border-foreground/5 px-6 pb-24 pt-20 sm:pb-32 sm:pt-28"
          aria-label="Introduction"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-soft), transparent)`,
            }}
          />
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Hello
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
              I build SaaS products end to end—solid systems, clear UX, steady
              delivery.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/65">
              Full-stack engineer focused on subscription software: shipping
              features customers rely on, improving reliability, and partnering
              with product and design to move metrics.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/15 px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/[0.03]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-16 border-b border-foreground/5 px-6 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              About
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Engineer, product-minded, SaaS-focused
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_1.1fr] sm:gap-12">
              <div className="relative aspect-square max-w-xs overflow-hidden rounded-2xl ring-1 ring-foreground/10 sm:max-w-none">
                <Image
                  src="/photo.jpg"
                  alt="Richard Qin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 360px"
                  priority
                />
              </div>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  I&apos;m Richard (Ziming) Qin, a full-stack software engineer
                  who spends most of my time on SaaS—turning roadmap ideas into
                  production code, tightening performance, and keeping releases
                  predictable as the product grows.
                </p>
                <p>
                  I care about clear interfaces between services, pragmatic
                  testing, and UX details that make complex workflows feel
                  simple. I work best in teams that value direct communication,
                  ownership, and iterating from real user feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-16 border-b border-foreground/5 px-6 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              Work
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Selected projects
            </p>
            <p className="mt-4 max-w-xl text-foreground/65 leading-relaxed">
              Live products and demos I&apos;ve helped shape—click through to
              explore each build.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <li key={p.title}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.04]"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-foreground/45">
                      {p.tag}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                      {p.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-accent opacity-90 transition-opacity group-hover:opacity-100">
                      Visit site →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 px-6 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              Contact
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s talk
            </p>
            <p className="mx-auto mt-4 max-w-md text-foreground/65 leading-relaxed">
              Open to full-time roles and serious contract work in SaaS. Send
              a note with what you&apos;re building—I&apos;ll respond when I can.
            </p>
            <a
              href="mailto:richardqin918@gmail.com"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              richardqin918@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1AkShAu7_T2O1yHkNb19LJ9Kk_3xQv9bf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 px-8 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/[0.03]"
            >
              Resume (Google Drive)
            </a>
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <a
                href="https://github.com/RichardQin918"
                className="text-foreground/55 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ziming-richard-qin-021387116/"
                className="text-foreground/55 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
