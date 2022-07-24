import React from "react";
import BotoesFlashCard from "./BotoesFlashCard";
import BarraBottom from "./BarraBottom";
import FlashCards from "./FlashCard";


export default function Tela02(){
   const array = []
   array.push(BarraBottom)
   console.log(array)
   const [concluidas, setConcluidas] = React.useState(array.length)

    return (
     <div class="tela02">
        <div className="topoAPP">
           <img src="./arquivosulteis/img/image 1.svg"/>
           <div class="textoTopo"><h1>ZapRecall</h1></div>
        </div>
        <div class="containerFlashCards"> 
           <BotoesFlashCard concluidas={concluidas} / >
        </div>
          <BarraBottom concluidas={concluidas} setConcluida={setConcluidas}  />
     </div>
    )
}