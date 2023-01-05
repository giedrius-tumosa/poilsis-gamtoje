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
    card.querySelector(".cardDescription").classList.add("reveal-description");
    card.querySelector(".buttonPlaciau").remove();
    modalBackground.append(card);

    // Modal event

    modalBackground.addEventListener("click", () => {
      modalBackground.remove();
    });


    return modalBackground;

  }

}