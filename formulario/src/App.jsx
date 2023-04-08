import React from "react"
import DadosPessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"


function App() {

  const componentesFormulario = [<DadosPessoais />, <Endereco />, <Agradecimento />]

  const { passoAtual, componenteAtual, mudarPasso, ehUltimoPasso } = useForm(componentesFormulario)

  return (
    <div className="app">

      <SCFormContainer>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          <Passos passoAtual={passoAtual}/>
          <div className="inputs-container">{componenteAtual}</div>
        </form>
        </SCFormContainer>
      </div>
  )
}

export default App
