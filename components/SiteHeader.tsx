import Link from "next/link";

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          Richard Qin
        </Link>
        <nav className="flex items-center gap-6" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
