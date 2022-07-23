import DadosDeckJSX from "../data/DeckJSX"

import React from "react"

function FlashCard(porps){
    const [clikada, setClickado] = React.useState(false)
    return (
    <div className={`flashCard ${clikada ? 'virada': ""}`}>
          <div className="frente face">
            <h3>{porps.pergunta}</h3>
            <img onClick={() => setClickado(!clikada) } src="./arquivosulteis/img/tapped.svg"/>
          </div>
          <div className="costa face">
            <div className="resposta">
              <h3>{porps.resposta}</h3>
            </div>
            <div className="escolha" >
              <button  className="naoLembrei">Não lembrei</button>
              <button className="quaseLembrei">Quase não lembrei</button>
              <button className="zap">Zap!</button>
            </div>
          </div>
    </div>
    )
}

export default function FlashCards(){
return(DadosDeckJSX.map(props => <FlashCard pergunta={props.pergunta} resposta={props.resposta} />))
}