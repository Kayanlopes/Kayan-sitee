"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import HoverBorderGradient from "./HoverBorderGradient";

const WHATSAPP_HREF =
  "https://wa.me/554898674784?text=Ol%C3%A1%20Kayan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="Poppins, sans-serif">
        Bé
      </text>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <>
      {/* CONTATO */}
      <section id="contato" className="relative w-full bg-[#111111] py-[120px] px-14">
        <div className="relative flex justify-between gap-10 max-w-[1200px] mx-auto">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/contact-photo.jpg"
                alt="Kayan Cassariego"
                width={128}
                height={128}
                quality={90}
                className="w-32 h-32 rounded-full object-cover shrink-0"
              />
              <h2 className="font-poppins font-semibold text-[36px] leading-tight text-white max-w-[500px]">
                Entre em contato, vamos trabalhar em seu projeto
              </h2>
            </div>
            <p className="font-overused text-[16px] text-[#b9b9b9]">
              Vamos criar juntos um produto digital com estratégia, pesquisa e craft refinado.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start gap-4 shrink-0">
            <HoverBorderGradient
              as="a"
              href={WHATSAPP_HREF}
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

            <a
              href="mailto:kayan.cassariego@gmail.com"
              className="flex items-center gap-2 font-overused text-[14px] text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
            >
              <Mail className="w-4 h-4" />
              kayan.cassariego@gmail.com
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-overused text-[14px] text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              (48) 98674-784
            </a>

            <div className="h-px w-full bg-[rgba(255,255,255,0.08)]" />

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kayan-cassariego-ux-ui-product-designer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
              >
                <BehanceIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#050505] border-t border-[rgba(255,255,255,0.06)] px-14 py-6">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <span className="font-overused text-[13px] text-[#737373]">
            Kayan Cassariego © 2026
          </span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </>
  );
}
