const form = document.querySelector('[data-js="change-location"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityTemperatureContainer = document.
  querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="cityCard"]');
const timeIconContainer = document.querySelector('[data-js="time-icon" ]');

let timeImg = document.querySelector('[data-js="time"]')

form.addEventListener('submit', async event => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  const [{ LocalizedName, Key }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = 
    await (await getCityWeather(Key)).json()

  if (cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none')
  }

  if(IsDayTime){
    timeImg.src = './src/day.svg'
  } else {
    timeImg.src = './src/night.svg'
  }

  const timeIcon = `<img src="src/icons/${WeatherIcon}.svg" />`
  timeIconContainer.innerHTML = timeIcon; 

  cityWeatherContainer.textContent = WeatherText
  cityNameContainer.textContent = LocalizedName
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  form.reset()
})