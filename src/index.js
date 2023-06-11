
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const selectEl = document.querySelector('.breed-select');
console.dir(selectEl);

renderSelect();

selectEl.addEventListener('change', onSelectInput);

function onSelectInput(evt) {
  const id = evt.currentTarget.value;
  console.log(id);
  fetchCatByBreed(id).then(data => {
    console.log(data);
  });
}

function renderSelect() {
  fetchBreeds().then(data => {
    console.log(data);
    selectEl.innerHTML = makeMarkupForSelect(data);
  });
}

function makeMarkupForSelect(items) {
  const markup = items
    .map(item => `<option value="${item.id}">${item.name}</option>`)
    .join('\n');
  return markup;
}
