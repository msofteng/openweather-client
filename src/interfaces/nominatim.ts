/**
 * ### [Nominatim](https://nominatim.org/)
 * ---
 * Nominatim é um serviço de geolocalização baseado em OpenStreetMap.
 * 
 * O Nominatim utiliza dados do OpenStreetMap para encontrar locais na Terra por nome e endereço (geocodificação). Ele também pode fazer o inverso encontrando o endereço de qualquer local do planeta.
 */
export interface INominatimLocal {
	/**
	 * ID do local
	 */
	place_id: number
	/**
	 * licença do OpenStreetMap
	 */
	licence: string
	/**
	 * Tipo do local no OpenStreetMap
	 */
	osm_type: string
	/**
	 * ID do local no OpenStreetMap
	 */
	osm_id: number
	/**
	 * Latitude
	 */
	lat: string
	/**
	 * Longitude
	 */
	lon: string
	/**
	 * Classe do local
	 */
	class: string
	/**
	 * Tipo do local
	 */
	type: string
	/**
	 * Classificação do local
	 */
	place_rank: number
	/**
	 * Importância do local
	 */
	importance: number
	/**
	 * tipo de endereço
	 */
	addresstype: string
	/**
	 * nome da cidade
	 */
	name: string
	/**
	 * nome do local
	 */
	display_name: string
	/**
	 * Coordenadas do local
	 */
	boundingbox: string[]
}