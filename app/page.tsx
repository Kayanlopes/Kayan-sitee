import { ArrowUpRight, ExternalLink } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import InteractiveGridPattern from "./components/InteractiveGridPattern";
import HoverBorderGradient from "./components/HoverBorderGradient";
import NoiseBackground from "./components/NoiseBackground";
import FollowingPointer from "./components/FollowingPointer";
import StackedCards from "./components/StackedCards";

export default function Home() {
  return (
    <>
      <FollowingPointer />
      <SplashScreen />
      {/* FIRST SECTION */}
      <section className="relative h-screen w-full overflow-visible px-14 pt-14 pb-14 flex flex-col">
        <InteractiveGridPattern />

        {/* DECORATIVE LINES */}
        <div className="absolute left-8 top-0 w-px pointer-events-none" style={{ height: "100vh", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div className="absolute right-8 top-0 w-px pointer-events-none" style={{ height: "100vh", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div className="absolute top-[30px] left-8 right-8 h-px pointer-events-none" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

        {/* NAV */}
        <nav className="relative z-10 flex items-center justify-start gap-2">
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
        <div className="relative z-10 flex flex-1 items-end justify-center gap-10">
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

            <HoverBorderGradient
              as="a"
              href="#contato"
              containerClassName="w-[230px]"
              className="gap-2.5 pl-6 pr-1 py-1"
            >
              <span className="font-overused text-[16px] leading-[24px] text-[#b9b9b9] flex-1">
                Entre em contato
              </span>
              <span className="bg-[#1e1e1e] rounded-full p-[6.4px] flex items-center justify-center">
                <ArrowUpRight className="w-[19.2px] h-[19.2px] text-[#b9b9b9]" />
              </span>
            </HoverBorderGradient>
          </div>

          {/* RIGHT: Project card */}
          <div className="shrink-0 flex flex-col gap-2.5 items-start justify-center">
            <p className="font-poppins font-semibold text-[28.768px] leading-[0.81] text-[#b9b9b9]">
              Projetos<br />facilitados
            </p>
            <NoiseBackground
              containerClassName="w-[253px]"
              gradientColors={["#fa7548", "#7c3aed", "#1e1e1e"]}
              noiseIntensity={0.15}
            >
              <img
                src="https://www.figma.com/api/mcp/asset/ec7c10c6-d453-4ca0-827b-eba08b93230b"
                alt="Webbie RH"
                className="w-full h-[190px] object-cover"
              />
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="font-overused font-semibold text-[14px] text-white">
                  Webbie RH
                </span>
                <a
                  href="#"
                  className="flex items-center gap-1.5 border border-[#878787] rounded-full px-2.5 py-1 text-[12px] text-[#b9b9b9] hover:border-white hover:text-white transition-colors"
                >
                  Ver projeto
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </NoiseBackground>
          </div>
        </div>
      </section>

      <StackedCards />
    </>
  );
}
