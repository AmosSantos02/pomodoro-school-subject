const URL_CONSELHO = 'https://api.adviceslip.com/advice'

/**
 * Busca uma frase motivacional.
 * Resposta da API: { slip: { id, advice } }
 *
 * @returns {Promise<string>} o texto da frase (slip.advice)
 */
export async function buscarConselho() {
  const res = await fetch(URL_CONSELHO)
  if(!res.ok) throw new Error('Falha ao buscar')
  const dados = await res.json()
  return dados.slip.advice
}
