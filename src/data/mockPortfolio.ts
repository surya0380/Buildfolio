import type { Portfolio } from '../features/portfolio/portfolio.types'

/**
 * Starter mock portfolio data.
 * This will be replaced with real user data and state management.
 */
export const mockPortfolioData: Portfolio = {
    id: '1',
    profile: {
        id: 'profile-1',
        name: 'Jane Developer',
        title: 'Full Stack Engineer',
        bio: 'Passionate about building beautiful, functional web applications.',
        email: 'jane@example.com',
        phone: '+1 (555) 123-4567',
    },
    skills: [
        { id: 'skill-1', name: 'React', level: 'advanced' },
        { id: 'skill-2', name: 'TypeScript', level: 'advanced' },
        { id: 'skill-3', name: 'Node.js', level: 'intermediate' },
        { id: 'skill-4', name: 'Tailwind CSS', level: 'advanced' },
    ],
    experience: [
        {
            id: 'exp-1',
            company: 'Tech Company',
            position: 'Senior Frontend Engineer',
            startDate: '2022-01-01',
            current: true,
            description: 'Leading frontend development and mentoring junior developers.',
        },
        {
            id: 'exp-2',
            company: 'Startup Inc',
            position: 'Full Stack Developer',
            startDate: '2020-06-01',
            endDate: '2021-12-31',
            description: 'Built and maintained full stack applications for startup clients.',
        },
    ],
    education: [
        {
            id: 'edu-1',
            school: 'University of Tech',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2016-09-01',
            endDate: '2020-05-31',
        },
    ],
    projects: [
        {
            id: 'proj-1',
            title: 'Buildfolio',
            description: 'A modern portfolio builder for developers',
            technologies: ['React', 'TypeScript', 'Vite'],
            link: 'https://github.com/buildfolio',
        },
        {
            id: 'proj-2',
            title: 'Task Manager App',
            description: 'Collaborative task management application',
            technologies: ['React', 'Node.js', 'MongoDB'],
            link: 'https://github.com/taskapp',
        },
    ],
    socialLinks: [
        { id: 'social-1', platform: 'github', url: 'https://github.com/janedeveloper' },
        { id: 'social-2', platform: 'linkedin', url: 'https://linkedin.com/in/janedeveloper' },
        { id: 'social-3', platform: 'twitter', url: 'https://twitter.com/janedeveloper' },
    ],
    settings: {
        template: 'modern',
        theme: 'light',
        accentColor: '#0284c7',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
}

