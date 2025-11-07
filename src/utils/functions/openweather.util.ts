/**
 * Converte hora atual Unix UTC em timestamp (YYYY-MM-DD hh:mm:ss)
 * ajustado para o fuso horário de Brasília (UTC-3).
 * 
 * @param {number} dt - Hora atual em Unix UTC (segundos)
 * @returns {string} - Timestamp no formato "YYYY-MM-DD hh:mm:ss"
 */
export function converterUnixParaTimestampBrasilia(dt: number): string {
  // dt vem em segundos, Date espera milissegundos
  const date = new Date((dt + (3 * 3600)) * 1000) // +3h = fuso de Brasília
  const ano = date.getUTCFullYear()
  const mes = String(date.getUTCMonth() + 1).padStart(2, '0')
  const dia = String(date.getUTCDate()).padStart(2, '0')
  const hora = String(date.getUTCHours()).padStart(2, '0')
  const minuto = String(date.getUTCMinutes()).padStart(2, '0')
  const segundo = String(date.getUTCSeconds()).padStart(2, '0')
  return `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`
}

/**
 * Converte temperatura de Kelvin para Celsius.
 * 
 * @param {number} kelvin - Temperatura em Kelvin
 * @returns {number} - Temperatura em Celsius (arredondada a 2 casas decimais)
 */
export function converterKelvinParaCelsius(kelvin: number): number {
  return +(kelvin - 273.15).toFixed(2)
}

/**
 * Converte velocidade do vento de metros por segundo (m/s) para km/h.
 * 
 * @param {number} metrosPorSegundo - Velocidade em m/s
 * @returns {number} - Velocidade em km/h (arredondada a 2 casas decimais)
 */
export function converterMsParaKmH(metrosPorSegundo: number): number {
  return +(metrosPorSegundo * 3.6).toFixed(2)
}