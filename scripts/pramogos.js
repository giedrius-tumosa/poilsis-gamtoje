import PramoguKortele from "./PramoguKortele.js";

const PRAMOGU_CARDS_DATA = '../data/data.json';

function loadPramoguCards(dataLink) {
  fetch(dataLink)
    .then(response => response.json())
    .then(data => {
      const cardsDisplaySection = document.querySelector(".cardsDisplaySection");
      data.pramogos.forEach(el => cardsDisplaySection.append(new PramoguKortele(el)));
    });
}

loadPramoguCards(PRAMOGU_CARDS_DATA);