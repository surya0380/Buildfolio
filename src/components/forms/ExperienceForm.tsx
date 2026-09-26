import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Experience } from '../../features/portfolio/portfolio.types'

export function ExperienceForm() {
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
            <h3>Work Experience</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="position">Position</label>
                    <input
                        id="position"
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Job title"
                    />
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="startDate">Start Date</label>
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
                            <label htmlFor="endDate">End Date</label>
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
                    <label htmlFor="current">Currently working here</label>
                </div>

                <div className="form-field">
                    <label htmlFor="description">Description (Optional)</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                    />
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddExperience}
                >
                    <PlusIcon className="btn-icon" />
                    Add Experience
                </button>
            </form>

            {experiences.length > 0 && (
                <div className="form-list">
                    <h4>Your Experience</h4>
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
