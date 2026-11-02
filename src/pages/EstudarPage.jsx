import SeletorMateria from '../components/SeletorMateria'
import Cronometro from '../components/Cronometro'
import FraseMotivacional from '../components/FraseMotivacional'
import PageHeader from '../components/PageHeader'
import { useEffect, useState } from 'react'
import { gerarId } from '../utils/gerarId.js'
import { lerMaterias, lerSessoes, salvarSessoes } from '../services/storageService.js'
import { buscarConselho } from '../services/adviceService.js'
import { useNavigate } from 'react-router-dom'



function EstudarPage() {
  const materias = lerMaterias()
  const navigate = useNavigate()
  
  const [materiaId, setMateriaId] = useState('')
  const [segundos, setSegundos] = useState(0)
  const [rodando, setRodando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [frase, setFrase] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  

  useEffect(() => {
    if(rodando){
      const id = setInterval(() => {
        setSegundos(s => s + 1)
      }, 1000)
      return () => clearInterval(id)
    }
  }, [rodando])

  useEffect(( ) => {
    async function carregar() {
      try{
        const conselho = await buscarConselho();
        setFrase(conselho)
      } catch {
          setErro('Não foi possível carregar o conselho')
      } finally{
        setCarregando(false)
      }
    }
    carregar()
  }, [])

  function handleMateria(event){
    setMateriaId(event.target.value)
    setMensagem('')
  }

  function iniciar(){
    if(materiaId){
      setMensagem('')
      setRodando(true)
    } else {
      setMensagem('Selecione uma matéria antes!')
    }
  }

  function pausar(){
    setRodando(false)
  }

  function finalizar(){
    if(segundos === 0 || !materiaId){
      return
    }
    setRodando(false)
    const sessao = { id: gerarId(), materiaId, data: new Date().toISOString(), duracaoSegundos: segundos }
    const antiga = lerSessoes()
    const nova = [...antiga, sessao]
    salvarSessoes(nova)
    setSegundos(0)
    setMensagem('Sessão salva!')
    navigate('/historico')
  }

  return (
    <>
      <PageHeader titulo='Estudar' descricao='Escolha uma matéria e inicie o cronômetro' />

      <FraseMotivacional frase={frase} carregando={carregando} erro={erro} />

      <section className="card estudar">
        <SeletorMateria materias={materias} valor={materiaId} onChange={handleMateria} desabilitado={rodando}/>

        <Cronometro segundos={segundos} rodando={rodando} onIniciar={iniciar} onPausar={pausar} podeFinalizar={segundos > 0} onFinalizar={finalizar}/>

        {mensagem && (
          <p style={{ textAlign: 'center' }}>{mensagem}</p>
        )}
      </section>
    </>
  )
}

export default EstudarPage
