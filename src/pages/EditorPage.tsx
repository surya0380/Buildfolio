import { AppShell } from '../components'

export function EditorPage() {
    return (
        <AppShell>
            <div className="editor-page">
                <div className="editor-header">
                    <h2>Portfolio Editor</h2>
                    <p>Customize your portfolio details</p>
                </div>
                <div className="editor-content">
                    <section className="editor-section">
                        <h3>Profile</h3>
                        <p>Edit your name, title, and bio</p>
                    </section>
                    <section className="editor-section">
                        <h3>Skills</h3>
                        <p>Add and manage your skills</p>
                    </section>
                    <section className="editor-section">
                        <h3>Experience</h3>
                        <p>Add your work experience</p>
                    </section>
                    <section className="editor-section">
                        <h3>Projects</h3>
                        <p>Showcase your projects</p>
                    </section>
                </div>
            </div>
        </AppShell>
    )
}
