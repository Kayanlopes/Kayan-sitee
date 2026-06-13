"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FollowingPointer from "@/app/components/FollowingPointer";
import FloatingDock from "@/app/components/FloatingDock";
import ProjectFloatingNav from "@/app/components/ProjectFloatingNav";
import TextAnimate from "@/app/components/TextAnimate";
import { projects, ProjectSection } from "@/app/data/projects";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-overused text-[12px] uppercase text-[#737373]">{label}</span>
      <span className="font-overused text-[16px] text-white">{value}</span>
    </div>
  );
}

function SectionBlock({
  section,
  accentColor,
}: {
  section: ProjectSection;
  accentColor: string;
}) {
  switch (section.type) {
    case "hero-image":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-[16/10] rounded-2xl bg-[#1e1e1e] my-16"
        />
      );

    case "text-block":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto mb-24"
        >
          <h2 className="font-poppins font-semibold text-[24px] mb-4" style={{ color: accentColor }}>
            {section.title}
          </h2>
          <p className="font-overused text-[18px] text-[#b9b9b9] leading-relaxed text-justify">
            {section.content}
          </p>
        </motion.div>
      );

    case "image":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="w-full aspect-[16/10] rounded-xl bg-[#1e1e1e]" />
          {section.caption && (
            <p className="mt-4 text-center text-[14px] italic text-[#737373]">{section.caption}</p>
          )}
        </motion.div>
      );

    case "three-columns":
      return (
        <div className="mb-24">
          <h2 className="font-poppins font-semibold text-[24px] text-white mb-8">{section.title}</h2>
          <div className="flex gap-6">
            {section.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 rounded-xl p-8 bg-[#141414]"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="font-overused font-bold text-[18px] text-white mb-2">{item.title}</h3>
                <p className="font-overused text-[14px] text-[#b9b9b9]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "image-grid":
      return (
        <div className="mb-24">
          <h2 className="font-poppins font-semibold text-[24px] text-white mb-8">{section.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {section.images.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="w-full aspect-[16/10] rounded-xl bg-[#1e1e1e]"
              />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <p className="font-overused text-[#b9b9b9]">Projeto não encontrado.</p>
      </main>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects.length > 1 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <>
      <ProjectFloatingNav />
      <FollowingPointer />
      <FloatingDock showHome={false} />

      <motion.main
        className="relative w-full bg-[#0a0a0a]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="dots-bg absolute inset-0 pointer-events-none" />

        <div className="relative max-w-[960px] mx-auto px-14 py-24">
          {/* BREADCRUMB */}
          <p
            className="font-overused text-[14px] uppercase text-[#737373] text-center mb-6"
            style={{ letterSpacing: "2px" }}
          >
            Projetos / {project.project}
          </p>

          {/* TÍTULO */}
          <h1 className="font-poppins font-semibold text-[48px] leading-tight text-white max-w-[800px] mx-auto text-center mb-12">
            <TextAnimate text={project.title} staggerDelay={0.04} />
          </h1>

          {/* METADADOS */}
          <div className="flex items-center justify-center gap-10">
            <MetaItem label="Cliente" value={project.client} />
            <div className="w-px h-10 bg-[rgba(255,255,255,0.1)]" />
            <MetaItem label="Indústria" value={project.industry} />
            <div className="w-px h-10 bg-[rgba(255,255,255,0.1)]" />
            <MetaItem label="Serviços" value={project.services} />
            <div className="w-px h-10 bg-[rgba(255,255,255,0.1)]" />
            <MetaItem label="Período" value={project.period} />
          </div>

          {/* SEÇÕES */}
          {project.sections.map((section, i) => (
            <SectionBlock key={i} section={section} accentColor={project.accentColor} />
          ))}

          {/* FOOTER */}
          {nextProject && (
            <div className="mt-[120px] flex justify-center">
              <Link
                href={`/projetos/${nextProject.slug}`}
                className="font-overused text-[16px] text-[#b9b9b9] hover:text-white transition-colors flex items-center gap-2"
              >
                Próximo projeto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </motion.main>
    </>
  );
}
