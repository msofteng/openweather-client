const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'openweather-client',
      version: '0.0.5',
      description: 'Documentação da API de previsão do tempo utilizando o OpenWeather'
    }
  },
  apis: ['./src/routes/index.router.ts'] // Path to your API docs
}

export default swaggerOptions