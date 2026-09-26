import { HomeIcon, PencilSquareIcon, EyeIcon, SparklesIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import type { PageType } from '../../App'

interface SidebarProps {
    currentPage: PageType
    onNavigate: (page: PageType) => void
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
    const navItems: Array<{ page: PageType; icon: React.ReactNode; label: string }> = [
        { page: 'home', icon: <HomeIcon />, label: 'Home' },
        { page: 'templates', icon: <SparklesIcon />, label: 'Templates' },
        { page: 'editor', icon: <PencilSquareIcon />, label: 'Editor' },
        { page: 'preview', icon: <EyeIcon />, label: 'Preview' },
        { page: 'settings', icon: <AdjustmentsHorizontalIcon />, label: 'Settings' },
    ]

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <button
                        key={item.page}
                        className={`sidebar-button ${currentPage === item.page ? 'active' : ''}`}
                        onClick={() => onNavigate(item.page)}
                        title={item.label}
                        aria-label={item.label}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span className="sidebar-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )
}
