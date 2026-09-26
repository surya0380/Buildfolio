import type { PortfolioProfile } from '../../features/portfolio/portfolio.types'

interface ProfileCardProps {
    profile: PortfolioProfile
}

export function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <div className="profile-card">
            {profile.image && (
                <img src={profile.image} alt={profile.name} className="profile-image" />
            )}
            <h2>{profile.name}</h2>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-bio">{profile.bio}</p>
            {profile.email && (
                <p className="profile-email">
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
            )}
        </div>
    )
}
