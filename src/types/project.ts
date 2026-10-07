export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
}