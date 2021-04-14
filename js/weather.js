const APIKey = 'ZofrLjsODdHgCAz4wpQqzXd1t6opYg3o';

const getCityUrl = cityName => 
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl);
    const responseNotOK = !response.ok;

    if(responseNotOK){
      throw new Error('Ocorreu um erro na busca dos dados...')
    }

    const [cityData] = await response.json()
    return cityData
  } catch ({ name, message}) {
    console.log(`${name}: ${message}`);
  }
}

const getCityWeatherUrl = Key => 
  `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWeatherAPIKey = getCityWeatherUrl(Key)
    const response = await fetch(cityWeatherAPIKey);
    const responseNotOK = !response.ok;

    if(responseNotOK){
      throw new Error('Ocorreu um erro na busca dos dados...')
    }

    const [cityWeatherData] = await response.json()
    return cityWeatherData
  } catch ({ name, message}) {
    console.log(`${name}: ${message}`);
  }
}

getCityWeather('Porto Alegre')