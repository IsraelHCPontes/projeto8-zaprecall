import react from "react"
import React from "react"
import DadosDeckJSX from "../data/DeckJSX"

function BotaoFlashCard(props){
    const [clikada, setClikada] = React.useState(true)
    return (
        <button onClick={() => setClikada(clikada) } className="pergunta">
            <h2>Pergunta {props.numPergunta}</h2> 
            <ion-icon name="play-outline"></ion-icon>
        </button>
    )
    
}


export default function BotoesFlashCard(){ 
   return DadosDeckJSX.map((props, index) => <BotaoFlashCard numPergunta={index + 1}/>)
}