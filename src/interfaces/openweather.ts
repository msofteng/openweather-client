/**
 * ### [OpenWeather](https://openweathermap.org/api/one-call-3#current)
 * ---
 * Dados meteorológicos atuais e previsões
 * 
 * - informações meteorológicas atuais
 * - previsão de minuto a minuto para 1 hora
 * - previsão horária para 48 horas
 * - previsão diária para 8 dias
 * - alertas meteorológicos do governo.
 */
export interface IOpenWeatherInfo {
	/**
	* Latitude do local decimal (−90; 90)
	*/
	lat: number
	/**
	 * Longitude do local decimal (-180; 180)
	 */
	lon: number
	/**
	 * Nome do fuso horário para o local solicitado
	 */
	timezone: string
	/**
	 * Mudança em segundos em relação ao UTC
	 */
	timezone_offset: number
	/**
	 * Resposta da API de dados meteorológicos atuais
	 */
	current: IOpenWeatherCurrent
	/**
	 * Resposta da API de dados meteorológicos de previsão minuto a minuto
	 */
	minutely?: IOpenWeatherCurrentMinutely[]
	/**
	 * Resposta da API de dados meteorológicos de previsão horária
	 */
	hourly: IOpenWeatherCurrentHourly[]
	/**
	 * Resposta da API de dados meteorológicos de previsão diária
	 */
	daily: IOpenWeatherCurrentDaily[]
	/**
	 * Dados de alertas meteorológicos nacionais dos principais sistemas nacionais de aviso meteorológico.
	 */
	alerts?: IOpenWeatherCurrentAlert[]
	/**
	 * código de erro
	 */
	cod?: number
}

/**
 * Resposta da API de dados meteorológicos atuais
 */
export interface IOpenWeatherCurrent {
	/**
	 * Hora atual (Unix UTC)
	 */
	dt: number
	/**
	 * Horário do nascer do sol (Unix UTC).
	 * 
	 * Para áreas polares durante os períodos de sol da meia-noite e noite polar este parâmetro não é retornado na resposta.
	 */
	sunrise: number
	/**
	 * Horário do pôr do sol (Unix UTC).
	 * 
	 * Para áreas polares durante os períodos de sol da meia-noite e noite polar este parâmetro não é retornado na resposta.
	 */
	sunset: number
	/**
	 * Temperatura.
	 * 
	 * Unidades
	 * 
	 * - padrão: Kelvin
	 * - métrico: Celsius
	 * - imperial: Fahrenheit.
	 * 
	 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data)
	 */
	temp: number
	/**
	 * Temperatura.
	 * 
	 * Este parâmetro de temperatura leva em consideração a percepção humana do clima.
	 * 
	 * Unidades
	 * 
	 * - padrão: kelvin
	 * - métrico: Celsius
	 * - imperial: Fahrenheit.
	 */
	feels_like: number
	/**
	 * Pressão atmosférica ao nível do mar hPa
	 */
	pressure: number
	/**
	 * Umidade %
	 */
	humidity: number
	/**
	 * Temperatura atmosférica (que varia de acordo com a pressão e a umidade) abaixo da qual as gotículas de água começam a se condensar e o orvalho pode se formar.
	 * 
	 * Unidades
	 * 
	 * - padrão: kelvin
	 * - métrico: Celsius
	 * - imperial: Fahrenheit
	 */
	dew_point: number
	/**
	 * Índice UV atual. / O valor máximo do índice UV para o dia
	 */
	uvi: number
	/**
	 * Nebulosidade %
	 */
	clouds: number
	/**
	 * Visibilidade média em metros.
	 * 
	 * O valor máximo da visibilidade é de 10 km.
	 */
	visibility: number
	/**
	 * Velocidade do vento.
	 * 
	 * Unidades
	 * 
	 * - padrão: metro/segundo
	 * - métrico: metro/segundo
	 * - imperial: milhas/hora.
	 * 
	 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data)
	 */
	wind_speed: number
	/**
	 * Rajada de vento.
	 * 
	 * Unidades
	 * 
	 * - padrão: metro/segundo
	 * - métrico: metro/segundo
	 * - imperial: milhas/hora.
	 * 
	 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data)
	 */
	wind_gust?: number
	/**
	 * Direção do vento em graus (meteorológico)
	 */
	wind_deg: number
	/**
	 * Precipitação (volume/chuva) mm/h.
	 */
	rain?: {
		/**
		 * Observe que apenas mm/h são as unidades de medida disponíveis para este parâmetro.
		 */
		'1h': number
	}
	/**
	 * Precipitação (volume/neve) mm/h.
	 */
	snow?: {
		/**
		 * Observe que apenas mm/h são as unidades de medida disponíveis para este parâmetro.
		 */
		'1h': number
	}
	/**
	 * Lista de condições climáticas
	 */
	weather: IOpenWeatherCurrentWeather[]
}

/**
 * Unidades
 * 
 * - padrão: kelvin
 * - métrico: Celsius
 * - imperial: Fahrenheit
 * 
 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data).
 */
export interface IOpenWeatherCurrentTemp {
	/**
	 * Temperatura diurna.
	 */
	day: number
	/**
	 * Temperatura mínima diária.
	 */
	min: number
	/**
	 * Temperatura máxima diária.
	 */
	max: number
	/**
	 * Temperatura noturna.
	 */
	night: number
	/**
	 * Temperatura da noite.
	 */
	eve: number
	/**
	 * Temperatura da manhã.
	 */
	morn: number
}

/**
 * Isso explica a percepção humana do clima.
 * 
 * Unidades
 * - padrão: kelvin
 * - métrico: Celsius
 * - imperial: Fahrenheit
 * 
 * Como alterar as unidades utilizadas.
 */
export interface IOpenWeatherCurrentFeelsLike {
	/**
	 * Temperatura diurna.
	 */
	day: number
	/**
	 * Temperatura noturna.
	 */
	night: number
	/**
	 * Temperatura da noite.
	 */
	eve: number
	/**
	 * Temperatura da manhã.
	 */
	morn: number
}

/**
 * Condição Climática
 */
export interface IOpenWeatherCurrentWeather {
	/**
	 * [Identificação da condição climática](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
	 */
	id: number
	/**
	 * Conjunto de parâmetros meteorológicos (chuva neve etc.)
	 */
	main: string
	/**
	 * Condições meteorológicas no grupo [lista completa das condições meteorológicas](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2).
	 * 
	 * Obtenha o resultado no [seu idioma](https://openweathermap.org/api/one-call-3#multi).
	 */
	description: string
	/**
	 * Identificação do ícone de previsão do tempo.
	 * 
	 * [Como obter os ícones](https://openweathermap.org/weather-conditions#How-to-get-icon-URL).
	 */
	icon: string
}

/**
 * Resposta da API de dados meteorológicos de previsão minuto a minuto
 */
export interface IOpenWeatherCurrentMinutely {
	/**
	 * Horário dos dados previstos formato (Unix UTC)
	 */
	dt: number
	/**
	 * Precipitação mm/h.
	 * 
	 * Observe que apenas mm/h são as unidades de medida disponíveis para este parâmetro.
	 */
	precipitation: number
}

/**
 * Resposta da API de dados meteorológicos de previsão horária
 */
export interface IOpenWeatherCurrentHourly extends IOpenWeatherCurrent {
	/**
	 * Probabilidade de precipitação.
	 * 
	 * Os valores do parâmetro variam entre 0 e 1 onde 0 é igual a 0% e 1 é igual a 100%.
	 */
	pop: number
}

/**
 * Resposta da API de dados meteorológicos de previsão diária
 */
type IOpenWeatherCurrentDaily = IOpenWeatherCurrent & IOpenWeatherCurrentHourly & {
	/**
	 * Horário do nascer da lua para este dia (Unix UTC)
	 */
	moonrise: number
	/**
	 * Horário do pôr da lua neste dia (Unix UTC)
	 */
	moonset: number
	/**
	 * Fases da Lua.
	 * 
	 * - 0 e 1 são 'lua nova'
	 * - 0.25 'quarto crescente'
	 * - 0.5 'lua cheia'
	 * - 0.75 'quarto minguante'.
	 * 
	 * Os períodos intermediários são chamados de 'crescente crescente' 'gibosa crescente' 'gibosa minguante' e 'crescente minguante' respectivamente.
	 * 
	 * Algoritmo de cálculo das fases da Lua:
	 * 
	 * - se os valores das fases da Lua entre o início e o fim do dia forem um número inteiro (0 025 05 075 10) esse número inteiro será considerado;
	 * - caso contrário será calculada a média das fases da Lua entre o início e o fim do dia.
	 */
	moon_phase: number
	/**
	 * Descrição das condições meteorológicas do dia em linguagem acessível a humanos.
	 */
	summary: string
	/**
	 * Temperatura.
	 * 
	 * Unidades
	 * 
	 * - padrão: Kelvin
	 * - métrico: Celsius
	 * - imperial: Fahrenheit.
	 * 
	 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data).
	 */
	temp: IOpenWeatherCurrentTemp
	/**
	 * Isso explica a percepção humana do clima.
	 * 
	 * Unidades
	 * - padrão: kelvin
	 * - métrico: Celsius
	 * - imperial: Fahrenheit
	 * 
	 * [Como alterar as unidades utilizadas](https://openweathermap.org/api/one-call-3#data).
	 */
	feels_like: IOpenWeatherCurrentFeelsLike
}

/**
 * Dados de alertas meteorológicos nacionais dos principais sistemas nacionais de aviso meteorológico.
 */
export interface IOpenWeatherCurrentAlert {
	/**
	 * Nome da fonte do alerta. Consulte aqui a lista completa de fontes de alerta.
	 */
	sender_name: string
	/**
	 * Nome do evento de alerta
	 * 
	 * [Consulte aqui a lista completa de fontes de alerta](https://openweathermap.org/api/one-call-3#listsource).
	 */
	event: string
	/**
	 * Data e hora do início do alerta (Unix UTC)
	 */
	start: string
	/**
	 * Data e hora do término do alerta (Unix UTC)
	 */
	end: string
	/**
	 * Descrição do alerta
	 */
	description: string
	/**
	 * Tipo de clima severo
	 */
	tags: string
}