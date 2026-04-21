import { projects } from './data/projects.js';
import { Navigation } from './navigation.js';
import { store } from './core/store.js';
import * as DOM from './dom.js';
import * as Animations from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const sidebar = document.getElementById('sidebar');
    const heroTitle = document.getElementById('hero-title');


    DOM.renderCarouselCards(track, projects);
    DOM.renderSideNav(sidebar, projects);

    const nav = new Navigation();
    nav.init();

    const cards = document.querySelectorAll('.card');
    const navItems = document.querySelectorAll('.nav-item');
    
    const updateUI = (index) => {
        store.setState({ currentIndex: index });
        const { activeProject } = store.getState();
        
        DOM.updateActiveNav(navItems, index);
        cards.forEach((c, i) => {
            c.classList.toggle('active', i === index);
            c.setAttribute('aria-hidden', i !== index);
        });
        
        Animations.animateCarousel(track, index);
        
        document.body.style.setProperty('--accent', activeProject.theme.primary);
        const bg = activeProject.theme.pageBg || '#0a0a0a';

        const isImage =
            bg.includes('url(') ||
            bg.match(/\.(jpeg|jpg|png|webp|gif|svg)$/i) ||
            bg.startsWith('http') ||
            bg.startsWith('/') ||
            bg.startsWith('.');

        if (isImage) {
            const formattedBg = bg.includes('url(') ? bg : `url(${bg})`;
            
            document.body.style.setProperty('--bg-image', formattedBg);
            document.body.style.setProperty('--bg-color', 'transparent');
        } else {
            document.body.style.setProperty('--bg-image', 'none');
            document.body.style.setProperty('--bg-color', bg);
        }
        DOM.updateHeroTitle(heroTitle, activeProject.title);
    };

    let isAnimating = false;
    const scrollDelay = 800;

    const navigate = (direction) => {
        if (isAnimating || nav.isDetailActive) return;
        
        const state = store.getState();
        let nextIndex = state.currentIndex;

        if (direction > 0) nextIndex = Math.min(state.currentIndex + 1, projects.length - 1);
        else nextIndex = Math.max(state.currentIndex - 1, 0);

        if (nextIndex !== state.currentIndex) {
            isAnimating = true;
            updateUI(nextIndex);
            setTimeout(() => isAnimating = false, scrollDelay);
        }
    };

    window.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) < 10) return;
        navigate(e.deltaY);
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        if (nav.isDetailActive) {
            if (e.key === 'Escape') nav.goHome();
            return;
        }

        switch(e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                navigate(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                navigate(-1);
                break;
            case 'Enter':
                nav.openProject(projects[store.getState().currentIndex].id);
                break;
        }
    });

    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        if (nav.isDetailActive) return;
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY - touchEndY;

        if (Math.abs(delta) > 50) {
            navigate(delta);
        }
    }, { passive: true });

    navItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (store.getState().currentIndex === i) nav.openProject(projects[i].id);
            else updateUI(i);
        });
    });

    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            if (store.getState().currentIndex === i) nav.openProject(projects[i].id);
            else updateUI(i);
        });
    });

    updateUI(0);
});
