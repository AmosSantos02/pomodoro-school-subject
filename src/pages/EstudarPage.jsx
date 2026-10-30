import SeletorMateria from '../components/SeletorMateria'
import Cronometro from '../components/Cronometro'
import FraseMotivacional from '../components/FraseMotivacional'
import PageHeader from '../components/PageHeader'

function EstudarPage() {
  // TODO [passo 9 do GUIA] criar os states: matéria escolhida, segundos decorridos e se está rodando
  // TODO [passo 9 do GUIA] criar o useEffect que conta o tempo enquanto estiver rodando (e limpa o intervalo)
  // TODO [passo 10 do GUIA] criar a função de finalizar: montar a Sessao, salvar no localStorage e zerar o cronômetro
  // TODO [passo 12 do GUIA] criar os states da frase (texto, carregando, erro) e o useEffect que chama buscarConselho()

  return (
    <>
      {/* TODO [passo 2 do GUIA] trocar por <PageHeader /> */}
      <PageHeader />

      {/* TODO [passo 12 do GUIA] passar frase, carregando e erro */}
      <FraseMotivacional />

      <section className="card estudar">
        {/* TODO [passo 3 do GUIA] passar materias, valor, onChange e desabilitado */}
        <SeletorMateria />

        {/* TODO [passo 3 do GUIA] passar segundos, rodando, podeFinalizar e os três handlers */}
        <Cronometro />
      </section>
    </>
  )
}

export default EstudarPage
