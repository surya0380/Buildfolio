import { AppShell } from '../components'

interface HomePageProps {
    onGetStarted?: () => void
}

export function HomePage({ onGetStarted }: HomePageProps) {
    return (
        <AppShell>
            <div className="home-page">
                <section className="hero">
                    <h2>Create Your Professional Portfolio</h2>
                    <p>Build, customize, and share your portfolio in minutes—no coding required.</p>
                    <button className="cta-button" onClick={onGetStarted}>
                        Start Building
                    </button>
                </section>
            </div>
        </AppShell>
    )
}
