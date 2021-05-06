export default function () {
  const tabs = document.querySelectorAll(".nav-item .nav-link");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".active_tab").classList.remove("active_tab");
      e.target.classList.add("active_tab");
      const items = document.querySelectorAll(".portfolio .col-12");

      items.forEach((item) => {
        if (item.classList.contains(e.target.id) || e.target.id === "all") {
          item.classList.remove("disable");
          item.classList.toggle("active");
        } else {
          item.classList.remove("active");
          item.classList.add("disable");
        }
      });
    });
  });
}
