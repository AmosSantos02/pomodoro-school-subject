import MateriaForm from '../components/MateriaForm'
import MateriaList from '../components/MateriaList'

function MateriasPage() {
  // TODO [passo 7 do GUIA] criar o state das matérias (iniciando com o que está salvo no localStorage)
  // TODO [passo 7 do GUIA] criar a função que remove uma matéria (atualiza o state e salva)
  // TODO [passo 8 do GUIA] criar o state do campo de texto e do erro; criar a função que valida e adiciona a matéria

  return (
    <>
      {/* TODO [passo 2 do GUIA] este cabeçalho se repete nas 3 páginas: extraia para um componente PageHeader com props titulo e descricao */}
      <header className="page-header">
        <h1>Matérias</h1>
        <p>Cadastre as matérias que você estuda.</p>
      </header>

      {/* TODO [passo 3 do GUIA] passar as props (valor, erro, onChange, onSubmit) para o formulário */}
      <MateriaForm />

      {/* TODO [passo 3 do GUIA] passar materias e onRemover para a lista (primeiro com MATERIAS_EXEMPLO, depois com o state) */}
      <MateriaList />
    </>
  )
}

export default MateriasPage
