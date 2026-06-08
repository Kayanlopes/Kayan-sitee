const projects = [
  { title: "NTX Bank", tags: "Product Design, Design System", color: "from-violet-900/40 to-neutral-900" },
  { title: "SPA AI Assistant", tags: "UI Design, AI, Microsoft", color: "from-blue-900/40 to-neutral-900" },
  { title: "Webbie AI", tags: "Product Design, AI", color: "from-emerald-900/40 to-neutral-900" },
  { title: "Prolog App", tags: "Product Design, Design System", color: "from-orange-900/40 to-neutral-900" },
  { title: "LongView", tags: "UI Design, Design System", color: "from-cyan-900/40 to-neutral-900" },
  { title: "AvidLive", tags: "UI Design, Interface Design", color: "from-rose-900/40 to-neutral-900" },
];

const services = [
  { name: "UI/UX Design", description: "Interfaces intuitivas e visualmente refinadas, do wireframe ao protótipo de alta fidelidade." },
  { name: "Design Systems", description: "Sistemas escaláveis com tokens, componentes e documentação pra manter consistência no produto." },
  { name: "Pesquisa & Estratégia", description: "Discovery, entrevistas com usuários e análise de dados pra fundamentar decisões de design." },
  { name: "Prototipação & Testes", description: "Protótipos interativos no Figma e validação com usuários reais antes do desenvolvimento." },
];

const companies = ["Prolog", "LongView", "AvidLive", "SQUAD77", "Multisig", "Eltok", "Microsoft (SPA)"];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-surface-border bg-surface/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg tracking-tight">KC</span>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">Product Designer</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8">
            Kayan<br />Cassariego
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10">
            Transformo estratégia e pesquisa em produtos digitais de alto impacto através de craft refinado.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projetos" className="px-6 py-3 bg-accent text-neutral-950 font-medium rounded-full text-sm hover:bg-accent-hover transition-colors">
              Ver projetos
            </a>
            <a href="#contato" className="px-6 py-3 border border-surface-border text-white font-medium rounded-full text-sm hover:border-muted transition-colors">
              Fale comigo
            </a>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">Projetos</h2>
            <span className="text-muted text-sm">({projects.length})</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <a key={p.title} href="#" className="group block">
                <div className={`bg-gradient-to-br ${p.color} rounded-2xl aspect-[16/10] flex items-end p-6 border border-surface-border hover:border-muted/40 transition-all`}>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted">{p.tags}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 border-t border-surface-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-8">Sobre</h2>
            <p className="text-muted leading-relaxed mb-4">
              Product Designer com mais de 5 anos de experiência em fintechs, SaaS B2B e produtos digitais. Trabalho na interseção entre estratégia de produto, pesquisa com usuários e craft visual.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Já contribuí pra produtos usados por milhares de pessoas em empresas como Prolog, LongView, AvidLive (Boston) e projetos pra Microsoft. Autodidata, aprendi na prática e com colegas ao longo de toda a carreira.
            </p>
            <p className="text-muted leading-relaxed">
              Hoje integro inteligência artificial no meu workflow de design, usando ferramentas como Claude, Figma Make e automações com n8n pra entregar mais rápido sem perder qualidade.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-surface-light border border-surface-border rounded-2xl p-8">
              <p className="text-sm text-muted uppercase tracking-widest mb-6">Empresas</p>
              <div className="flex flex-wrap gap-3">
                {companies.map((c) => (
                  <span key={c} className="px-4 py-2 bg-surface border border-surface-border rounded-full text-sm text-neutral-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="py-24 px-6 border-t border-surface-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-12">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.name} className="bg-surface-light border border-surface-border rounded-2xl p-8 hover:border-muted/40 transition-colors">
                <h3 className="font-display font-semibold text-lg mb-3">{s.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 px-6 border-t border-surface-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">Vamos conversar?</h2>
          <p className="text-muted mb-10">
            Se você precisa de um Product Designer pra seu time ou projeto, me manda uma mensagem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:contato@kayancassariego.com" className="px-6 py-3 bg-accent text-neutral-950 font-medium rounded-full text-sm hover:bg-accent-hover transition-colors">
              Enviar email
            </a>
            <a href="https://www.linkedin.com/in/kayan-cassariego-ux-ui-product-designer" target="_blank" className="px-6 py-3 border border-surface-border text-white font-medium rounded-full text-sm hover:border-muted transition-colors">
              LinkedIn
            </a>
            <a href="https://behance.net/kayan_lopes" target="_blank" className="px-6 py-3 border border-surface-border text-white font-medium rounded-full text-sm hover:border-muted transition-colors">
              Behance
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-surface-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted">
          <span className="font-display font-bold text-white">KC</span>
          <span>© 2026. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
