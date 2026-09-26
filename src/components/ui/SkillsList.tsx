import type { Skill } from '../../features/portfolio/portfolio.types'

interface SkillsListProps {
    skills: Skill[]
}

export function SkillsList({ skills }: SkillsListProps) {
    return (
        <div className="skills-list">
            <h3>Skills</h3>
            {skills.length === 0 ? (
                <p className="empty-state">No skills added yet</p>
            ) : (
                <ul className="skills-grid">
                    {skills.map((skill) => (
                        <li key={skill.id} className="skill-item">
                            <span className="skill-name">{skill.name}</span>
                            {skill.level && <span className="skill-level">{skill.level}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
