import MateriaItem from './MateriaItem'

/**
 * Lista de matérias cadastradas.
 *
 * Props:
 * @param {Array<{ id: string, nome: string }>} materias - matérias a exibir
 * @param {(id: string) => void} onRemover - repassada para cada MateriaItem
 */
function MateriaList({ materias, onRemover }) {
  return (
    <section className="card">
      {/* TODO [passo 4 do GUIA] mostrar a quantidade real de matérias no lugar do 3 */}
      <h2 className="card__title">Matérias cadastradas ({materias.length})</h2>
      {/* TODO [passo 5 do GUIA] quando não houver matérias, mostrar <EstadoVazio /> no lugar da lista */}
      <ul className="materia-list">
        {/* TODO [passo 4 do GUIA] trocar os 3 itens fixos por um map() sobre materias, com key */}
        {materias.map(materia => (
          <MateriaItem key={materia.id} materia={materia} />
        ))}
      </ul>
    </section>
  )
}

export default MateriaList
