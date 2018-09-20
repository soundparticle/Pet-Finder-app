const BASE_URL = 'https://www.zipcodeapi.com/rest';
const API_KEY = process.env.ZIP_API_KEY;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function getDistance(zip, dist) {
  return get(`${BASE_URL}/${API_KEY}/radius.csv/${zip}/${dist}/mile?minimal`);
}

