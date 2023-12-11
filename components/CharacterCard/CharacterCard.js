export function CharacterCard({ source, characterName, characterStatus, characterOccurrences, characterType }) {
  //Karte erstellen
  const main = document.querySelector("main");
  const card = document.createElement("ul");

  /*const source = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
  const characterName = "Rick Sanchez";
  const characterStatus = "Alive";
  const characterType = "";
  const characterOccurrences = 51;*/

  card.classList.add("card-container");
  card.setAttribute("data-js", "card-container");
  card.innerHTML = `<li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src=${source}
        crossorigin="anonymous"
        alt="Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${characterName}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${characterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${characterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${characterOccurrences}</dd>
      </dl>
    </div>
  </li>
    `;

  main.append(card);
}
