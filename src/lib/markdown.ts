import fs from "fs";
import path from "path";

export interface MarkdownProject {
  title: string;
  subtitle: string;
  order: number;
  images: string[];
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  impact: string;
  content: string;
}

export function getLocalProjects(): MarkdownProject[] {
  const dirPath = path.join(process.cwd(), "src/content/projects");
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dirPath);
  const projects = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(dirPath, file);
      const rawContent = fs.readFileSync(fullPath, "utf-8");
      
      // Split frontmatter and content using '---'
      const parts = rawContent.split("---");
      const frontmatterRaw = parts[1] || "";
      const content = parts.slice(2).join("---").trim();
      
      const metadata: {
        [key: string]: string | number | string[] | undefined;
        title?: string;
        subtitle?: string;
        order?: number;
        images?: string[];
        demoUrl?: string;
        githubUrl?: string;
        tags?: string[];
        impact?: string;
      } = {};
      
      frontmatterRaw.split("\n").forEach((line) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim();
          let val = line.slice(colonIndex + 1).trim();
          
          // Remove wrapping quotes if any
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          }
          if (val.startsWith("'") && val.endsWith("'")) {
            val = val.slice(1, -1);
          }
          
          if (key === "tags" || key === "images") {
            // Parse array of tags or images e.g. ["a", "b"]
            const arrayMatch = val.match(/\[(.*?)\]/);
            if (arrayMatch) {
              metadata[key] = arrayMatch[1]
                .split(",")
                .map((t) => t.replace(/['"]/g, "").trim());
            } else {
              metadata[key] = [];
            }
          } else if (key === "order") {
            metadata[key] = parseInt(val, 10);
          } else {
            metadata[key] = val;
          }
        }
      });
      
      return {
        title: metadata.title || "Untitled",
        subtitle: metadata.subtitle || "",
        order: metadata.order || 99,
        images: metadata.images || [],
        demoUrl: metadata.demoUrl || "",
        githubUrl: metadata.githubUrl || "",
        tags: metadata.tags || [],
        impact: metadata.impact || "",
        content,
      };
    });
    
  return projects.sort((a, b) => a.order - b.order);
}
