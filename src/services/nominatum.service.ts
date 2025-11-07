import { INominatimLocal } from '@interfaces/nominatim'

/**
 * Serviço de Geolocalização - Nominatim
 */
const nominatimService = {
  /**
   * Busca um local pelo nome da cidade
   * 
   * @param {string} city nome da cidade
   * @returns {Promise<INominatimLocal[]>} uma lista de locais
   */
  getInfoLocalsByName: async (city: string): Promise<INominatimLocal[]> => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1`, {
      headers: {
        'User-Agent': 'openweather-client/1.0',
        'Accept': 'application/json'
      }
    })
    const locais = await response.json() as INominatimLocal[]

    return locais
  }
}

export default nominatimService