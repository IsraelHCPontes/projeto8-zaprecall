import DadosDeckJSX from "../data/DeckJSX"

import React from "react"


  

export default function FlashCards({pergunta, resposta, setRespostaCliente, setConcluido, concluido}){
  const [clikada, setClikado] = React.useState(false)
  
  return(
        <div className={`flashCard ${clikada ? 'virada': ""} `}>
               <div className="frente face">
                   <h3>{pergunta}</h3>
                   <img onClick={() => setClikado(!clikada) } src="./arquivosulteis/img/tapped.svg"/>
              </div>
               <div className="costa face">
                   <div className="resposta">
                      <h3>{resposta}</h3>
                  
                      <div className="escolha" >
                          <button onClick={() => {setConcluido(concluido +1); setRespostaCliente('naoLembrei')}}  className="naoLembrei">Não lembrei</button>
                          <button onClick={() =>  {setConcluido(concluido +1); setRespostaCliente('quasenaoLembrei')}}  className="quaseLembrei">Quase não lembrei</button>
                          <button onClick={() =>  {setConcluido(concluido +1);setRespostaCliente('zap')}}  className="zap">Zap!</button>
                      </div>
                     </div>
               </div>                  
        </div>
      
      )
    }
  

