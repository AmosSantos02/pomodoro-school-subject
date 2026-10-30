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
    // TODO [passo 8 do GUIA] ligar onSubmit ao <form> (lembre de evitar o reload da página)
    <form className="card materia-form" noValidate>
      <label htmlFor="nome-materia">Nome da matéria</label>
      <div className="form-row">
        {/* TODO [passo 8 do GUIA] transformar em input controlado: value={valor} + onChange={onChange} */}
        <input id="nome-materia" type="text" placeholder="Ex.: Matemática" autoComplete="off" />
        <button type="submit" className="btn btn--primary">
          Adicionar
        </button>
      </div>
      {/* TODO [passo 5 do GUIA] mostrar esta mensagem só quando existir erro; usar o texto da prop erro */}
      <p className="form-error" role="alert">
        O nome deve ter pelo menos 2 caracteres.
      </p>
    </form>
  )
}

export default MateriaForm
