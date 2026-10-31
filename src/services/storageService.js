const CHAVE_MATERIAS = 'cronometro:materias'
const CHAVE_SESSOES = 'cronometro:sessoes'

/**
 * @returns {Array<{ id: string, nome: string }>} lista salva (ou [] se não houver nada / JSON inválido)
 */
export function lerMaterias() {
  const texto = localStorage.getItem(CHAVE_MATERIAS)
  if (texto === null){
    return[]
  }
  return JSON.parse(texto)
}

/**
 * @param {Array<{ id: string, nome: string }>} materias
 */
export function salvarMaterias(materias) {
  localStorage.setItem(CHAVE_MATERIAS, JSON.stringify(materias))
}

/**
 * @returns {Array<{ id: string, materiaId: string, data: string, duracaoSegundos: number }>}
 */
export function lerSessoes() {
  const texto = localStorage.getItem(CHAVE_SESSOES)
  if (texto === null){
    return []
  }
  return JSON.parse(texto)
}

/**
 * @param {Array<{ id: string, materiaId: string, data: string, duracaoSegundos: number }>} sessoes
 */
export function salvarSessoes(sessoes) {
  localStorage.setItem(CHAVE_SESSOES, JSON.stringify(sessoes))
}
