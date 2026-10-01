// Barra con i quattro segmenti di pazienti trovati con k-means (dati della relazione)
const SEGMENTS = [
  { name: "Occasionali", share: 40, value: "228 €", tone: "bg-dm-tint" },
  { name: "Cure continuative", share: 27, value: "2.028 €", tone: "bg-dm/45" },
  { name: "Percorsi lunghi", share: 21, value: "1.510 €", tone: "bg-dm/75" },
  { name: "Grandi riabilitazioni", share: 11, value: "5.734 €", tone: "bg-dm-ink" },
];

export function Segments({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="flex h-10 w-full overflow-hidden rounded-xl border border-dm/30" role="img" aria-label="Quota dei quattro segmenti di pazienti: 40, 27, 21 e 11 per cento">
        {SEGMENTS.map((s) => (
          <div key={s.name} className={s.tone} style={{ width: `${s.share}%` }} />
        ))}
      </div>
      <ul className={`mt-3 grid gap-x-4 gap-y-2 text-[13px] ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
        {SEGMENTS.map((s) => (
          <li key={s.name} className="flex items-start gap-2">
            <span className={`mt-1 size-2.5 shrink-0 rounded-[3px] border border-dm/30 ${s.tone}`} aria-hidden />
            <span className="leading-snug">
              <span className="text-ink">{s.name}</span>{" "}
              <span className="text-faint">{s.share}%</span>
              {!compact && <span className="block text-faint">spesa media {s.value}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
