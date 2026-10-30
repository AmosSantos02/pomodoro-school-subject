import { data } from "react-router-dom"

/**
 * Converte segundos em "hh:mm:ss" (ex.: 3725 -> "01:02:05").
 *
 * @param {number} segundos
 * @returns {string}
 */
export function formatarSegundos(segundos) {
  const convHour = Math.floor(segundos / 3600)
  const convMinutes = Math.floor((segundos % 3600) / 60)
  const convSeconds = segundos % 60

  const h = String(convHour).padStart(2, '0')
  const m = String(convMinutes).padStart(2,'0')
  const s = String(convSeconds).padStart(2,'0')
  return `${h}:${m}:${s}`
}

/**
 * Converte uma data ISO em texto legível (ex.: "28/10/2026 14:30").
 *
 * @param {string} dataIso
 * @returns {string}
 */
export function formatarData(dataIso) {
  const d = new Date(dataIso)
  return d.toLocaleString('pt-BR')
}
