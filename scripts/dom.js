import { templates } from './modules/templates.js';
import { Card } from '../components/Card.js';
import { NavItem } from '../components/NavItem.js';

export const renderCarouselCards = (container, projects) => {
    container.innerHTML = projects.map((project, index) => 
        Card({ project, index })
    ).join('');
};

export const renderSideNav = (container, projects) => {
    container.innerHTML = projects.map((project, index) => 
        NavItem({ project, index })
    ).join('');
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
