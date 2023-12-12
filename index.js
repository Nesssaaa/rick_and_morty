import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// previousButton eventListener

prevButton.addEventListener("click", () => {
  console.log("previous");
});

nextButton.addEventListener("click", () => {
  console.log("next");
});

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// fetching data from api
const url = "https://rickandmortyapi.com/api/character/?page=";
const pageIndex = 1;

async function fetchCharacters() {
  try {
    const response = await fetch(url + pageIndex);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    data.results.forEach((result) => {
      const character = {
        source: result.image,
        characterName: result.name,
        characterStatus: result.status,
        characterType: result.type,
        characterOccurrences: result.episode.length,
      };
      CharacterCard(character);
    });
  } catch (error) {
    console.log("fail to load");
  }
}

fetchCharacters();
