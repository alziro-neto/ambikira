/* global React, ReactDOM, useReveal, Nav, Marquee, Hero,
   SectionProblema, PullQuote, SectionProgramas, SectionSinergia,
   SectionEvidencias, SectionROI, SectionImplementacao,
   SectionDiretrizes, CTA, Footer, useTweaks, TweaksPanel,
   TweakSection, TweakRadio, TweakSelect */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "midnight",
  "hero": "manifesto",
  "fontPair": "fraunces-inter"
}/*EDITMODE-END*/;

const PALETTES = {
  midnight: {
    "--bg": "#0A1628", "--bg-soft": "#0F1E36", "--bg-elev": "#14253F",
    "--text": "#E8E2D5", "--text-soft": "#A9AFBC", "--text-mute": "#6B7384",
    "--accent": "#D4FF3A", "--accent-ink": "#0A1628", "--accent-soft": "#B8E02E",
    "--rule": "rgba(244, 239, 230, 0.14)", "--rule-strong": "rgba(244, 239, 230, 0.32)",
    "--paper": "#F4EFE6", "--paper-soft": "#EAE2D2",
    "--ink": "#0A1628", "--ink-soft": "#2A3A52",
  },
  ember: {
    "--bg": "#15110D", "--bg-soft": "#1E1812", "--bg-elev": "#241D15",
    "--text": "#F2EBDD", "--text-soft": "#B8A98F", "--text-mute": "#7A6E5A",
    "--accent": "#F4A300", "--accent-ink": "#15110D", "--accent-soft": "#E59500",
    "--rule": "rgba(242, 235, 221, 0.14)", "--rule-strong": "rgba(242, 235, 221, 0.32)",
    "--paper": "#F2EBDD", "--paper-soft": "#E5DCC9",
    "--ink": "#15110D", "--ink-soft": "#3C2F1F",
  },
  forest: {
    "--bg": "#0C1812", "--bg-soft": "#102019", "--bg-elev": "#15291F",
    "--text": "#E8EAE0", "--text-soft": "#9DA89A", "--text-mute": "#647166",
    "--accent": "#C5F26B", "--accent-ink": "#0C1812", "--accent-soft": "#A7DC4F",
    "--rule": "rgba(232, 234, 224, 0.14)", "--rule-strong": "rgba(232, 234, 224, 0.32)",
    "--paper": "#EFEDE2", "--paper-soft": "#E1DFD0",
    "--ink": "#0C1812", "--ink-soft": "#2A3D31",
  },
  paper: {
    "--bg": "#F4EFE6", "--bg-soft": "#EAE2D2", "--bg-elev": "#E0D7C3",
    "--text": "#0A1628", "--text-soft": "#3C4660", "--text-mute": "#6B7384",
    "--accent": "#0A1628", "--accent-ink": "#D4FF3A", "--accent-soft": "#1A2740",
    "--rule": "rgba(10, 22, 40, 0.14)", "--rule-strong": "rgba(10, 22, 40, 0.32)",
    "--paper": "#0A1628", "--paper-soft": "#0F1E36",
    "--ink": "#F4EFE6", "--ink-soft": "#A9AFBC",
  },
};

const FONT_PAIRS = {
  "fraunces-inter": { serif: "Fraunces", sans: "Inter Tight" },
  "instrument-mono": { serif: "Instrument Serif", sans: "JetBrains Mono" },
  "fraunces-mono": { serif: "Fraunces", sans: "JetBrains Mono" },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.midnight;
  const root = document.documentElement;
  Object.entries(p).forEach(([k, v]) => root.style.setProperty(k, v));
}

function applyFontPair(name) {
  const f = FONT_PAIRS[name] || FONT_PAIRS["fraunces-inter"];
  const root = document.documentElement;
  root.style.setProperty("--serif", `"${f.serif}", serif`);
  root.style.setProperty("--serif-display", `"${f.serif}", serif`);
  root.style.setProperty("--sans", `"${f.sans}", system-ui, sans-serif`);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);
  useEffect(() => { applyFontPair(tweaks.fontPair); }, [tweaks.fontPair]);

  return (
    <>
      <Nav />
      <Hero variant={tweaks.hero} />
      <Marquee />
      <SectionProblema />
      <PullQuote />
      <SectionProgramas />
      <SectionSinergia />
      <SectionEvidencias />
      <SectionROI />
      <SectionImplementacao />
      <SectionDiretrizes />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks · Ambikira">
        <TweakSection title="Paleta">
          <TweakRadio
            value={tweaks.palette}
            onChange={v => setTweak("palette", v)}
            options={[
              { value: "midnight", label: "Midnight" },
              { value: "ember", label: "Ember" },
              { value: "forest", label: "Forest" },
              { value: "paper", label: "Paper" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakRadio
            value={tweaks.hero}
            onChange={v => setTweak("hero", v)}
            options={[
              { value: "manifesto", label: "Manifesto" },
              { value: "split", label: "Split" },
              { value: "bleed", label: "Bleed" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Tipografia">
          <TweakSelect
            value={tweaks.fontPair}
            onChange={v => setTweak("fontPair", v)}
            options={[
              { value: "fraunces-inter", label: "Fraunces + Inter Tight" },
              { value: "instrument-mono", label: "Instrument Serif + Mono" },
              { value: "fraunces-mono", label: "Fraunces + JetBrains Mono" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
