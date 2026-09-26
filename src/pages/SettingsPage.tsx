import { AppShell } from '../components'

export function SettingsPage() {
    return (
        <AppShell>
            <div className="settings-page">
                <div className="settings-header">
                    <h2>Portfolio Settings</h2>
                    <p>Customize your portfolio appearance and behavior</p>
                </div>
                <div className="settings-content">
                    <section className="settings-section">
                        <h3>Theme</h3>
                        <p>Choose your preferred theme (already available in header)</p>
                    </section>
                    <section className="settings-section">
                        <h3>Template</h3>
                        <p>Select a portfolio template</p>
                    </section>
                    <section className="settings-section">
                        <h3>Colors</h3>
                        <p>Customize accent colors</p>
                    </section>
                    <section className="settings-section">
                        <h3>Visibility</h3>
                        <p>Control what sections are visible</p>
                    </section>
                </div>
            </div>
        </AppShell>
    )
}
