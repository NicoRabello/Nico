import { ProjectHero } from '../../components/ProjectHero.js';
import { DetailCard } from '../../components/DetailCard.js';
import { MetricItem } from '../../components/MetricItem.js';

export const templates = {
    seo: (project) => `
        ${ProjectHero({ project })}
        <div class="project-body" style="--project-color: ${project.theme.primary}">
            <section class="body-section">
                <h2>Visão Geral</h2>
                <div class="summary-card">${project.content.overview}</div>
            </section>
            <div class="body-grid">
                ${project.content.sections.map(sec => 
                    DetailCard({ title: sec.title, items: sec.items })
                ).join('')}
            </div>
        </div>
    `,

    dashboard: (project) => `
        <div class="project-hero" style="--project-color: ${project.theme.primary}">
            <div class="hero-parallax-bg" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), var(--bg)), url(${project.assets.image}); background-size: cover; background-position: center;"></div>
            <div class="hero-content">
                <h1 class="hero-parallax-title">${project.title}</h1>
                <div class="metrics-row">
                    ${project.content.metrics.map(m => 
                        MetricItem({ label: m.label, value: m.value })
                    ).join('')}
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
                    ${DetailCard({ 
                        title: 'Features', 
                        content: `<ul class="feature-pills">${project.content.features.map(f => `<li>${f}</li>`).join('')}</ul>` 
                    })}
                </section>
            </div>
        </div>
    `,

    about: (project) => `
        ${ProjectHero({ project })}
        <div class="project-body" style="--project-color: ${project.theme.primary}">
            <section class="body-section">
                <h2>Overview</h2>
                <div class="summary-card">${project.content.overview}</div>
            </section>
            <div class="body-grid">
                ${project.content.sections.map(sec => 
                    DetailCard({ title: sec.title, items: sec.items })
                ).join('')}
            </div>
        </div>
    `
};
