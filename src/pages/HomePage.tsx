import { useTranslation } from 'react-i18next'

interface HomePageProps {
    onGetStarted?: () => void
}

export function HomePage({ onGetStarted }: HomePageProps) {
    const { t } = useTranslation()

    return (
        <div className="home-page">
            <section className="hero">
                <h2>{t('home.hero')}</h2>
                <p>{t('home.subtitle')}</p>
                <button className="cta-button" onClick={onGetStarted}>
                    {t('home.cta')}
                </button>
            </section>
        </div>
    )
}
