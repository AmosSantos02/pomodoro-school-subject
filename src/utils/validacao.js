/**
 * Valida o nome de uma nova matéria.
 * Regras: obrigatório, mínimo 2 caracteres (sem contar espaços nas pontas), sem repetição.
 *
 * @param {string} nome
 * @param {Array<{ id: string, nome: string }>} materias matérias já cadastradas
 * @returns {string} mensagem de erro, ou '' quando o nome é válido
 */
export function validarNomeMateria(nome, materias) {
  const limpo = nome.trim()

  if (limpo === '') {
    return 'Informe o nome da matéria.'
  }
  if (limpo.length < 2) {
    return 'O nome deve ter pelo menos 2 caracteres.'
  }
  if (materias.some(m => m.nome.toLowerCase() === limpo.toLowerCase())) {
    return 'Essa matéria já está cadastrada.'
  }
  return ''
}
