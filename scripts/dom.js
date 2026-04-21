import { templates } from './modules/templates.js';

export const renderCarouselCards = (container, projects) => {
    container.innerHTML = projects.map((project, index) => `
        <section class="card ${index === 0 ? 'active' : ''}" data-id="${project.id}">
            <div class="card-inner" style="
                border-right-color: ${project.theme.primary};
                background-image: ${project.assets.image ? `url(${project.assets.image})` : 'none'};
                background-size: cover;
                background-position: center;
            ">
                <p style="color: ${project.theme.primary}">${project.name.split(' ')[0]}</p>
                <h2>${project.name}</h2>
            </div>
        </section>
    `).join('');
};

export const renderSideNav = (container, projects) => {
    container.innerHTML = projects.map((project, index) => `
        <div class="nav-item ${index === 0 ? 'active' : ''}" data-index="${index}" data-id="${project.id}">
            <div class="dot" style="--project-color: ${project.theme.primary}"></div>
            <span class="nav-label">${project.name}</span>
        </div>
    `).join('');
};

// Agora usa o sistema de templates
export const renderProjectDetail = (container, project) => {
    const templateFn = templates[project.template] || templates.seo;
    container.innerHTML = templateFn(project);
};

export const updateActiveNav = (navItems, index) => {
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
};

export const updateHeroTitle = (el, text) => {
    el.innerText = text;
};
