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
        {materias.map((materia) => (
          <li key={materia.id} className="totais__item">
            <span>{materia.nome}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TotalPorMateria
