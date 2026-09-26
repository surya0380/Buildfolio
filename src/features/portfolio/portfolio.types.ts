export interface PortfolioProfile {
    id: string
    name: string
    title: string
    bio: string
    image?: string
    email?: string
    phone?: string
}

export interface Skill {
    id: string
    name: string
    level?: 'beginner' | 'intermediate' | 'advanced'
}

export interface Experience {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    current?: boolean
    description?: string
}

export interface Education {
    id: string
    school: string
    degree: string
    field: string
    startDate: string
    endDate?: string
    description?: string
}

export interface Project {
    id: string
    title: string
    description: string
    image?: string
    link?: string
    technologies: string[]
}

export interface SocialLink {
    id: string
    platform: 'github' | 'linkedin' | 'twitter' | 'portfolio' | 'email'
    url: string
}

export interface PortfolioSettings {
    template: 'classic' | 'minimal' | 'modern'
    theme: 'light' | 'dark'
    accentColor?: string
}

export interface Portfolio {
    id: string
    profile: PortfolioProfile
    skills: Skill[]
    experience: Experience[]
    education: Education[]
    projects: Project[]
    socialLinks: SocialLink[]
    settings: PortfolioSettings
    createdAt: string
    updatedAt: string
}
