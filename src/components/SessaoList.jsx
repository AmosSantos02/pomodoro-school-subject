import SessaoItem from './SessaoItem'

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
      {/* TODO [passo 5 do GUIA] quando não houver sessões, mostrar <EstadoVazio /> no lugar da tabela */}
      <div className="tabela-wrapper">
        <table className="tabela">
          <thead>
            <tr>
              <th>Data</th>
              <th>Matéria</th>
              <th className="numero">Duração</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO [passo 11 do GUIA] trocar os 3 itens fixos por um map() sobre sessoes, com key; passe o nomeMateria usando buscarNomeDaMateria() */}
            <SessaoItem />
            <SessaoItem />
            <SessaoItem />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SessaoList
