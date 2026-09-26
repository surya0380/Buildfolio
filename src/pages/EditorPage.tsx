import { useTranslation } from 'react-i18next'
import { ProfileForm, SkillsForm, ExperienceForm, EducationForm, ProjectsForm } from '../components/forms'

export function EditorPage() {
    const { t } = useTranslation()

    return (
        <div className="editor-page">
            <div className="editor-header">
                <h2>{t('editor.title')}</h2>
                <p>{t('editor.title')}</p>
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
