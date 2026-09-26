import { useState, useCallback, createContext, useContext, type ReactNode } from 'react'
import type { Portfolio } from '../features/portfolio/portfolio.types'

interface PortfolioContextType {
    portfolio: Portfolio | null
    updatePortfolio: (portfolio: Portfolio) => void
    updateProfile: (name: string, value: unknown) => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children, initialPortfolio }: { children: ReactNode; initialPortfolio: Portfolio }) {
    const [portfolio, setPortfolio] = useState<Portfolio>(initialPortfolio)

    const updatePortfolio = useCallback((updatedPortfolio: Portfolio) => {
        setPortfolio(updatedPortfolio)
    }, [])

    const updateProfile = useCallback((key: string, value: unknown) => {
        setPortfolio((prev) => ({
            ...prev,
            profile: {
                ...prev.profile,
                [key]: value,
            },
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    return (
        <PortfolioContext.Provider value={{ portfolio, updatePortfolio, updateProfile }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export function usePortfolio() {
    const context = useContext(PortfolioContext)
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider')
    }
    return context
}
