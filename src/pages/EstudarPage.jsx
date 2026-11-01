import SeletorMateria from '../components/SeletorMateria'
import Cronometro from '../components/Cronometro'
import FraseMotivacional from '../components/FraseMotivacional'
import PageHeader from '../components/PageHeader'
import { useEffect, useState } from 'react'
import { lerMaterias } from '../services/storageService.js'

function EstudarPage() {
  const materias = lerMaterias()
  const [materiaId, setMateriaId] = useState('')
  const [segundos, setSegundos] = useState(0)
  const [rodando, setRodando] = useState(false)

  useEffect(() => {
    if(rodando){
      const id = setInterval(() => {
        setSegundos(s => s + 1)
      }, 1000)
      return () => clearInterval(id)
    }
  }, [rodando])

  function handleMateria(event){
    setMateriaId(event.target.value)
  }

  function iniciar(){
    if(materiaId){
      setRodando(true)
    }
  }

  function pausar(){
    setRodando(false)
  }

  function finalizar(){

  }
  // TODO [passo 10 do GUIA] criar a função de finalizar: montar a Sessao, salvar no localStorage e zerar o cronômetro
  // TODO [passo 12 do GUIA] criar os states da frase (texto, carregando, erro) e o useEffect que chama buscarConselho()

  return (
    <>
      <PageHeader titulo='Estudar' descricao='Escolha uma matéria e inicie o cronômetro' />

      {/* TODO [passo 12 do GUIA] passar frase, carregando e erro */}
      <FraseMotivacional />

      <section className="card estudar">
        <SeletorMateria materias={materias} valor={materiaId} onChange={handleMateria} desabilitado={rodando}/>

        <Cronometro segundos={segundos} rodando={rodando} onIniciar={iniciar} onPausar={pausar} podeFinalizar={segundos > 0} onFinalizar={finalizar}/>
      </section>
    </>
  )
}

export default EstudarPage
