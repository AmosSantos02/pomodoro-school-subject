/**
 * Select para escolher qual matéria será estudada.
 *
 * Props:
 * @param {Array<{ id: string, nome: string }>} materias - opções do select
 * @param {string} valor - id da matéria selecionada ('' = nenhuma)
 * @param {(evento: Event) => void} onChange - chamado ao trocar a matéria
 * @param {boolean} desabilitado - true enquanto o cronômetro estiver em andamento
 */
function SeletorMateria({ materias, valor, onChange, desabilitado }) {
  return (
    <div className="field">
      <label htmlFor="select-materia">Matéria</label>
      <select id="select-materia" value={valor} onChange={onChange} disabled={desabilitado}>
        <option value="" disabled>
          Escolha uma matéria
        </option>
        {materias.map(materia => (
          <option key={materia.id} value={materia.id}>
            {materia.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SeletorMateria
