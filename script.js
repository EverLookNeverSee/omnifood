"use strict";

// Make dynamic current year instead of hard coded one:
const yearElement = document.querySelector(".year");
yearElement.textContent = String(new Date().getFullYear());
