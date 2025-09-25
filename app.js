let celsiusTemp = document.querySelector("#celsius-temp");
let fahrenheitTemp = document.querySelector("#fahrenheit-temp");
let kelvinTemp = document.querySelector("#kelvin-temp");

let converButton = document.querySelector("#convert-button");
let celsiusInput = document.querySelector("#celsius-input");

const convertKelvin = (celsius) => {
  const kevin = Number(celsius) + 273.15;
  return kevin;
};

const convertFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

const displayTemps = (celsius) => {
  celsiusTemp.textContent = celsius + "°C";
  fahrenheitTemp.textContent = convertFahrenheit(celsius) + "°F";
  kelvinTemp.textContent = convertKelvin(celsius) + "°K";
};

converButton.addEventListener("click", () => {
  displayTemps(celsiusInput.value);
});
displayTemps(30);
