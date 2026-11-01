import TotalPorMateria from '../components/TotalPorMateria'
import SessaoList from '../components/SessaoList'
import PageHeader from '../components/PageHeader'
import { lerMaterias, lerSessoes} from '../services/storageService'
import { calcularTotalPorMateria } from '../utils/sessoes'


function HistoricoPage() {
  const sessoes = lerSessoes()
  const materias = lerMaterias()
  const totais = calcularTotalPorMateria(sessoes)

  return (
    <>
      <PageHeader titulo='Histórico' descricao='Veja as sessões salvas e quanto você estudou de cada matéria.' />

      <TotalPorMateria materias={materias} totais={totais} />

      <SessaoList sessoes={sessoes} materias={materias}/>
    </>
  )
}

export default HistoricoPage
