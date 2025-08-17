function Sample() {
  let input = document.getElementById('place-input');

  html = `
    <h2 class="weather-place-name">${input.value}</h2>
    <h2 class="weather-degree">27°C</h2>
  `

  if(input.value == "") {
    alert("Please Enter a Place Name");
  } else {
    document.getElementById('weather-condition-container')
      .innerHTML = html;
  }

  input.value = "";
}

