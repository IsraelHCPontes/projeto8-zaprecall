import react from "react"
import React from "react"
import DadosDeckJSX from "../data/DeckJSX"
import FlashCards from "./FlashCard"
function BotaoFlashCard(props){
    const [clikada, setClikado] = React.useState(false)
    const [botao, setBotao] = React.useState(true)
    
    return (
       <>
        <button onClick={() => setBotao(!botao)} className={`pergunta ${botao? '': 'desligado'}`}>
            <h2>Pergunta {props.numPergunta}</h2> 
            <ion-icon name="play-outline"></ion-icon>
        </button>

        <div className={`flashCard ${clikada ? 'virada': ""} ${botao? "desligado" : "" }`}>
            <div className="frente face">
                <h3>{props.pergunta}</h3>
                <img onClick={() => setClikado(!clikada) } src="./arquivosulteis/img/tapped.svg"/>
            </div>
            <div className="costa face">
                <div className="resposta">
                <h3>{props.resposta}</h3>
                </div>
                <div className="escolha" >
                <button  className="naoLembrei">Não lembrei</button>
                <button className="quaseLembrei">Quase não lembrei</button>
                <button className="zap">Zap!</button>
                </div>
            </div>
        </div>
        
        
    </> 
    )
}


export default function BotoesFlashCard(){ 
   return DadosDeckJSX.map((props, index) => <BotaoFlashCard numPergunta={index + 1} pergunta={props.pergunta} resposta={props.resposta}/>)
}

