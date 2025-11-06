import dotenv from 'dotenv'
import path from 'path'

// Determina o ambiente atual
const env = process.env.NODE_ENV || 'development'

// Escolhe o arquivo .env correto
const envFile = path.resolve(process.cwd(), `.env.${env}`)

// Carrega as variáveis
dotenv.config({ path: envFile })

// Exporta as variáveis para uso no app
const config = {
  port: process.env.PORT || '3000',
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY || '',
  nodeEnv: process.env.NODE_ENV || 'development'
}

export default config