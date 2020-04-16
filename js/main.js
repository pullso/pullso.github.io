new WOW().init();

window.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu__icon");
  const menuLinks = document.querySelector(".menu__links");
  const links = document.querySelectorAll(".menu__links-item");
  const tabs = document.querySelectorAll(".nav-item .nav-link");
  const progress = document.querySelector(".progress");
  const toTop = document.querySelector("#toTop");

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
    menuLinks.classList.toggle("active");
    menuLinks.classList.add("open");
    // linksBg.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (menuLinks.classList.contains("open")) {
        menuLinks.classList.remove("active", "open");
      }
    });
  });

  window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= 600) {
      toTop.classList.remove("disable");
    } else {
      toTop.classList.add("disable");
    }
    let windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let per = (windowScroll / windowHeight) * 100;
    progress.style.width = per + "%";
  });

  toTop.addEventListener("click", (e) => {
    window.scroll(0, 0);
  });
  //==== end DOMContentLoaded ====
});
