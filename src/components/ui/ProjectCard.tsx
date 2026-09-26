import type { Project } from '../../features/portfolio/portfolio.types'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card">
            {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.technologies.length > 0 && (
                <div className="project-tech">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                </a>
            )}
        </div>
    )
}
