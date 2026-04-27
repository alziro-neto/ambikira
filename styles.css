/* global React, Stat, Program, BarRow */
const { useState, useMemo } = React;

// ---------- HERO (3 variants) ----------
function Hero({ variant = "manifesto" }) {
  if (variant === "split") return <HeroSplit />;
  if (variant === "bleed") return <HeroBleed />;
  return <HeroManifesto />;
}

function HeroManifesto() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-meta reveal">
            <span className="pill"><span className="dot"></span> Relatório de Evidências · 2025</span>
            <span>Instituto Ambikira / Pesquisa</span>
            <span>Vol. 01 — Educação &amp; Assistência Social</span>
          </div>

          <h1 className="display reveal" data-d="1">
            Eficácia das<br/>
            <em>Intervenções</em><br/>
            Multidisciplinares
          </h1>

          <div className="hero-foot reveal" data-d="2">
            <p className="lede">
              Evidências de ensaios controlados aleatórios em países em desenvolvimento mostram que a integração de
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}> educação, renda e saúde </em>
              gera impactos superiores e duradouros em comparação com intervenções isoladas.
            </p>
            <div>
              <div className="kicker kicker--mute" style={{ marginBottom: 12 }}>O que você vai ler</div>
              <div className="mono" style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7 }}>
                01 / Crise de aprendizagem<br/>
                02 / Quatro programas de evidência<br/>
                03 / Sinergia &amp; integração<br/>
                04 / Tabela de RCTs<br/>
                05 / Cinco diretrizes
              </div>
            </div>
          </div>

          <div style={{ marginTop: 64, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }} className="reveal" data-d="3">
            <a href="#problema" className="scroll-cue">
              <span className="arrow"></span>
              Comece a ler
            </a>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-mute)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Tempo estimado · 12 min
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSplit() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-meta reveal" style={{ marginBottom: 48 }}>
          <span className="pill"><span className="dot"></span> Relatório · 2025</span>
          <span>Ambikira</span>
        </div>
        <div className="hero-split">
          <div>
            <h1 className="display reveal" style={{ fontSize: "clamp(56px, 8vw, 120px)" }}>
              Quando <em>integramos</em>, a pobreza cede.
            </h1>
            <p className="lede reveal" data-d="1" style={{ marginTop: 32 }}>
              Quatro modelos rigorosamente avaliados — TaRL, BRAC, CAMFED e Criança Feliz —
              demonstram que combinar educação, renda e suporte psicossocial multiplica o impacto.
            </p>
          </div>
          <div className="hero-split-visual reveal" data-d="2">
            <div className="kicker">Indicador-chave</div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="numeric" style={{ fontSize: "clamp(140px, 18vw, 280px)", color: "var(--accent)" }}>
                12<span style={{ fontSize: "0.5em", color: "var(--text)" }}>:1</span>
              </div>
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--text-soft)", lineHeight: 1.4 }}>
              Retorno social do investimento (SROI) reportado pela <strong style={{ color: "var(--text)" }}>CUFA</strong> em literacia financeira para crianças e adultos.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroBleed() {
  return (
    <header className="hero hero-bleed">
      <div className="container">
        <div className="hero-meta reveal" style={{ marginBottom: 32 }}>
          <span className="pill"><span className="dot"></span> 2025 · Relatório</span>
        </div>
        <h1 className="reveal">
          O que <em>funciona</em><br/>contra a pobreza.
        </h1>
        <p className="lede reveal" data-d="1" style={{ marginTop: 48, fontSize: "clamp(20px, 1.8vw, 28px)" }}>
          Síntese das evidências mais robustas em educação e assistência social, dos últimos 20 anos de RCTs em países em desenvolvimento.
        </p>
      </div>
    </header>
  );
}

// ---------- Section: Problema ----------
function SectionProblema() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">01</span> O problema</div>
          <div>
            <h2 className="h-section reveal">
              A crise de aprendizagem<br/>
              e a <em>pobreza multidimensional</em>.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5 }}>
              A vulnerabilidade social não é uma condição unidimensional. Enquanto o acesso à escola cresceu,
              a qualidade da aprendizagem e o ciclo da pobreza permanecem desafios centrais.
            </p>
          </div>
        </div>

        <div className="stats">
          <Stat num="70" sup="%" label="Crianças · 10 anos" d="1"
                desc="das crianças em países de baixa renda não conseguem ler uma história simples aos 10 anos." />
          <Stat num="2.500" sup="+" label="Catalogadas · 3ie" d="2"
                desc="avaliações de impacto catalogadas pela 3ie em países de baixa e média renda." />
          <Stat num="6" label="Países · BRAC" d="3"
                desc="países avaliados em simultâneo pelo estudo da Abordagem de Graduação." />
          <Stat num="18–36" label="Meses · Graduação" d="4"
                desc="de duração dos programas de graduação multidisciplinar com impactos persistentes." />
        </div>
      </div>
    </section>
  );
}

// ---------- Pull Quote ----------
function PullQuote() {
  return (
    <section className="pull-quote">
      <div className="container">
        <q className="reveal">
          Apenas o grupo com pacote completo manteve melhorias <em>15 meses</em> após o fim da intervenção.
        </q>
        <cite className="reveal" data-d="1">— Estudo de Burkina Faso · Banco Mundial · RCT</cite>
      </div>
    </section>
  );
}

// ---------- Section: Programas ----------
function SectionProgramas() {
  return (
    <section className="section" id="programas">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">02</span> Intervenções com evidência</div>
          <div>
            <h2 className="h-section reveal">
              O que <em>funciona</em><br/>— e por quê.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5 }}>
              Quatro modelos rigorosamente avaliados que combinam educação, renda e suporte psicossocial.
            </p>
          </div>
        </div>

        <div className="programs">
          <Program tag="Educação" num="01" title="Teaching at the Right Level (TaRL)"
            desc="Desenvolvido pela Pratham (Índia), o TaRL adapta o ensino ao nível real da criança. Seis avaliações aleatórias em sete estados produziram os maiores ganhos de aprendizagem registrados na literatura."
            meta="< US$ 10 / criança / ano" d="1" />
          <Program tag="Assistência Social" num="02" title="Abordagem de Graduação (BRAC)"
            desc="Integra transferência de ativos, suporte ao consumo, treinamento técnico, coaching domiciliar e poupança ao longo de 18–36 meses. Impactos persistentes comprovados em 6 países por RCTs."
            meta="Ganhos mantidos por 3 anos" d="2" />
          <Program tag="Educação + Renda" num="03" title="CAMFED — África Subsaariana"
            desc="Combina apoio financeiro direto para meninas em situação de pobreza com suporte pedagógico, mentoria e programas de vida. Reduz abandono e melhora escores em inglês e matemática."
            meta="Empoderamento + aprendizagem" d="3" />
          <Program tag="DPI Integrado" num="04" title="Criança Feliz (Brasil)"
            desc="Maior programa global de visitação domiciliar para Desenvolvimento na Primeira Infância, integrando o SUAS com ações multissetoriais. Expandido para mais de 3.000 municípios."
            meta="57 milhões de visitas / ano" d="4" />
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Sinergia ----------
function SectionSinergia() {
  return (
    <section className="section section--paper" id="sinergia">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">03</span> Sinergia</div>
          <div>
            <h2 className="h-section reveal">
              Por que a <em>integração</em><br/>
              supera modelos isolados.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.5 }}>
              Estudo do Banco Mundial em Burkina Faso: apenas o grupo com pacote completo —
              dinheiro + visitas domiciliares — manteve melhorias duradouras em educação e saúde 15 meses após o fim da intervenção.
            </p>
          </div>
        </div>

        <div className="compare reveal">
          <div className="compare-col">
            <div className="kicker kicker--ink" style={{ color: "var(--ink-soft)" }}>Intervenções isoladas</div>
            <h4>Impacto limitado, frequentemente efêmero.</h4>
            <ul>
              <li>Transferência de renda: aumenta matrícula, mas impacto em aprendizagem é pequeno ou nulo.</li>
              <li>TaRL sem suporte familiar: professores resistem a desviar do currículo oficial.</li>
              <li>Visitas domiciliares sem assistência complementar: insegurança alimentar compromete eficácia.</li>
              <li>Saúde mental sem rede social: efeitos de curto prazo sem sustentabilidade.</li>
            </ul>
          </div>
          <div className="compare-col compare-col--good">
            <div className="kicker kicker--ink">Recomendado · Abordagem integrada</div>
            <h4>Onde uma alavanca falha, três sustentam.</h4>
            <ul>
              <li><strong>Cash Plus:</strong> renda + serviços educacionais gera impactos que o dinheiro isolado não produz.</li>
              <li><strong>Graduação:</strong> coaching + ativos + saúde ataca simultaneamente renda, habilidades e motivação.</li>
              <li><strong>DPI integrado:</strong> nutrição + estímulo cognitivo + apoio psicossocial nos primeiros anos de vida.</li>
              <li><strong>Suporte mediador:</strong> 57% do efeito em saúde mental é mediado pela rede social.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 80 }}>
          <div className="kicker kicker--ink" style={{ marginBottom: 16 }}>Comparativo de impacto · Avaliações RCT</div>
          <div className="bars">
            <BarRow label="Pacote integrado" value="Alto" width="0.96" />
            <BarRow label="Cash + DPI (Cash Plus)" value="Alto" width="0.84" />
            <BarRow label="Graduação BRAC" value="Alto" width="0.78" />
            <BarRow label="Transferência isolada" value="Moderado" width="0.42" />
            <BarRow label="TaRL sem família" value="Moderado" width="0.36" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Evidências (table) ----------
const EVIDENCE_ROWS = [
  ["TaRL", "Índia (7 estados)", "Educação", "Maiores ganhos em competências básicas registrados na literatura global", "muito alto"],
  ["TaRL", "Madagáscar", "Educação", "Melhora significativa nos escores de matemática (3ª série)", "alto"],
  ["Catch Up", "Zâmbia", "Educação", "Escalado para 1.800 escolas; baixo custo por aluno", "alto"],
  ["Graduação BRAC", "Gana", "Renda", "+11% consumo total; poupança triplicada; ganhos pós-intervenção", "muito alto"],
  ["Graduação BRAC", "Etiópia / Índia", "Renda", "Melhora em status psicossocial; aumento de renda não-agrícola", "muito alto"],
  ["Rede de segurança integrada", "Burkina Faso", "Integrado", "Melhorias duradouras em educação e saúde reprodutiva (pacote completo)", "muito alto"],
  ["MDT Saúde Mental", "China (rural)", "Saúde", "Redução drástica de ansiedade; 57% do efeito mediado por suporte social", "alto"],
];

function SectionEvidencias() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return EVIDENCE_ROWS.filter(r => {
      const passF = filter === "Todos" || r[2] === filter;
      const q = search.toLowerCase().trim();
      const passS = !q || r.join(" ").toLowerCase().includes(q);
      return passF && passS;
    });
  }, [filter, search]);

  return (
    <section className="section" id="evidencias">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">04</span> Dados de impacto</div>
          <div>
            <h2 className="h-section reveal">
              Evidências por <em>programa</em><br/>
              e país.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19 }}>
              Resultados de ensaios controlados aleatórios (RCTs) e avaliações quase-experimentais.
            </p>
          </div>
        </div>

        <div className="tbl-wrap reveal">
          <div className="tbl-controls">
            {["Todos", "Educação", "Renda", "Integrado", "Saúde"].map(f => (
              <button
                key={f}
                className={"filter-chip" + (filter === f ? " active" : "")}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
            <div className="tbl-search">
              <span aria-hidden="true">⌕</span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar país, programa..."
              />
            </div>
          </div>

          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: "26%" }}>Programa</th>
                <th style={{ width: "18%" }}>Localização</th>
                <th style={{ width: "12%" }}>Domínio</th>
                <th>Impacto principal</th>
                <th style={{ width: "16%" }}>Evidência</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={i}>
                  <td>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td><span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>{r[2]}</span></td>
                  <td>{r[3]}</td>
                  <td>
                    <span className={"evidence-badge " + (r[4] === "muito alto" ? "evidence-badge--high" : "evidence-badge--mid")}>
                      RCT · {r[4]}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan="5" style={{ textAlign: "center", padding: 48, color: "var(--text-mute)" }}>Nenhum resultado.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: ROI ----------
function SectionROI() {
  return (
    <section className="section section--paper">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">05</span> Retorno social</div>
          <div>
            <h2 className="h-section reveal">
              Retorno <em>social</em><br/>
              sobre o investimento.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19 }}>
              A integração de assistência e educação gera economias ao evitar custos futuros com doenças,
              desemprego crônico e instabilidade social.
            </p>
          </div>
        </div>

        <div className="roi">
          <div className="roi-card reveal" data-d="1">
            <div className="kicker kicker--ink" style={{ color: "var(--ink-soft)" }}>SROI</div>
            <div className="roi-num">12<em>:1</em></div>
            <div>
              <div className="roi-org">CUFA</div>
              <div className="roi-desc">Literacia financeira e empreendedorismo para crianças e adultos.</div>
            </div>
          </div>
          <div className="roi-card reveal" data-d="2">
            <div className="kicker kicker--ink" style={{ color: "var(--ink-soft)" }}>Camboja</div>
            <div className="roi-num">Alto</div>
            <div>
              <div className="roi-org">KHANA</div>
              <div className="roi-desc">Cuidados integrados para crianças órfãs e vulneráveis — segurança alimentar + saúde.</div>
            </div>
          </div>
          <div className="roi-card reveal" data-d="3">
            <div className="kicker kicker--ink" style={{ color: "var(--ink-soft)" }}>Custo / criança / ano</div>
            <div className="roi-num">&lt;<em>$10</em></div>
            <div>
              <div className="roi-org">TaRL Global</div>
              <div className="roi-desc">Custo unitário para ganhos de aprendizagem robustos em larga escala.</div>
            </div>
          </div>
          <div className="roi-card reveal" data-d="4">
            <div className="kicker kicker--ink" style={{ color: "var(--ink-soft)" }}>Brasil · DPI</div>
            <div className="roi-num">Preventivo</div>
            <div>
              <div className="roi-org">Criança Feliz</div>
              <div className="roi-desc">Redução futura de gastos com educação corretiva e sistema de justiça.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Implementação ----------
function SectionImplementacao() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">06</span> Implementação</div>
          <div>
            <h2 className="h-section reveal">
              Barreiras &amp;<br/>
              <em>fatores de sucesso</em>.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19 }}>
              A superioridade dos modelos integrados na teoria enfrenta obstáculos concretos na prática.
            </p>
          </div>
        </div>

        <div className="bullets-2 reveal">
          <div className="bullets-col">
            <h4><span className="marker">— Barreiras</span></h4>
            <ul>
              <li><span className="idx">B.01</span><span>Fragmentação governamental e ausência de coordenação intersetorial.</span></li>
              <li><span className="idx">B.02</span><span>Carga de trabalho excessiva e financiamento instável das equipes.</span></li>
              <li><span className="idx">B.03</span><span>Baixa confiança comunitária nas instituições.</span></li>
              <li><span className="idx">B.04</span><span>Expansão acelerada sem controle de qualidade.</span></li>
              <li><span className="idx">B.05</span><span>Resistência dos professores ao desvio do currículo oficial.</span></li>
            </ul>
          </div>
          <div className="bullets-col bullets-col--good">
            <h4><span className="marker" style={{ color: "var(--accent)" }}>+ Sucesso</span></h4>
            <ul>
              <li><span className="idx">S.01</span><span>Liderança engajada e comunicação interdisciplinar forte.</span></li>
              <li><span className="idx">S.02</span><span>Agentes comunitários locais (trusted peers) como mediadores.</span></li>
              <li><span className="idx">S.03</span><span>Monitoramento em tempo real com ajustes baseados em dados.</span></li>
              <li><span className="idx">S.04</span><span>Infraestrutura digital para coordenação e coleta de dados.</span></li>
              <li><span className="idx">S.05</span><span>Parcerias institucionais que transcendem mandatos políticos.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Recomendações ----------
function SectionDiretrizes() {
  const recs = [
    ["01", "Adotar o modelo \u201CCash Plus\u201D", "A transferência de renda deve ser o ponto de entrada para serviços complementares de educação, saúde e DPI."],
    ["02", "Investir em DPI integrado", "A maior taxa de retorno social ocorre com nutrição + estímulo cognitivo + apoio psicossocial nos primeiros anos de vida."],
    ["03", "Fortalecer a capacidade local", "Agentes comunitários e ferramentas digitais são essenciais para coleta de dados e decisão em tempo real."],
    ["04", "Priorizar qualidade antes da escala", "A diluição da qualidade é a principal causa do fracasso de programas integrados em expansão acelerada."],
    ["05", "Utilizar métricas sociais robustas", "Metodologias como SROI demonstram valor além do PIB, facilitando o convencimento de doadores e ministérios."],
  ];
  return (
    <section className="section" id="diretrizes" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-head">
          <div className="label"><span className="num">07</span> Recomendações estratégicas</div>
          <div>
            <h2 className="h-section reveal">
              Cinco diretrizes para<br/>
              <em>formuladores de políticas</em>.
            </h2>
            <p className="body-text reveal" data-d="1" style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 19 }}>
              Derivadas do conjunto de evidências analisadas neste relatório.
            </p>
          </div>
        </div>

        <div className="recs">
          {recs.map(([n, t, d], i) => (
            <article className="rec reveal" key={n} data-d={String((i % 4) + 1)}>
              <div className="rec-num">{n}</div>
              <div>
                <h3 className="rec-title">{t}</h3>
                <p className="rec-text">{d}</p>
              </div>
              <div className="rec-arrow">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-grid">
          <div className="reveal">
            <div className="kicker" style={{ marginBottom: 16 }}>— Próximos passos</div>
            <h2>Da evidência<br/> à <em>política pública</em>.</h2>
          </div>
          <div className="reveal" data-d="1">
            <p>
              Acesse o relatório completo, a base de RCTs catalogados e nossos guias práticos
              para desenho de programas integrados em educação e assistência social.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">
                Baixar PDF completo <span className="arrow">→</span>
              </a>
              <a href="#" className="btn btn-ghost">
                Falar com a equipe <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="row">
          <div>
            <a href="#" className="brand">
              <img src="logo.png" alt="Instituto Ambikira" className="brand-logo brand-logo--lg" />
            </a>
            <p>
              Pesquisa aplicada em desenvolvimento humano, educação e assistência social.
              Síntese de evidências para formuladores de políticas e organizações de impacto.
            </p>
          </div>
          <div>
            <h5>Relatório</h5>
            <ul>
              <li><a href="#problema">Problema</a></li>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#sinergia">Sinergia</a></li>
              <li><a href="#evidencias">Evidências</a></li>
              <li><a href="#diretrizes">Diretrizes</a></li>
            </ul>
          </div>
          <div>
            <h5>Fontes</h5>
            <ul>
              <li>J-PAL</li>
              <li>3ie</li>
              <li>IPA</li>
              <li>Banco Mundial</li>
              <li>BRAC · Pratham · CAMFED</li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li>contato@ambikira.org</li>
              <li>Imprensa</li>
              <li>Parcerias institucionais</li>
              <li>Newsletter mensal</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2025 Ambikira · Todos os direitos reservados</span>
          <span>Vol. 01 · Edição revisada</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Hero, SectionProblema, SectionProgramas, SectionSinergia,
  SectionEvidencias, SectionROI, SectionImplementacao,
  SectionDiretrizes, CTA, Footer, PullQuote,
});
