const APIKey = 'ZofrLjsODdHgCAz4wpQqzXd1t6opYg3o';
const baseUrl = 'http://dataservice.accuweather.com'


const getCityUrl = cityName =>
  `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL = ({ Key }) => 
  `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

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


const getCityWeather = async cityName => {
  const [cityData] = await getCityData(cityName)
  const cityWeatherUrl = getWeatherURL(cityData)
  return await ( await fetch(cityWeatherUrl)).json();
}

getCityWeather('São Paulo')
  .then(console.log)


// const getCityWeather = async cityName => {
//   try {
//     const responseNotOK = !response.ok;

//     if(responseNotOK){
//       throw new Error('Ocorreu um erro na busca dos dados...')
//     }

//     const [cityWeatherData] = await response.json()
//     return cityWeatherData
//   } catch ({ name, message}) {
//     console.log(`${name}: ${message}`);
//   }
// }

// getCityWeather('Porto Alegre')