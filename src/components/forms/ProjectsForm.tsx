import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePortfolio } from '../../hooks'
import type { Project } from '../../features/portfolio/portfolio.types'

export function ProjectsForm() {
    const { portfolio, addProject, removeProject } = usePortfolio()
    const projects = portfolio?.projects || []

    const [formData, setFormData] = useState<Project>({
        id: '',
        title: '',
        description: '',
        link: '',
        technologies: [],
    })

    const [currentTech, setCurrentTech] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleAddTech = () => {
        if (!currentTech.trim()) return
        setFormData((prev) => ({
            ...prev,
            technologies: [...prev.technologies, currentTech.trim()],
        }))
        setCurrentTech('')
    }

    const handleRemoveTech = (tech: string) => {
        setFormData((prev) => ({
            ...prev,
            technologies: prev.technologies.filter((t) => t !== tech),
        }))
    }

    const handleAddProject = () => {
        if (!formData.title.trim() || !formData.description.trim()) {
            return
        }
        const newProject: Project = {
            id: `proj_${Date.now()}`,
            title: formData.title,
            description: formData.description,
            link: formData.link,
            technologies: formData.technologies,
        }
        addProject(newProject)
        setFormData({
            id: '',
            title: '',
            description: '',
            link: '',
            technologies: [],
        })
    }

    return (
        <div className="form-section">
            <h3>Projects</h3>
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="project-title">Project Title</label>
                    <input
                        id="project-title"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Your project name"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="project-desc">Description</label>
                    <textarea
                        id="project-desc"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your project..."
                        rows={3}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="project-link">Project Link (Optional)</label>
                    <input
                        id="project-link"
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder="https://example.com"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="project-tech">Technologies</label>
                    <div className="tech-input-group">
                        <input
                            id="project-tech"
                            type="text"
                            value={currentTech}
                            onChange={(e) => setCurrentTech(e.target.value)}
                            placeholder="e.g., React"
                        />
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={handleAddTech}
                        >
                            Add
                        </button>
                    </div>
                    {formData.technologies.length > 0 && (
                        <div className="tech-tags">
                            {formData.technologies.map((tech) => (
                                <span key={tech} className="tech-tag">
                                    {tech}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTech(tech)}
                                        className="tech-tag-remove"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    className="btn-primary btn-add-item"
                    onClick={handleAddProject}
                >
                    <PlusIcon className="btn-icon" />
                    Add Project
                </button>
            </form>

            {projects.length > 0 && (
                <div className="form-list">
                    <h4>Your Projects</h4>
                    <div className="list-items">
                        {projects.map((project) => (
                            <div key={project.id} className="list-item">
                                <div>
                                    <span className="item-name">{project.title}</span>
                                    {project.technologies.length > 0 && (
                                        <div className="item-tech">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => removeProject(project.id)}
                                    aria-label="Delete project"
                                >
                                    <TrashIcon className="btn-icon" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
