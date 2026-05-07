import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { getAssetPath } from '../lib/utils';

const projects = [
  {
    title: "TanCura — Healthcare Intelligence Platform",
    category: "Healthcare / Fintech",
    description: "A premium, production-grade Healthcare Intelligence platform that orchestrates complex medical claims, clinical adjudications, and pharmaceutical benefits with FAANG-grade precision.",
    tech: [".NET 8", "Angular 17", "MS SQL Server", "Redis", "Docker", "MediatR", "RxJS"],
    image: "/images/tancura.png",
    github: "https://github.com/tanishqvarshney/TanCura-Patient-Claims-Prescription-Management-System",
    points: [
      "Built a high-performance .NET 8 / Angular 17 architecture with distributed caching via Redis achieving <50ms response times.",
      "Implemented a secure Pharmaceutical Oracle for real-time benefit verification with NDC-level clinical accuracy.",
      "Designed a cinematic UI featuring advanced glassmorphism design tokens, crystalline borders, and fluid micro-animations."
    ]
  },
  {
    title: "DocuMind — AI-Powered RAG Document QA System",
    category: "AI / Full-Stack",
    description: "Architected and built an end-to-end production-grade RAG system enabling semantic search and natural language Q&A over large document repositories (PDFs, DOCXs, CSVs).",
    tech: ["Python", "LangChain", "OpenAI GPT-4", "FAISS", "FastAPI", "React.js", "AWS S3", "Docker", "Hugging Face"],
    image: "/images/documind_new.png",
    github: "https://github.com/tanishqvarshney/RAG-Document_Intelligence",
    points: [
      "Engineered a document ingestion pipeline using LangChain's document loaders and generating dense vector embeddings via OpenAI's ADA model into FAISS for sub-100ms retrieval.",
      "Achieved 87% answer accuracy on internal evaluation benchmarks with custom prompt re-ranking.",
      "Deployed full stack on AWS using Docker containers and GitHub Actions CI/CD achieving 99.5% uptime."
    ]
  },
  {
    title: "AI Expense Tracker",
    category: "AI Systems",
    description: "An AI-powered application designed to manage, categorize, and track expenses effortlessly using Natural Language Processing.",
    tech: ["React", "Tailwind CSS", "Node.js", "OpenAI"],
    image: "/images/expense_tracker.png",
    github: "https://github.com/tanishqvarshney/AI-Expense-Tracker",
    points: [
      "Parsed unstructured expenses automatically from plain text inputs.",
      "Visualized expense structures with highly interactive chart interfaces.",
      "Demonstrated high accuracy in expense category classification."
    ]
  },
  {
    title: "Nifty-50 Live Trading Data Dashboard",
    category: "Fintech / Dashboard",
    description: "A real-time financial tracking dashboard built to monitor Nifty-50 stock market data with live sentiment analysis.",
    tech: ["React", "WebSockets", "Financial APIs", "Tailwind CSS"],
    image: "/images/nifty_dashboard.png",
    github: "https://github.com/tanishqvarshney/Nifty-50-Live-Trading-Data-Dashboard",
    points: [
      "Integrated real-time streaming APIs for immediate visual graph updates.",
      "Enhanced user experience with complex data aggregation into clean, minimalist UI components.",
      "Managed robust state tracking across multiple concurrent stock profiles."
    ]
  },
  {
    title: "Tovo (Real-time Comm)",
    category: "Real-time Communication",
    description: "A real-time collaboration and language-learning platform connecting users globally with seamless integration.",
    tech: ["React", "Express.js", "MongoDB", "TailwindCSS", "TanStack Query", "Zustand", "JWT", "Stream API"],
    image: "/images/tovo_new.png",
    github: "https://github.com/tanishqvarshney/Tovo",
    points: [
      "Implemented JWT-based authentication and persistent secure access.",
      "Integrated Stream API for chat and video streaming capabilities.",
      "Built a highly available Express.js + MongoDB backend with structured RESTful APIs."
    ]
  },
  {
    title: "Netflix Clone — Streaming Interface",
    category: "Frontend Architecture",
    description: "A responsive streaming UI built to showcase advanced API integration, dynamic categorization, and state management.",
    tech: ["React", "Redux Toolkit", "Axios", "TMDb API", "Vercel"],
    image: "/images/netflix_clone.png",
    github: "https://github.com/tanishqvarshney/NetflixApp_clone",
    points: [
      "Powered real-time movie and TV show data via the complex TMDb API.",
      "Managed global state with Redux Toolkit reducing API overload via caching.",
      "Deployed on Vercel ensuring perfectly replicated production-quality interface streaming dynamics."
    ]
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-24 border-t border-border/50">
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Key Projects.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Highlighting system architecture, real-time data handling, and AI pipeline orchestration.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <div key={project.title} className="group">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-7 relative overflow-hidden rounded-xl bg-secondary border border-border/50 aspect-video block shadow-lg ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <img 
                  src={getAssetPath(project.image)} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-background/5 group-hover:bg-transparent transition-colors duration-500" />
              </motion.a>

              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-2">{project.category}</p>
                
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group/title">
                  <h3 className="text-2xl font-bold mb-4 hover:underline underline-offset-4">{project.title}</h3>
                  <ArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300 mb-4" />
                </a>
                
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
                    {project.points.map((pt, i) => (
                      <li key={i} className="flex gap-2"><span className="text-primary opacity-50">▹</span><span>{pt}</span></li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded bg-secondary/80 text-secondary-foreground border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                   href={project.github} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Github size={16} /> View Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
