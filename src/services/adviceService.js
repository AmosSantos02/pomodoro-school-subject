const URL_CONSELHO = 'https://api.adviceslip.com/advice'

/**
 * Busca uma frase motivacional.
 * Resposta da API: { slip: { id, advice } }
 *
 * @returns {Promise<string>} o texto da frase (slip.advice)
 */
export async function buscarConselho() {
  // TODO [passo 12 do GUIA] fazer o fetch em URL_CONSELHO, checar res.ok, converter para JSON e devolver só o texto
  // TODO [passo 12 do GUIA] se algo der errado, lançar um Error para a página tratar no catch
}
