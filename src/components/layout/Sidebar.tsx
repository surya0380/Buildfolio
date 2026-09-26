import { useTranslation } from 'react-i18next'
import { HomeIcon, PencilSquareIcon, EyeIcon, SparklesIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import type { PageType } from '../../App'

interface SidebarProps {
    currentPage: PageType
    onNavigate: (page: PageType) => void
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
    const { t } = useTranslation()

    const navItems: Array<{ page: PageType; icon: React.ReactNode; label: string }> = [
        { page: 'home', icon: <HomeIcon />, label: t('nav.home') },
        { page: 'templates', icon: <SparklesIcon />, label: t('nav.templates') },
        { page: 'editor', icon: <PencilSquareIcon />, label: t('nav.editor') },
        { page: 'preview', icon: <EyeIcon />, label: t('nav.preview') },
        { page: 'settings', icon: <AdjustmentsHorizontalIcon />, label: t('nav.settings') },
    ]

    return (
        <aside className="sidebar" aria-label="Navigation">
            <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
                {navItems.map((item) => (
                    <button
                        key={item.page}
                        className={`sidebar-button ${currentPage === item.page ? 'active' : ''}`}
                        onClick={() => onNavigate(item.page)}
                        title={item.label}
                        aria-label={item.label}
                        aria-current={currentPage === item.page ? 'page' : undefined}
                    >
                        <span className="sidebar-icon" aria-hidden="true">
                            {item.icon}
                        </span>
                        <span className="sidebar-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )
}
