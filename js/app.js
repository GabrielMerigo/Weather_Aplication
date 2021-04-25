const form = document.querySelector('[data-js="change-location"]');
const cityCard = document.querySelector('[data-js="cityCard"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const IsDayOrNight = document.querySelector('[data-js="time"]');
const timeIcon = document.querySelector('[data-js="time-icon"]');

const insertIMGDayOrNight = IsDayTime => {
  IsDayTime ? IsDayOrNight.src = `src/day.svg` : IsDayOrNight.src = `src/night.svg`;
}

const mostraOCartaoSeExisteLocalStorage = () => {
  if (localStorage.getItem('variavelDeControle')) {
    cityCard.classList.remove('d-none');

    const iconStorage = localStorage.getItem('weatherIcon');
    const cityNameStorage = localStorage.getItem('inputValue');
    const weatherStorage = localStorage.getItem('cityWeather');
    const temperatureStorage = localStorage.getItem('cityTemperature')
    const IsDayTimeStorage = localStorage.getItem('isDayTime')

    timeIcon.innerHTML = `<img src="src/icons/${iconStorage}.svg"/>`
    cityName.textContent = cityNameStorage;
    cityWeather.textContent = weatherStorage;
    cityTemperature.textContent = temperatureStorage;
    insertIMGDayOrNight(IsDayTimeStorage)
  }
}

const showCard = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none');
  }
}

mostraOCartaoSeExisteLocalStorage()

let variavelDeControle = 0;
form.addEventListener('submit', async event => {
  event.preventDefault()
  variavelDeControle++
  const inputValue = event.target.city.value;
  const [{ Key }] = await getCityData(inputValue);
  const [{ IsDayTime, WeatherIcon, WeatherText, Temperature }] =
    await getCityWeather(Key)

  localStorage.setItem('inputValue', inputValue)
  localStorage.setItem('cityWeather', WeatherText)
  localStorage.setItem('cityTemperature', Temperature.Metric.Value)
  localStorage.setItem('weatherIcon', WeatherIcon)
  localStorage.setItem('isDayTime', IsDayTime)
  localStorage.setItem('variavelDeControle', variavelDeControle)

  timeIcon.innerHTML = `<img src="src/icons/${WeatherIcon}.svg"/>`
  cityName.textContent = inputValue;
  cityWeather.textContent = WeatherText;
  cityTemperature.textContent = Temperature.Metric.Value;
  insertIMGDayOrNight(IsDayTime)

  showCard()
  form.reset()
})


