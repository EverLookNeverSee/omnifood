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

// Smooth scroll animation:
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top:
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior:"smooth"});
    }
    // Close mobile navigation:
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  })
})
