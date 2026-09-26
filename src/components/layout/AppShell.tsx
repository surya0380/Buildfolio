import type { ReactNode } from 'react'

export interface AppShellProps {
    children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="app-shell">
            <header className="app-header">
                <h1>Buildfolio</h1>
            </header>
            <div className="app-content">{children}</div>
        </div>
    )
}
