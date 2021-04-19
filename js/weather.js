const APIKey = 'ZofrLjsODdHgCAz4wpQqzXd1t6opYg3o';
const baseUrl = 'http://dataservice.accuweather.com';

const getCityData = async cityName => {
  try {
    const response =
      await fetch(`${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`)

    if (!response.ok) {
      throw new Error('Falha na busca de dados...')
    }

    return response.json()
  } catch (error) {
    console.log(error.message);
  }
}

const getCityWeather = async Key => {
  try {
    const response =
      await fetch(`${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da Requisição.')
    }

    return await response.json()
  } catch (error) {
    console.log(error.message);
  }
}
