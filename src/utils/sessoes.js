/**
 * Soma a duração das sessões agrupando por matéria.
 *
 * @param {Array<{ materiaId: string, duracaoSegundos: number }>} sessoes
 * @returns {Object<string, number>} ex.: { m1: 5525, m2: 1800 } (chave = materiaId)
 */
export function calcularTotalPorMateria(sessoes) {
  const totais = {}
  for(const sessao of sessoes){
    totais[sessao.materiaId] = (totais[sessao.materiaId] ?? 0) + sessao.duracaoSegundos
  }
  return totais
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
