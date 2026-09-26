import { ProfileForm, SkillsForm, ExperienceForm, EducationForm, ProjectsForm } from '../components/forms'

export function EditorPage() {
    return (
        <div className="editor-page">
            <div className="editor-header">
                <h2>Portfolio Editor</h2>
                <p>Customize your portfolio details</p>
            </div>
            <div className="editor-content">
                <ProfileForm />
                <SkillsForm />
                <ExperienceForm />
                <EducationForm />
                <ProjectsForm />
            </div>
        </div>
    )
}
