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
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () =>
          gsap.fromTo(el, fromVars, { ...toVars, delay: i * delayEach }),
        onEnterBack: () =>
          gsap.fromTo(el, fromVars, { ...toVars, delay: i * delayEach }),
      });
    });
  }

  function fadeUpRepeat(selector, delay = 0, yValue = 60, duration = 1.6, ease = "expo.out") {
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
    const ease = "expo.out";
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
      { y: 0, opacity: 1, duration: 2, ease: "expo.out" },
      0.1
    );
  }

  // =============================
  // 4. Services One Area
  // =============================
  function initServicesAnimations() {
    const duration = 2.1;
    const ease = "expo.out";

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
    const ease = "expo.out";

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
    animateGroupItems(".recent-works__title-wrap", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "expo.out" });
    animateGroupItems(".work-card", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.8, ease: "power4.out" }, 0.1);
    animateGroupItems(".recent-works__cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "expo.out" });
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




