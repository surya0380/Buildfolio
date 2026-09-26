import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../../hooks'
import { Sidebar } from './Sidebar'
import type { PageType } from '../../App'

export interface AppShellProps {
    children: ReactNode
    currentPage?: PageType
    onNavigate?: (page: PageType) => void
    showSidebar?: boolean
}

export function AppShell({ children, currentPage = 'home', onNavigate, showSidebar = true }: AppShellProps) {
    const { t } = useTranslation()
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="app-shell">
            <header className="app-header">
                <div className="app-header-content">
                    <h1>{t('header.title')}</h1>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={t('header.theme')}
                        title={t('header.theme')}
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="icon" />
                        ) : (
                            <SunIcon className="icon" />
                        )}
                    </button>
                </div>
            </header>
            <div className="app-main">
                {showSidebar && onNavigate && <Sidebar currentPage={currentPage} onNavigate={onNavigate} />}
                <div className="app-content">{children}</div>
            </div>
        </div>
    )
}
