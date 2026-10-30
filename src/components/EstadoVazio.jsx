/**
 * Mensagem exibida quando uma lista não tem itens.
 *
 * Props:
 * @param {string} titulo - ex.: "Nenhuma sessão ainda"
 * @param {string} mensagem - texto de apoio
 */
function EstadoVazio({ titulo, mensagem }) {
  return (
    <div className="estado-vazio">
      <p className="estado-vazio__titulo">{titulo}</p>
      <p className="estado-vazio__texto">{mensagem}</p>
    </div>
  )
}

export default EstadoVazio
