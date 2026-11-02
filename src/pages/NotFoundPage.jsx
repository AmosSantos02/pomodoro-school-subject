import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function NotFoundPage() {
  return (
    <>
      <PageHeader titulo="Página não encontrada" descricao="O endereço que você tentou abrir não existe." />
      <Link to="/materias">Voltar para Matérias</Link>
    </>
  )
}

export default NotFoundPage
