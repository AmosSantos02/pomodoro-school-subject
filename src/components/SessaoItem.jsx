/**
 * Uma linha da tabela de histórico.
 *
 * Props:
 * @param {{ id: string, materiaId: string, data: string, duracaoSegundos: number }} sessao
 * @param {string} nomeMateria - nome já resolvido a partir de sessao.materiaId
 */
function SessaoItem({ sessao, nomeMateria }) {
  return (
    <tr>
      {/* TODO [passo 11 do GUIA] data com formatarData(sessao.data), matéria com nomeMateria, duração com formatarSegundos(sessao.duracaoSegundos) */}
      <td>28/10/2026 14:30</td>
      <td>Matemática</td>
      <td className="numero">00:52:05</td>
    </tr>
  )
}

export default SessaoItem
