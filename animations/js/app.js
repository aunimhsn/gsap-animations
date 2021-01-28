gsap.registerPlugin(ScrollTrigger);

// ARTICLES
const tlArticle = gsap.timeline({
    scrollTrigger: {
        trigger: '.gsap-article-title',
        toggleActions: 'restart none none reset',
        
    }
});

tlArticle.from('.gsap-article-title', { x: -400, opacity: 0, duration: 1.5, ease: 'power3' })
         .from('.gsap-article-subtitle', { y: -40, opacity: 0, duration: 1.5, ease: 'power3'}, '-=0.5');

gsap.from('.gsap-article-card', { 
    scrollTrigger: {
        trigger: '.gsap-article-card',
        toggleActions: 'restart none none reset',
    },
    opacity: 0, 
    duration: 1.5,
    stagger: 0.2
});

// TODO: fix animation bug
gsap.from('.gsap-more-article', { 
    scrollTrigger: {
        trigger: '.gsap-more-article',
        toggleActions: 'play none none reset',
        start: 'top 20%',
        end: 'bottom 21.4%',
        markers: true
        
    },
    duration: 2,
    rotation: 90,
    opacity: 0.25, 

    ease: 'none',
});

// CREATIONS
const tlCreation = gsap.timeline({
    scrollTrigger: {
        trigger: '.gsap-creation-title',
        toggleActions: 'restart none none reset',
        
    }
});

tlCreation.from('.gsap-creation-title', { x: -400, opacity: 0, duration: 1.5, ease: 'power3' })
         .from('.gsap-creation-subtitle', { y: -40, opacity: 0, duration: 1.5, ease: 'power3'}, '-=0.5');