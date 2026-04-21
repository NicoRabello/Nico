export function ProjectHero({ project }) {
    return `
        <div class="project-hero" style="--project-color: ${project.theme.primary}">
            <div class="hero-parallax-bg" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), var(--bg)), url(${project.assets.image}); background-size: cover; background-position: center;"></div>
            <div class="hero-content">
                ${project.assets.badge ? `<span class="hero-parallax-badge">${project.assets.badge}</span>` : ''}
                <h1 class="hero-parallax-title">${project.title}</h1>
                ${project.content.headline ? `<p class="hero-tagline">${project.content.headline}</p>` : ''}
            </div>
        </div>
    `;
}
