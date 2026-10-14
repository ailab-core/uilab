// `fumadocs-core/highlight` references Shiki's Oniguruma WASM engine, which the
// server bundle can't load. The site only uses the JavaScript regex engine, so
// `shiki/wasm` is aliased here (see vite.config.ts).
export default function loadWasm(): never {
  throw new Error(
    "Shiki's WASM engine is disabled in this app. Use the JavaScript regex engine instead.",
  );
}
