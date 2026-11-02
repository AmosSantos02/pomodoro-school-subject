/**
 * Frase motivacional vinda da API.
 *
 * Props:
 * @param {string} frase - texto da frase
 * @param {boolean} carregando - true enquanto a requisição está em andamento
 * @param {string} erro - mensagem de erro ('' quando deu certo)
 */
function FraseMotivacional({ frase, carregando, erro }) {
  // O CSS já tem as variações .frase--carregando e .frase--erro. Use-as no passo 12.
  return (
    <figure className="frase">
      <figcaption className="frase__rotulo">Frase do dia</figcaption>
      {carregando ? (
        <blockquote className="frase--carregando">Carregando...</blockquote>
      ) : erro ? (
        <blockquote className="frase--erro">{erro}</blockquote>
      ) : (
        <blockquote className="frase__texto">{frase}</blockquote>
      )}
    </figure>
  )
}

export default FraseMotivacional
