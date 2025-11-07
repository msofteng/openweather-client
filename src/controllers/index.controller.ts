import { Request, Response } from 'express'

import config from '@configs/env'
import nominatimService from '@services/nominatum.service'
import openWeatherService from '@services/openweather.service'
import cidadeRepository from '@repos/cidade.repository'
import { converterKelvinParaCelsius, converterMsParaKmH, converterUnixParaTimestamp } from '@functions/openweather.util'
import previsaoRepository from '@repos/previsao.repository'

const indexController = {
  /**
   * Mostra a página inicial
   * 
   * @param {Request} req dados da requisição
   * @param {Response} res dados da resposta
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

    let cidadeEncontrada = await cidadeRepository.findOne({
      where: {
        nome: cidades[0].name
      },
      relations: {
        previsoes: true
      }
    })
    
    if (!cidadeEncontrada) {
      cidadeEncontrada = await cidadeRepository.save({
        nome: cidades[0].name,
        pais: cidades[0].address.country,
        local: `POINT(${cidades[0].lon} ${cidades[0].lat})`,
        tipo: cidades[0].addresstype,
        osmUrl: `https://www.openstreetmap.org/${cidades[0].osm_type}/${cidades[0].osm_id}`,
        estado: cidades[0].address.state
      })
    } else {
      await previsaoRepository.delete({
        cidade: {
          id: cidadeEncontrada.id
        }
      })
    }

    if (previsao.daily.length > 0) {
      cidadeEncontrada = await cidadeRepository.save({
        ...cidadeEncontrada,
        previsoes: previsao.daily.map((dia) => ({
          descricao: dia.weather[0].description,
          dtPrevisao: converterUnixParaTimestamp(dia.dt),
          min: `${converterKelvinParaCelsius(dia.temp.min).toFixed(1).replace('.', ',')} °C`,
          max: `${converterKelvinParaCelsius(dia.temp.max).toFixed(1).replace('.', ',')} °C`,
          pressao: `${dia.pressure} hPa`,
          umidade: `${dia.humidity}%`,
          nebulosidade: `${dia.clouds}%`,
          vento: `${converterMsParaKmH(dia.wind_speed).toFixed(1).replace('.', ',')} km/h`,
          chuva: dia.rain ? `${Number(dia.rain).toFixed(2).replace('.', ',')} mm` : '-',
          imgUrl: `http://openweathermap.org/img/wn/${dia.weather[0].icon}@4x.png`,
          cidade: { ...cidadeEncontrada, previsoes: [] }
        }))
      })
    }

    res.send({
      ...cidadeEncontrada,
      previsoes: cidadeEncontrada.previsoes.map((previsao) => ({
        ...previsao,
        cidade: undefined
      }))
    })
  },

  buscarCidade: async (
    req: Request<
      never,
      never,
      never,
      {
        name?: string
      }
    >,
    res: Response
  ) => {
    if (!req.query.name) {
      res.status(400).send({
        message: 'Insira o nome de uma cidade'
      })
    }

    const cidade = await cidadeRepository.listarCidade({
      nome: req.query.name
    })

    if (!cidade) {
      res.status(404).send({
        message: 'Cidade não encontrada'
      })
    }

    res.send(cidade)
  }
}

export default indexController