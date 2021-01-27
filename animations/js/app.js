gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

gsap.from('.gsap-title', {
    scrollTrigger: {
        trigger: '.gsap-title',
        markers: true,
        toggleActions: 'restart none none reverse'
    },
    x: -400,
    duration: 1
});

gsap.from('.gsap-subtitle', {
    scrollTrigger: {
        trigger: '.gsap-subtitle'
    },
    x: -400,
    duration: 1
});