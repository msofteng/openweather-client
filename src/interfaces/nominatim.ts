/**
 * ### [Nominatim](https://nominatim.org/)
 * ---
 * Nominatim é um serviço de geolocalização baseado em OpenStreetMap.
 * 
 * O Nominatim utiliza dados do OpenStreetMap para encontrar locais na Terra por nome e endereço (geocodificação). Ele também pode fazer o inverso encontrando o endereço de qualquer local do planeta.
 */
export interface INominatimLocal {
	place_id: number
	licence: string
	osm_type: string
	osm_id: number
	lat: string
	lon: string
	class: string
	type: string
	place_rank: number
	importance: number
	addresstype: string
	name: string
	display_name: string
	boundingbox: string[]
}