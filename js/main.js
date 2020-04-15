window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const menuLinks = document.querySelector(".menu__links");

  menuIcon.addEventListener("click", (e) => {
    menuLinks.classList.toggle("disable");
  });

  //==== end DOMContentLoaded ====
});
