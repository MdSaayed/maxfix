/*------------------------------------------------------------------
Template Name: Maxfix – Digital Agency Portfolio HTML Template
Template URL: [demo url]
Description: Maxfix is a next-generation HTML template converted from a premium Figma design, crafted for digital agencies, design studios, digital marketing agencies, personal portfolios, and creative professionals. It includes 14+ well-structured pages based on a 1770px grid system, featuring 2+ beautifully designed home pages. The codebase is clean, customizable, and organized for seamless editing and scalability across various business and personal website needs.
Author: UiBazar
Author URL: https://themeforest.net/user/kitdokan
Version: 1.0
-------------------------------------------------------------------

ANIMATION INDEX
===================

1. Header One Area
2. About One Area
3. Fact Area
4. Services One Area
5. Process Area
6. Recent Work Area
7. Brand Logos Area
8. Testimonials One Area
9. Blog Area

------------------------------------------------------------------*/


"use strict";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // =============================
  // Shared Helper Functions
  // =============================
  function animateRepeatedly(selector, fromVars, toVars) {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars)
    });
  }

  function animateOnScroll(target, vars) {
    ScrollTrigger.create({
      trigger: target,
      start: "top 90%",
      onEnter: () => gsap.fromTo(target, vars.from, vars.to),
      onEnterBack: () => gsap.fromTo(target, vars.from, vars.to)
    });
  }
  function animateGroupItems(selector, fromVars, toVars, delayEach = 0) {
    document.querySelectorAll(selector).forEach((el, i) => {
      // Set initial state to prevent jump
      gsap.set(el, fromVars);

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          gsap.set(el, fromVars); // reset before animating again
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
        onEnterBack: () => {
          gsap.set(el, fromVars); // reset before animating again
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
      });
    });
  }

  function fadeUpRepeat(selector, delay = 0, yValue = 60, duration = 1.6, ease = "power1.out") {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () =>
        gsap.fromTo(selector, { y: yValue, opacity: 0 }, { y: 0, opacity: 1, duration, ease, delay }),
      onEnterBack: () =>
        gsap.fromTo(selector, { y: yValue, opacity: 0 }, { y: 0, opacity: 1, duration, ease, delay }),
    });
  }

  // =============================
  // 1. Header One Area
  // =============================
  function initHeroAnimations() {
    animateRepeatedly(".hero__image--left", { x: -120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__brand", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__video-icon-wrap", { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__stats", { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__tagline", { scale: 0.8, opacity: 0, transformOrigin: "left center" }, { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" });

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

    animateRepeatedly(".hero__image--right", { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".hero__line", { scaleY: 0, opacity: 0, transformOrigin: "top center" }, { scaleY: 1, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.3 });
  }

  // =============================
  // 2. About One Area
  // =============================
  function initAboutAnimations() {
    const ease = "power4.out";
    const duration = 2.2;

    animateOnScroll(".about__subtitle-wrap", { from: { y: -30, opacity: 0 }, to: { y: 0, opacity: 1, duration, ease } });
    animateOnScroll(".about__title", { from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1, duration, ease } });
    animateOnScroll(".about__desc", { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration, ease } });
    animateOnScroll(".about__testimonial", { from: { x: -60, opacity: 0 }, to: { x: 0, opacity: 1, duration, ease } });
    animateOnScroll(".about__image--left", { from: { x: -150, opacity: 0 }, to: { x: 0, opacity: 1, duration, ease } });
    animateOnScroll(".about__image--right", { from: { x: 150, opacity: 0 }, to: { x: 0, opacity: 1, duration, ease } });

    animateOnScroll(".about__button", {
      from: { y: 40, scale: 0.8, opacity: 0 },
      to: {
        y: 0, scale: 1, opacity: 1, duration, ease,
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
        y: 0, opacity: 1, duration, ease,
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
  }

  // =============================
  // 3. Fact Area
  // =============================
  function initFactAnimations() {
    animateGroupItems(".fact__item",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
      0.1
    );
  }

  // =============================
  // 4. Services One Area
  // =============================
  function initServicesAnimations() {
    const duration = 2.1;
    const ease = "power4.out";

    animateRepeatedly(".services__subtitle-wrap", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".services__title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });

    // fixed: prevent scaling down, just fade-in
    animateRepeatedly(".services__btn", { opacity: 0 }, { opacity: 1, duration, ease });

    animateRepeatedly(".services__desc", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });
    animateRepeatedly(".services__image", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });

    animateGroupItems(".services__item",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.05
    );
  }

  // =============================
  // 5. Process Area
  // =============================
  function initProcessAnimations() {
    const duration = 2.2;
    const ease = "power4.out";

    animateRepeatedly(".process__subtitle-wrap", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".process__title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".process__btn", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });

    animateGroupItems(".process__step",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.1
    );
  }

  // =============================
  // 6. Recent Work Area
  // =============================
  function initRecentWorkAnimations() {
    animateGroupItems(".recent-works__title-wrap", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power4.out" });
    animateGroupItems(".work-card", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.8, ease: "power4.out" }, 0.1);
    animateGroupItems(".recent-works__cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power4.out" });
  }

  // =============================
  // 7. Brand Logos Area
  // =============================
  function initBrandLogoAnimations() {
    animateRepeatedly(".brand-logos__title", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" });

    ScrollTrigger.create({
      trigger: ".brand-logos__grid",
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(".brand-logos__item", { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.2
        });
      },
      onEnterBack: () => {
        gsap.fromTo(".brand-logos__item", { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.2
        });
      }
    });
  }

  // =============================
  // 8. Testimonials One Area
  // =============================
  function initTestimonialAnimations() {
    gsap.fromTo(
      [".testimonials__label", ".testimonials__title", ".testimonials__button"],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".testimonials__title-wrap",
          start: "top 90%",
          toggleActions: "play none none reset"
        }
      }
    );

    document.querySelectorAll(".testimonial-card").forEach((card, i) => {
      animateRepeatedly(card,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out", delay: i * 0.2 }
      );
    });
  }

  // =============================
  // 9. Blog Area
  // =============================
  function initBlogAnimations() {
    fadeUpRepeat(".blog__subtitle-wrap", 0);
    fadeUpRepeat(".blog__heading", 0.1);
    fadeUpRepeat(".blog__btn", 0.2);

    document.querySelectorAll(".blog__item").forEach((item, index) => {
      fadeUpRepeat(item, index * 0.15);
    });
  }

  // =============================
  // 10. FAQ Area
  // =============================
  function initFaqAnimations() {
    gsap.fromTo(
      [".faq__title", ".faq__subtitle", ".faq__button"],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".faq__sidebar",
          start: "top 90%",
          toggleActions: "play none none reset"
        }
      }
    );

    document.querySelectorAll(".faq__item").forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 95%",
        onEnter: () => {
          gsap.fromTo(
            item,
            { y: 70, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power4.out",
              delay: index * 0.1
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            item,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power4.out",
              delay: index * 0.1
            }
          );
        }
      });
    });
  }

  // =============================
  // 11. Hero Two Area
  // =============================
  function initHeroTwoAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    animateRepeatedly(".hero__title-text", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".hero__image", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateRepeatedly(".hero__bg-img", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });

    animateRepeatedly(".hero__video-thumb", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateRepeatedly(".hero__subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration, ease });

    gsap.to(".hero__video-icon", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "sine.inOut"
    });

    ScrollTrigger.create({
      trigger: ".hero__btn",
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(".hero__btn",
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            ease,
            onComplete: () => {
              gsap.to(".hero__btn", {
                scale: 1.05,
                repeat: -1,
                yoyo: true,
                duration: 1.8,
                ease: "sine.inOut"
              });
            }
          });
      },
      onEnterBack: () => {
        gsap.fromTo(".hero__btn",
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            ease,
            onComplete: () => {
              gsap.to(".hero__btn", {
                scale: 1.05,
                repeat: -1,
                yoyo: true,
                duration: 1.8,
                ease: "sine.inOut"
              });
            }
          });
      }
    });
  }

  // =============================
  // Avatar Card Shared Animation
  // =============================
  function initAvatarCardAnimations() {
    const duration = 1.6;
    const ease = "power4.out";

    animateRepeatedly(".avatar-card", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".avatars", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".avatar-stat", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateRepeatedly(".avatar-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
  }

  // =============================
  // About Two Area
  // =============================
  function initAboutTwoAnimations() {
    const ease = "power4.out";
    const duration = 2;

    animateOnScroll(".about--two .about__title", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".about--two .about__item", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration, ease },
      0.15
    );

    animateGroupItems(".about--two .about__item-line", 
      { scaleX: 0, opacity: 0, transformOrigin: "left" },
      { scaleX: 1, opacity: 1, duration: 1.2, ease },
      0.15
    );

    animateOnScroll(".about--two .about__image img", {
      from: { x: 120, opacity: 0 },
      to: { x: 0, opacity: 1, duration, ease }
    });
  }

  // =============================
  // Portfolio Area
  // =============================
  function initPortfolioOneAnimations() {
    const ease = "power4.out";
    const duration = 2;

    animateOnScroll(".portfolio--one .portfolio__title", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateOnScroll(".portfolio--one .portfolio__year", {
      from: { scale: 0.8, opacity: 0, y: 40 },
      to: { scale: 1, opacity: 1, y: 0, duration: 1.6, ease }
    });

    animateGroupItems(".portfolio--one .portfolio__item", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.6, ease }, 
      0.15
    );

    animateOnScroll(".portfolio--one .portfolio__btn", {
      from: { y: 40, opacity: 0, scale: 0.9 },
      to: {
        y: 0, opacity: 1, scale: 1, duration: 1.6, ease,
        onComplete: () => {
          gsap.to(".portfolio--one .portfolio__btn", {
            y: 6,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut"
          });
        }
      }
    });
  }

  // =============================
  // Services Two Area
  // =============================
  function initServicesTwoAnimations() {
    const ease = "power4.out";
    const duration = 1.8;

    animateOnScroll(".services--two .services__text", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    gsap.to(".services--two .services__title", {
      backgroundPosition: "200% center",
      ease: "none",
      duration: 20,
      repeat: -1
    });

    animateGroupItems(".services--two .services__tab",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration, ease },
      0.1
    );

    animateOnScroll(".services--two .services__content img", {
      from: { scale: 0.85, opacity: 0 },
      to: { scale: 1, opacity: 1, duration, ease }
    });

    animateOnScroll(".services--two .services__content.active .services__details-text", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".services--two .services__content.active .services__tag",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.05
    );
  }

  // =============================
  // Brands Area
  // =============================
  function initBrandsAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    animateOnScroll(".brands .brands__title", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".brands .brands__item", 
      { y: 30, scale: 0.9, opacity: 0 }, 
      { y: 0, scale: 1, opacity: 1, duration, ease }, 
      0.1
    );
  }


  // =============================
  // Initialize All Sections
  // =============================
  initHeroAnimations();
  initAboutAnimations();
  initFactAnimations();
  initServicesAnimations();
  initProcessAnimations();
  initRecentWorkAnimations();
  initBrandLogoAnimations();
  initTestimonialAnimations();
  initBlogAnimations();
  initFaqAnimations();
  initHeroTwoAnimations();
  initAvatarCardAnimations();
  initAboutTwoAnimations();
  initPortfolioOneAnimations();
  initServicesTwoAnimations();
  initBrandsAnimations();
});



/* =============================
* 9. Smooth Scroll / Lenis
============================= */
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);




