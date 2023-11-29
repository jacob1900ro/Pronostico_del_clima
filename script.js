function showinfo(data) {
    weatherInfo.innerHTML = `
    <div class="card">
        <div class="card-body">
        <p>Temperatura: <span id="temperature">${data.temperature}</span></p>
        <p>Descripción del Clima: <span id="description">${data.weather_descriptions}</span></p>
        <p>Humedad: <span id="humidity">${data.humidity}</span></p>
        <p>Velocidad del Viento: <span id="windSpeed">${data.wind_speed}</span></p>
    </div>
    </div>    
    `
}

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("getWeatherButton");

    btn.addEventListener("click", function () {
        const city = document.getElementById("locationInput").value;
        const url = `http://api.weatherstack.com/current?access_key=4c3876398b8d37945ea0ee2b5e4bf628&query=${city}&units=m`

        fetch(url).then(response => response.json())
            .then(data => {
                showinfo(data.current);
            })
    });
});