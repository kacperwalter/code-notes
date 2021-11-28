gsap.from('.header', { duration: 0.5, y: '-100%', ease: "power2.out"});
gsap.from('.header', { duration: 0.5, opacity: 0 });
gsap.from('.link', { duration: 0.5, opacity: 0, delay: 0.5, stagger: .5, ease: "expo.out" }); // stagger runs every element called .link just after the same named element is fired
gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' });
gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%'});
gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 0.5 });
gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 1, opacity: 1, scale: 1, rotation: 0});