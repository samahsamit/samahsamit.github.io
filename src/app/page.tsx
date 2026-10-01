import Link from "next/link";
import { Card, Label } from "@/components/card";
import { Phone } from "@/components/figure";
import { Segments } from "@/components/segments";
import { education, experience, languages, profile, projects, skills, tools } from "@/content/site";

export default function Home() {
  const { learnow, dentistico } = projects;

  return (
    <main className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-10">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
        {/* Presentazione */}
        <Card className="flex flex-col justify-between lg:col-span-8 lg:min-h-[340px]">
          <Label>UX/UI · ricerca utente · dati</Label>
          <div className="mt-10">
            <h1 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[64px]">
              Ciao, sono Samah.
            </h1>
            <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-soft">
              Studio Innovazione Sociale, Comunicazione e Nuove Tecnologie. Mi piace capire come le persone usano
              davvero un prodotto: le intervisto, disegno le schermate in Figma e controllo che i numeri tornino con
              SQL ed Excel.
            </p>
          </div>
        </Card>

        {/* Disponibilità e contatti */}
        <Card className="flex flex-col lg:col-span-4">
          <p className="flex items-center gap-2 text-sm font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok/60" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            Disponibile da subito
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-soft">
            Cerco un tirocinio o un primo lavoro in UX/UI, marketing digitale o frontend. Va bene anche part-time o
            ibrido.
          </p>
          <div className="mt-auto space-y-2 pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-card hover:bg-ink/85"
            >
              {profile.email}
              <span aria-hidden>→</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a href={profile.linkedin} className="rounded-2xl border border-line px-4 py-3 text-sm font-medium hover:border-ink/30">
                LinkedIn ↗
              </a>
              <a href={profile.github} className="rounded-2xl border border-line px-4 py-3 text-sm font-medium hover:border-ink/30">
                GitHub ↗
              </a>
            </div>
          </div>
        </Card>

        {/* LearNow */}
        <Link
          id="lavori"
          href={learnow.href}
          className="group scroll-mt-20 overflow-hidden rounded-[22px] border border-line bg-ln-tint transition-colors hover:border-ln/50 lg:col-span-7"
        >
          <div className="flex items-start justify-between p-6 sm:p-7">
            <div>
              <p className="text-[13px] font-medium text-ln">
                {learnow.kind} · {learnow.year}
              </p>
              <h2 className="mt-1 text-[28px] font-semibold tracking-[-0.03em] text-ln-ink">{learnow.title}</h2>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ln-ink/70">{learnow.summary}</p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-card text-ln-ink transition-transform group-hover:-rotate-45">
              →
            </span>
          </div>
          <div className="grid grid-cols-3 items-start gap-3 px-6 sm:gap-4 sm:px-10">
            <Phone src="/img/learnow/hifi-01-home-creatore.jpg" alt="Schermata home del creatore" className="translate-y-6 transition-transform duration-500 group-hover:translate-y-3" />
            <Phone src="/img/learnow/hifi-05-ricerca.jpg" alt="Schermata di ricerca delle lezioni" className="transition-transform duration-500 group-hover:-translate-y-2" />
            <Phone src="/img/learnow/hifi-06-lezione.jpg" alt="Schermata di dettaglio di una lezione" className="translate-y-10 transition-transform duration-500 group-hover:translate-y-6" />
          </div>
        </Link>

        {/* Studio dentistico */}
        <Link
          href={dentistico.href}
          className="group flex flex-col rounded-[22px] border border-line bg-dm-tint p-6 transition-colors hover:border-dm/60 sm:p-7 lg:col-span-5"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-dm-ink">
                {dentistico.kind} · {dentistico.year}
              </p>
              <h2 className="mt-1 text-[28px] font-semibold tracking-[-0.03em]">{dentistico.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{dentistico.summary}</p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-card transition-transform group-hover:-rotate-45">
              →
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-card p-4">
              <p className="text-[32px] font-semibold leading-none tracking-[-0.03em] text-dm-ink">43,9%</p>
              <p className="mt-2 text-[13px] leading-snug text-soft">di assenze nella città peggiore</p>
            </div>
            <div className="rounded-2xl bg-card p-4">
              <p className="text-[32px] font-semibold leading-none tracking-[-0.03em]">3,3%</p>
              <p className="mt-2 text-[13px] leading-snug text-soft">nella migliore, che è nella stessa regione</p>
            </div>
          </div>

          <div className="mt-auto rounded-2xl bg-card p-4 pt-4">
            <p className="mb-3 text-[13px] text-faint">4 tipi di paziente, trovati con k-means</p>
            <Segments compact />
          </div>
        </Link>

        {/* Competenze */}
        <Card className="lg:col-span-5">
          <Label>Cosa so fare</Label>
          <dl className="mt-5 space-y-5">
            {skills.map((s) => (
              <div key={s.title}>
                <dt className="text-[15px] font-medium">{s.title}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-soft">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Card>

        {/* Strumenti */}
        <Card className="lg:col-span-4">
          <Label>Strumenti</Label>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-line bg-canvas px-3 py-1 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </Card>

        {/* Lingue */}
        <Card className="lg:col-span-3">
          <Label>Lingue</Label>
          <ul className="mt-5 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between border-b border-line pb-3 last:border-0 last:pb-0">
                <span className="text-[15px] font-medium">{l.name}</span>
                <span className="text-sm text-faint">{l.level}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Formazione */}
        <Card className="scroll-mt-20 lg:col-span-6">
          <div id="percorso" className="scroll-mt-20" />
          <Label>Formazione</Label>
          <Timeline items={education} />
        </Card>

        {/* Esperienze */}
        <Card className="lg:col-span-6">
          <Label>Esperienze</Label>
          <p className="mt-2 text-[15px] leading-relaxed text-soft">
            Prima e durante l&apos;università ho lavorato in sala, in cucina e in negozio. Mi è rimasta l&apos;abitudine di
            ascoltare chi ho davanti.
          </p>
          <Timeline items={experience} />
        </Card>
      </div>
    </main>
  );
}

function Timeline({ items }: { items: { when: string; title: string; where: string; note?: string }[] }) {
  return (
    <ol className="mt-5 divide-y divide-line">
      {items.map((it) => (
        <li key={it.title} className="grid grid-cols-[92px_1fr] gap-3 py-3.5 first:pt-0 last:pb-0">
          <span className="pt-0.5 font-mono text-[12px] text-faint">{it.when}</span>
          <div>
            <p className="text-[15px] font-medium leading-snug">{it.title}</p>
            <p className="text-sm text-soft">{it.where}</p>
            {it.note && <p className="mt-1 text-sm leading-relaxed text-faint">{it.note}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
