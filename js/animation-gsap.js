
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const commonSettings = {
    start: "top 90%",
    toggleActions: "play none none none"
  };

  gsap.from(".hero__image--left", {
    scrollTrigger: { trigger: ".hero__image--left", ...commonSettings },
    x: -120,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__brand", {
    scrollTrigger: { trigger: ".hero__brand", ...commonSettings },
    y: -60,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__video-icon-wrap", {
    scrollTrigger: { trigger: ".hero__video-icon-wrap", ...commonSettings },
    scale: 0.4,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__stats", {
    scrollTrigger: { trigger: ".hero__stats", ...commonSettings },
    x: 80,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__tagline", {
    scrollTrigger: { trigger: ".hero__tagline", ...commonSettings },
    scale: 0.8,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
    transformOrigin: "left center"
  });

  gsap.from(".hero__text", {
    scrollTrigger: { trigger: ".hero__text", ...commonSettings },
    y: 60,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__arrow", {
    scrollTrigger: { trigger: ".hero__arrow", ...commonSettings },
    y: 20,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".hero__arrow", {
        y: 30,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut"
      });
    }
  });

  gsap.from(".hero__image--right", {
    scrollTrigger: { trigger: ".hero__image--right", ...commonSettings },
    x: 120,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".hero__line", {
    scrollTrigger: { trigger: ".hero__line", ...commonSettings, start: "top 95%" },
    scaleY: 0,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
    transformOrigin: "top center",
    stagger: 0.3
  });
});


// About Area
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateOnScroll(target, vars) {
    ScrollTrigger.create({
      trigger: target,
      start: "top 90%",
      onEnter: () => gsap.fromTo(target, { ...vars.from }, { ...vars.to }),
      onEnterBack: () => gsap.fromTo(target, { ...vars.from }, { ...vars.to }),
    });
  }

  const smoothEase = "expo.out";
  const smoothDuration = 2.2;

  animateOnScroll(".about__subtitle-wrap", {
    from: { y: -30, opacity: 0 },
    to: { y: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__title", {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__desc", {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__testimonial", {
    from: { x: -60, opacity: 0 },
    to: { x: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__image--left", {
    from: { x: -150, opacity: 0 },
    to: { x: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__image--right", {
    from: { x: 150, opacity: 0 },
    to: { x: 0, opacity: 1, duration: smoothDuration, ease: smoothEase }
  });

  animateOnScroll(".about__button", {
    from: { y: 40, scale: 0.8, opacity: 0 },
    to: {
      y: 0, scale: 1, opacity: 1,
      duration: smoothDuration,
      ease: smoothEase,
      onComplete: () => {
        gsap.to(".about__button", {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "sine.inOut"
        });
      }
    }
  });

  animateOnScroll(".about__hand", {
    from: { y: 30, opacity: 0 },
    to: {
      y: 0, opacity: 1,
      duration: smoothDuration,
      ease: smoothEase,
      onComplete: () => {
        gsap.to(".about__hand", {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 2.4,
          ease: "sine.inOut"
        });
      }
    }
  });
});
