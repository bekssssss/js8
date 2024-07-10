const name = document.querySelector('#name');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const mass = document.querySelector('#mass');
const birth = document.querySelector('#birth_year');

fetch('https://swapi.dev/api/people/9')
    .then(response => response.json())
        .then(data => {
            name.textContent = `name: ${data.name}`
            gender.textContent = `gender: ${data.gender}`
            height.textContent = `height: ${data.height}`
            mass.textContent = `mass: ${data.mass}`
            birth.textContent = `birth year: ${data.birth_year}`

    })




const model = document.querySelector('#model');
const starship_class = document.querySelector('#starship_class');
const namecar = document.querySelector('#namecar');

fetch ('https://swapi.dev/api/starships/12/')
    .then(response => response.json())
        .then(car => {
        model.textContent = `Model: ${car.model}`
            starship_class.textContent = `Class of Starship: ${car.starship_class}`
            namecar.textContent = `Name of Starship: ${car.name}`

    })

