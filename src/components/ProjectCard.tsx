import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>

      <div className="project-content">
        <div className="project-heading">
          <h3>{project.title}</h3>

          <span className={`status status-${project.status}`}>
            {project.status === "completed"
              ? "Completed"
              : "In Development"}
          </span>
        </div>

        <p>{project.description}</p>

        <ul className="technology-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.liveUrl ? (
            <a
              className="button button-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <span className="button button-disabled">Live Demo Coming Soon</span>
          )}

          <a
            className="button button-secondary"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Source
          </a>
        </div>
      </div>
    </article>
  );
}