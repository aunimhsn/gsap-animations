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

// To not face property confusion with translation and transition, put the gsap class selector outside the box
gsap.from('.gsap-article-more', { 
    scrollTrigger: {
        trigger: '.gsap-article-more',
        toggleActions: 'play none none reset',
        start: 'top 20%', // Do not need end property because we are not using scrub - Find a way to the start using velocity
        markers: true
    },
    y: -300,
    rotation: -90,
    duration: 1.5,
    opacity: 0, 
    ease: 'power3',
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