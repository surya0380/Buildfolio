import { useState, useCallback, createContext, useContext, type ReactNode } from 'react'
import type { Portfolio, Skill, Experience, Education, Project } from '../features/portfolio/portfolio.types'

interface PortfolioContextType {
    portfolio: Portfolio | null
    updatePortfolio: (portfolio: Portfolio) => void
    updateProfile: (key: string, value: unknown) => void
    updateTemplate: (template: 'classic' | 'minimal' | 'modern') => void
    addSkill: (skill: Skill) => void
    updateSkill: (skillId: string, skill: Skill) => void
    removeSkill: (skillId: string) => void
    addExperience: (exp: Experience) => void
    updateExperience: (expId: string, exp: Experience) => void
    removeExperience: (expId: string) => void
    addEducation: (edu: Education) => void
    updateEducation: (eduId: string, edu: Education) => void
    removeEducation: (eduId: string) => void
    addProject: (project: Project) => void
    updateProject: (projectId: string, project: Project) => void
    removeProject: (projectId: string) => void
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

    const updateTemplate = useCallback((template: 'classic' | 'minimal' | 'modern') => {
        setPortfolio((prev) => ({
            ...prev,
            settings: {
                ...prev.settings,
                template,
            },
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const addSkill = useCallback((skill: Skill) => {
        setPortfolio((prev) => ({
            ...prev,
            skills: [...prev.skills, skill],
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const updateSkill = useCallback((skillId: string, skill: Skill) => {
        setPortfolio((prev) => ({
            ...prev,
            skills: prev.skills.map((s) => (s.id === skillId ? skill : s)),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const removeSkill = useCallback((skillId: string) => {
        setPortfolio((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s.id !== skillId),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const addExperience = useCallback((exp: Experience) => {
        setPortfolio((prev) => ({
            ...prev,
            experience: [...prev.experience, exp],
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const updateExperience = useCallback((expId: string, exp: Experience) => {
        setPortfolio((prev) => ({
            ...prev,
            experience: prev.experience.map((e) => (e.id === expId ? exp : e)),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const removeExperience = useCallback((expId: string) => {
        setPortfolio((prev) => ({
            ...prev,
            experience: prev.experience.filter((e) => e.id !== expId),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const addEducation = useCallback((edu: Education) => {
        setPortfolio((prev) => ({
            ...prev,
            education: [...prev.education, edu],
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const updateEducation = useCallback((eduId: string, edu: Education) => {
        setPortfolio((prev) => ({
            ...prev,
            education: prev.education.map((e) => (e.id === eduId ? edu : e)),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const removeEducation = useCallback((eduId: string) => {
        setPortfolio((prev) => ({
            ...prev,
            education: prev.education.filter((e) => e.id !== eduId),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const addProject = useCallback((project: Project) => {
        setPortfolio((prev) => ({
            ...prev,
            projects: [...prev.projects, project],
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const updateProject = useCallback((projectId: string, project: Project) => {
        setPortfolio((prev) => ({
            ...prev,
            projects: prev.projects.map((p) => (p.id === projectId ? project : p)),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    const removeProject = useCallback((projectId: string) => {
        setPortfolio((prev) => ({
            ...prev,
            projects: prev.projects.filter((p) => p.id !== projectId),
            updatedAt: new Date().toISOString(),
        }))
    }, [])

    return (
        <PortfolioContext.Provider value={{
            portfolio,
            updatePortfolio,
            updateProfile,
            updateTemplate,
            addSkill,
            updateSkill,
            removeSkill,
            addExperience,
            updateExperience,
            removeExperience,
            addEducation,
            updateEducation,
            removeEducation,
            addProject,
            updateProject,
            removeProject,
        }}>
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
