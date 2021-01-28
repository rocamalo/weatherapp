const API_KEY = "0dc988177be3858895034a2b43fa0d1d";
const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}`


const input = document.getElementById("city");
const buttonSubmit = document.getElementById("buttonSubmit");
const buttonClean = document.getElementById("buttonClean");
const mainContainer = document.getElementById("main-container");
//const temperatura = document.getElementById("temperatura");
buttonSubmit.addEventListener('click', loadWeather);
buttonClean.addEventListener('click', cleanCards);

function cleanCards() {
    if (mainContainer.hasChildNodes) {
        [...mainContainer.childNodes].forEach( (child) => {
            child.remove();
        })
    }
}
async function loadWeather () {
    if (input.value) {
        const response = await fetch(`${API_URL}&query=${input.value}`);
    const data = await response.json();
    const temp = await JSON.stringify(data.current.temperature);
    const city =  await data.location.name;
    const country = await data.location.country;
    const imgURL = await data.current.weather_icons[0];
    const descrip = await data.current.weather_descriptions;
    
    console.log(city);
    console.log(country);
    console.log(temp);
    console.log(imgURL);
    console.log(descrip);
    
    //temperatura.textContent = `La temperatura es: ${temp}`;
    const card = document.createElement('div');
    card.className = "card"
    const cityName = document.createElement('H2');
    cityName.textContent = city;
    const countryName = document.createElement('H3');
    countryName.textContent = country;
    const cityTemperature = document.createElement('H1');
    cityTemperature.textContent = `${temp}°C`;
    const weatherIcon = document.createElement('img');
    weatherIcon.src = imgURL;
    const weatherDescription = document.createElement('P');
    weatherDescription.textContent = descrip;
 
    card.append(cityName, countryName, cityTemperature, weatherIcon, weatherDescription);
    mainContainer.appendChild(card);

    }
    
}



