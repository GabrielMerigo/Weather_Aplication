const form = document.querySelector('[data-js="change-location"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityTemperatureContainer = document.
  querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="cityCard"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  const [{ LocalizedName, Key }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await (await getCityWeather(Key)).json()

  if (cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none')
  }

  cityWeatherContainer.textContent = WeatherText
  cityNameContainer.textContent = LocalizedName
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  form.reset()
})