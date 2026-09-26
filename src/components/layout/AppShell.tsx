import type { ReactNode } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../../hooks'

export interface AppShellProps {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="app-shell">
            <header className="app-header">
                <div className="app-header-content">
                    <h1>Buildfolio</h1>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="icon" />
                        ) : (
                            <SunIcon className="icon" />
                        )}
                    </button>
                </div>
            </header>
            <div className="app-content">{children}</div>
        </div>
    )
}
