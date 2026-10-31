/**
 * Gera um id único para matérias e sessões.
 *
 * @returns {string}
 */
export function gerarId() {
  return crypto.randomUUID()
}