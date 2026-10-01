import type { Metadata } from "next";
import { CaseHeader, NextProject, Prose, Section, Stats } from "@/components/case";
import { Figure, Phone } from "@/components/figure";
import { projects } from "@/content/site";

const p = projects.learnow;
const A = "text-ln";

export const metadata: Metadata = {
  title: "LearNow",
  description: p.summary,
  openGraph: { images: ["/img/learnow/hifi-01-home-creatore.jpg"] },
};

const SCREENS = [
  { src: "/img/learnow/hifi-01-home-creatore.jpg", title: "Bottega", note: "La home del creatore. Tre passi e nient'altro." },
  { src: "/img/learnow/hifi-02-nuovo-corso.jpg", title: "Nuovo corso", note: "Passo 1 di 4: titolo, descrizione, livello, formato." },
  { src: "/img/learnow/hifi-03-lezioni.jpg", title: "Lezioni", note: "Moduli e video caricati dal telefono." },
  { src: "/img/learnow/hifi-04-vetrina.jpg", title: "La tua vetrina", note: "Logo, palette e copertina del laboratorio." },
  { src: "/img/learnow/hifi-05-ricerca.jpg", title: "Ricerca", note: "Filtri per lezione singola, livello, durata, prezzo." },
  { src: "/img/learnow/hifi-06-lezione.jpg", title: "Lezione", note: "Prerequisiti e materiali prima del bottone di acquisto." },
];

const PALETTE = [
  { name: "Gesso", hex: "#FAFAF8", rule: "fondo di tutte le schermate" },
  { name: "Notte", hex: "#1B2A4A", rule: "testo e stato selezionato" },
  { name: "Arancio", hex: "#F0642B", rule: "solo l'azione principale, una per schermata" },
  { name: "Verde", hex: "#2E8B6E", rule: "solo verificato o completato" },
  { name: "Linea", hex: "#E8E6E1", rule: "bordi da 1 px al posto delle ombre" },
];

export default function LearNow() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <CaseHeader
        kind={`${p.kind} · Interaction Design · ${p.year}`}
        title="LearNow"
        intro="Un'app di corsi per artigiani e creativi: restauratori, ceramisti, falegnami, sarte. Chi insegna può vendere un corso intero o una lezione da cinque minuti senza perdere il proprio stile, e chi impara capisce cosa compra prima di pagare."
        accent={A}
        meta={[
          { label: "Corso", value: "Interaction Design, Università di Torino" },
          { label: "Team", value: "Con Federico Ventura e Chris Berry N'dry" },
          { label: "Durata", value: "Autunno 2025" },
          { label: "Strumenti", value: "Figma, Google Forms" },
        ]}
        links={[
          { label: "Prototipo in Figma", href: p.figma! },
          { label: "Relazione completa", href: p.report },
          { label: "Repository", href: p.repo },
        ]}
      />

      <div className="overflow-hidden rounded-[26px] border border-line bg-ln-tint px-5 pt-10 sm:px-12 sm:pt-14">
        <div className="mx-auto grid max-w-4xl grid-cols-3 items-start gap-3 sm:gap-8">
          <Phone src="/img/learnow/hifi-02-nuovo-corso.jpg" alt="Creazione di un nuovo corso" className="translate-y-10" />
          <Phone src="/img/learnow/hifi-01-home-creatore.jpg" alt="Home del creatore" />
          <Phone src="/img/learnow/hifi-06-lezione.jpg" alt="Dettaglio lezione" className="translate-y-16" />
        </div>
      </div>

      <div className="mt-6">
        <Section n="01" title="Il problema" accent={A}>
          <Prose>
            <p>
              I corsi creativi online sono sparsi tra Udemy, Domestika, YouTube e i profili Instagram dei singoli. Per un
              artigiano che ha già un laboratorio e un nome, pubblicare lì significa diventare una riga in un catalogo
              con i colori di qualcun altro.
            </p>
            <p>
              Dall&apos;altra parte, chi compra non ha modo di capire se il corso vale. Nel lavoro manuale la fiducia passa
              dai lavori che vedi e dal passaparola, e cinque stelle generiche non bastano.
            </p>
          </Prose>
        </Section>

        <Section n="02" title="Ricerca" accent={A}>
          <Prose>
            <p>
              Siamo partiti da sei ipotesi e le abbiamo messe alla prova con <strong>20 interviste</strong> da mezz&apos;ora
              (10 creatori e 10 persone che i corsi li comprano) e una <strong>survey</strong> con 27 risposte, raccolte
              tra il 25 ottobre e il 1° novembre 2025.
            </p>
          </Prose>
          <Stats
            accent={A}
            items={[
              { value: "70%", label: "ha comprato un corso creativo online nell'ultimo anno" },
              { value: "81%", label: "vuole poter verificare chi insegna" },
              { value: "63%", label: "comprerebbe anche una lezione singola" },
              { value: "44%", label: "non compra perché dubita della qualità" },
            ]}
          />
          <Prose>
            <p>
              Ne sono uscite tre personas. <strong>Marta</strong>, 42 anni, restauratrice:{" "}
              <em>«Vorrei condividere quello che so fare, ma senza impazzire con la tecnologia e senza perdere il mio stile.»</em>{" "}
              <strong>Samuele</strong>, 27 anni, maker con un pubblico già suo. <strong>Giulia</strong>, 24 anni, studentessa
              di design: <em>«Non voglio più comprare a scatola chiusa.»</em>
            </p>
          </Prose>
        </Section>

        <Section n="03" title="Requisiti e idea" accent={A}>
          <Prose>
            <p>
              Dai dati abbiamo ricavato sette requisiti funzionali. I quattro centrali sono la creazione guidata, la
              personalizzazione del brand, i badge di verifica e una pagina lezione che dice tutto prima dell&apos;acquisto.
            </p>
            <p>
              Il requisito che ha pesato di più sul design però è uno non funzionale: l&apos;interfaccia deve fare da cornice
              silenziosa. Se la piattaforma ha troppa personalità, schiaccia quella dell&apos;artigiano. L&apos;app è costruita
              sull&apos;idea di una <strong>bottega digitale</strong>, con il banco di lavoro del creatore e i badge appesi come
              diplomi in laboratorio.
            </p>
          </Prose>
          <Figure src="/img/learnow/user-flow.jpg" alt="User flow di creatore e fruitore" caption="User flow del creatore e di chi compra." />
        </Section>

        <Section n="04" title="Wireframe, e una versione buttata" accent={A}>
          <Prose>
            <p>
              Dagli schizzi a mano siamo passati a una prima versione ad alta fedeltà piena di texture di legno ed effetto
              carta. Rileggendola con i requisiti davanti non reggeva: il legno faceva concorrenza all&apos;identità del
              creatore e il pannello dei filtri occupava mezzo schermo. L&apos;abbiamo rifatta.
            </p>
          </Prose>
          <Figure src="/img/learnow/wireframe-creatore.jpg" alt="Wireframe a mano del percorso creatore" caption="Wireframe low-fi del percorso creatore." />
          <Figure src="/img/learnow/wireflow-fruitore.jpg" alt="Prima versione hi-fi con texture di legno" caption="La prima versione hi-fi, poi scartata." />
        </Section>

        <Section n="05" title="Identità visiva" accent={A}>
          <Prose>
            <p>
              Abbiamo provato tre direzioni sulla stessa schermata di ricerca: Bottega (calda ed editoriale), Atelier
              (galleria bianca) e Maker (rotonda, da app consumer). Nessuna funzionava da sola. Abbiamo tenuto la griglia e
              il fondo neutro di Atelier e le forme morbide e l&apos;arancio di Maker.
            </p>
            <p>
              Il logo è un bottone a quattro fori attraversato da un ago: si impara facendo, con le mani.
            </p>
          </Prose>
          <Figure src="/img/learnow/identita-visiva.jpg" alt="Le tre direzioni visive a confronto" caption="A Bottega, B Atelier, C Maker sulla stessa schermata." className="max-w-2xl" />
          <Figure src="/img/learnow/design-system-logo.jpg" alt="Versioni del logo" caption="Logo primario, icona, versione su fondo scuro e monocromo." />
        </Section>

        <Section n="06" title="Design system" accent={A}>
          <Prose>
            <p>
              È piccolo di proposito: cinque colori con un significato fisso, due font (Outfit per titoli e prezzi,
              Manrope per il testo), una griglia da 4 px e pochi componenti. Ogni schermata ha un solo elemento arancio.
            </p>
          </Prose>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-5">
            {PALETTE.map((c) => (
              <li key={c.hex} className="overflow-hidden rounded-[18px] border border-line bg-card">
                <div className="h-16 border-b border-line" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className="text-sm font-medium">
                    {c.name} <span className="font-mono text-[12px] text-faint">{c.hex}</span>
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-soft">{c.rule}</p>
                </div>
              </li>
            ))}
          </ul>
          <Figure src="/img/learnow/design-system-componenti.jpg" alt="Componenti del design system" caption="Bottoni, chip, campi, badge, stepper, card lezione e navigazione." />
        </Section>

        <Section n="07" title="Le schermate" accent={A}>
          <Prose>
            <p>
              Sei schermate per due percorsi. Marta crea il suo corso di verniciatura in quattro passi, Giulia cerca e
              compra una lezione di ceramica. I testi sono scritti per chi con il digitale non ha confidenza: nella home
              vuota si legge «Nessun corso, ancora. Il primo di solito richiede un pomeriggio».
            </p>
          </Prose>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-[22px] border border-line bg-ln-tint p-5 sm:grid-cols-3 sm:p-8">
            {SCREENS.map((s, i) => (
              <figure key={s.src}>
                <Phone src={s.src} alt={s.title} />
                <figcaption className="mt-3 text-[13px] leading-snug">
                  <span className="font-mono text-ln">0{i + 1}</span> <span className="font-medium text-ln-ink">{s.title}</span>
                  <span className="block text-ln-ink/60">{s.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section n="08" title="Come lo testeremo" accent={A}>
          <Prose>
            <p>
              Il progetto si ferma al prototipo, quindi il test non è ancora stato fatto. Abbiamo scritto il piano:
              cinque persone (tre artigiani over 40 e due hobbisti), sessioni da 30 minuti sul telefono, think aloud.
              Misuriamo completamento, tempi, errori e la Single Ease Question dopo ogni task.
            </p>
          </Prose>
          <div className="overflow-hidden rounded-[18px] border border-line bg-card">
            {[
              ["Pubblica la tua prima lezione singola, con il tuo logo sulla pagina.", "Arriva a «Richiedi verifica e pubblica» da sola, in meno di 6 minuti."],
              ["Trova una lezione di ceramica sotto i 10 € di un'artigiana verificata.", "Apre la lezione giusta e nomina un materiale prima di comprare."],
              ["Un'allieva ti ha fatto una domanda: rispondi.", "Trova la sezione Domande senza girare per l'app."],
            ].map(([task, ok]) => (
              <div key={task} className="grid gap-1 border-b border-line p-4 last:border-0 sm:grid-cols-2 sm:gap-6">
                <p className="text-[15px]">{task}</p>
                <p className="text-[15px] text-soft">{ok}</p>
              </div>
            ))}
          </div>
          <Prose>
            <p>
              Cosa ci portiamo a casa: abbiamo rifinito l&apos;interfaccia prima di testare i wireframe. La prossima volta
              l&apos;ordine sarà al contrario.
            </p>
          </Prose>
        </Section>
      </div>

      <NextProject href={projects.dentistico.href} kind="Dati" title={projects.dentistico.title} tint="bg-dm-tint hover:border-dm/60" />
    </main>
  );
}
