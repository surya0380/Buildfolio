import { useTranslation } from 'react-i18next'
import { usePortfolio } from '../hooks'

export function TemplatesPage() {
    const { t } = useTranslation()
    const { portfolio, updateTemplate } = usePortfolio()
    const currentTemplate = portfolio?.settings.template || 'classic'

    const templates = [
        {
            id: 'classic',
            name: t('templates.classic.name'),
            description: t('templates.classic.description'),
        },
        {
            id: 'minimal',
            name: t('templates.minimal.name'),
            description: t('templates.minimal.description'),
        },
        {
            id: 'modern',
            name: t('templates.modern.name'),
            description: t('templates.modern.description'),
        },
    ]

    return (
        <div className="templates-page">
            <div className="templates-header">
                <h2>{t('templates.title')}</h2>
                <p>{t('templates.subtitle')}</p>
            </div>
            <div className="templates-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card ${currentTemplate === template.id ? 'template-selected' : ''}`}
                    >
                        <div className={`template-preview ${template.id}`} />
                        <h3>{template.name}</h3>
                        <p>{template.description}</p>
                        <button
                            className="template-select-btn"
                            onClick={() => updateTemplate(template.id as 'classic' | 'minimal' | 'modern')}
                        >
                            {currentTemplate === template.id ? `✓ ${t('templates.selectedLabel')}` : t('templates.selectButton')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
