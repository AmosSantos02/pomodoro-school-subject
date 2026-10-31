import { useState } from 'react'
import MateriaForm from '../components/MateriaForm'
import MateriaList from '../components/MateriaList'
import PageHeader from '../components/PageHeader'
import { lerMaterias, salvarMaterias } from '../services/storageService'
import { gerarId } from '../utils/gerarId'
import { validarNomeMateria } from '../utils/validacao'

function MateriasPage() {
  const [materias,setMaterias] = useState(() => lerMaterias())
  const [nome,setNome] = useState('')
  const [erro,setErro] = useState('')
  
  function handleChange(event){
    setNome(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const mensagem = validarNomeMateria(nome, materias)
    if (mensagem !== '') {
      setErro(mensagem)
      return
    }

    const nova = { id: gerarId(), nome: nome.trim() }
    const newList = [...materias, nova]
    setMaterias(newList)
    salvarMaterias(newList)
    setNome('')
    setErro('')
  }

  function removerMateria(id){
    const newList = materias.filter(m => m.id !== id) // List without ID passed as parameter
    setMaterias(newList)
    salvarMaterias(newList)
  }

  return (
    <>
      <PageHeader titulo='Matérias' descricao='Cadastre as matérias que você estuda.' />

      <MateriaForm valor={nome} erro={erro} onChange={handleChange} onSubmit={handleSubmit} />

      <MateriaList materias={materias} onRemover={removerMateria} />
    </>
  )
}

export default MateriasPage
