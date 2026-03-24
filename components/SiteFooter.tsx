export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/5 py-10">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center text-sm text-foreground/45">
          © {new Date().getFullYear()} Richard Qin
        </p>
      </div>
    </footer>
  );
}
