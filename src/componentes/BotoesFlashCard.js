import React from "react"
import DadosDeckJSX from "../data/DeckJSX"
import FlashCards from "./FlashCard"
import PerguntaConcluida from "./PerguntaConcluida";

function BotaoFlashCard({
    numPergunta,
    pergunta,
    resposta,
    concluido,
    setConcluido,
    setIconeResposta,
    iconeResposta,
    erro,
    setErro,
    respostasIcones, 
    setRespostaIcones}){

     

    const [botao, setBotao] = React.useState(true);
    const [respostaCliente, setRespostaCliente] = React.useState("")
    const [cor, setCor] = React.useState('')

    return (
        <>
            {botao
                ?
                <button onClick={() => setBotao(!botao)} className='pergunta'>
                    <h2>Pergunta {numPergunta}</h2>
                 <ion-icon name="play-outline"></ion-icon> 
                </button>
                :
                !respostaCliente ? <FlashCards pergunta={pergunta} resposta={resposta}  respostaCliente={respostaCliente} setRespostaCliente={setRespostaCliente} concluido={concluido} setConcluido={setConcluido} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta} erro={erro} setErro={setErro} respostasIcones={respostasIcones}
                setRespostaIcones={setRespostaIcones}/>
                : 
                 <PerguntaConcluida  respostaCliente={respostaCliente} cor={cor} setCor={setCor}  numPergunta={numPergunta} />}
                        
        </>
        
    )

}

export default function BotoesFlashCard({
    concluidas,
    setConcluido,
    concluido,
    setIconeResposta,
    iconeResposta,
    erro,
    setErro,
    respostasIcones, 
    setRespostaIcones}){ 
  
    
        
   return DadosDeckJSX.map((props, index) => <BotaoFlashCard  key={index} numPergunta={index + 1} pergunta={props.pergunta} resposta={props.resposta} concluidas={concluidas} concluido={concluido} setConcluido={setConcluido} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta} erro={erro} setErro={setErro} respostasIcones={respostasIcones}
   setRespostaIcones={setRespostaIcones}/>)

}
