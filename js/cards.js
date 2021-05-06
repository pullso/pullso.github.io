import db from "./db.js";

function getCardCategoriesHTML(categories) {
  return categories.reduce((acc, category) => {
    acc += `<p class="card-category${
      acc === "" ? "-main" : ""
    }">${category}</p>`;
    return acc;
  }, "");
}

function getCardHTML(card) {
  return `
    <div class="card wow fadeInLeft">
      <div class="card-desc">
        ${card.description}
        <br/>
        <br/>
        <a
          href="${card.link}"
          target="_blank"
        >
          <button type="button" class="btn btn-outline-light">
            Перейти
          </button>
        </a
        >
      </div>
      <img
        class="card-img-top"
        src="${card.img}"
        alt="Card image cap"
      />
      <div class="card-body">
        ${getCardCategoriesHTML(card.categories)}
        <div class="row d-flex justify-content-between pl-1">
          <p class="card-title">
            ${card.title}
          </p>
        </div>
      </div>
    </div>`;
}

const cards = [];

db.sort((a, b) => a.id - b.id).forEach((card) => {
  const newCard = document.createElement("div");

  newCard.classList.add(
    "col-12",
    "col-md-6",
    "col-xl-4",
    "mb-3",
    `category-${card.categories[0].toLowerCase()}`
  );

  if (!card.mobileSupport) {
    newCard.classList.add("d-none", "d-md-block");
  }

  newCard.innerHTML += getCardHTML(card);
  cards.push(newCard);
});

export default cards;
