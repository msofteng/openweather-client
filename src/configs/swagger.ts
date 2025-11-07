const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation using Swagger'
    }
  },
  apis: ['./src/routes/index.router.ts'] // Path to your API docs
}

export default swaggerOptions