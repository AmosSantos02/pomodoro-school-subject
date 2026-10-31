import { useState } from 'react'
import MateriaForm from '../components/MateriaForm'
import MateriaList from '../components/MateriaList'
import PageHeader from '../components/PageHeader'
import { lerMaterias, salvarMaterias } from '../services/storageService'

function MateriasPage() {
  const [materias,setMaterias] = useState(() => lerMaterias())
  // TODO [passo 8 do GUIA] criar o state do campo de texto e do erro; criar a função que valida e adiciona a matéria

  function removerMateria(id){
    const newList = materias.filter(m => m.id !== id) // List without ID passed as parameter
    setMaterias(newList)
    salvarMaterias(newList)
  }

  return (
    <>
      <PageHeader titulo='Matérias' descricao='Cadastre as matérias que você estuda.' />

      {/* TODO [passo 3 do GUIA] passar as props (valor, erro, onChange, onSubmit) para o formulário */}
      <MateriaForm />

      <MateriaList materias={materias} onRemover={removerMateria} />
    </>
  )
}

export default MateriasPage
