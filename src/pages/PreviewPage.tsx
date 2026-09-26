import { useTranslation } from 'react-i18next'
import { usePortfolio } from '../hooks'
import { PortfolioRenderer } from '../components/portfolio/PortfolioRenderer'

export function PreviewPage() {
    const { t } = useTranslation()
    const { portfolio } = usePortfolio()

    if (!portfolio) {
        return <div className="preview-page">{t('common.loading')}</div>
    }

    return (
        <div className="preview-page">
            <div className="preview-header">
                <h2>{t('preview.title')}</h2>
                <p>{t('preview.subtitle')}</p>
            </div>
            <div className="preview-content">
                <div className="preview-frame">
                    <div className="portfolio-preview">
                        <PortfolioRenderer portfolio={portfolio} />
                    </div>
                </div>
            </div>
        </div>
    )
}
