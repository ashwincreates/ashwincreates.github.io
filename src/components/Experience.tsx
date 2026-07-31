import { BriefcaseIcon, CalendarIcon } from "lucide-react";

const experience = [
  {
    title: "Fullstack + Applied AI Engineer",
    company: "AuxoAI",
    subtitle: "Jan 2026 - Present",
    description: [
      "AI-Powered M&A Lead Intelligence Platform: Built an end-to-end acquisition intelligence platform on Azure Databricks to identify high-value dental buyout opportunities; consolidated data into a database of 173K+ clinics.",
      "LLM-Based Information Extraction: Integrated Azure OpenAI (GPT) with structured Pydantic schemas to automatically extract services, reviews, and business signals from 115K+ clinic websites, transforming unstructured HTML into trusted data.",
      "High-Concurrency Web Scraping: Engineered large-scale asynchronous scraping engines using Python asyncio, aiohttp, Crawl4AI, and Playwright with parallel workers and automatic headless browser retry orchestration.",
      "Production Data Platform: Built robust workflows using ADLS Gen2, Delta Tables, PostgreSQL, SQLAlchemy, and Alembic for staged ingestion, schema migrations, and enterprise-grade application serving."
    ],
  },
  {
    title: "Software Engineer – Fullstack + Applied AI",
    company: "Genpact",
    subtitle: "Jul 2023 - Dec 2025",
    description: [
      "RAG Orchestration Engine: Architected end-to-end Retrieval-Augmented Generation (RAG) services in Java Spring Boot, leveraging pgvector, embeddings, and LangChain agents for custom tool-calling and dynamic behaviors.",
      "Golang Desktop Application (Wails): Engineered a cross-platform desktop tool using Go + React (Wails) to generate structured EDI documents from templates, reducing document creation errors by 40%.",
      "Real-Time Notification Service: Developed a serverless WebSocket API and AWS Lambda system to push live event-driven notifications to connected clients with sub-second delivery latencies.",
      "Interactive 3D System Visualizer: Designed and built an orthographic 3D component modeling viewer using Three.js, WebGL, and React, modeling active states and system architectures in real-time."
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Enquero (a Genpact company)",
    subtitle: "Mar 2023 - Jun 2023",
    description: [
      "NGO EdTech Platform: Built a full-stack mentor-mentee portal supporting role-based authentication and custom UIs for scheduling and secure progress tracking.",
      "Optimized System Delivery: Tailored application components for low-bandwidth and high-latency client networks, supporting 200+ mentees and raising participation by 40%."
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 max-w-6xl m-auto space-y-16"
    >
      <div className="flex items-center gap-4">
        <span className="font-pixel text-primary text-xl">&gt;&gt;</span>
        <h2 className="text-3xl md:text-5xl text-foreground font-display font-bold tracking-tight">
          EXPERIENCE LOG
        </h2>
        <div className="h-[2px] bg-border flex-grow" />
      </div>

      <div className="relative border-l border-border pl-8 md:pl-12 ml-4 space-y-12">
        {experience.map((exp, index) => (
          <div key={exp.company} className="relative group">
            {/* Timeline Junction Marker */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 size-6 bg-background border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors duration-200">
              <span className="font-pixel text-[11px] text-muted-foreground group-hover:text-primary">
                +{index + 1}
              </span>
            </div>

            {/* Header info */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {exp.title}
                </h3>
                <div className="inline-flex items-center gap-2 border border-border bg-secondary/20 px-2.5 py-1 font-pixel text-xs text-muted-foreground w-fit">
                  <CalendarIcon className="size-3 text-primary" />
                  {exp.subtitle.toUpperCase()}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 font-pixel text-sm text-primary tracking-wide">
                <BriefcaseIcon className="size-3.5" />
                <span>{"// "}{exp.company.toUpperCase()}</span>
              </div>

              {/* Bullet details */}
              <ul className="pt-2 space-y-2.5 font-sans text-sm md:text-base text-muted-foreground leading-relaxed list-none">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="font-pixel text-primary text-xs select-none pt-0.5">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
