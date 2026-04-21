export const renderCarouselCards = (container, projects) => {
    container.innerHTML = projects.map((project, index) => `
        <section class="card ${index === 0 ? 'active' : ''}" data-id="${project.id}">
            <div class="card-inner" style="border-right-color: ${project.theme.primary}">
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

export const renderProjectDetail = (container, project) => {
    container.innerHTML = `
        <div class="project-hero" style="--project-color: ${project.theme.primary}">
            <div class="hero-parallax-bg"></div>
            <div class="hero-content">
                <span class="hero-parallax-badge">${project.backgroundText}</span>
                <h1 class="hero-parallax-title">${project.title}</h1>
            </div>
        </div>
        
        <div class="project-body" style="--project-color: ${project.theme.primary}">
            <section class="body-section">
                <h2 style="color: ${project.theme.primary}">Overview</h2>
                <p class="summary-card" style="border-left-color: ${project.theme.primary}">
                    ${project.content.overview}
                </p>
            </section>

            <section class="body-grid">
                ${project.content.features.map(feature => `
                    <div class="detail-card">
                        <h3 style="color: ${project.theme.primary}">${feature.title}</h3>
                        <p>${feature.desc}</p>
                    </div>
                `).join('')}
            </section>
        </div>
    `;
};

export const updateActiveNav = (navItems, index) => {
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
};

export const updateHeroTitle = (el, text) => {
    el.innerText = text;
};
