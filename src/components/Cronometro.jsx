import { formatarSegundos } from "../utils/formatarTempo"
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
      <div className="cronometro__display" role="timer" aria-live="off">
        {formatarSegundos(segundos)}
      </div>
      <div className="cronometro__acoes">
        {rodando ? (
          <button type="button" className="btn btn--secondary" onClick={onPausar}>
            Pausar
          </button>
        ) : (
          <button type="button" className="btn btn--primary" onClick={onIniciar}>
            Iniciar
          </button>
        )}
        <button type="button" className="btn btn--ghost-danger" onClick={onFinalizar} disabled={!podeFinalizar}>
          Finalizar
        </button>
      </div>
    </div>
  )
}

export default Cronometro
