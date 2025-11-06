import { Request, Response } from 'express'

import config from '@configs/env'
import nominatimService from '@services/nominatum.service'
import openWeatherService from '@services/openweather.service'

const indexController = {
  /**
   * Mostra a página inicial
   * 
   * @param req dados da requisição
   * @param res dados da resposta
   */
  homePage: (req: Request, res: Response) => {
    res.sendFile('index.html')
  },

  buscarPrevisao: async (
    req: Request<
      never,
      never,
      never,
      {
        city?: string,
        api_key?: string
      }
    >,
    res: Response
  ) => {
    if (!req.query.city) {
      res.status(400).send({
        message: 'Insira o nome de uma cidade'
      })
    }

    const cidades = await nominatimService.getInfoLocalsByName(req.query.city ?? '')

    if (cidades.length === 0) {
      res.status(404).send({
        message: 'Nenhum local foi encontrado'
      })
    }

    const previsao = await openWeatherService.searchWeatherForecastByCoord({
      lat: cidades[0].lat,
      lon: cidades[0].lon,
      apiKey: req.query.api_key ?? config.openWeatherApiKey
    })

    if (previsao.cod) {
      res.status(401).send({
        message: 'Chave de API inválida'
      })
    }

    res.send(previsao)
  }
}

export default indexController