"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rotate: number;
  position: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ele se destaca pela praticidade e organização nas entregas, conseguindo estruturar bem o design e deixar tudo claro para o desenvolvimento. Aberto a feedbacks, sabe ouvir e busca entender o lado do desenvolvimento para alinhar melhor as soluções.",
    name: "Guylherme Neves Duarte",
    role: "Desenvolvedor Full Stack | LongView",
    avatar: "/testimonial-guylherme.png",
    rotate: -3,
    position: "top-0 left-0 md:left-[4%]",
  },
  {
    quote:
      "Sempre admirei o cuidado e a criatividade que ele coloca nas interfaces, mesmo quando os prazos apertavam. Ele domina Figma com muita naturalidade e consegue transformar ideias soltas em algo claro e funcional. Recomendo sem hesitar.",
    name: "Maike Rezende Alame",
    role: "Software Engineer | Node, Python, React",
    avatar: "/testimonial-maike.png",
    rotate: 2,
    position: "top-[6%] right-0 md:right-[6%]",
  },
  {
    quote:
      "Ele tem uma capacidade fora do comum de organizar soluções complexas de forma clara e visualmente consistente. O Design System que ele auxiliou foi fundamental para manter a coesão do produto. É o tipo de designer que você quer no seu time.",
    name: "Allan Franck",
    role: "Product Design Lead | SaaS B2B, AI Products",
    avatar: "/testimonial-allan.png",
    rotate: 3,
    position: "bottom-[6%] left-[4%] md:left-[10%]",
  },
  {
    quote:
      "Profissional muito dedicado a melhorar tanto processos quanto o ambiente profissional para todos. Extremamente organizado e com oratória excelente, sem contar as suas habilidades técnicas. Um ótimo reforço para qualquer time.",
    name: "Enzo Farias",
    role: "Design Engineer",
    avatar: "/testimonial-enzo.png",
    rotate: -2,
    position: "bottom-0 right-0 md:right-[4%]",
  },
];

function TestimonialCardContent({ testimonial }: { testimonial: Testimonial }) {
  return (
    <>
      <p className="font-overused text-[14px] leading-relaxed text-[#b9b9b9]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="my-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-overused text-[14px] font-bold text-white">
            {testimonial.name}
          </span>
          <span className="font-overused text-[12px] text-[#737373]">
            {testimonial.role}
          </span>
        </div>
      </div>
    </>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
      dragElastic={0.2}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: testimonial.rotate }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
      whileDrag={{ scale: 1.05, zIndex: 30 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`absolute ${testimonial.position} w-full max-w-[min(360px,85vw)] rounded-xl bg-[#141414] p-6 shadow-xl`}
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <TestimonialCardContent testimonial={testimonial} />
    </motion.div>
  );
}

function MobileTestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="w-full rounded-xl bg-[#141414] p-6 shadow-xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <TestimonialCardContent testimonial={testimonial} />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 px-5 sm:px-8 md:py-[120px] md:px-14">
      {/* DOT PATTERN */}
      <div className="dots-bg absolute inset-0 pointer-events-none" />

      {/* MOBILE: vertical stack */}
      <div className="relative flex flex-col items-start gap-8 md:hidden">
        <div className="flex max-w-[480px] flex-col items-start px-4 text-left">
          <h2 className="font-poppins text-[24px] font-semibold text-white">
            O que dizem sobre mim
          </h2>
          <p className="font-overused mt-1 text-[14px] text-[#b9b9b9]">
            Recomendações de colegas e líderes com quem trabalhei
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <MobileTestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* DESKTOP: overlapping draggable cards */}
      <div className="relative mx-auto hidden min-h-[600px] max-w-[1200px] items-center justify-center md:flex md:min-h-[700px]">
        {/* TITLE */}
        <div className="relative z-0 flex max-w-[480px] flex-col items-center px-4 text-center pointer-events-none">
          <h2 className="font-poppins text-[32px] font-semibold text-white">
            O que dizem sobre mim
          </h2>
          <p className="font-overused mt-1 text-[16px] text-[#b9b9b9]">
            Recomendações de colegas e líderes com quem trabalhei
          </p>
        </div>

        {/* CARDS */}
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
}
