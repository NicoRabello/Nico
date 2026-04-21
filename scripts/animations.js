export const transitionToDetail = (home, detail, callback) => {
    gsap.timeline()
        .to(home, { opacity: 0, scale: 0.95, duration: 0.6, ease: "power2.inOut" })
        .set(home, { display: 'none' })
        .set(detail, { display: 'block', opacity: 0, y: 30 })
        .to(detail, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", onComplete: callback });
};

export const transitionToHome = (home, detail) => {
    gsap.timeline()
        .to(detail, { opacity: 0, y: 30, duration: 0.4, ease: "power2.inOut" })
        .set(detail, { display: 'none' })
        .set(home, { display: 'block', opacity: 0, scale: 0.95 })
        .to(home, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" });
};

// Motor de Animações Dinâmico
export const applyProjectAnimations = (container, config) => {
    const bg = container.querySelector('.hero-parallax-bg');
    const content = container.querySelector('.hero-content');

    if (config.type === "parallax") {
        container.addEventListener('scroll', () => {
            const st = container.scrollTop;
            if (bg) bg.style.transform = `translateY(${st * config.speed}px)`;
            if (content) content.style.transform = `translateY(${st * -0.2}px)`;
        });
    }

    if (config.type === "focus-reveal") {
        // Exemplo de animação diferente: escala no scroll
        container.addEventListener('scroll', () => {
            const st = container.scrollTop;
            if (bg) bg.style.opacity = 0.2 + (st / 500);
            if (content) content.style.opacity = 1 - (st / 600);
        });
    }
};

export const animateCarousel = (track, index) => {
    gsap.to(track, {
        y: -index * 70 + 'vh',
        duration: 1.2,
        ease: "expo.out"
    });
};
