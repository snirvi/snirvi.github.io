import { projects } from "../data/project";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Selected work</p>
        <h2>Projects</h2>
        <p>
          Applications developed to solve practical problems and strengthen
          full-stack development skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}