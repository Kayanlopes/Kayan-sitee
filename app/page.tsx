import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import InteractiveGridPattern from "./components/InteractiveGridPattern";
import HoverBorderGradient from "./components/HoverBorderGradient";
import NoiseBackground from "./components/NoiseBackground";
import FollowingPointer from "./components/FollowingPointer";
import StackedCards from "./components/StackedCards";
import TextAnimate from "./components/TextAnimate";
import TextGenerateEffect from "./components/TextGenerateEffect";

export default function Home() {
  return (
    <>
      <FollowingPointer />
      <SplashScreen />
      {/* FIRST SECTION */}
      <section className="relative h-screen w-full overflow-visible px-14 pt-14 pb-14 flex flex-col">
        <InteractiveGridPattern />

        {/* BOTTOM FADE */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "200px", background: "linear-gradient(to bottom, transparent, #0a0a0a)", zIndex: 5 }}
        />

        {/* NAV */}
        <nav className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Image
              src="/avatar.png"
              alt="Kayan Cassariego"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="font-overused text-[16px] text-[#b9b9b9]">Product Designer Pleno</span>
            <a
              href="https://www.linkedin.com/in/kayan-cassariego-ux-ui-product-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://wa.me/554898674784?text=Ol%C3%A1%20Kayan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-1 items-end justify-center gap-10">
          {/* LEFT: Headline + CTA */}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-[40px] leading-[1.214] tracking-tight">
              <span className="flex items-center gap-3">
                <span className="font-poppins font-extrabold text-[#fa7548]">
                  <TextAnimate text="Transformando" delay={1.8} />
                </span>
                <span className="font-poppins font-semibold text-gradient">
                  <TextAnimate text="produtos" delay={1.85} />
                </span>
              </span>
              <span className="flex items-center gap-[7px]">
                <span className="font-poppins font-extrabold text-[#fa7548]">
                  <TextAnimate text="complexos" delay={1.9} />
                </span>
                <span className="font-poppins font-semibold text-gradient">
                  <TextAnimate text="em experiências claras," delay={1.95} />
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-poppins font-extrabold text-[#fa7548]">
                  <TextAnimate text="funcionais" delay={2.1} />
                </span>
                <span className="font-poppins font-semibold text-gradient">
                  <TextAnimate text="e escaláveis." delay={2.15} />
                </span>
              </span>
            </h1>

            <HoverBorderGradient
              as="a"
              href="https://wa.me/554898674784?text=Ol%C3%A1%20Kayan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
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

      {/* SOBRE */}
      <section id="sobre" className="relative w-full bg-[#0a0a0a] py-[120px] px-14">
        <div className="flex gap-[56px] items-start max-w-[1200px] mx-auto">
          {/* LEFT: sticky video */}
          <div className="shrink-0" style={{ position: "sticky", top: "calc(50vh - 210px)" }}>
            <video
              src="/about-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-[420px] h-[420px] rounded-[16px] object-cover"
            />
          </div>

          {/* RIGHT: text content */}
          <div className="flex-1 flex flex-col">
            <div className="mb-[29px]">
              <TextGenerateEffect
                text="Sobre"
                className="font-poppins font-light text-[32px] leading-[121%] text-[#8d8d8d]"
              />
            </div>

            {/* Parágrafo 1 */}
            <p className="font-poppins font-light text-[18px] text-[#8d8d8d] leading-[28px] text-justify mb-[39px]">
              <TextAnimate text="Olá! Meu nome é Kayan, Sou" delay={0} staggerDelay={0.03} />
              {" "}
              <TextAnimate text="Product Designer" delay={0.18} staggerDelay={0.03} className="font-semibold" />
              {" "}
              <TextAnimate
                text="com experiência na criação e evolução de produtos digitais, atuando desde a descoberta do problema até a entrega da solução. Trabalho com Product Discovery, UX Research, jornadas, prototipação e Design Systems para transformar necessidades dos usuários e objetivos de negócio em experiências simples, consistentes e escaláveis."
                delay={0.24}
                staggerDelay={0.03}
              />
            </p>

            {/* Parágrafo 2 */}
            <p className="font-poppins font-light text-[18px] text-[#8d8d8d] leading-[28px] text-justify">
              <TextAnimate
                text="Gosto de resolver problemas complexos, colaborar com times multidisciplinares e tomar decisões baseadas em evidências. Já contribuí para projetos de alto impacto, incluindo uma solução voltada à mitigação de um prejuízo anual estimado em"
                delay={0}
                staggerDelay={0.03}
              />
              {" "}
              <TextAnimate text="R$ 20 milhões" delay={1.02} staggerDelay={0.03} className="font-semibold text-[#fa7548]" />
              {" "}
              <TextAnimate text="e uma automação que" delay={1.11} staggerDelay={0.03} />
              {" "}
              <TextAnimate text="reduziu em 67%" delay={1.23} staggerDelay={0.03} className="font-semibold text-[#fa7548]" />
              {" "}
              <TextAnimate text="o tempo de documentação de bugs." delay={1.32} staggerDelay={0.03} />
            </p>

            {/* CTA */}
            <div className="mt-[29px]">
              <HoverBorderGradient
                as="a"
                href="https://wa.me/554898674784?text=Ol%C3%A1%20Kayan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
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
          </div>
        </div>
      </section>
    </>
  );
}
