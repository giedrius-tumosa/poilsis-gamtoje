import PramoguKortele from "./PramoguKortele.js";

const PRAMOGU_CARDS_DATA = '../data/data.json';

function loadPramoguCards(dataLink) {
  fetch(dataLink)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const body = document.querySelector("body");
      data.pramogos.forEach(el => body.append(new PramoguKortele(el)));
    });
}

loadPramoguCards(PRAMOGU_CARDS_DATA);