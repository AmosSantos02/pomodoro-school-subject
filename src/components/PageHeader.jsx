function PageHeader({ titulo, descricao }) {
  return (
    <header className="page-header">
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </header>
  )
}

export default PageHeader
