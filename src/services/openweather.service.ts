import { IOpenWeatherInfo } from '@interfaces/openweather'

/**
 * Serviço da API de Previsão do Tempo - OpenWeather
 */
const openWeatherService = {
  /**
   * Busca a previsão do tempo de um local por sua coordenada geográfica
   * 
   * @param data informações do local e de autenticação a API
   * @param data.lat latitude do local
   * @param data.lon longitude do local
   * @param data.apiKey chave de autenticação da API
   
  * @returns previsão do tempo dessa localização
   */
  searchWeatherForecastByCoord: async (
    data: {
      lat: string,
      lon: string,
      apiKey: string
    }
  ) => {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&appid=${data.apiKey}`, {
      headers: {
        'User-Agent': 'openweather-client/1.0',
        'Accept': 'application/json'
      }
    })

    const dados = await response.json() as IOpenWeatherInfo

    return dados
  }
}

export default openWeatherService