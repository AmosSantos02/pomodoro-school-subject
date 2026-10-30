// Dados fixos só para a interface aparecer preenchida.
// Siga o formato do modelo:
//   Materia = { id, nome }
//   Sessao  = { id, materiaId, data (string ISO), duracaoSegundos }
//
// TODO [passo 14 do GUIA] quando tudo usar localStorage/state, apague este arquivo (e confirme que nenhum import sobrou)

export const MATERIAS_EXEMPLO = [
  { id: 'm1', nome: 'Matemática' },
  { id: 'm2', nome: 'Português' },
  { id: 'm3', nome: 'História' },
]

export const SESSOES_EXEMPLO = [
  { id: 's1', materiaId: 'm1', data: '2026-10-28T14:30:00.000Z', duracaoSegundos: 3125 },
  { id: 's2', materiaId: 'm2', data: '2026-10-28T18:00:00.000Z', duracaoSegundos: 1800 },
  { id: 's3', materiaId: 'm1', data: '2026-10-29T09:15:00.000Z', duracaoSegundos: 2400 },
]

// Formato real da resposta da API: { slip: { id: 12, advice: "..." } }
export const FRASE_EXEMPLO = 'Don’t be afraid to take small steps.'
