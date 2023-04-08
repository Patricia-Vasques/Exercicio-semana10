import React from "react"
import DadosPessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
import { useForm } from "./hooks/useForm"


function App() {

  const componentesFormulario = [<DadosPessoais />, <Endereco />, <Agradecimento />]

  const { passoAtual, componenteAtual, mudarPasso } = useForm(componentesFormulario)

  return (
    <div className="app">

      <header>
        <h2>Cadastr-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </header>

      <SCFormContainer>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          <Passos passoAtual={passoAtual}/>
          <div className="inputs-container">{componenteAtual}</div>
          <div className="acoes">
            {!passoAtual == 0 &&
            <SCButton type="button" onclick={(e) => mudarPasso(passoAtual -1, e)}>
            <GrFormPrevious /> <span>Voltar</span>
            </SCButton >}
            {ehUltimoPasso ? ( 
              <SCButton type="submit"><span>Enviar</span></SCButton>
             ):(
             <SCButton type="submit"><span>Avançar</span><GrFormNextLink /></SCButton>
            )}
          </div>
        </form>
        </SCFormContainer>
      </div>
  )
}

export default App
