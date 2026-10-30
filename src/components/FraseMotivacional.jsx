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
      {/* TODO [passo 12 do GUIA] exibir a prop frase quando carregou; "Carregando..." enquanto carregando; mensagem de erro quando erro */}
      <blockquote className="frase__texto">Don’t be afraid to take small steps.</blockquote>
    </figure>
  )
}

export default FraseMotivacional
