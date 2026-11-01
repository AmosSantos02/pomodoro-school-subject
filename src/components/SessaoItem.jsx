import { formatarData, formatarSegundos } from "../utils/formatarTempo"

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
      <td>{formatarData(sessao.data)}</td>
      <td>{nomeMateria}</td>
      <td className="numero">{formatarSegundos(sessao.duracaoSegundos)}</td>
    </tr>
  )
}

export default SessaoItem
