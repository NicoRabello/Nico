export const transitionToDetail = (home, detail, callback) => {
    gsap.timeline()
        .to(home, { opacity: 0, y: -20, duration: 0.6, ease: "power2.inOut" })
        .set(home, { display: 'none' })
        .set(detail, { display: 'block', opacity: 0, y: 20 })
        .to(detail, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", onComplete: callback });
};

export const transitionToHome = (home, detail) => {
    gsap.timeline()
        .to(detail, { opacity: 0, y: 20, duration: 0.4, ease: "power2.inOut" })
        .set(detail, { display: 'none' })
        .set(home, { display: 'block', opacity: 0, y: -20 })
        .to(home, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
};

export const initParallax = (container) => {
    const bg = container.querySelector('.hero-parallax-bg');
    const title = container.querySelector('.hero-parallax-title');
    const badge = container.querySelector('.hero-parallax-badge');

    container.addEventListener('scroll', () => {
        const st = container.scrollTop;
        
        // Background moves at 0.5x
        if (bg) bg.style.transform = `translateY(${st * 0.5}px)`;
        
        // Title and Badge move at 1.2x for depth
        if (title) title.style.transform = `translateY(${st * -0.2}px)`;
        if (badge) badge.style.transform = `translateY(${st * -0.3}px)`;
    });
};

export const animateCarousel = (track, index) => {
    gsap.to(track, {
        y: -index * 70 + 'vh',
        duration: 1.2,
        ease: "expo.out"
    });
};
