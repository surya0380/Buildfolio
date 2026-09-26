import type { Portfolio } from '../../features/portfolio/portfolio.types'

interface PortfolioRendererProps {
    portfolio: Portfolio
}

export function PortfolioRenderer({ portfolio }: PortfolioRendererProps) {
    const { profile, skills, experience, education, projects, settings } = portfolio
    const template = settings.template

    if (template === 'minimal') {
        return <MinimalTemplate portfolio={portfolio} />
    }

    if (template === 'modern') {
        return <ModernTemplate portfolio={portfolio} />
    }

    return <ClassicTemplate portfolio={portfolio} />
}

function ClassicTemplate({ portfolio }: PortfolioRendererProps) {
    const { profile, skills, experience, education, projects } = portfolio

    return (
        <div className="template-classic">
            <header className="preview-hero">
                <h1>{profile.name || 'Your Name'}</h1>
                <p className="preview-title">{profile.title || 'Your Title'}</p>
                {profile.bio && <p className="preview-bio">{profile.bio}</p>}
                {profile.email && (
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
    )
}

function MinimalTemplate({ portfolio }: PortfolioRendererProps) {
    const { profile, skills, experience, projects } = portfolio

    return (
        <div className="template-minimal">
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ margin: '0 0 4px 0', fontSize: '24px' }}>{profile.name || 'Your Name'}</h1>
                <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)', fontSize: '14px' }}>
                    {profile.title || 'Your Title'}
                </p>
                {profile.email && (
                    <a href={`mailto:${profile.email}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                        {profile.email}
                    </a>
                )}
            </div>

            {skills && skills.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Skills
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {skills.map((skill) => (
                            <span key={skill.id} style={{ fontSize: '13px', padding: '2px 6px' }}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {experience && experience.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Experience
                    </h2>
                    {experience.map((exp) => (
                        <div key={exp.id} style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>{exp.position}</strong>
                                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{exp.startDate}</span>
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{exp.company}</div>
                        </div>
                    ))}
                </div>
            )}

            {projects && projects.length > 0 && (
                <div>
                    <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                        Projects
                    </h2>
                    {projects.map((project) => (
                        <div key={project.id} style={{ marginBottom: '12px' }}>
                            <strong>{project.title}</strong>
                            <p style={{ margin: '4px 0', fontSize: '13px' }}>{project.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function ModernTemplate({ portfolio }: PortfolioRendererProps) {
    const { profile, skills, experience, education, projects } = portfolio

    return (
        <div className="template-modern" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '30px', borderRadius: '12px', color: 'white' }}>
            <header style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '28px', margin: '0 0 8px 0' }}>{profile.name || 'Your Name'}</h1>
                <p style={{ fontSize: '16px', margin: '0', opacity: 0.9 }}>{profile.title || 'Your Title'}</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {skills && skills.length > 0 && (
                    <section>
                        <h2 style={{ fontSize: '14px', margin: '0 0 12px 0', textTransform: 'uppercase', opacity: 0.9 }}>
                            Skills
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {skills.slice(0, 5).map((skill) => (
                                <span
                                    key={skill.id}
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                    }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {experience && experience.length > 0 && (
                    <section>
                        <h2 style={{ fontSize: '14px', margin: '0 0 12px 0', textTransform: 'uppercase', opacity: 0.9 }}>
                            Recent Work
                        </h2>
                        {experience.slice(0, 2).map((exp) => (
                            <div key={exp.id} style={{ fontSize: '12px', marginBottom: '8px' }}>
                                <strong>{exp.position}</strong> at {exp.company}
                            </div>
                        ))}
                    </section>
                )}
            </div>

            {projects && projects.length > 0 && (
                <section style={{ marginTop: '30px' }}>
                    <h2 style={{ fontSize: '14px', margin: '0 0 12px 0', textTransform: 'uppercase', opacity: 0.9 }}>
                        Projects
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                        {projects.slice(0, 3).map((project) => (
                            <div
                                key={project.id}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    fontSize: '12px',
                                }}
                            >
                                <strong>{project.title}</strong>
                                <p style={{ margin: '4px 0', fontSize: '11px', opacity: 0.8 }}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
