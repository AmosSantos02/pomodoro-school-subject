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
      {/* TODO [passo 9 do GUIA] controlar o select: value={valor}, onChange={onChange}, disabled={desabilitado} */}
      <select id="select-materia" defaultValue="">
        <option value="" disabled>
          Escolha uma matéria
        </option>
        {/* TODO [passo 4 do GUIA] trocar as 3 options fixas por um map() sobre materias, com key */}
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
