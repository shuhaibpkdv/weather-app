let input = document.getElementById('place-input');
const resultCard = document.getElementById('weather-condition-container');
const apiKey = '70b0f4523fd19a2090bf86d3cf6de2ff';

function Sample() {
  const city = input.value;

  if(input.value == "") {
    alert("Please Enter a Place Name");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      resultCard
        .innerHTML = `
          <h2 class="weather-place-name">${data.name}, ${data.sys.country}</h2>
          <h2 class="weather-degree">${data.main.temp}°C</h2>
        `
    });

  input.value = "";
}


