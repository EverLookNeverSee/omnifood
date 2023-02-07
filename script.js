"use strict";

// Make dynamic current year instead of hard coded one:
const yearElement = document.querySelector(".year");
yearElement.textContent = String(new Date().getFullYear());

// Make mobile navigation functional:
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
})
