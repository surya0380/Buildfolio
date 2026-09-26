import { useState } from 'react'
import { usePortfolio } from '../../hooks'
import type { PortfolioProfile } from '../../features/portfolio/portfolio.types'

export function ProfileForm() {
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
            <h3>Profile Information</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Jane Developer"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="title">Professional Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g., Full Stack Engineer"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell us about yourself..."
                        rows={4}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                    />
                </div>
            </form>
        </div>
    )
}
