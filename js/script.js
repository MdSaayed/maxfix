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