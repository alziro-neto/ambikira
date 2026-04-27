/* ============================================================
   AMBIKIRA — editorial premium
   ============================================================ */

:root {
  /* Default palette: Midnight (navy + lime) */
  --bg: #0A1628;
  --bg-soft: #0F1E36;
  --bg-elev: #14253F;
  --paper: #F4EFE6;
  --paper-soft: #EAE2D2;
  --ink: #0A1628;
  --ink-soft: #2A3A52;
  --rule: rgba(244, 239, 230, 0.14);
  --rule-strong: rgba(244, 239, 230, 0.32);
  --text: #E8E2D5;
  --text-soft: #A9AFBC;
  --text-mute: #6B7384;
  --accent: #D4FF3A;            /* lime */
  --accent-ink: #0A1628;
  --accent-soft: #B8E02E;
  --accent-2: #FF6B35;          /* secondary punch */
  --hairline: 1px;
  --container: 1440px;
  --gutter: clamp(20px, 4vw, 64px);

  --serif: "Fraunces", "Times New Roman", serif;
  --serif-display: "Fraunces", "Times New Roman", serif;
  --sans: "Inter Tight", "Helvetica Neue", system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", monospace;
  --instrument: "Instrument Serif", "Times New Roman", serif;
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img, svg { max-width: 100%; display: block; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; padding: 0; }
a { color: inherit; text-decoration: none; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "ss01", "ss02", "cv11";
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

::selection { background: var(--accent); color: var(--accent-ink); }

/* ---------- Layout primitives ---------- */
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}

.rule {
  height: var(--hairline);
  background: var(--rule);
  width: 100%;
  border: 0;
  margin: 0;
}
.rule--strong { background: var(--rule-strong); }

/* ---------- Type system ---------- */
.kicker {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
}

.kicker--ink { color: var(--ink); }
.kicker--mute { color: var(--text-mute); }

.eyebrow-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
}
.eyebrow-row .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent);
  flex: none;
  box-shadow: 0 0 0 4px rgba(212, 255, 58, 0.12);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--serif-display);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.02;
  margin: 0;
  text-wrap: balance;
}

.display {
  font-family: var(--serif-display);
  font-weight: 300;
  font-size: clamp(64px, 11vw, 184px);
  line-height: 0.92;
  letter-spacing: -0.035em;
  font-variation-settings: "opsz" 144, "SOFT" 30;
}
.display em {
  font-style: italic;
  font-weight: 300;
  color: var(--accent);
  font-variation-settings: "opsz" 144, "SOFT" 100;
}

.h-section {
  font-size: clamp(40px, 5.6vw, 84px);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 0.98;
  font-variation-settings: "opsz" 144, "SOFT" 50;
}
.h-section em {
  font-style: italic;
  color: var(--accent);
  font-variation-settings: "opsz" 144, "SOFT" 100;
}

.h-card {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(22px, 2vw, 30px);
  letter-spacing: -0.015em;
  line-height: 1.1;
}

.lede {
  font-family: var(--serif);
  font-weight: 300;
  font-size: clamp(18px, 1.5vw, 24px);
  line-height: 1.4;
  color: var(--text);
  letter-spacing: -0.01em;
  text-wrap: pretty;
  max-width: 60ch;
}

p { text-wrap: pretty; }

.body-text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-soft);
  max-width: 62ch;
}

.numeric {
  font-family: var(--serif-display);
  font-weight: 300;
  font-variation-settings: "opsz" 144, "SOFT" 0;
  font-feature-settings: "tnum", "lnum";
  letter-spacing: -0.04em;
  line-height: 0.85;
}

.mono {
  font-family: var(--mono);
  font-feature-settings: "tnum";
}

/* ---------- Nav ---------- */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  background: color-mix(in oklab, var(--bg) 72%, transparent);
  border-bottom: 1px solid var(--rule);
  transition: transform 0.4s cubic-bezier(.2,.8,.2,1);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 32px;
  overflow: hidden;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--serif);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--text);
  min-width: 0;
  flex-shrink: 1;
}
img.brand-logo {
  height: 22px !important;
  max-height: 22px !important;
  width: auto !important;
  max-width: 200px;
  display: block;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
img.brand-logo--lg {
  height: 36px !important;
  max-height: 36px !important;
}
.section--paper .brand-logo,
.brand--ink .brand-logo {
  filter: none;
}
.brand small {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-mute);
  font-weight: 500;
  padding-left: 10px;
  margin-left: 4px;
  border-left: 1px solid var(--rule-strong);
}

.nav-links {
  display: flex;
  gap: 28px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-soft);
}
.nav-links a {
  position: relative;
  padding: 4px 0;
  transition: color 0.2s;
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0; right: 100%;
  bottom: -2px;
  height: 1px;
  background: var(--accent);
  transition: right 0.4s cubic-bezier(.2,.8,.2,1);
}
.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { right: 0; }

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  transition: transform 0.2s;
}
.nav-cta:hover { transform: translateY(-1px); }

@media (max-width: 880px) {
  .nav-links { display: none; }
}

/* ---------- HERO ---------- */
.hero {
  position: relative;
  padding: clamp(120px, 18vh, 200px) 0 clamp(40px, 6vh, 80px);
  overflow: hidden;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 4vw, 64px);
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
}
.hero-meta .pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--rule-strong);
  border-radius: 999px;
}
.hero-meta .pill .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .55; transform: scale(0.85); }
}

.hero h1 {
  margin-top: 8px;
}

.hero-foot {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(32px, 5vw, 88px);
  align-items: end;
  padding-top: 32px;
  border-top: 1px solid var(--rule);
}
@media (max-width: 880px) {
  .hero-foot { grid-template-columns: 1fr; gap: 32px; }
}

.scroll-cue {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
}
.scroll-cue .arrow {
  display: inline-block;
  width: 18px; height: 1px;
  background: currentColor;
  position: relative;
}
.scroll-cue .arrow::after {
  content: "";
  position: absolute;
  right: 0; top: -3px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(-45deg);
}

/* ---------- Marquee ---------- */
.marquee {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  padding: 18px 0;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-track {
  display: inline-flex;
  gap: 56px;
  animation: marquee 60s linear infinite;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-soft);
}
.marquee-track > span {
  display: inline-flex;
  align-items: center;
  gap: 56px;
}
.marquee-track > span::after {
  content: "◆";
  color: var(--accent);
  font-size: 8px;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ---------- Section primitive ---------- */
.section {
  padding: clamp(80px, 12vh, 160px) 0;
  position: relative;
}
.section--paper {
  background: var(--paper);
  color: var(--ink);
}
.section--paper .body-text { color: var(--ink-soft); }
.section--paper .kicker { color: var(--accent-ink); }
.section--paper .rule { background: rgba(10,22,40,0.14); }
.section--paper .rule--strong { background: rgba(10,22,40,0.32); }
.section--paper .h-section em { color: var(--accent-ink); position: relative; }
.section--paper .h-section em::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0.05em;
  height: 0.32em;
  background: var(--accent);
  z-index: -1;
}

.section-head {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: clamp(24px, 4vw, 64px);
  align-items: start;
  margin-bottom: clamp(48px, 8vh, 96px);
}
@media (max-width: 880px) {
  .section-head { grid-template-columns: 1fr; gap: 16px; }
}
.section-head .label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-top: 18px;
}
.section-head .label .num {
  font-family: var(--serif);
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
}
.section--paper .section-head .label { color: var(--ink-soft); }
.section--paper .section-head .label .num { color: var(--ink); }

/* ---------- Stats grid ---------- */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--rule-strong);
  border-bottom: 1px solid var(--rule-strong);
}
.stat {
  padding: 40px 28px 32px;
  border-right: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  transition: background 0.3s;
}
.stat:last-child { border-right: 0; }
.stat:hover { background: var(--bg-soft); }
.section--paper .stat:hover { background: var(--paper-soft); }
.section--paper .stat { border-right-color: rgba(10,22,40,0.14); }

.stat .label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-mute);
}
.stat .num-big {
  font-family: var(--serif-display);
  font-weight: 200;
  font-size: clamp(56px, 6vw, 104px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  font-variation-settings: "opsz" 144;
  color: var(--text);
}
.section--paper .stat .num-big { color: var(--ink); }
.stat .num-big sup {
  font-size: 0.32em;
  vertical-align: super;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: 4px;
  color: var(--accent);
  font-variation-settings: "opsz" 36;
}
.section--paper .stat .num-big sup { color: var(--ink); background: var(--accent); padding: 2px 6px; }

.stat .desc {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-soft);
  max-width: 28ch;
}
.section--paper .stat .desc { color: var(--ink-soft); }

@media (max-width: 980px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .stat:nth-child(2) { border-right: 0; }
  .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--rule); }
}
@media (max-width: 580px) {
  .stats { grid-template-columns: 1fr; }
  .stat { border-right: 0; border-bottom: 1px solid var(--rule); }
  .stat:last-child { border-bottom: 0; }
}

/* ---------- Programs grid (4 cards) ---------- */
.programs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--rule-strong);
  border-top: 1px solid var(--rule-strong);
  border-bottom: 1px solid var(--rule-strong);
}
.section--paper .programs { background: rgba(10,22,40,0.18); border-top-color: rgba(10,22,40,0.32); border-bottom-color: rgba(10,22,40,0.32); }

.program {
  background: var(--bg);
  padding: 40px 36px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: background 0.3s, transform 0.4s cubic-bezier(.2,.8,.2,1);
  position: relative;
  overflow: hidden;
  min-height: 380px;
}
.section--paper .program { background: var(--paper); }

.program::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 0%, var(--accent), transparent 50%);
  opacity: 0;
  transition: opacity 0.5s;
  mix-blend-mode: overlay;
  pointer-events: none;
}
.program:hover::before { opacity: 0.18; }
.program:hover { background: var(--bg-soft); }
.section--paper .program:hover { background: var(--paper-soft); }

.program .tag {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.section--paper .program .tag { color: var(--ink); }
.section--paper .program .tag::before {
  content: "";
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
}
.program .num {
  position: absolute;
  top: 28px; right: 32px;
  font-family: var(--serif-display);
  font-weight: 200;
  font-size: 90px;
  line-height: 0.8;
  color: var(--rule-strong);
  letter-spacing: -0.04em;
  pointer-events: none;
  font-variation-settings: "opsz" 144;
}
.section--paper .program .num { color: rgba(10,22,40,0.12); }

.program h3 {
  font-size: clamp(26px, 2.4vw, 36px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.05;
  max-width: 14ch;
}
.program p {
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-soft);
  margin: 0;
  max-width: 50ch;
}
.section--paper .program p { color: var(--ink-soft); }

.program .meta {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text);
}
.section--paper .program .meta { border-top-color: rgba(10,22,40,0.14); color: var(--ink); }
.program .meta .arrow {
  width: 28px; height: 28px;
  border: 1px solid var(--rule-strong);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s, transform 0.3s;
}
.section--paper .program .meta .arrow { border-color: rgba(10,22,40,0.32); }
.program:hover .meta .arrow {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
  transform: rotate(-45deg);
}

@media (max-width: 880px) {
  .programs { grid-template-columns: 1fr; }
}

/* ---------- Synergy compare ---------- */
.compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--rule-strong);
  border: 1px solid var(--rule-strong);
}
.compare-col {
  background: var(--bg);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.compare-col--good {
  background: var(--bg);
  position: relative;
  border-left: 4px solid var(--accent);
}
.compare-col--good::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(212,255,58,0.08), transparent 60%);
  pointer-events: none;
}
.compare h4 {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0;
}
.compare ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.compare li {
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-soft);
  padding-left: 28px;
  position: relative;
}
.compare li::before {
  content: "";
  position: absolute;
  left: 0; top: 9px;
  width: 14px; height: 1px;
  background: var(--text-mute);
}
.compare-col--good li::before { background: var(--accent); height: 2px; top: 8px; }

@media (max-width: 880px) {
  .compare { grid-template-columns: 1fr; }
}

/* ---------- Evidence table ---------- */
.tbl-wrap {
  border: 1px solid var(--rule-strong);
  border-radius: 0;
  overflow: hidden;
}
.tbl-controls {
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--rule-strong);
  background: var(--bg-soft);
}
.section--paper .tbl-controls { background: var(--paper-soft); }

.filter-chip {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 12px;
  border: 1px solid var(--rule-strong);
  border-radius: 999px;
  color: var(--text-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.section--paper .filter-chip { color: var(--ink-soft); border-color: rgba(10,22,40,0.32); }
.filter-chip:hover { color: var(--text); border-color: var(--text); }
.section--paper .filter-chip:hover { color: var(--ink); border-color: var(--ink); }
.filter-chip.active {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
}

.tbl-search {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 12px;
  border-bottom: 1px solid var(--rule-strong);
  padding: 4px 0;
  min-width: 200px;
}
.section--paper .tbl-search { border-bottom-color: rgba(10,22,40,0.32); }
.tbl-search input {
  background: transparent;
  border: 0;
  outline: 0;
  color: inherit;
  font: inherit;
  flex: 1;
  letter-spacing: 0.04em;
}
.tbl-search input::placeholder { color: var(--text-mute); }
.section--paper .tbl-search input::placeholder { color: var(--ink-soft); }

table.tbl {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.tbl thead th {
  text-align: left;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-mute);
  font-weight: 500;
  padding: 16px 24px;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--rule-strong);
  white-space: nowrap;
}
.section--paper .tbl thead th { background: var(--paper-soft); color: var(--ink-soft); }

.tbl tbody td {
  padding: 22px 24px;
  border-bottom: 1px solid var(--rule);
  vertical-align: top;
  color: var(--text-soft);
  line-height: 1.45;
}
.section--paper .tbl tbody td { color: var(--ink-soft); border-bottom-color: rgba(10,22,40,0.12); }

.tbl tbody tr {
  transition: background 0.2s;
  cursor: default;
}
.tbl tbody tr:hover { background: var(--bg-soft); }
.section--paper .tbl tbody tr:hover { background: var(--paper-soft); }

.tbl tbody td:first-child {
  font-family: var(--serif);
  color: var(--text);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.01em;
}
.section--paper .tbl tbody td:first-child { color: var(--ink); }

.evidence-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--rule-strong);
  white-space: nowrap;
}
.section--paper .evidence-badge { border-color: rgba(10,22,40,0.32); }
.evidence-badge--high {
  background: rgba(212,255,58,0.14);
  color: var(--accent);
  border-color: rgba(212,255,58,0.4);
}
.section--paper .evidence-badge--high { background: var(--accent); color: var(--ink); border-color: var(--accent); }
.evidence-badge--mid {
  color: var(--text-soft);
}
.section--paper .evidence-badge--mid { color: var(--ink-soft); }

@media (max-width: 880px) {
  .tbl thead { display: none; }
  .tbl tbody td {
    display: block;
    padding: 8px 20px;
    border-bottom: 0;
  }
  .tbl tbody td:first-child {
    padding-top: 22px;
    font-size: 19px;
  }
  .tbl tbody td:last-child { padding-bottom: 22px; border-bottom: 1px solid var(--rule); }
}

/* ---------- ROI / SROI cards ---------- */
.roi {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--rule-strong);
  border-top: 1px solid var(--rule-strong);
  border-bottom: 1px solid var(--rule-strong);
}
.roi-card {
  background: var(--bg);
  padding: 36px 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  min-height: 280px;
  transition: background 0.3s;
}
.roi-card:hover { background: var(--bg-soft); }
.section--paper .roi-card { background: var(--paper); }
.section--paper .roi-card:hover { background: var(--paper-soft); }

.roi-card .roi-num {
  font-family: var(--serif-display);
  font-weight: 200;
  font-size: clamp(72px, 7vw, 128px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  font-variation-settings: "opsz" 144;
  color: var(--text);
  white-space: nowrap;
}
.section--paper .roi-card .roi-num { color: var(--ink); }
.roi-card .roi-num em {
  font-style: italic;
  color: var(--accent);
  font-variation-settings: "opsz" 144, "SOFT" 100;
}

.roi-card .roi-org {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text);
  font-weight: 600;
}
.section--paper .roi-card .roi-org { color: var(--ink); }

.roi-card .roi-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-soft);
  margin-top: auto;
}
.section--paper .roi-card .roi-desc { color: var(--ink-soft); }

@media (max-width: 980px) {
  .roi { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 580px) {
  .roi { grid-template-columns: 1fr; }
}

/* ---------- Two-col bullets (barreiras / sucesso) ---------- */
.bullets-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--rule-strong);
  border-top: 1px solid var(--rule-strong);
  border-bottom: 1px solid var(--rule-strong);
}
.bullets-col {
  background: var(--bg);
  padding: 40px 36px;
}
.section--paper .bullets-col { background: var(--paper); }
.bullets-col h4 {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.015em;
  margin: 0 0 24px;
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.bullets-col h4 .marker {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
}
.bullets-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.bullets-col li {
  font-size: 15px;
  line-height: 1.5;
  padding: 18px 0;
  border-bottom: 1px solid var(--rule);
  color: var(--text-soft);
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  align-items: start;
}
.section--paper .bullets-col li { border-bottom-color: rgba(10,22,40,0.12); color: var(--ink-soft); }
.bullets-col li:last-child { border-bottom: 0; }
.bullets-col li .idx {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--text-mute);
  padding-top: 3px;
}
.bullets-col--good li .idx { color: var(--accent); }

@media (max-width: 880px) {
  .bullets-2 { grid-template-columns: 1fr; }
}

/* ---------- Recommendations (numbered manifesto) ---------- */
.recs {
  border-top: 1px solid var(--rule-strong);
}
.rec {
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  gap: clamp(20px, 4vw, 64px);
  align-items: baseline;
  padding: clamp(36px, 5vh, 56px) 0;
  border-bottom: 1px solid var(--rule-strong);
  position: relative;
  cursor: pointer;
  transition: padding 0.4s cubic-bezier(.2,.8,.2,1);
}
.rec::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(.2,.8,.2,1);
  z-index: 0;
}
.rec:hover::before { transform: scaleX(1); }
.rec:hover .rec-num { color: var(--accent-ink); }
.rec:hover .rec-title { color: var(--accent-ink); }
.rec:hover .rec-text { color: var(--accent-ink); }
.rec:hover .rec-arrow { color: var(--accent-ink); }
.rec > * { position: relative; z-index: 1; }

.rec-num {
  font-family: var(--serif-display);
  font-weight: 200;
  font-size: clamp(48px, 5vw, 80px);
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.04em;
  font-variation-settings: "opsz" 144;
  font-feature-settings: "tnum";
  transition: color 0.4s;
}
.rec-title {
  font-family: var(--serif);
  font-size: clamp(24px, 2.5vw, 38px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 12px;
  color: var(--text);
  transition: color 0.4s;
}
.rec-text {
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-soft);
  margin: 0;
  max-width: 64ch;
  transition: color 0.4s;
}
.rec-arrow {
  font-family: var(--serif);
  font-size: 32px;
  color: var(--text-mute);
  text-align: right;
  transition: color 0.4s, transform 0.4s;
}
.rec:hover .rec-arrow { transform: translateX(8px); }

@media (max-width: 720px) {
  .rec { grid-template-columns: 80px 1fr; }
  .rec-arrow { display: none; }
}

/* ---------- CTA ---------- */
.cta {
  position: relative;
  padding: clamp(80px, 12vh, 160px) 0;
  background: var(--bg);
  overflow: hidden;
  border-top: 1px solid var(--rule);
}
.cta::before {
  content: "INSTITUTO AMBIKIRA";
  position: absolute;
  bottom: -0.25em;
  left: -0.04em;
  font-family: var(--serif-display);
  font-weight: 200;
  font-size: clamp(140px, 28vw, 480px);
  letter-spacing: -0.05em;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px var(--rule-strong);
  pointer-events: none;
  white-space: nowrap;
  font-variation-settings: "opsz" 144;
}
.cta .container { position: relative; z-index: 1; }
.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 88px);
  align-items: end;
}
@media (max-width: 880px) {
  .cta-grid { grid-template-columns: 1fr; }
}
.cta h2 {
  font-size: clamp(40px, 5.6vw, 84px);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 0.98;
  font-variation-settings: "opsz" 144, "SOFT" 50;
}
.cta h2 em { font-style: italic; color: var(--accent); }
.cta p {
  font-family: var(--serif);
  font-size: 19px;
  line-height: 1.5;
  color: var(--text-soft);
  margin: 0 0 32px;
}
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 999px;
  transition: transform 0.2s, background 0.2s;
}
.btn-primary {
  background: var(--accent);
  color: var(--accent-ink);
}
.btn-primary:hover { transform: translateY(-2px); background: var(--accent-soft); }
.btn-ghost {
  border: 1px solid var(--rule-strong);
  color: var(--text);
}
.btn-ghost:hover { border-color: var(--text); }
.btn .arrow { transition: transform 0.3s; }
.btn:hover .arrow { transform: translateX(4px); }

/* ---------- Footer ---------- */
footer.foot {
  padding: 64px 0 40px;
  background: var(--bg);
  border-top: 1px solid var(--rule);
  font-size: 13px;
  color: var(--text-mute);
}
footer.foot .row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--rule);
  margin-bottom: 24px;
}
@media (max-width: 720px) {
  footer.foot .row { grid-template-columns: 1fr 1fr; }
}
footer.foot h5 {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin: 0 0 16px;
  font-weight: 500;
}
footer.foot p {
  font-family: var(--serif);
  font-size: 16px;
  line-height: 1.55;
  color: var(--text-soft);
  margin: 16px 0 0;
  max-width: 38ch;
}
footer.foot ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
footer.foot a:hover { color: var(--text); }
footer.foot .legal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ---------- Reveal animation ---------- */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(.2,.8,.2,1), transform 0.8s cubic-bezier(.2,.8,.2,1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}

/* ---------- Stagger for stats etc ---------- */
.reveal[data-d="1"] { transition-delay: 0.05s; }
.reveal[data-d="2"] { transition-delay: 0.10s; }
.reveal[data-d="3"] { transition-delay: 0.15s; }
.reveal[data-d="4"] { transition-delay: 0.20s; }

/* ---------- Hero giant numeral chrome ---------- */
.hero-overlay-num {
  position: absolute;
  right: -2vw; top: 18vh;
  font-family: var(--instrument);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(280px, 40vw, 720px);
  line-height: 0.78;
  color: var(--accent);
  opacity: 0.92;
  pointer-events: none;
  letter-spacing: -0.06em;
  z-index: 0;
  user-select: none;
  mix-blend-mode: normal;
}
.hero .container { position: relative; z-index: 1; }
.hero-overlay-num::after {
  content: "%";
  font-size: 0.42em;
  color: var(--accent);
  vertical-align: super;
  margin-left: 4px;
  font-style: normal;
}
@media (max-width: 720px) {
  .hero-overlay-num { display: none; }
}

/* Hero variant 2: split */
.hero-split {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(40px, 6vw, 88px);
  align-items: center;
}
.hero-split-visual {
  border: 1px solid var(--rule-strong);
  padding: 32px;
  background: linear-gradient(180deg, var(--bg-soft), var(--bg));
  position: relative;
  aspect-ratio: 4/5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 880px) {
  .hero-split { grid-template-columns: 1fr; }
  .hero-split-visual { aspect-ratio: auto; }
}

/* Hero variant 3: full-bleed type */
.hero-bleed h1 {
  font-size: clamp(72px, 14vw, 240px);
  line-height: 0.88;
  letter-spacing: -0.045em;
}

/* ---------- Inline data viz (impact bars) ---------- */
.bars {
  display: grid;
  gap: 20px;
  margin-top: 32px;
}
.bar-row {
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  align-items: center;
  gap: 16px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.bar-track {
  height: 8px;
  background: var(--rule);
  position: relative;
  overflow: hidden;
}
.section--paper .bar-track { background: rgba(10,22,40,0.1); }
.bar-fill {
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 1.4s cubic-bezier(.2,.8,.2,1);
}
.visible .bar-fill { transform: scaleX(var(--w, 0.5)); }
.bar-row .lbl { color: var(--text); }
.section--paper .bar-row .lbl { color: var(--ink); }
.bar-row .val { text-align: right; color: var(--accent); font-weight: 600; }
.section--paper .bar-row .val { color: var(--ink); }

@media (max-width: 720px) {
  .bar-row { grid-template-columns: 1fr; gap: 6px; }
}

/* ---------- Pull quote ---------- */
.pull-quote {
  padding: clamp(60px, 10vh, 120px) 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.pull-quote q {
  font-family: var(--serif-display);
  font-weight: 300;
  font-size: clamp(32px, 4.4vw, 64px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-variation-settings: "opsz" 144, "SOFT" 60;
  display: block;
  max-width: 28ch;
  quotes: "“" "”";
}
.pull-quote q::before {
  font-family: var(--instrument);
  font-style: italic;
  color: var(--accent);
  font-size: 1.4em;
  vertical-align: -0.25em;
  margin-right: 0.05em;
}
.pull-quote q::after { color: var(--accent); }
.pull-quote em { font-style: italic; color: var(--accent); }
.pull-quote cite {
  display: block;
  margin-top: 24px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-mute);
  font-style: normal;
}
