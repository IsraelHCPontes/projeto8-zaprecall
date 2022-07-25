import React from "react";
import BotoesFlashCard from "./BotoesFlashCard";
import BarraBottom from "./BarraBottom";


export default function Tela02(){

   const [concluido, setConcluido] = React.useState(0)
   const [iconeResposta, setIconeResposta] = React.useState(false)
   const [concluidas, setConcluidas] = React.useState(0)
   const [erro, setErro] = React.useState(0)
 
    return (
     <div className="tela02">
        <div className="topoAPP">
           <img src="./arquivosulteis/img/image 1.svg"/>
           <div className="textoTopo"><h1>ZapRecall</h1></div>
        </div>
        <div className="containerFlashCards"> 
           <BotoesFlashCard concluidas={concluidas} concluido={concluido}  setConcluido={setConcluido} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta} erro={erro} setErro={setErro}/ >
        </div>
          <BarraBottom concluido={concluido} setConcluida={setConcluidas} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta} erro={erro} setErro={setErro}/>
     </div>
    )
}

