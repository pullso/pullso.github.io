export default function () {
  const progress = document.querySelector(".progress");
  const toTop = document.querySelector("#toTop");

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
}
