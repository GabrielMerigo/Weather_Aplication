const form = document.querySelector('[data-js="change-location"]');
const cityCard = document.querySelector('[data-js="cityCard"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const IsDayOrNight = document.querySelector('[data-js="time"]');
const timeIcon = document.querySelector('[data-js="time-icon"]');

form.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value;
  const [{ Key }] = await getCityData(inputValue);
  const [{ IsDayTime, WeatherIcon, WeatherText, Temperature }] =
    await getCityWeather(Key)

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none');
  }

  IsDayTime ? IsDayOrNight.src = `src/day.svg` : IsDayOrNight.src = `src/night.svg`;

  timeIcon.innerHTML = `<img src="src/icons/${WeatherIcon}.svg"/>`
  cityName.textContent = inputValue;
  cityWeather.textContent = WeatherText;
  cityTemperature.textContent = Temperature.Metric.Value;

  form.reset()
})