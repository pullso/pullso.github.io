new WOW().init();
import cards from "./cards.js";
import scrollInit from "./scroll.js";
import tabsInit from "./tabs.js";

window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const menuLinks = document.querySelector(".menu__links");
  const links = document.querySelectorAll(".menu__links-item");

  scrollInit();
  tabsInit();

  const workSection = document.querySelector("#works .card-deck");
  cards.forEach((card) => workSection.appendChild(card));

  menuIcon.addEventListener("click", (e) => {
    menuLinks.classList.toggle("active");
    menuLinks.classList.add("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (menuLinks.classList.contains("open")) {
        menuLinks.classList.remove("active", "open");
      }
    });
  });
});
