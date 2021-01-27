gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gsap-title',
        toggleActions: 'restart none none reset'
    }
});

tl.from('.gsap-title', { x: -400, opacity: 0, duration: 1, ease: 'power3' })
  .from('.gsap-subtitle', { y: -40, opacity: 0, duration: 1, ease: 'power3'}, '-=0.5');