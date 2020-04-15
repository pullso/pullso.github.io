window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const linksBg = document.querySelector(".links__bg");
  const menuLinks = document.querySelector(".menu__links");

  menuIcon.addEventListener("click", (e) => {
    console.log("click");
    menuLinks.classList.toggle("active");
    linksBg.classList.toggle("active");
  });

  //==== end DOMContentLoaded ====
});
