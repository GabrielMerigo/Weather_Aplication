const form = document.querySelector('[data-js="change-location"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityTemperatureContainer = document.
  querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="cityCard"]');
const timeIconContainer = document.querySelector('[data-js="time-icon" ]');

let timeImg = document.querySelector('[data-js="time"]')

const showCardIntoDOM = () => {
  if (cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none')
  }
}

const insertIMGIntoCard = IsDayTime => {
  IsDayTime ? timeImg.src = './src/day.svg' : timeImg.src = './src/night.svg'
}

const insertIMGIconIntoCard = WeatherIcon => {
  const timeIcon = `<img src="src/icons/${WeatherIcon}.svg" />`
  timeIconContainer.innerHTML = timeIcon; 
}

const insertDataWeatherIntoCard = (container, data) => {
    container.textContent = data
}

const insertDataIntoDOM = async event => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  const [{ LocalizedName, Key }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = 
    await (await getCityWeather(Key)).json()

  showCardIntoDOM()
  insertIMGIntoCard(IsDayTime)
  insertIMGIconIntoCard(WeatherIcon)

  insertDataWeatherIntoCard(cityWeatherContainer, WeatherText)
  insertDataWeatherIntoCard(cityNameContainer, LocalizedName)
  insertDataWeatherIntoCard(cityTemperatureContainer, Temperature.Metric.Value)

  form.reset()
}

form.addEventListener('submit', insertDataIntoDOM)