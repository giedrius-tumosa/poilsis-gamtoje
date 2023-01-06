import PramoguKortele from "./PramoguKortele.js";

export default class PramogosModal {
  constructor(cardData) {
    this.cardData = cardData;
    return this.render();
  }
  render() {
    const modalBackground = document.createElement("div");
    modalBackground.setAttribute("class", "modal-background");


    const card = new PramoguKortele(this.cardData);
    card.classList.add("modal-content");
    card.classList.remove("hover-card");
    card.querySelector(".cardDescription").classList.add("reveal-description");
    card.querySelector(".buttonPlaciau").remove();
    modalBackground.append(card);

    console.log(document.querySelector("html").getBoundingClientRect().width);
    const widthBefore = document.querySelector("html").getBoundingClientRect().width;

    const body = document.querySelector("body");
    body.classList.add("blocked-scrolling");

    const widthAfter = document.querySelector("html").getBoundingClientRect().width;

    const main = document.querySelector("main");
    main.style.paddingRight = `${widthAfter - widthBefore}px`;

    modalBackground.style.top = `${window.scrollY}px`;



    // Modal closure event

    modalBackground.addEventListener("click", () => {
      modalBackground.remove();
      body.classList.remove("blocked-scrolling");
      main.style.paddingRight = `unset`;
    });


    return modalBackground;

  }

}