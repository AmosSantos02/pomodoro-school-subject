import TotalPorMateria from '../components/TotalPorMateria'
import SessaoList from '../components/SessaoList'
import PageHeader from '../components/PageHeader'
import { MATERIAS_EXEMPLO, SESSOES_EXEMPLO } from '../data/dadosExemplo'


function HistoricoPage() {
  // TODO [passo 11 do GUIA] ler matérias e sessões salvas no localStorage
  // TODO [passo 11 do GUIA] calcular o total por matéria com calcularTotalPorMateria()

  return (
    <>
      {/* TODO [passo 2 do GUIA] trocar por <PageHeader /> */}
      <PageHeader titulo='Histórico' descricao='Veja as sessões salvas e quanto você estudou de cada matéria.' />


      {/* TODO [passo 3 do GUIA] passar materias e totais */}
      <TotalPorMateria />

      {/* TODO [passo 3 do GUIA] passar sessoes e materias */}
      <SessaoList sessoes={SESSOES_EXEMPLO} materias={MATERIAS_EXEMPLO}/>
    </>
  )
}

export default HistoricoPage
