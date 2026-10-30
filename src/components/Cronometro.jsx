/**
 * Display do tempo e botões de controle.
 *
 * Props:
 * @param {number} segundos - tempo decorrido (será formatado como hh:mm:ss)
 * @param {boolean} rodando - true quando o cronômetro está contando
 * @param {boolean} podeFinalizar - true quando já existe tempo para salvar
 * @param {() => void} onIniciar
 * @param {() => void} onPausar
 * @param {() => void} onFinalizar
 */
function Cronometro({ segundos, rodando, podeFinalizar, onIniciar, onPausar, onFinalizar }) {
  return (
    <div className="cronometro">
      {/* TODO [passo 9 do GUIA] exibir o tempo vindo de segundos, formatado com formatarSegundos() */}
      <div className="cronometro__display" role="timer" aria-live="off">
        00:12:34
      </div>
      <div className="cronometro__acoes">
        {/* TODO [passo 9 do GUIA] ligar os onClick e desabilitar o que não faz sentido (disabled) */}
        {rodando ? (
          <button type="button" className="btn btn--secondary">
            Pausar
          </button>
        ) : (
          <button type="button" className="btn btn--primary">
            Iniciar
          </button>
        )}
        <button type="button" className="btn btn--ghost-danger" disabled={!podeFinalizar}>
          Finalizar
        </button>
      </div>
    </div>
  )
}

export default Cronometro
