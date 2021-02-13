gsap.registerPlugin(ScrollTrigger);

/**
    // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()
    ScrollTrigger.matchMedia({
        '(min-width: 800px)': () => {
            // To not face property conflict with translate and transition, put the gsap class selector outside the box
            // Do not need end property because we are not using scrub - Find a way to the start using velocity    
            const tlArticleMore = gsap.timeline({
                scrollTrigger: {
                    trigger: '.gsap-article-more',
                    toggleActions: 'play none none reset',
                    markers: true
                },
            });


            tlArticleMore.from('.gsap-article-more', { 
                x: -600,
                rotation: -90,
                duration: 2,
                opacity: 0, 
                ease: 'power2',
            });
        }
    });
**/

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
    stagger: 0.4
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

gsap.from('.gsap-creation-card', { 
    scrollTrigger: {
        trigger: '.gsap-creation-card',
        toggleActions: 'restart none none reset',
    },
    opacity: 0, 
    duration: 1.5,
    stagger: 0.4
});

// FOOTER
const tlFooter = gsap.timeline({
    scrollTrigger: {
        trigger: '.gsap-footer-title',
        toggleActions: 'restart none none reset',
    }
});

tlFooter.from('.gsap-footer-title', { y: -200, opacity: 0, duration: 1.25 })
        .from('.gsap-footer-verse', { x: -300, opacity: 0, duration: 1.25, ease: 'power2' });
