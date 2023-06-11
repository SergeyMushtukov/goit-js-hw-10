const API_KEY =
  'live_UPZjF2OQxFC0fU3JSSAJrutp1lSfrWDMrYBnspQK87wMJfisL3lja9dir03qC9E1';
const URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}
