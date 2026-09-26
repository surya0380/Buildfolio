import { usePortfolio } from '../hooks'

export function PreviewPage() {
    const { portfolio } = usePortfolio()
    const { profile, skills, experience, education, projects } = portfolio || {}

    return (
        <div className="preview-page">
            <div className="preview-header">
                <h2>Portfolio Preview</h2>
                <p>See how your portfolio looks to visitors</p>
            </div>
            <div className="preview-content">
                <div className="preview-frame">
                    <div className="portfolio-preview">
                        <header className="preview-hero">
                            <h1>{profile?.name || 'Your Name'}</h1>
                            <p className="preview-title">{profile?.title || 'Your Title'}</p>
                            {profile?.bio && <p className="preview-bio">{profile.bio}</p>}
                            {profile?.email && (
                                <p className="preview-contact">
                                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                </p>
                            )}
                        </header>

                        {skills && skills.length > 0 && (
                            <section className="preview-section">
                                <h2>Skills</h2>
                                <div className="preview-skills">
                                    {skills.map((skill) => (
                                        <div key={skill.id} className="skill-badge">
                                            {skill.name}
                                            <span className="skill-level-badge">{skill.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {experience && experience.length > 0 && (
                            <section className="preview-section">
                                <h2>Experience</h2>
                                <div className="preview-items">
                                    {experience.map((exp) => (
                                        <div key={exp.id} className="preview-item">
                                            <h3>{exp.position}</h3>
                                            <p className="preview-company">{exp.company}</p>
                                            <p className="preview-date">
                                                {exp.startDate} {!exp.current && `– ${exp.endDate}`}
                                                {exp.current && ' – Present'}
                                            </p>
                                            {exp.description && <p className="preview-desc">{exp.description}</p>}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {education && education.length > 0 && (
                            <section className="preview-section">
                                <h2>Education</h2>
                                <div className="preview-items">
                                    {education.map((edu) => (
                                        <div key={edu.id} className="preview-item">
                                            <h3>{edu.degree} in {edu.field}</h3>
                                            <p className="preview-school">{edu.school}</p>
                                            {edu.description && <p className="preview-desc">{edu.description}</p>}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {projects && projects.length > 0 && (
                            <section className="preview-section">
                                <h2>Projects</h2>
                                <div className="preview-items">
                                    {projects.map((project) => (
                                        <div key={project.id} className="preview-item">
                                            <h3>
                                                {project.link ? (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        {project.title}
                                                    </a>
                                                ) : (
                                                    project.title
                                                )}
                                            </h3>
                                            <p className="preview-desc">{project.description}</p>
                                            {project.technologies.length > 0 && (
                                                <p className="preview-tech">
                                                    {project.technologies.map((tech) => (
                                                        <span key={tech} className="tech-pill">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
