/**
 * Formulário para cadastrar uma matéria.
 *
 * Props:
 * @param {string} valor - texto atual do campo (input controlado)
 * @param {string} erro - mensagem de validação ('' quando não há erro)
 * @param {(evento: Event) => void} onChange - chamado a cada tecla digitada
 * @param {(evento: Event) => void} onSubmit - chamado ao enviar o formulário
 */
function MateriaForm({ valor, erro, onChange, onSubmit }) {
  return (
    <form className="card materia-form" noValidate onSubmit={onSubmit}>
      <label htmlFor="nome-materia">Nome da matéria</label>
      <div className="form-row">
        <input id="nome-materia" value={valor} onChange={onChange} type="text" placeholder="Ex.: Matemática" autoComplete="off" />
        <button type="submit" className="btn btn--primary">
          Adicionar
        </button>
      </div>
      {erro && (
        <p className="form-error" role="alert">
          {erro}
        </p>
      )}
    </form>
  )
}

export default MateriaForm
