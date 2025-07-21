let searchBar = document.getElementById("searchBar")
let searchBtn = document.getElementById("searchBtn")
let weatherInfo = document.getElementById("weatherInfo")

searchBtn.onclick = function () {
    let location = searchBar.value;
    let apikey = "3fde63abee8765c2c2fe130ac92b11d2";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let weatherData = {
                "city": data.name,
                "temperature": data.main.temp,
                "humidity": data.main.humidity,
                "wind": data.wind.speed,
                "feels_like": data.main.feels_like,
                "sea": data.main.sea_level,
                "country": data.sys.country
            }

            weatherInfo.innerHTML = `
            <h1>Temperature : ${weatherData.temperature} ℃</h1>
            <h3>Country : ${weatherData.country}</h3>
            <h3>City : ${weatherData.city}</h3>
            <h3>Sea Level : ${weatherData.sea}</h3>
            <h3>Feels Like : ${weatherData.feels_like} ℃</h3>
            `
        })
}