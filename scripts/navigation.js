import { projects } from './data/projects.js';
import * as DOM from './dom.js';
import * as Animations from './animations.js';

export class Navigation {
    constructor() {
        this.isDetailActive = false;
        this.homeView = document.querySelector('.carousel-viewport');
        this.detailView = document.querySelector('.detail-view');
    }

    init() {
        document.getElementById('home-btn').addEventListener('click', () => this.goHome());
    }

    openProject(id) {
        if (this.isDetailActive) return;
        
        const project = projects.find(p => p.id === id);
        if (!project) return;

        this.isDetailActive = true;
        DOM.renderProjectDetail(this.detailView, project);
        
        Animations.transitionToDetail(this.homeView, this.detailView, () => {
            Animations.initParallax(this.detailView);
        });
    }

    goHome() {
        if (!this.isDetailActive) return;
        this.isDetailActive = false;
        
        Animations.transitionToHome(this.homeView, this.detailView);
    }
}
