import { AppShell } from '../components'

export function TemplatesPage() {
    const templates = [
        { id: 'classic', name: 'Classic', description: 'Clean and timeless design' },
        { id: 'minimal', name: 'Minimal', description: 'Simple and elegant' },
        { id: 'modern', name: 'Modern', description: 'Bold and contemporary' },
    ]

    return (
        <AppShell>
            <div className="templates-page">
                <div className="templates-header">
                    <h2>Choose a Template</h2>
                    <p>Select a design template for your portfolio</p>
                </div>
                <div className="templates-grid">
                    {templates.map((template) => (
                        <div key={template.id} className="template-card">
                            <div className="template-preview" />
                            <h3>{template.name}</h3>
                            <p>{template.description}</p>
                            <button className="template-select-btn">Select</button>
                        </div>
                    ))}
                </div>
            </div>
        </AppShell>
    )
}
