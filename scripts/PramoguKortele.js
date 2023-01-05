export default class PramoguKortele {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    // Card wrap

    const card = document.createElement("article");
    card.setAttribute("class", "pramoguKortele");

    // Figure

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.setAttribute("src", this.props.photoUrl);
    image.setAttribute("alt", `Paslaugos ${this.props.pavadinimas} paveiksliukas.`);
    image.setAttribute("width", 400);
    image.setAttribute("height", 266);

    figure.append(image);

    // Text section

    const textSection = document.createElement("section");
    textSection.setAttribute("class", "cardText");

    // Title

    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "cardTitle");
    cardTitle.append(document.createTextNode(this.props.pavadinimas));

    // Placiau button

    const buttonPlaciau = document.createElement("div");
    buttonPlaciau.setAttribute("class", "buttonPlaciau");
    const buttonText = document.createElement("p");
    buttonText.append(document.createTextNode("Plačiau"));

    buttonPlaciau.append(buttonText);


    // Description

    const cardDescription = document.createElement("p");
    cardDescription.setAttribute("class", "cardDescription");
    cardDescription.append(document.createTextNode(this.props.aprasymas));


    // Appends

    textSection.append(cardTitle, buttonPlaciau, cardDescription);
    card.append(figure, textSection);

    // EVENTS

    buttonPlaciau.addEventListener("click", () => {
      if (cardDescription.classList.contains("reveal-description")) {
        cardDescription.classList.remove("reveal-description");
      } else {
        cardDescription.classList.add("reveal-description");
      }
    });

    return card;
  }
}
