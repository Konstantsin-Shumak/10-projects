const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

const getWeatherByLocation = async (location) => {
    const resp = await fetch(url(location), {
        origin: "cors",
    });
    const respData = await resp.json();
    addWeatherToPage(respData);
};

const addWeatherToPage = (data) => {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
            ${temp}°C
        </h2>
        <small>${data.weather[0].main}</small>
    `;

    main.innerHTML = "";

    main.appendChild(weather);
};

const KtoC = (K) => Math.floor(K - 273.15);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value;

    if (location) {
        getWeatherByLocation(location)
    }
});