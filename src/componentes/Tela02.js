import React from "react";
import BotoesFlashCard from "./BotoesFlashCard";
import BarraBottom from "./BarraBottom";
import FlashCards from "./FlashCard";
import DadosDeckJSX from "../data/DeckJSX";
import Icone from "./Icones";


export default function Tela02(){
   const [concluido, setConcluido] = React.useState(0)
   const [iconeResposta, setIconeResposta] = React.useState(false)
   const [concluidas, setConcluidas] = React.useState(0)

    return (
     <div class="tela02">
        <div className="topoAPP">
           <img src="./arquivosulteis/img/image 1.svg"/>
           <div class="textoTopo"><h1>ZapRecall</h1></div>
        </div>
        <div class="containerFlashCards"> 
           <BotoesFlashCard concluidas={concluidas} concluido={concluido}  setConcluido={setConcluido} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta}/ >
        </div>
          <BarraBottom concluido={concluido} setConcluida={setConcluidas} iconeResposta={iconeResposta} setIconeResposta={setIconeResposta}/>
     </div>
    )
}

