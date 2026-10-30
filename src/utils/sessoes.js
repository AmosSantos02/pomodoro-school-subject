/**
 * Soma a duração das sessões agrupando por matéria.
 *
 * @param {Array<{ materiaId: string, duracaoSegundos: number }>} sessoes
 * @returns {Object<string, number>} ex.: { m1: 5525, m2: 1800 } (chave = materiaId)
 */
export function calcularTotalPorMateria(sessoes) {
  // TODO [passo 6 do GUIA] percorrer as sessões acumulando a duração de cada materiaId (reduce ou for...of)
}

/**
 * Descobre o nome de uma matéria a partir do id.
 *
 * @param {Array<{ id: string, nome: string }>} materias
 * @param {string} materiaId
 * @returns {string} o nome, ou um texto alternativo se a matéria foi removida
 */
export function buscarNomeDaMateria(materias, materiaId) {
  // TODO [passo 6 do GUIA] procurar na lista (find) e decidir o que devolver quando não encontrar
}
