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
      <h2 className="card__title">Matérias cadastradas (3)</h2>
      {/* TODO [passo 5 do GUIA] quando não houver matérias, mostrar <EstadoVazio /> no lugar da lista */}
      <ul className="materia-list">
        {/* TODO [passo 4 do GUIA] trocar os 3 itens fixos por um map() sobre materias, com key */}
        <MateriaItem materia={materias[0]}/>
        <MateriaItem materia={materias[1]}/>
        <MateriaItem materia={materias[2]}/>
      </ul>
    </section>
  )
}

export default MateriaList
