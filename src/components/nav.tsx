import Link from "next/link";
import { profile } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight">
          <span className="size-2 rounded-full bg-ok" aria-hidden />
          {profile.name}
        </Link>
        <nav className="ml-auto flex items-center gap-1 text-sm text-soft" aria-label="Principale">
          <Link href="/#lavori" className="rounded-full px-3 py-1.5 hover:bg-card hover:text-ink">
            Lavori
          </Link>
          <Link href="/#percorso" className="hidden rounded-full px-3 py-1.5 hover:bg-card hover:text-ink sm:block">
            Percorso
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="ml-1 rounded-full bg-ink px-3.5 py-1.5 font-medium text-card hover:bg-ink/85"
          >
            Contattami
          </a>
        </nav>
      </div>
    </header>
  );
}
