export interface HeroImageSection {
  type: "hero-image";
  placeholder: boolean;
}

export interface TextBlockSection {
  type: "text-block";
  title: string;
  content: string;
}

export interface ImageSection {
  type: "image";
  placeholder: boolean;
  caption?: string;
}

export interface ThreeColumnsSection {
  type: "three-columns";
  title: string;
  items: { title: string; description: string }[];
}

export interface ImageGridSection {
  type: "image-grid";
  title: string;
  images: { placeholder: boolean }[];
}

export type ProjectSection =
  | HeroImageSection
  | TextBlockSection
  | ImageSection
  | ThreeColumnsSection
  | ImageGridSection;

export interface Project {
  slug: string;
  title: string;
  project: string;
  client: string;
  industry: string;
  services: string;
  period: string;
  accentColor: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "webbie-rh",
    title: "Contratações mais rápidas, processos mais inteligentes.",
    project: "Webbie RH",
    client: "Webbie",
    industry: "Recrutamento & Seleção",
    services: "Product Design, Design System",
    period: "2025",
    accentColor: "#8d8d8d",
    sections: [
      {
        type: "hero-image",
        placeholder: true,
      },
      {
        type: "text-block",
        title: "Objetivo",
        content:
          "O projeto Webbie teve como objetivo central redefinir a experiência de recrutamento e seleção através de uma plataforma inteligente que conecta candidatos e empresas de forma justa, transparente e escalável. A proposta foi automatizar etapas críticas do processo seletivo, desde a triagem até as entrevistas por IA, reduzindo o tempo e o custo operacional das empresas, sem comprometer a qualidade da avaliação dos candidatos.",
      },
      {
        type: "text-block",
        title: "Público-Alvo",
        content:
          "Empresas de pequeno e médio porte que não possuem estrutura de RH robusta e precisam de processos de contratação ágeis, padronizados e com baixo custo. Candidatos em transição ou busca ativa de oportunidades que desejam uma experiência simples, guiada e com feedback real sobre sua compatibilidade com cada vaga.",
      },
      {
        type: "text-block",
        title: "Meu Papel",
        content:
          "Atuei desde a fase de definição da arquitetura de informação e fluxos de jornada até o design detalhado das interfaces, equilibrando clareza operacional e valor percebido. Minhas principais entregas incluíram: mapeamento de fluxos, estruturação da hierarquia visual, criação de telas críticas e prototipação de interações complexas. Meu foco foi garantir consistência, escalabilidade e clareza.",
      },
      {
        type: "image",
        placeholder: true,
        caption: "Flowchart — Dois exemplos de fluxos criados e suas ações",
      },
      {
        type: "text-block",
        title: "Desafio",
        content:
          "O maior desafio foi equilibrar a complexidade funcional da plataforma com uma experiência fluida. Isso envolveu priorização de informações, criação de microtextos e CTAs claros, e feedbacks visuais e narrativos que guiam o usuário em cada etapa do processo.",
      },
      {
        type: "three-columns",
        title: "O que foi feito",
        items: [
          {
            title: "Gestão Administrativa",
            description:
              "Área somente para os administradores acompanhar empresas cadastradas, candidatos, vagas em aberto e métricas do sistema.",
          },
          {
            title: "Plataforma Web",
            description:
              "O projeto em si, com todas as funcionalidades para empresa e candidato.",
          },
          {
            title: "Design System",
            description:
              "Design System completo com mais de 6.000 componentes, todos estruturados e organizados.",
          },
        ],
      },
      {
        type: "image-grid",
        title: "Screenshots — Plataforma Web",
        images: [{ placeholder: true }, { placeholder: true }, { placeholder: true }],
      },
      {
        type: "image-grid",
        title: "Screenshots — Gestão Administrativa",
        images: [{ placeholder: true }, { placeholder: true }],
      },
      {
        type: "text-block",
        title: "Design System",
        content:
          "À medida que produtos crescem em complexidade e número de colaboradores, a necessidade de um sistema de design sólido se torna essencial. O Design System do Webbie foi criado com mais de 6.000 componentes estruturados para garantir consistência visual e escalabilidade.",
      },
      {
        type: "image-grid",
        title: "Componentes & Tokens",
        images: [{ placeholder: true }, { placeholder: true }, { placeholder: true }, { placeholder: true }],
      },
    ],
  },
];
