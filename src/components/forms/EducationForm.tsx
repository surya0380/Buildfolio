import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Education } from '../../features/portfolio/portfolio.types'

export function EducationForm() {
    const { portfolio, addEducation, removeEducation } = usePortfolio()
    const educations = portfolio?.education || []

    const [formData, setFormData] = useState<Education>({
        id: '',
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleAddEducation = () => {
        if (!formData.school.trim() || !formData.degree.trim() || !formData.field.trim()) {
            return
        }
        const newEdu: Education = {
            id: `edu_${Date.now()}`,
            school: formData.school,
            degree: formData.degree,
            field: formData.field,
            startDate: formData.startDate,
            endDate: formData.endDate,
            description: formData.description,
        }
        addEducation(newEdu)
        setFormData({
            id: '',
            school: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            description: '',
        })
    }

    return (
        <div className="form-section">
            <h3>Education</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="school">School/University</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        placeholder="Name of institution"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="degree">Degree</label>
                    <input
                        id="degree"
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        placeholder="e.g., Bachelor of Science"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="field">Field of Study</label>
                    <input
                        id="field"
                        type="text"
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        placeholder="e.g., Computer Science"
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

                    <div className="form-field">
                        <label htmlFor="endDate">End Date (Optional)</label>
                        <input
                            id="endDate"
                            type="month"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="description">Description (Optional)</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Additional details about your education..."
                        rows={3}
                    />
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddEducation}
                >
                    <PlusIcon className="btn-icon" />
                    Add Education
                </button>
            </form>

            {educations.length > 0 && (
                <div className="form-list">
                    <h4>Your Education</h4>
                    <div className="list-items">
                        {educations.map((edu) => (
                            <div key={edu.id} className="list-item">
                                <div>
                                    <span className="item-name">
                                        {edu.degree} in {edu.field}
                                    </span>
                                    <span className="item-meta">{edu.school}</span>
                                </div>
                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => removeEducation(edu.id)}
                                    aria-label="Delete education"
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
