/* global React */
const { useEffect, useRef, useState } = React;

// ---------- Reveal on scroll ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// ---------- Nav ----------
function Nav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 200 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" style={{ transform: hidden ? "translateY(-100%)" : "none" }}>
      <div className="container nav-inner">
        <a href="#" className="brand">
          <img src="logo.png" alt="Instituto Ambikira" className="brand-logo" width="120" height="22" />
          <small>Relatório · 2025</small>
        </a>
        <div className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#programas">Programas</a>
          <a href="#sinergia">Sinergia</a>
          <a href="#evidencias">Evidências</a>
          <a href="#diretrizes">Diretrizes</a>
        </div>
        <a href="#cta" className="nav-cta">
          Baixar relatório
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </nav>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const items = [
    "J-PAL", "3ie", "IPA", "BRAC", "PRATHAM", "Banco Mundial",
    "CAMFED", "Criança Feliz", "TaRL", "KHANA", "CUFA",
  ];
  const line = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>{it}</React.Fragment>
      )).reduce((acc, el, i) => acc.concat(i ? [el] : [el]), [])}
    </span>
  );
  // Build manually for separators
  const renderLine = (key) => (
    <span key={key}>
      {items.flatMap((it, i) => [
        <span key={i} style={{ marginRight: 56 }}>{it}</span>,
      ])}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {renderLine("a")}
        {renderLine("b")}
      </div>
    </div>
  );
}

// ---------- Stat ----------
function Stat({ num, sup, label, desc, d }) {
  return (
    <div className="stat reveal" data-d={d}>
      <div className="label-row">
        <span>{label}</span>
        <span className="mono">↗</span>
      </div>
      <div className="num-big">
        {num}{sup && <sup>{sup}</sup>}
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
}

// ---------- Program card ----------
function Program({ tag, num, title, desc, meta, d }) {
  return (
    <article className="program reveal" data-d={d}>
      <span className="num">{num}</span>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="meta">
        <span>{meta}</span>
        <span className="arrow" aria-hidden="true">→</span>
      </div>
    </article>
  );
}

// ---------- Bar row ----------
function BarRow({ label, value, width }) {
  return (
    <div className="bar-row reveal">
      <div className="lbl">{label}</div>
      <div className="bar-track">
        <div className="bar-fill" style={{ "--w": width }}></div>
      </div>
      <div className="val">{value}</div>
    </div>
  );
}

Object.assign(window, { useReveal, Nav, Marquee, Stat, Program, BarRow });
