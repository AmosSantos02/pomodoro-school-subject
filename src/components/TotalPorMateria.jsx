/**
 * Cartão com o total estudado por matéria.
 *
 * Props:
 * @param {Array<{ id: string, nome: string }>} materias - matérias cadastradas
 * @param {Object<string, number>} totais - segundos por materiaId (resultado de calcularTotalPorMateria)
 */
function TotalPorMateria({ materias, totais }) {
  return (
    <section className="card">
      <h2 className="card__title">Total por matéria</h2>
      <ul className="totais">
        {/* TODO [passo 11 do GUIA] trocar as 3 linhas fixas por um map(), com key; nome da matéria + formatarSegundos(totais[id]) */}
        <li className="totais__item">
          <span>Matemática</span>
          <strong>01:32:05</strong>
        </li>
        <li className="totais__item">
          <span>Português</span>
          <strong>00:30:00</strong>
        </li>
        <li className="totais__item">
          <span>História</span>
          <strong>00:00:00</strong>
        </li>
      </ul>
    </section>
  )
}

export default TotalPorMateria
