import { ArrowUpRight } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import DotDistortionShader from "./components/DotDistortionShader";

export default function Home() {
  return (
    <>
      <SplashScreen />
      {/* FIRST SECTION */}
      <section className="relative min-h-[695px] w-full overflow-hidden px-14 pt-14 pb-14 flex flex-col">
        <DotDistortionShader />

        {/* DECORATIVE LINES */}
        <div className="absolute left-8 top-0 w-px h-full bg-[#fa7548] opacity-30 pointer-events-none" />
        <div className="absolute right-8 top-0 w-px h-full bg-[#fa7548] opacity-30 pointer-events-none" />
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 h-px bg-[#fa7548] opacity-30 pointer-events-none" style={{ width: "calc(100% - 64px)" }} />

        {/* NAV */}
        <nav className="flex items-center justify-start gap-2">
          <a
            href="#projetos"
            className="font-overused text-[16px] leading-[18px] text-[#fa7548] border border-[#fa7548] rounded-full px-3 py-2 hover:bg-[#fa7548]/10 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#sobre"
            className="font-overused text-[16px] leading-[18px] text-[#b9b9b9] border border-[#878787] rounded-full px-3 py-2 hover:text-white hover:border-white transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="font-overused text-[16px] leading-[18px] text-[#b9b9b9] border border-[#878787] rounded-full px-3 py-2 hover:text-white hover:border-white transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* HERO CONTENT */}
        <div className="flex flex-1 items-end justify-center gap-10">
          {/* LEFT: Headline + CTA */}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-[40px] leading-[1.214] tracking-tight">
              <span className="flex items-center gap-3">
                <span className="font-poppins font-extrabold text-[#fa7548]">Transformando</span>
                <span className="font-poppins font-semibold text-gradient">produtos</span>
              </span>
              <span className="flex items-center gap-[7px]">
                <span className="font-poppins font-extrabold text-[#fa7548]">complexos</span>
                <span className="font-poppins font-semibold text-gradient">em experiências claras,</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-poppins font-extrabold text-[#fa7548]">funcionais</span>
                <span className="font-poppins font-semibold text-gradient">e escaláveis.</span>
              </span>
            </h1>

            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 w-[230px] border border-[#fa7548] rounded-full pl-6 pr-1 py-1 hover:bg-[#fa7548]/10 transition-colors group"
            >
              <span className="font-overused text-[16px] leading-[24px] text-[#b9b9b9] flex-1">
                Entre em contato
              </span>
              <span className="bg-[#1e1e1e] rounded-full p-[6.4px] flex items-center justify-center group-hover:bg-[#fa7548]/20 transition-colors">
                <ArrowUpRight className="w-[19.2px] h-[19.2px] text-[#b9b9b9]" />
              </span>
            </a>
          </div>

          {/* RIGHT: Projetos facilitados */}
          <div className="shrink-0 flex flex-col gap-2.5 items-start justify-center">
            <p className="font-poppins font-semibold text-[28.768px] leading-[0.81] text-[#b9b9b9]">
              Projetos<br />facilitados
            </p>
            <div className="w-[253px] h-[253px] rounded-lg overflow-hidden bg-[#1e1e1e]">
              <img
                src="https://www.figma.com/api/mcp/asset/ec7c10c6-d453-4ca0-827b-eba08b93230b"
                alt="Projetos facilitados"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
