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

// States
let maxPage=42;
let pageIndex = 1;
let searchQuery = "";

// previousButton eventListener

prevButton.addEventListener("click", () => {
  if (pageIndex === 1) {
    return;
  }
  pageIndex--;
  fetchCharacters();
});

nextButton.addEventListener("click", () => {
  if (pageIndex === maxPage) {
    return;
  }
  pageIndex++;
  fetchCharacters();
});

// fetching data from api

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${searchQuery}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const maxPage = data.info.pages
    pagination.textContent = `${pageIndex} / ${maxPage}`;
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


//Search Bar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  cardContainer.textContent = "";
  fetchCharacters();
  pageIndex = 1
  pagination.textContent = `${pageIndex} / 1`
});

fetchCharacters();
//CharacterCard();


