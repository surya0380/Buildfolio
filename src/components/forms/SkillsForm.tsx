import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Skill } from '../../features/portfolio/portfolio.types'

export function SkillsForm() {
    const { t } = useTranslation()
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
            <h3>{t('editor.skills.section')}</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="skill-name">{t('editor.skills.name')}</label>
                    <input
                        id="skill-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('editor.skills.namePlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="skill-level">{t('editor.skills.level')}</label>
                    <select
                        id="skill-level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                    >
                        <option value="beginner">{t('editor.skills.beginner')}</option>
                        <option value="intermediate">{t('editor.skills.intermediate')}</option>
                        <option value="advanced">{t('editor.skills.advanced')}</option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddSkill}
                >
                    <PlusIcon className="btn-icon" />
                    {t('editor.skills.add')}
                </button>
            </form>

            {skills.length > 0 && (
                <div className="form-list">
                    <h4>{t('editor.skills.section')}</h4>
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
