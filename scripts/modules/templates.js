// Factory de Templates dinâmicos
export const templates = {
    seo: (project) => `
        <div class="project-hero" style="--project-color: ${project.theme.primary}">
            <div class="hero-parallax-bg" style="background: ${project.assets.heroBg}"></div>
            <div class="hero-content">
                <span class="hero-parallax-badge">${project.assets.badge}</span>
                <h1 class="hero-parallax-title">${project.title}</h1>
                <p class="hero-tagline">${project.content.headline}</p>
            </div>
        </div>
        <div class="project-body" style="--project-color: ${project.theme.primary}">
            <section class="body-section">
                <h2>Visão Geral</h2>
                <div class="summary-card">${project.content.overview}</div>
            </section>
            <div class="body-grid">
                ${project.content.sections.map(sec => `
                    <div class="detail-card">
                        <h3>${sec.title}</h3>
                        <ul>${sec.items.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    dashboard: (project) => `
        <div class="project-hero" style="--project-color: ${project.theme.primary}">
            <div class="hero-parallax-bg" style="background: ${project.assets.heroBg}"></div>
            <div class="hero-content">
                <h1 class="hero-parallax-title">${project.title}</h1>
                <div class="metrics-row">
                    ${project.content.metrics.map(m => `
                        <div class="metric-item">
                            <span class="m-val">${m.value}</span>
                            <span class="m-lab">${m.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="project-body" style="--project-color: ${project.theme.primary}">
            <div class="dashboard-grid">
                <section class="db-main">
                    <h2>Análise de Fluxo</h2>
                    <p>${project.content.overview}</p>
                </section>
                <section class="db-side">
                    <h3>Features</h3>
                    <ul class="feature-pills">
                        ${project.content.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </section>
            </div>
        </div>
    `
};
