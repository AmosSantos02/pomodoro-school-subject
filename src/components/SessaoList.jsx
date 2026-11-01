import SessaoItem from './SessaoItem'
import EstadoVazio from './EstadoVazio'
import { buscarNomeDaMateria } from '../utils/sessoes'

/**
 * Tabela com as sessões salvas.
 *
 * Props:
 * @param {Array<{ id: string, materiaId: string, data: string, duracaoSegundos: number }>} sessoes
 * @param {Array<{ id: string, nome: string }>} materias - usadas para descobrir o nome de cada matéria
 */
function SessaoList({ sessoes, materias }) {
  return (
    <section className="card">
      <h2 className="card__title">Sessões</h2>
      <div className="tabela-wrapper">
        {sessoes.length === 0 ? (
          <EstadoVazio titulo="Nenhuma sessão ainda" mensagem="Finalize um estudo para ele aparecer aqui." />
        ) : (
          <table className="tabela">
            <thead>
              <tr>
                <th>Data</th>
                <th>Matéria</th>
                <th className="numero">Duração</th>
              </tr>
            </thead>
            <tbody>
              {sessoes.map(sessao => (
                <SessaoItem key={sessao.id} sessao={sessao} nomeMateria={buscarNomeDaMateria(materias,sessao.materiaId)} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default SessaoList
