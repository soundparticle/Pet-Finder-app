const BASE_URL = 'https://www.zipcodeapi.com/rest/';
const API_KEY = process.env.ZIP_API_KEY;

// const ZIP_ONE = `${BASE_URL}/${API_KEY}/distance.json/`
 
const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function getDistance(zip1, zip2) {
  return get(`${BASE_URL}/${API_KEY}/distance.json/${zip1}/${zip2}/mile`);
}

