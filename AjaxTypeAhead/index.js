const endPoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

const cities = []

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


fetch(endPoint)
    .then((response => response.json()))
    .then(data => cities.push(...data))


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const reg = new RegExp(wordToMatch, 'gi')
        return place.city.match(reg) || place.state.match(reg)
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities)

    const html = matchArray.map(place => {

        const reg = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(reg, `<span class='hl'>${this.value}</span>`)
        const stateName = place.state.replace(reg, `<span class='hl'>${this.value}</span>`)

        return `
        <li>
        <span class='name'>${cityName},${stateName} </span>
        <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html

}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)