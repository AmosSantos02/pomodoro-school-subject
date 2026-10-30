import TotalPorMateria from '../components/TotalPorMateria'
import SessaoList from '../components/SessaoList'

function HistoricoPage() {
  // TODO [passo 11 do GUIA] ler matérias e sessões salvas no localStorage
  // TODO [passo 11 do GUIA] calcular o total por matéria com calcularTotalPorMateria()

  return (
    <>
      {/* TODO [passo 2 do GUIA] trocar por <PageHeader /> */}
      <header className="page-header">
        <h1>Histórico</h1>
        <p>Veja as sessões salvas e quanto você estudou de cada matéria.</p>
      </header>

      {/* TODO [passo 3 do GUIA] passar materias e totais */}
      <TotalPorMateria />

      {/* TODO [passo 3 do GUIA] passar sessoes e materias */}
      <SessaoList />
    </>
  )
}

export default HistoricoPage
