import { useState } from 'react'
import { HomePage, EditorPage, PreviewPage, TemplatesPage, SettingsPage } from './pages'
import { AppShell } from './components'
import { PortfolioProvider } from './hooks/usePortfolio'
import { mockPortfolioData } from './data/mockPortfolio'

export type PageType = 'home' | 'editor' | 'preview' | 'templates' | 'settings'

export default function App() {
    const [currentPage, setCurrentPage] = useState<PageType>('home')

    const renderPage = () => {
        switch (currentPage) {
            case 'editor':
                return <EditorPage />
            case 'preview':
                return <PreviewPage />
            case 'templates':
                return <TemplatesPage />
            case 'settings':
                return <SettingsPage />
            default:
                return <HomePage onGetStarted={() => setCurrentPage('templates')} />
        }
    }

    return (
        <PortfolioProvider initialPortfolio={mockPortfolioData}>
            <AppShell currentPage={currentPage} onNavigate={setCurrentPage}>
                {renderPage()}
            </AppShell>
        </PortfolioProvider>
    )
}
