import { projects } from './data/projects.js';
import { Navigation } from './navigation.js';
import * as DOM from './dom.js';
import * as Animations from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const sidebar = document.getElementById('sidebar');
    const heroTitle = document.getElementById('hero-title');

    // 1. Renderização Dinâmica
    DOM.renderCarouselCards(track, projects);
    DOM.renderSideNav(sidebar, projects);

    const nav = new Navigation();
    nav.init();

    const cards = document.querySelectorAll('.card');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentIndex = 0;

    const updateUI = (index) => {
        const project = projects[index];
        DOM.updateActiveNav(navItems, index);
        cards.forEach((c, i) => c.classList.toggle('active', i === index));
        
        Animations.animateCarousel(track, index);
        
        // Update Theme Dinâmico via Variáveis CSS no Body
        document.body.style.setProperty('--accent', project.theme.primary);
        document.body.style.setProperty('--bg', project.theme.pageBg || '#0a0a0a');
        
        DOM.updateHeroTitle(heroTitle, project.title);
    };

    // Wheel Event
    let isAnimating = false;
    window.addEventListener('wheel', (e) => {
        if (isAnimating || nav.isDetailActive) return;
        isAnimating = true;
        
        if (e.deltaY > 0) currentIndex = Math.min(currentIndex + 1, projects.length - 1);
        else currentIndex = Math.max(currentIndex - 1, 0);

        updateUI(currentIndex);
        setTimeout(() => isAnimating = false, 800);
    });

    // Nav Clicks
    navItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (currentIndex === i) nav.openProject(projects[i].id);
            else {
                currentIndex = i;
                updateUI(i);
            }
        });
    });

    // Card Clicks
    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            currentIndex = i;
            updateUI(i);
            nav.openProject(projects[i].id);
        });
    });

    // Initial State
    updateUI(0);
});
