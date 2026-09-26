import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Education } from '../../features/portfolio/portfolio.types'

export function EducationForm() {
    const { t } = useTranslation()
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
            <h3>{t('editor.education.section')}</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="school">{t('editor.education.school')}</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        placeholder={t('editor.education.schoolPlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="degree">{t('editor.education.degree')}</label>
                    <input
                        id="degree"
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        placeholder={t('editor.education.degreePlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="field">{t('editor.education.field')}</label>
                    <input
                        id="field"
                        type="text"
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        placeholder={t('editor.education.fieldPlaceholder')}
                    />
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="startDate">{t('editor.education.startDate')}</label>
                        <input
                            id="startDate"
                            type="month"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="endDate">{t('editor.education.endDate')}</label>
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
                    <label htmlFor="description">{t('editor.education.description')}</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={t('editor.education.descriptionPlaceholder')}
                        rows={3}
                    />
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddEducation}
                >
                    <PlusIcon className="btn-icon" />
                    {t('editor.education.add')}
                </button>
            </form>

            {educations.length > 0 && (
                <div className="form-list">
                    <h4>{t('editor.education.section')}</h4>
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
