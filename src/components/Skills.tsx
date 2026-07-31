import { UserIcon } from "lucide-react";

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-[90vh] px-6 py-24 max-w-6xl m-auto space-y-16"
    >
      <div className="flex items-center gap-4">
        <span className="font-pixel text-primary text-xl">&gt;&gt;</span>
        <h2 className="text-3xl md:text-5xl text-foreground font-display font-bold tracking-tight">
          PROFILE &amp; STACK
        </h2>
        <div className="h-[2px] bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Brief About / Profile */}
        <div className="lg:col-span-7 border border-border bg-card/20 p-6 md:p-8 relative space-y-6 shadow-xl">
          <div className="absolute top-3 right-4 font-pixel text-xs text-muted-foreground">
            SYS_PROFILE_01
          </div>
          
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <UserIcon className="size-5 text-primary" />
            <h3 className="font-pixel text-lg tracking-wider text-foreground">ABOUT_ME.md</h3>
          </div>

          <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              I am a passionate <span className="text-foreground font-medium">Fullstack + Applied AI Engineer</span> dedicated to building intelligent, performant systems and high-fidelity user experiences. I specialize in combining robust backend pipelines with modern interactive interfaces.
            </p>
            <p>
              My expertise spans <span className="text-primary font-medium">Go (concurrency, goroutines), Java Spring Boot, Python (asyncio), and AWS serverless architectures</span> on the backend, alongside <span className="text-foreground font-medium">React, Next.js, and Three.js/WebGL</span> on the frontend, and state-of-the-art <span className="text-primary font-medium">Retrieval-Augmented Generation (RAG)</span> orchestration.
            </p>
            <p>
              I thrive at the intersection of robust systems engineering and user-facing intelligence, striving to turn complex datasets and AI agent workflows into fluid, premium business products.
            </p>
          </div>
        </div>

        {/* Right Column: Skills Categorized Panels */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="font-pixel text-xs text-muted-foreground uppercase tracking-widest pl-1">
            STATION_COMPONENTS:
          </h4>
          
          <div className="space-y-4">
            {/* Backend & Systems */}
            <div className="border border-border bg-card/10 hover:border-primary/20 hover:bg-primary/[0.01] transition-all duration-200 p-4 space-y-2">
              <span className="font-pixel text-xs text-primary uppercase block tracking-wider">{"// BACKEND & SYSTEMS"}</span>
              <p className="font-sans text-xs md:text-sm text-foreground/90 leading-relaxed font-light">
                Go (Concurrency, Goroutines), Java Spring Boot, Node.js/TypeScript, Python, Microservices, REST + GraphQL
              </p>
            </div>

            {/* AI & Retrieval */}
            <div className="border border-border bg-card/10 hover:border-primary/20 hover:bg-primary/[0.01] transition-all duration-200 p-4 space-y-2">
              <span className="font-pixel text-xs text-primary uppercase block tracking-wider">{"// AI & RETRIEVAL"}</span>
              <p className="font-sans text-xs md:text-sm text-foreground/90 leading-relaxed font-light">
                RAG Pipelines, Embeddings (OpenAI/Anthropic), Vector Search (pgvector), LangChain Agents, Tool Orchestration
              </p>
            </div>

            {/* Databases & Infra */}
            <div className="border border-border bg-card/10 hover:border-primary/20 hover:bg-primary/[0.01] transition-all duration-200 p-4 space-y-2">
              <span className="font-pixel text-xs text-primary uppercase block tracking-wider">{"// DATABASES & INFRA"}</span>
              <p className="font-sans text-xs md:text-sm text-foreground/90 leading-relaxed font-light">
                PostgreSQL, Redis, MongoDB, Docker, AWS (Lambda, RDS, S3, WebSocket API)
              </p>
            </div>

            {/* Frontend */}
            <div className="border border-border bg-card/10 hover:border-primary/20 hover:bg-primary/[0.01] transition-all duration-200 p-4 space-y-2">
              <span className="font-pixel text-xs text-primary uppercase block tracking-wider">{"// FRONTEND"}</span>
              <p className="font-sans text-xs md:text-sm text-foreground/90 leading-relaxed font-light">
                React, Next.js, TypeScript, Three.js/WebGL, Tailwind, Storybook
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
