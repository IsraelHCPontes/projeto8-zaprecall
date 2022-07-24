// import react from "react"
// import React from "react"
// import DadosDeckJSX from "../data/DeckJSX"
// import FlashCards from "./FlashCard"
// function BotaoFlashCard(props){
//     const [clikada, setClikado] = React.useState(false)
//     const [botao, setBotao] = React.useState(true)
    
//     return (
//        <>
//         <button onClick={() => setBotao(!botao)} className={`pergunta ${botao? '': 'desligado'}`}>
//             <h2>Pergunta {props.numPergunta}</h2> 
//             <ion-icon name="play-outline"></ion-icon>
//         </button>

//         <div className={`flashCard ${clikada ? 'virada': ""} ${botao? "desligado" : "" }`}>
//             <div className="frente face">
//                 <h3>{props.pergunta}</h3>
//                 <img onClick={() => setClikado(!clikada) } src="./arquivosulteis/img/tapped.svg"/>
//             </div>
//             <div className="costa face">
//                 <div className="resposta">
//                 <h3>{props.resposta}</h3>
//                 </div>
//                 <div className="escolha" >
//                 <button  className="naoLembrei">Não lembrei</button>
//                 <button className="quaseLembrei">Quase não lembrei</button>
//                 <button className="zap">Zap!</button>
//                 </div>
//             </div>
//         </div>
        
        
//     </> 
//     )
// }


// export default function BotoesFlashCard(){ 
//    return DadosDeckJSX.map((props, index) => <BotaoFlashCard numPergunta={index + 1} pergunta={props.pergunta} resposta={props.resposta}/>)
// }


import React from "react"
import DadosDeckJSX from "../data/DeckJSX"
import FlashCards from "./FlashCard"

import Cor from "./Cor";
import PerguntaConcluida from "./PerguntaConcluida";

function BotaoFlashCard({numPergunta, pergunta, resposta}) {
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
                !respostaCliente ? <FlashCards pergunta={pergunta} resposta={resposta}  respostaCliente={respostaCliente} setRespostaCliente={setRespostaCliente} />
                : 
                 <PerguntaConcluida  respostaCliente={respostaCliente} cor={cor} setCor={setCor} botao={botao} setBotao={setBotao} numPergunta={numPergunta} respostaCliente={respostaCliente}/>}
                        
        </>
        
    )

}


export default function BotoesFlashCard() { 
    
   return DadosDeckJSX.map((props, index) => <BotaoFlashCard numPergunta={index + 1} pergunta={props.pergunta} resposta={props.resposta}/>)
}