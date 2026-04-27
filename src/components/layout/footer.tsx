import { personal } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          © {year}{" "}
          <span className="text-foreground font-medium">{personal.name}</span>.
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground">{personal.location}</p>
      </div>
    </footer>
  );
}
