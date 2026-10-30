/**
 * Mensagem exibida quando uma lista não tem itens.
 * Ainda não é usada em nenhuma página: renderize-a no passo 5.
 *
 * Props:
 * @param {string} titulo - ex.: "Nenhuma sessão ainda"
 * @param {string} mensagem - texto de apoio
 */
function EstadoVazio({ titulo, mensagem }) {
  return (
    <div className="estado-vazio">
      {/* TODO [passo 5 do GUIA] trocar os textos fixos pelas props titulo e mensagem */}
      <p className="estado-vazio__titulo">Nada por aqui ainda</p>
      <p className="estado-vazio__texto">Quando houver itens, eles aparecem nesta área.</p>
    </div>
  )
}

export default EstadoVazio
