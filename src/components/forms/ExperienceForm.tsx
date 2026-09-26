import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Experience } from '../../features/portfolio/portfolio.types'

export function ExperienceForm() {
    const { t } = useTranslation()
    const { portfolio, addExperience, removeExperience } = usePortfolio()
    const experiences = portfolio?.experience || []

    const [formData, setFormData] = useState<Experience>({
        id: '',
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setFormData((prev) => ({ ...prev, [name]: checked }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleAddExperience = () => {
        if (!formData.company.trim() || !formData.position.trim() || !formData.startDate.trim()) {
            return
        }
        const newExp: Experience = {
            id: `exp_${Date.now()}`,
            company: formData.company,
            position: formData.position,
            startDate: formData.startDate,
            endDate: formData.current ? '' : formData.endDate,
            current: formData.current,
            description: formData.description,
        }
        addExperience(newExp)
        setFormData({
            id: '',
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        })
    }

    return (
        <div className="form-section">
            <h3>{t('editor.experience.section')}</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="company">{t('editor.experience.company')}</label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t('editor.experience.companyPlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="position">{t('editor.experience.position')}</label>
                    <input
                        id="position"
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder={t('editor.experience.positionPlaceholder')}
                    />
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="startDate">{t('editor.experience.startDate')}</label>
                        <input
                            id="startDate"
                            type="month"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    {!formData.current && (
                        <div className="form-field">
                            <label htmlFor="endDate">{t('editor.experience.endDate')}</label>
                            <input
                                id="endDate"
                                type="month"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                </div>

                <div className="form-field form-checkbox">
                    <input
                        id="current"
                        type="checkbox"
                        name="current"
                        checked={formData.current}
                        onChange={handleChange}
                    />
                    <label htmlFor="current">{t('editor.experience.currentlyWorking')}</label>
                </div>

                <div className="form-field">
                    <label htmlFor="description">{t('editor.experience.description')}</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={t('editor.experience.descriptionPlaceholder')}
                        rows={3}
                    />
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddExperience}
                >
                    <PlusIcon className="btn-icon" />
                    {t('editor.experience.add')}
                </button>
            </form>

            {experiences.length > 0 && (
                <div className="form-list">
                    <h4>{t('editor.experience.section')}</h4>
                    <div className="list-items">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="list-item">
                                <div>
                                    <span className="item-name">
                                        {exp.position} at {exp.company}
                                    </span>
                                    <span className="item-meta">
                                        {exp.startDate} {!exp.current && `to ${exp.endDate}`}
                                        {exp.current && '(Current)'}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => removeExperience(exp.id)}
                                    aria-label="Delete experience"
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
