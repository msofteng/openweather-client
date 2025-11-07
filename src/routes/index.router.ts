import { Router } from 'express'

import indexController from '@controllers/index.controller'

const indexRouter = Router()

indexRouter.get('/', indexController.homePage)

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Previsão do Tempo
 *     description: Busca a previsão do tempo de uma cidade
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: city
 *         description: Nome da cidade
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: api_key
 *         description: Chave de API OpenWeather
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Previsão do tempo encontrada
 *       400:
 *         description: Insira o nome de uma cidade
 *       404:
 *         description: Nenhum local foi encontrado
 *       401:
 *         description: Chave de API inválida
 */
indexRouter.get('/weather', indexController.buscarPrevisao)

/**
 * @swagger
 * /city:
 *   get:
 *     summary: Informações da Cidade
 *     description: Busca as informações de uma cidade e suas condições meteorológicas para esta semana
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Nome da cidade
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Informações da Cidade + Previsão do Tempo (7 dias)
 *       400:
 *         description: Insira o nome de uma cidade
 *       404:
 *         description: Cidade não encontrada
 */
indexRouter.get('/city', indexController.buscarCidade)

export default indexRouter