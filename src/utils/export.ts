import type { Portfolio } from '../features/portfolio/portfolio.types'

export function exportPortfolioHTML(portfolio: Portfolio): void {
    const html = generateHTML(portfolio)
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${portfolio.profile.name.replace(/\s+/g, '-').toLowerCase()}-portfolio.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

function generateHTML(portfolio: Portfolio): string {
    const { profile, skills, experience, education, projects, settings } = portfolio
    const template = settings.template

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${profile.name} - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #0f172a;
            background: #f8fafc;
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        h1 {
            font-size: 32px;
            margin-bottom: 8px;
        }
        
        .title {
            font-size: 16px;
            color: #64748b;
            margin-bottom: 12px;
        }
        
        .bio {
            font-size: 14px;
            color: #475569;
            margin-bottom: 12px;
            line-height: 1.6;
        }
        
        .contact {
            font-size: 14px;
        }
        
        .contact a {
            color: #0ea5e9;
            text-decoration: none;
        }
        
        .contact a:hover {
            text-decoration: underline;
        }
        
        section {
            margin-bottom: 40px;
        }
        
        h2 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 8px;
            border-bottom: 2px solid #0ea5e9;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .skill {
            background: #e2e8f0;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
        }
        
        .item {
            margin-bottom: 20px;
            padding: 16px;
            background: #f8fafc;
            border-left: 3px solid #0ea5e9;
            border-radius: 4px;
        }
        
        .item h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }
        
        .item .meta {
            font-size: 12px;
            color: #64748b;
            margin-bottom: 8px;
        }
        
        .item .description {
            font-size: 13px;
            color: #475569;
            line-height: 1.6;
        }
        
        .tech {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 8px;
        }
        
        .tech-tag {
            background: #0ea5e9;
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            .container {
                box-shadow: none;
                padding: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${escapeHtml(profile.name)}</h1>
            <p class="title">${escapeHtml(profile.title)}</p>
            ${profile.bio ? `<p class="bio">${escapeHtml(profile.bio)}</p>` : ''}
            ${profile.email ? `<p class="contact"><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></p>` : ''}
        </header>
        
        ${skills && skills.length > 0 ? `
        <section>
            <h2>Skills</h2>
            <div class="skills">
                ${skills.map((s) => `<span class="skill">${escapeHtml(s.name)} <small>(${s.level})</small></span>`).join('')}
            </div>
        </section>
        ` : ''}
        
        ${experience && experience.length > 0 ? `
        <section>
            <h2>Experience</h2>
            ${experience.map((e) => `
            <div class="item">
                <h3>${escapeHtml(e.position)}</h3>
                <p class="meta">${escapeHtml(e.company)} • ${e.startDate}${!e.current ? ` to ${e.endDate}` : ' to Present'}</p>
                ${e.description ? `<p class="description">${escapeHtml(e.description)}</p>` : ''}
            </div>
            `).join('')}
        </section>
        ` : ''}
        
        ${education && education.length > 0 ? `
        <section>
            <h2>Education</h2>
            ${education.map((e) => `
            <div class="item">
                <h3>${escapeHtml(e.degree)} in ${escapeHtml(e.field)}</h3>
                <p class="meta">${escapeHtml(e.school)}</p>
                ${e.description ? `<p class="description">${escapeHtml(e.description)}</p>` : ''}
            </div>
            `).join('')}
        </section>
        ` : ''}
        
        ${projects && projects.length > 0 ? `
        <section>
            <h2>Projects</h2>
            ${projects.map((p) => `
            <div class="item">
                <h3>${p.link ? `<a href="${escapeHtml(p.link)}" target="_blank">${escapeHtml(p.title)}</a>` : escapeHtml(p.title)}</h3>
                <p class="description">${escapeHtml(p.description)}</p>
                ${p.technologies.length > 0 ? `
                <div class="tech">
                    ${p.technologies.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
                </div>
                ` : ''}
            </div>
            `).join('')}
        </section>
        ` : ''}
        
        <footer class="footer">
            <p>Generated by Buildfolio • Template: ${template}</p>
        </footer>
    </div>
</body>
</html>
    `

    return htmlContent
}

function escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
}
