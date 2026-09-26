import { useTranslation } from 'react-i18next'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../hooks'
import { exportPortfolioHTML } from '../utils/export'

export function SettingsPage() {
    const { t } = useTranslation()
    const { portfolio } = usePortfolio()

    const handleExport = () => {
        if (portfolio) {
            exportPortfolioHTML(portfolio)
        }
    }

    return (
        <div className="settings-page">
            <div className="settings-header">
                <h2>{t('settings.title')}</h2>
                <p>{t('settings.export.description')}</p>
            </div>
            <div className="settings-content">
                <section className="settings-section">
                    <h3>{t('settings.theme.section')}</h3>
                    <p>{t('settings.theme.description')}</p>
                </section>
                <section className="export-section">
                    <h3>{t('settings.export.section')}</h3>
                    <p>{t('settings.export.description')}</p>
                    <button className="btn-export" onClick={handleExport}>
                        <ArrowDownTrayIcon className="btn-icon" />
                        {t('settings.export.button')}
                    </button>
                </section>
            </div>
        </div>
    )
}
