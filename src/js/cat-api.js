const API_KEY =
  'live_UPZjF2OQxFC0fU3JSSAJrutp1lSfrWDMrYBnspQK87wMJfisL3lja9dir03qC9E1';
const URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?key=${API_KEY}`).then(response => {
    console.log(response);
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${URL}/images/search?breed_ids=${breedId}&key=${API_KEY}`).then(
    response => {
      console.log(response);
      return response.json();
    }
  );
}
