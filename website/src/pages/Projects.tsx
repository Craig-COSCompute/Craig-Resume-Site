import "./Projects.css";
import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Craig Martinez"
        title="Projects"
        subtitle="Azure builds, home lab experiments, and side projects. More on the way."
      />

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-head">
              <h2>{project.title}</h2>
              <span className="project-status">{project.status}</span>
            </div>
            <p className="project-summary">{project.summary}</p>

            <ul className="project-highlights">
              {project.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <ul className="chip-list">
              {project.tech.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="project-links">
              {project.links.map((link) => (
                <a
                  className="btn"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
