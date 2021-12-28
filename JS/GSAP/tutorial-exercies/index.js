// gsap.from('.header', { duration: 1, y: '-100%', ease: "power2.out"});
// gsap.from('.header', { duration: 1, opacity: 0 });
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5, ease: "expo.out" }); // stagger runs every element called .link just after the same named element is fired
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' });
// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%'});
// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 });
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0});

const button = document.querySelector('[data-button]');
const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from('.header', { opacity: 0, y: '-100%', ease: "power2.out"})
  .from('.link', { opacity: 0, stagger:  .5, ease: "expo.out" })
  .from('.right', { x: '-100vw', ease: 'power2.in' }, 1) // that 1 is relative to header animation, so it does not wait for links to be animated
  .from('.left', { x: '-100%' }, '<.5')
  .to('.footer', { y: 0, ease: 'elastic' }, '<.5')
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0})

button.addEventListener('click', () => {
  timeline.timeScale(3);
  timeline.reverse();
});
