import MateriaForm from '../components/MateriaForm'
import MateriaList from '../components/MateriaList'
import PageHeader from '../components/PageHeader'
import { MATERIAS_EXEMPLO } from '../data/dadosExemplo'

function MateriasPage() {
  // TODO [passo 7 do GUIA] criar o state das matérias (iniciando com o que está salvo no localStorage)
  // TODO [passo 7 do GUIA] criar a função que remove uma matéria (atualiza o state e salva)
  // TODO [passo 8 do GUIA] criar o state do campo de texto e do erro; criar a função que valida e adiciona a matéria

  return (
    <>
      <PageHeader titulo='Matérias' descricao='Cadastre as matérias que você estuda.' />

      {/* TODO [passo 3 do GUIA] passar as props (valor, erro, onChange, onSubmit) para o formulário */}
      <MateriaForm />

      {/* TODO [passo 3 do GUIA] passar materias e onRemover para a lista (primeiro com MATERIAS_EXEMPLO, depois com o state) */}
      <MateriaList materias={MATERIAS_EXEMPLO} />
    </>
  )
}

export default MateriasPage
