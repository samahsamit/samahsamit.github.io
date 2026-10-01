import Link from "next/link";
import type { ReactNode } from "react";

export function CaseHeader({
  kind,
  title,
  intro,
  meta,
  links,
  accent,
}: {
  kind: string;
  title: string;
  intro: string;
  meta: { label: string; value: string }[];
  links: { label: string; href: string }[];
  accent: string;
}) {
  return (
    <header className="pb-10 pt-10 sm:pt-14">
      <Link href="/#lavori" className="text-sm text-faint hover:text-ink">
        ← Tutti i lavori
      </Link>
      <p className={`mt-8 text-sm font-medium ${accent}`}>{kind}</p>
      <h1 className="mt-2 text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft sm:text-xl">{intro}</p>
      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="text-[13px] text-faint">{m.label}</dt>
            <dd className="mt-1 text-[15px] leading-snug">{m.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-wrap gap-2">
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className={
              i === 0
                ? "rounded-full bg-ink px-4 py-2 text-sm font-medium text-card hover:bg-ink/85"
                : "rounded-full border border-line bg-card px-4 py-2 text-sm font-medium hover:border-ink/30"
            }
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </header>
  );
}

export function Section({
  n,
  title,
  accent,
  children,
}: {
  n: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-12">
        <div>
          <p className={`font-mono text-[13px] ${accent}`}>{n}</p>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em]">{title}</h2>
        </div>
        <div className="min-w-0 space-y-6">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[640px] space-y-4 text-[17px] leading-[1.7] text-soft [&_strong]:font-medium [&_strong]:text-ink">
      {children}
    </div>
  );
}

export function Stats({ items, accent }: { items: { value: string; label: string }[]; accent: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-[18px] border border-line bg-card p-4">
          <p className={`text-3xl font-semibold tracking-[-0.03em] ${accent}`}>{s.value}</p>
          <p className="mt-1 text-[13px] leading-snug text-soft">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function NextProject({ href, kind, title, tint }: { href: string; kind: string; title: string; tint: string }) {
  return (
    <Link
      href={href}
      className={`group mt-6 flex items-center justify-between rounded-[22px] border border-line p-7 transition-colors ${tint}`}
    >
      <div>
        <p className="text-[13px] text-faint">Prossimo lavoro · {kind}</p>
        <p className="mt-1 text-2xl font-semibold tracking-[-0.02em]">{title}</p>
      </div>
      <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  );
}
