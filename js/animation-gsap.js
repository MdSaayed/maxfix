


// Hero One
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateRepeatedly(selector, fromVars, toVars) {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars)
    });
  }

  // All animations using the new pattern
  animateRepeatedly(".hero__image--left",
    { x: -120, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__brand",
    { y: -60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__video-icon-wrap",
    { scale: 0.4, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__stats",
    { x: 80, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__tagline",
    { scale: 0.8, opacity: 0, transformOrigin: "left center" },
    { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__text",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  ScrollTrigger.create({
    trigger: ".hero__arrow",
    start: "top 90%",
    onEnter: () => {
      gsap.fromTo(".hero__arrow", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.6, ease: "power4.out",
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
    },
    onEnterBack: () => {
      gsap.fromTo(".hero__arrow", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.6, ease: "power4.out",
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
    }
  });

  animateRepeatedly(".hero__image--right",
    { x: 120, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
  );

  animateRepeatedly(".hero__line",
    { scaleY: 0, opacity: 0, transformOrigin: "top center" },
    { scaleY: 1, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.3 }
  );
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

// Fact Area
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Helper function for repeatable scroll-based animation
  function animateRepeatedly(selector, fromVars, toVars) {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars)
    });
  }

  // Animate each fact__item individually with slight stagger
  document.querySelectorAll(".fact__item").forEach((item, i) => {
    animateRepeatedly(item, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 2, ease: "expo.out", delay: i * 0.1 }
    );
  });
});


// Services One Area
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Helper for reusable scroll-triggered animation
  function animateRepeatedly(selector, fromVars, toVars) {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars)
    });
  }

  const duration = 2.1;
  const ease = "expo.out";

  // Title area animation
  animateRepeatedly(".services__subtitle-wrap", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
  animateRepeatedly(".services__title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
  animateRepeatedly(".services__btn", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });

  // Content block animation
  animateRepeatedly(".services__desc", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });
  animateRepeatedly(".services__image", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });

  // Services list items
  document.querySelectorAll(".services__item").forEach((item, i) => {
    animateRepeatedly(item, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration, ease, delay: i * 0.05 }
    );
  });
});

