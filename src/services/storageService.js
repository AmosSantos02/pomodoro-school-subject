const CHAVE_MATERIAS = 'cronometro:materias'
const CHAVE_SESSOES = 'cronometro:sessoes'

/**
 * @returns {Array<{ id: string, nome: string }>} lista salva (ou [] se não houver nada / JSON inválido)
 */
export function lerMaterias() {
  // TODO [passo 6 do GUIA] ler CHAVE_MATERIAS do localStorage e converter com JSON.parse
}

/**
 * @param {Array<{ id: string, nome: string }>} materias
 */
export function salvarMaterias(materias) {
  // TODO [passo 6 do GUIA] converter com JSON.stringify e gravar em CHAVE_MATERIAS
}

/**
 * @returns {Array<{ id: string, materiaId: string, data: string, duracaoSegundos: number }>}
 */
export function lerSessoes() {
  // TODO [passo 6 do GUIA] mesma ideia de lerMaterias, com CHAVE_SESSOES
}

/**
 * @param {Array<{ id: string, materiaId: string, data: string, duracaoSegundos: number }>} sessoes
 */
export function salvarSessoes(sessoes) {
  // TODO [passo 6 do GUIA] mesma ideia de salvarMaterias, com CHAVE_SESSOES
}
