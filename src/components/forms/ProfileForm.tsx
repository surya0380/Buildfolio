import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePortfolio } from '../../hooks'
import type { PortfolioProfile } from '../../features/portfolio/portfolio.types'

export function ProfileForm() {
    const { t } = useTranslation()
    const { portfolio, updateProfile } = usePortfolio()
    const profile = portfolio?.profile

    const [formData, setFormData] = useState<PortfolioProfile>(
        profile || {
            id: '',
            name: '',
            title: '',
            bio: '',
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        updateProfile(name, value)
    }

    return (
        <div className="form-section">
            <h3>{t('editor.profile.section')}</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="name">{t('editor.profile.name')}</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('editor.profile.namePlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="title">{t('editor.profile.title')}</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder={t('editor.profile.titlePlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="bio">{t('editor.profile.bio')}</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder={t('editor.profile.bioPlaceholder')}
                        rows={4}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">{t('editor.profile.email')}</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        placeholder={t('editor.profile.emailPlaceholder')}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="phone">{t('editor.profile.phone')}</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        placeholder={t('editor.profile.phonePlaceholder')}
                    />
                </div>
            </form>
        </div>
    )
}
