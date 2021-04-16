const APIKey = 'ZofrLjsODdHgCAz4wpQqzXd1t6opYg3o';
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
  `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL = cityKey => 
  `${baseUrl}/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Ocorreu um erro na busca dos dados...')
    }

    return response.json()
  } catch ({ name, message }) {
    console.log(`${name}: ${message}`);
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = cityKey => fetch(getWeatherURL(cityKey))