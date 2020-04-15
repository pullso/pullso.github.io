window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const linksBg = document.querySelector(".links__bg");
  const menuLinks = document.querySelector(".menu__links");
  const tabs = document.querySelectorAll(".nav-item .nav-link");
  const tabHtml = document.querySelectorAll(".category-html");
  const tabVue = document.querySelectorAll(".category-vue");
  const tabJs = document.querySelectorAll(".category-js");

  console.log(tabs);

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.text);
      document.querySelector(".active_tab").classList.remove("active_tab");
      e.target.classList.add('ative_tab');

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
