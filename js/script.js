
// API endpoint

const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


async function fetchData() {
    const res = await fetch(api);
    const json = await res.json();
    cities.push(...json);
}
fetchData();

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // here we need to figure out if the city or state is matched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function getInput() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hi">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hi">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="name">${place.population}</span>
            </li>
        `;
    }).join('');
    suggetion.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggetion = document.querySelector('.suggetion');

searchInput.addEventListener('change', getInput);
searchInput.addEventListener('keyup', getInput);
