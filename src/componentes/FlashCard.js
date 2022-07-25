import React from "react"

export default function FlashCards({
  pergunta,
  resposta,
  setRespostaCliente,
  setConcluido,
  concluido,
  setIconeResposta,
  setErro}){
    
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
                          <button onClick={() => {setConcluido(concluido +1); setRespostaCliente('naoLembrei');  setIconeResposta(<img src="./arquivosulteis/img/x.svg"/>); setErro(1)}}  className="naoLembrei">Não lembrei</button>
                          <button onClick={() =>  {setConcluido(concluido +1); setRespostaCliente('quasenaoLembrei'); setIconeResposta(<img src="./arquivosulteis/img/interrogacao.svg"/>)}}  className="quaseLembrei">Quase não lembrei</button>
                          <button onClick={() =>  {setConcluido(concluido +1);setRespostaCliente('zap');setIconeResposta(<img src="./arquivosulteis/img/ok.svg"/>)}}  className="zap">Zap!</button>
                      </div>
                     </div>
               </div>                  
        </div>
      
      )
    }
  

