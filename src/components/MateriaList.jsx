import EstadoVazio from './EstadoVazio'
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
      <h2 className="card__title">Matérias cadastradas ({materias.length})</h2>
      {materias.length === 0 ? (
        <EstadoVazio titulo="Nenhuma matéria ainda" mensagem="Cadastre sua primeira matéria acima." />
      ) : (
        <ul className="materia-list">
          {materias.map(materia => (
            <MateriaItem key={materia.id} materia={materia} onRemover={onRemover}/>
          ))}
        </ul>
      )}
    </section>
  )
}

export default MateriaList
