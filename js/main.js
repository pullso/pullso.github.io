new WOW().init();

window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const linksBg = document.querySelector(".links__bg");
  const menuLinks = document.querySelector(".menu__links");
  const tabs = document.querySelectorAll(".nav-item .nav-link");

  console.log(tabs);

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".active_tab").classList.remove("active_tab");
      e.target.classList.add("active_tab");
      const items = document.querySelectorAll(".portfolio  .col-xl-4");

      items.forEach((item) => {
        if (item.classList.contains(e.target.id) || e.target.id === "all") {
          item.classList.remove("disable");
          item.classList.toggle("active");
        } else {
          item.classList.remove("active");
          item.classList.add("disable");
        }
      });

      // body
    });
  });

  menuIcon.addEventListener("click", (e) => {
    console.log("click");
    menuLinks.classList.toggle("active");
    linksBg.classList.toggle("active");
  });

  //==== end DOMContentLoaded ====
});
