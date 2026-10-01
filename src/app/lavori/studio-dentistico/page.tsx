import type { Metadata } from "next";
import { CaseHeader, NextProject, Prose, Section, Stats } from "@/components/case";
import { Figure } from "@/components/figure";
import { Segments } from "@/components/segments";
import { projects } from "@/content/site";

const p = projects.dentistico;
const A = "text-dm-ink";

export const metadata: Metadata = {
  title: "Studio dentistico",
  description: p.summary,
  openGraph: { images: ["/img/dentistico/cluster-weka.jpg"] },
};

// Drill-down OLAP: percentuale di appuntamenti saltati
const NOSHOW = [
  { label: "Media regionale (Piemonte)", value: 23.3 },
  { label: "Cuneo", value: 43.9 },
  { label: "Chieri", value: 3.3 },
];

const METRICS = [
  { m: "Corrette in cross-validation", j48: "84,1%", nb: "83,1%", best: "j48" },
  { m: "Precision sulle assenze", j48: "0,910", nb: "0,705", best: "j48" },
  { m: "Recall sulle assenze", j48: "0,592", nb: "0,617", best: "nb" },
  { m: "F-measure media", j48: "0,878", nb: "0,841", best: "j48" },
];

export default function StudioDentistico() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <CaseHeader
        kind={`${p.kind} · Data Base e Data Mining · ${p.year}`}
        title="Perché i pazienti saltano gli appuntamenti"
        intro="Uno studio dentistico (inventato, con dati generati da me) perde soldi in due modi: le poltrone vuote quando qualcuno non si presenta, e le cure che occupano ore senza rendere. Ho costruito tutta la filiera, dal database alle regole che la segreteria può usare per decidere chi richiamare."
        accent={A}
        meta={[
          { label: "Corso", value: "Data Base e Data Mining, Università di Torino" },
          { label: "Team", value: "Progetto individuale" },
          { label: "Anno", value: "2025/2026" },
          { label: "Strumenti", value: "MySQL, phpMyAdmin, Excel, Weka" },
        ]}
        links={[
          { label: "Relazione completa", href: p.report },
          { label: "Dump SQL e foglio OLAP", href: p.repo },
        ]}
      />

      <Stats
        accent={A}
        items={[
          { value: "496", label: "appuntamenti su due anni" },
          { value: "70", label: "pazienti" },
          { value: "10", label: "tabelle nel modello logico" },
          { value: "84%", label: "accuratezza dell'albero in cross-validation" },
        ]}
      />

      <div className="mt-6">
        <Section n="01" title="Il database" accent={A}>
          <Prose>
            <p>
              Sette entità e otto relazioni: pazienti, personale, piani di cura, appuntamenti, prestazioni, sale e
              fatture. Nella ristrutturazione l&apos;indirizzo diventa quattro campi, il telefono diventa una tabella (un
              paziente ne può lasciare più di uno) e la gerarchia odontoiatra/igienista si accorpa in{" "}
              <strong>personale</strong> con un campo <code className="font-mono text-[15px]">ruolo</code>. Separarle avrebbe aggiunto solo join.
            </p>
            <p>
              I dati sono finti ma riproducibili: li genero da un seme fisso, quindi rilanciando lo script escono gli
              stessi record.
            </p>
          </Prose>
          <Figure src="/img/dentistico/er-ristrutturato.jpg" alt="Modello ER ristrutturato" caption="Modello ER ristrutturato." />
          <Figure src="/img/dentistico/phpmyadmin-designer.jpg" alt="Schema in phpMyAdmin" caption="Le 10 tabelle in phpMyAdmin, con i record caricati." />
        </Section>

        <Section n="02" title="Il data warehouse" accent={A}>
          <Prose>
            <p>
              La scelta più importante è la grana del fatto: <strong>una riga per ogni appuntamento prenotato</strong>,
              anche quelli saltati. Se avessi usato la prestazione erogata, le assenze non sarebbero mai entrate nel
              warehouse, e sono proprio quello che volevo studiare.
            </p>
            <p>
              Lo schema è a fiocco di neve con quattro gerarchie: tempo, territorio, prestazione e personale. Con le
              tabelle pivot in Excel ho fatto slice e drill-down, e scendendo dalla regione alle città è saltato fuori
              quello che la media nascondeva.
            </p>
          </Prose>
          <div className="rounded-[18px] border border-line bg-card p-5 sm:p-6">
            <p className="text-[13px] text-faint">Appuntamenti saltati, drill-down per territorio</p>
            <ul className="mt-4 space-y-3">
              {NOSHOW.map((r) => (
                <li key={r.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 sm:grid-cols-[200px_1fr_56px]">
                  <span className="text-[15px]">{r.label}</span>
                  <span className="order-last col-span-2 h-2.5 overflow-hidden rounded-full bg-dm-tint sm:order-none sm:col-span-1">
                    <span className="block h-full rounded-full bg-dm" style={{ width: `${(r.value / 50) * 100}%` }} />
                  </span>
                  <span className="text-right font-mono text-sm">{r.value.toString().replace(".", ",")}%</span>
                </li>
              ))}
            </ul>
          </div>
          <Figure src="/img/dentistico/dw-fiocco-di-neve.jpg" alt="Schema a fiocco di neve" caption="Il modello a fiocco di neve del warehouse." />
        </Section>

        <Section n="03" title="Quattro tipi di paziente" accent={A}>
          <Prose>
            <p>
              Con k-means in Weka ho diviso i 70 pazienti in base a età, numero di visite e spesa. Ho scelto k = 4 con il
              metodo del gomito: da 3 a 4 cluster l&apos;errore scende del 28%, da 4 a 5 solo dell&apos;8%.
            </p>
          </Prose>
          <div className="rounded-[18px] border border-line bg-card p-5 sm:p-6">
            <Segments />
          </div>
          <Prose>
            <p>
              Il gruppo più piccolo, le <strong>grandi riabilitazioni</strong> (11%, età media 64 anni, quasi 11 visite),
              spende in media 5.734 €. È il paziente che allo studio costa di più perdere.
            </p>
          </Prose>
          <div className="grid gap-4 sm:grid-cols-2">
            <Figure src="/img/dentistico/metodo-gomito.jpg" alt="Grafico del metodo del gomito" caption="Metodo del gomito." sizes="(min-width: 1024px) 480px, 100vw" />
            <Figure src="/img/dentistico/cluster-weka.jpg" alt="Cluster visualizzati in Weka" caption="I cluster in Weka." sizes="(min-width: 1024px) 480px, 100vw" />
          </div>
        </Section>

        <Section n="04" title="Chi non si presenterà" accent={A}>
          <Prose>
            <p>
              Per prevedere le assenze ho usato un albero decisionale J48. Una delle variabili l&apos;ho costruita io: quante
              volte quel paziente era già mancato <em>prima</em> di quella seduta, calcolata con una funzione finestra in
              SQL. Usa solo informazioni che lo studio ha al momento della prenotazione, altrimenti il modello avrebbe
              barato.
            </p>
            <p>
              L&apos;albero mette alla radice proprio le assenze passate, e subito sotto l&apos;età, con un cambio netto intorno
              ai 35 anni. Una seduta di igiene prenotata con più di due settimane di anticipo da un paziente giovane è a
              rischio. Una devitalizzazione, con il dente che fa male, no.
            </p>
          </Prose>
          <Figure src="/img/dentistico/albero-j48.jpg" alt="Albero decisionale J48 in Weka" caption="L'albero J48: 19 foglie, 27 nodi." />

          <div className="overflow-hidden rounded-[18px] border border-line bg-card">
            <div className="grid grid-cols-[1fr_72px_72px] border-b border-line px-4 py-3 text-[13px] text-faint sm:grid-cols-[1fr_120px_120px]">
              <span>Misura</span>
              <span className="text-right">J48</span>
              <span className="text-right">Naive Bayes</span>
            </div>
            {METRICS.map((r) => (
              <div key={r.m} className="grid grid-cols-[1fr_72px_72px] border-b border-line px-4 py-3 text-[15px] last:border-0 sm:grid-cols-[1fr_120px_120px]">
                <span>{r.m}</span>
                <span className={`text-right font-mono ${r.best === "j48" ? "font-medium text-dm-ink" : "text-soft"}`}>{r.j48}</span>
                <span className={`text-right font-mono ${r.best === "nb" ? "font-medium text-dm-ink" : "text-soft"}`}>{r.nb}</span>
              </div>
            ))}
          </div>
          <Prose>
            <p>
              Ho confrontato J48 con Naive Bayes. Bayes trova qualche assenza in più ma dà molti più falsi allarmi. Ho
              scelto J48 soprattutto perché le sue regole si leggono e si possono applicare anche senza un computer.
            </p>
          </Prose>
        </Section>

        <Section n="05" title="Cosa ne esce" accent={A}>
          <Prose>
            <p>
              Le due analisi si completano. Il clustering dice quali pazienti valgono di più, l&apos;albero quali sedute
              rischiano di saltare. Per lo studio la conclusione pratica è richiamare i pazienti giovani che hanno già
              saltato qualche appuntamento e chi ha prenotato una seduta di prevenzione con troppo anticipo.
            </p>
            <p>
              Un limite che ho segnalato nella relazione: nei rami più profondi l&apos;albero si appoggia su 2, 5 o 8 casi. Lì
              sta imparando il rumore: infatti in cross-validation l&apos;accuratezza scende dall&apos;88,7% all&apos;84,1%.
            </p>
          </Prose>
        </Section>
      </div>

      <NextProject href={projects.learnow.href} kind="UX/UI" title={projects.learnow.title} tint="bg-ln-tint hover:border-ln/50" />
    </main>
  );
}
