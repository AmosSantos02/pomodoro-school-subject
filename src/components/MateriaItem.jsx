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
      {/* TODO [passo 3 do GUIA] trocar o texto fixo pelo nome que vem em materia */}
      <span className="materia-item__nome">Matemática</span>
      {/* TODO [passo 7 do GUIA] ao clicar, chamar onRemover com o id da matéria */}
      <button type="button" className="btn btn--ghost-danger">
        Remover
      </button>
    </li>
  )
}

export default MateriaItem
