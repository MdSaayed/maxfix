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


