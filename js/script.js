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


 document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".services__item-toggle-icon");

  toggleIcons.forEach((icon) => {
    const item = icon.closest(".services__item");
    const content = item.querySelector(".services__item-content");

    // ✅ Fix default icon if item is active on load
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

      // Toggle icon classes
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


// Testimonials
const cards = document.querySelectorAll('.testimonial-card');
const cardList = document.querySelector('.testimonials__list');

cards.forEach((card, index) => {
  const isLastCard = index === cards.length - 1;

  card.addEventListener('mouseenter', () => {
    cardList.style.marginTop = '-7.5rem';

    if (isLastCard) {
      card.style.transform = 'translateY(0)';
    }

    cardList.style.transition = 'margin-top 0.6s ease';
  });

  card.addEventListener('mouseleave', () => {
    cardList.style.marginTop = '0';
    cardList.style.transition = 'margin-top 0.6s ease';

    if (isLastCard) {
      card.style.transform = 'translateY(-150px)';
    }
  });
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
      const duration = 1000; // duration in ms (adjust this to control speed)
      const start = window.pageYOffset;
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // between 0 and 1
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    });
  });


