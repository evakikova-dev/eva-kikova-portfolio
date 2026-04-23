import { type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.projects = new Map();
    this.contactMessages = new Map();
    this.seedProjects();
  }

  private seedProjects() {
    const sampleProjects: Project[] = [
      {
        id: "ux-report-design-project",
        title: "UXReport — UX Research & Product Redesign",
        description: "Transforming UXReport into an AI-powered experience that drives user motivation, clarity, and long-term engagement beyond the first audit. Addressed the core problem of low user engagement after the first audit, focusing on creating a continuous and motivating product experience",
        longDescription: "This project addressed the core problem of low user engagement after the first audit, focusing on creating a continuous and motivating product experience. I conducted comprehensive task analysis, usability evaluation, and expert reviews to uncover critical friction in navigation, feedback, and error handling. By mapping user journeys and applying systems thinking approaches, I reframed the engagement problem and defined opportunities for ongoing interaction. The solution included improved flows, high-fidelity prototypes, and a refined design system to support consistency, clarity, and trust. A key innovation was introducing Kai, an AI-powered assistant concept that transforms static audit results into guided actions and measurable business improvements, positioning the platform as a long-term partner rather than a one-time audit tool.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
        technologies: ["System Thinking", "Usability Evaluation", "Prototyping", "UX Research", "User Journey Mapping", "Design Systems", "AI Concept Design"],
        figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/1Qbk5scXuWtCDoV3f63xRK/Exam---UX-Design-Implementation---Eva-Kikova?node-id=8023-3102",
        prototypeEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/1Qbk5scXuWtCDoV3f63xRK/Exam---UX-Design-Implementation---Eva-Kikova?node-id=8023-1723",
        role: "UX/UI Designer",
        duration: "2 months",
        client: null,
        liveUrl: null,
        githubUrl: null,
        keyInnovation: "AI-Powered Assistant (Kai) — Transforms static audit results into guided actions",
      },
      {
        id: "water-go",
        title: "Water Go - Web & Mobile Design Project",
        description: "Complete design system and brand identity for a water delivery platform, from concept to high-fidelity prototypes.",
        longDescription: "Water Go is an ongoing web and mobile design project where I defined the complete product vision through problem statement, design goals, and user flows, shaping the foundation for both desktop and mobile experiences. I built a comprehensive design system in Zeroheight, documenting reusable components and UI patterns to ensure visual consistency and scalability across all touchpoints. The project emphasizes brand identity and user experience through carefully designed high-fidelity prototypes for both desktop and mobile platforms, creating a cohesive and intuitive experience for users ordering water delivery services.",
        imageUrl: "https://images.unsplash.com/photo-1523477800337-966dbdee2c1d?w=800&h=450&fit=crop",
        technologies: ["Figma", "Design Systems", "Zeroheight", "Mobile Design", "Web Design", "Prototyping"],
        figmaEmbedUrl: null,
        prototypeEmbedUrl: null,
        role: "UX/UI Designer",
        duration: "Ongoing (Oct 2024 - Present)",
        client: null,
        liveUrl: null,
        githubUrl: null,
        keyInnovation: null,
      },
      {
        id: "gemini-for-work",
        title: "Gemini for Work - UX Concept",
        description: "AI-powered scheduling solution addressing time zone complexity with intelligent suggestions and transparent communication.",
        longDescription: "Gemini for Work is a UX concept training project focused on solving the complex problem of scheduling across time zones. I defined the problem statement and analyzed competitors, supported by personas and user journey mapping to capture the pain points of global team coordination. The project involved creating comprehensive lo-fi and hi-fi wireframes for both mobile and desktop, exploring edge cases and alternative flows for overlapping events. The final deliverable included an interactive prototype and press release concept, integrating AI-powered suggestions to improve scheduling transparency and build user trust in automated recommendations.",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
        technologies: ["UX Research", "Wireframing", "Prototyping", "AI Integration", "Journey Mapping"],
        figmaEmbedUrl: null,
        prototypeEmbedUrl: null,
        role: "UX/UI Designer",
        duration: "1 month",
        client: "Training Project",
        liveUrl: null,
        githubUrl: null,
        keyInnovation: null,
      },
      {
        id: "narisuvai-mi-horo",
        title: "Narisuvai mi horo - Folklore Portal",
        description: "Cultural heritage platform connecting users with Bulgarian folklore traditions through thoughtful UX design. Comprehensive design system and user testing validated accessibility for diverse audiences while preserving cultural authenticity.",
        longDescription: "Narisuvai mi horo is a folklore portal training project that celebrates and preserves Bulgarian cultural heritage. I built comprehensive personas, sitemap, and user journey maps to capture user needs in the context of cultural heritage exploration. The design process included creating moodboards, lo-fi and hi-fi wireframes, and complete page layouts supported by selected mobile screens. I developed a full website design system and conducted thorough user testing, refining usability and consistency based on feedback. The project demonstrates how thoughtful UX design can make cultural content accessible and engaging for diverse audiences.",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=450&fit=crop",
        technologies: ["Figma", "User Research", "Design Systems", "User Testing", "Cultural Design"],
        figmaEmbedUrl: null,
        prototypeEmbedUrl: null,
        role: "UX/UI Designer",
        duration: "1 month",
        client: "Training Project",
        liveUrl: null,
        githubUrl: null,
        keyInnovation: "Complete design system with user testing validation ensuring cultural authenticity meets modern UX standards",
      },
      {
        id: "graphic-design",
        title: "Графичен дизайн",
        description: "Visual identity and branding projects showcasing creative concepts, logo design, and marketing materials.",
        longDescription: "This collection showcases my graphic design work across various branding and visual identity projects. From logo concepts to complete brand guidelines, I focus on creating memorable visual narratives that communicate brand values effectively. Each project demonstrates my approach to combining typography, color theory, and layout principles to deliver cohesive and impactful designs for print and digital media.",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
        technologies: ["Branding", "Logo Design", "Print Design", "Visual Identity", "Marketing Materials"],
        figmaEmbedUrl: null,
        prototypeEmbedUrl: null,
        role: "Graphic Designer",
        duration: "Various Projects",
        client: null,
        liveUrl: null,
        githubUrl: null,
        keyInnovation: null,
      },
    ];

    sampleProjects.forEach(project => {
      this.projects.set(project.id, project);
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
