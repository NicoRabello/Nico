import { projects } from '../data/projects.js';

export const store = {
    state: {
        currentIndex: 0,
        isDetailActive: false,
        activeProject: null
    },

    setState(newState) {
        this.state = { ...this.state, ...newState };
        if (newState.currentIndex !== undefined) {
            this.state.activeProject = projects[this.state.currentIndex];
        }
    },

    getState() {
        return this.state;
    }
};
