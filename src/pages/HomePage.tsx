import { AppShell } from '../components'

export function HomePage() {
    return (
        <AppShell>
            <div className="home-page">
                <section className="hero">
                    <h2>Create Your Professional Portfolio</h2>
                    <p>Build, customize, and share your portfolio in minutes—no coding required.</p>
                    <button className="cta-button">Start Building</button>
                </section>
            </div>
        </AppShell>
    )
}
