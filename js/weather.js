const APIKey = 'ZofrLjsODdHgCAz4wpQqzXd1t6opYg3o';
const baseUrl = 'http://dataservice.accuweather.com';

const getCityDataURL = cityName => 
  `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`


const getCityData = async cityName => {
  try {
    const response =
      await fetch(getCityDataURL(cityName))

    if (!response.ok) {
      throw new Error('Falha na busca de dados...')
    }

    return await response.json()
  } catch (error) {
    console.log(error.message);
  }
}

const getCityWeatherURL = Key => 
  `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const getCityWeather = async Key => {
  try {
    const response =
      await fetch(getCityWeatherURL(Key))

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da Requisição.')
    }

    return await response.json()
  } catch (error) {
    console.log(error.message);
  }
}