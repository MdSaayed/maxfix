"use strict";

// Dynamically set background images
document.addEventListener('DOMContentLoaded', function () {
    const bgDivs = document.querySelectorAll('[data-bg-img]');
    if (bgDivs.length > 0) {
        bgDivs.forEach(div => {
            const bgImg = div.getAttribute('data-bg-img');
            if (bgImg) {
                div.style.background = `url(${bgImg})`;
                div.style.backgroundSize = 'cover';
                div.style.backgroundPosition = 'center';
                div.style.zIndex = '999';
            }
        });
    }
});

// Services
document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".services__item-toggle-icon");

  toggleIcons.forEach((icon) => {
    const item = icon.closest(".services__item");
    const content = item.querySelector(".services__item-content");

    if (item.classList.contains("services__item--active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      icon.classList.add("rotate");

      content.style.visibility = "visible";
      content.style.transform = "scaleY(1)";
      content.style.opacity = "1";
      content.style.height = "auto";
      content.style.padding = "2rem";
      content.style.marginBottom = "2rem";  
    }

    icon.addEventListener("click", function () {
      const isActive = item.classList.contains("services__item--active");

      icon.classList.toggle("fa-plus", isActive);
      icon.classList.toggle("fa-minus", !isActive);
      icon.classList.toggle("rotate");

      if (isActive) {
        content.style.transform = "scaleY(0)";
        content.style.opacity = "0";
        content.style.height = "0";
        content.style.padding = "0 2rem";
        content.style.marginBottom = "0"; 

        setTimeout(() => {
          item.classList.remove("services__item--active");
          content.style.visibility = "hidden";
        }, 500);
      } else {
        item.classList.add("services__item--active");
        content.style.visibility = "visible";
        content.style.height = "auto";
        content.style.padding = "2rem";
        content.style.marginBottom = "2rem";  

        void content.offsetWidth;

        content.style.transform = "scaleY(1)";
        content.style.opacity = "1";
      }
    });
  });
});

// Testimonials Two
document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".testimonials__item-toggle-icon");

  toggleIcons.forEach((icon) => {
    const item = icon.closest(".testimonials__item");
    const content = item.querySelector(".testimonials__item-content");

    if (item.classList.contains("testimonials__item--active")) {
      icon.classList.add("rotate");

      content.style.visibility = "visible";
      content.style.transform = "scaleY(1)";
      content.style.opacity = "1";
      content.style.height = "auto";
      content.style.padding = "2rem";
      content.style.marginBottom = "2rem";
    }

    icon.addEventListener("click", function () {
      const isActive = item.classList.contains("testimonials__item--active");

      icon.classList.toggle("rotate");

      if (isActive) {
        content.style.transform = "scaleY(0)";
        content.style.opacity = "0";
        content.style.height = "0";
        content.style.padding = "0 2rem";
        content.style.marginBottom = "0";

        setTimeout(() => {
          item.classList.remove("testimonials__item--active");
          content.style.visibility = "hidden";
        }, 500);
      } else {
        item.classList.add("testimonials__item--active");
        content.style.visibility = "visible";
        content.style.height = "auto";
        content.style.padding = "2rem";
        content.style.marginBottom = "2rem";

        // Force reflow before transition
        void content.offsetWidth;

        content.style.transform = "scaleY(1)";
        content.style.opacity = "1";
      }
    });
  });
});


// Testimonials
const cards = document.querySelectorAll('.testimonial-card');
const cardList = document.querySelector('.testimonials__list');

cards.forEach((card, index) => {
  const isLastCard = index === cards.length - 1;

  card.addEventListener('mouseenter', () => {
    cardList.style.marginTop = '-7.5rem';
    cardList.style.transition = 'margin-top 0.6s ease';

    if (isLastCard) {
      card.style.transform = 'translateY(0)';
    }
  });

  card.addEventListener('mouseleave', () => {
    cardList.style.marginTop = '0';
    cardList.style.transition = 'margin-top 0.6s ease';

    if (isLastCard && window.innerWidth >= 1190) {
      card.style.transform = 'translateY(-150px)';
    } else if (isLastCard) {
      card.style.transform = 'translateY(0)';
    }
  });

  if (isLastCard && window.innerWidth >= 1190) {
      card.style.transform = 'translateY(-150px)';
    }
});

// Handle screen resizing
  window.addEventListener('resize', () => {
  const lastCard = cards[cards.length - 1];

  if (window.innerWidth >= 1190) {
    lastCard.style.transform = 'translateY(-150px)';
  } else {
    lastCard.style.transform = 'translateY(0)';
  } 
});

// Faq 
document.querySelectorAll('.faq__toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const item = this.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
    const isActive = item.classList.contains('faq__item--active');

    // Collapse all items first
    document.querySelectorAll('.faq__item').forEach(i => {
      const a = i.querySelector('.faq__answer');
      a.style.height = '0px';
      i.classList.remove('faq__item--active');
    });

    if (!isActive) {
      item.classList.add('faq__item--active');
      answer.style.height = answer.scrollHeight + 'px';

      answer.addEventListener('transitionend', () => {
        if (item.classList.contains('faq__item--active')) {
          answer.style.height = 'auto';
        }
      }, { once: true });
    }
  });
});

// Back to Top Smooth Animation
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.querySelector(".footer__scroll-top");

  scrollBtn.addEventListener("click", function () {
    const duration = 1000;  
    const start = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);  
      const ease = 1 - Math.pow(1 - progress, 3);  

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  });
});

// Pricing 
const toggleBtns = document.querySelectorAll('.pricing__toggle-btn');
const prices = document.querySelectorAll('.pricing__price');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('pricing__toggle-btn--active'));
    btn.classList.add('pricing__toggle-btn--active');

    const period = btn.dataset.period;

    prices.forEach(price => {
      price.textContent = `$${parseFloat(price.dataset[period]).toFixed(2)}`;
    });
  });
});

 document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".services__tab");
    const contents = document.querySelectorAll(".services__content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        document.querySelector(`.services__content[data-content="${target}"]`).classList.add("active");
      });
    });
});

// Recent Work Filters
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".recent-work__filters li");
  const cards = document.querySelectorAll(".work-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("filter-active"));
      button.classList.add("filter-active");

      // Filter cards
      cards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Services Details Slider
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.hero__slider')) {
    const serviceSlider = new Swiper('.hero__slider', {
      loop: true,
      navigation: {
        nextEl: '.hero__slider-button-next',
        prevEl: '.hero__slider-button-prev',
      },
    });
  }
});

// Menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu--open');
});

closeMobile.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--open');
});

// Mobile dropdown toggle
document.querySelectorAll('.mobile-menu__list .menu-item-has-children > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.toggle('open');
  });
});