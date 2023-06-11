import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');

hideElement(errorEl);
hideElement(selectEl);

renderSelect();

selectEl.addEventListener('change', onSelectInput);

function onSelectInput(evt) {
  const id = evt.currentTarget.value;
  renderCatInfo(id);
}

function renderSelect() {
  fetchBreeds()
    .then(data => {
      selectEl.innerHTML = makeMarkupForSelect(data);
      showElement(selectEl);
    })
    .catch(error => {
      showElement(errorEl);
    })
    .finally(() => hideElement(loaderEl));
}

function makeMarkupForSelect(items) {
  const markup = items
    .map(item => `<option value="${item.id}">${item.name}</option>`)
    .join('\n');
  return markup;
}

function renderCatInfo(id) {
  hideElement(catInfoEl);
  hideElement(errorEl);
  showElement(loaderEl);
  fetchCatByBreed(id)
    .then(data => {
      catInfoEl.innerHTML = makeMarkupForCatInfo(data);
      showElement(catInfoEl);
    })
    .catch(error => {
      showElement(errorEl);
    })
    .finally(() => hideElement(loaderEl));
}

function makeMarkupForCatInfo(items) {
  const item = items[0];
  const markup = `<img
    src="${item.url}"
    alt="${item.breeds[0].name}"
    width="360"
    class="cat-info-img"
  />
  <div class="text">
    <h2 class="text-header">${item.breeds[0].name}</h2>
    <p class="text-description">${item.breeds[0].description}</p>
    <p class="text-temperament"><span>Temperament: </span>${item.breeds[0].temperament}</p>
  </div>`;
  return markup;
}

function hideElement(elem) {
  elem.classList.add('hidden');
}

function showElement(elem) {
  elem.classList.remove('hidden');
}
