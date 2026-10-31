/**
 * Uma linha da lista de matérias.
 *
 * Props:
 * @param {{ id: string, nome: string }} materia - a matéria exibida
 * @param {(id: string) => void} onRemover - chamado ao clicar em "Remover"
 */
function MateriaItem({ materia, onRemover }) {
  return (
    <li className="materia-item">
      <span className="materia-item__nome">{materia.nome}</span>
      <button type="button" className="btn btn--ghost-danger" onClick={() => {onRemover(materia.id)}}>
        Remover
      </button>
    </li>
  )
}

export default MateriaItem
