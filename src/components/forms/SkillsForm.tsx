import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Skill } from '../../features/portfolio/portfolio.types'

export function SkillsForm() {
    const { portfolio, addSkill, removeSkill } = usePortfolio()
    const skills = portfolio?.skills || []

    const [formData, setFormData] = useState<Skill>({
        id: '',
        name: '',
        level: 'intermediate',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleAddSkill = () => {
        if (!formData.name.trim()) return
        const newSkill: Skill = {
            id: `skill_${Date.now()}`,
            name: formData.name,
            level: formData.level as 'beginner' | 'intermediate' | 'advanced',
        }
        addSkill(newSkill)
        setFormData({ id: '', name: '', level: 'intermediate' })
    }

    return (
        <div className="form-section">
            <h3>Skills</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="skill-name">Skill Name</label>
                    <input
                        id="skill-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., React, TypeScript"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="skill-level">Level</label>
                    <select
                        id="skill-level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                    >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddSkill}
                >
                    <PlusIcon className="btn-icon" />
                    Add Skill
                </button>
            </form>

            {skills.length > 0 && (
                <div className="form-list">
                    <h4>Your Skills</h4>
                    <div className="list-items">
                        {skills.map((skill) => (
                            <div key={skill.id} className="list-item">
                                <div>
                                    <span className="item-name">{skill.name}</span>
                                    <span className="item-level">{skill.level}</span>
                                </div>
                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => removeSkill(skill.id)}
                                    aria-label="Delete skill"
                                >
                                    <TrashIcon className="btn-icon" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
