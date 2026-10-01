# samahsamit.github.io

Il mio portfolio: **https://samahsamit.github.io**

## Lavori

- [LearNow](https://github.com/samahsamit/learnow-interaction-design): app di corsi per artigiani e creativi (UX/UI, Figma)
- [Studio dentistico](https://github.com/samahsamit/studio-dentistico-data-mining): database, data warehouse e data mining sulle assenze dei pazienti

## Sviluppo

Il sito usa Next.js con export statico e Tailwind CSS. A ogni push su `main`, GitHub Actions lo compila e lo pubblica su GitHub Pages.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # genera il sito statico in out/
```

I testi sono in `src/content/site.ts` e nelle pagine dentro `src/app/lavori/`.
