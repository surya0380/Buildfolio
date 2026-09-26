import { AppShell } from '../components'

export function PreviewPage() {
    return (
        <AppShell>
            <div className="preview-page">
                <div className="preview-header">
                    <h2>Portfolio Preview</h2>
                    <p>See how your portfolio looks to visitors</p>
                </div>
                <div className="preview-content">
                    <div className="preview-frame">
                        <div className="portfolio-preview">
                            <header>
                                <h1>Your Name</h1>
                                <p>Your Title</p>
                            </header>
                            <section>
                                <h2>About</h2>
                                <p>Your bio goes here</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
