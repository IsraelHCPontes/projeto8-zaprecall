import React from "react";
import BotoesFlashCard from "./BotoesFlashCard";
import BarraBottom from "./BarraBottom";
import FlashCards from "./FlashCard";


export default function Tela02(){
 
    return (
     <div class="tela02">
        <div className="topoAPP">
           <img src="./arquivosulteis/img/image 1.svg"/>
           <div class="textoTopo"><h1>ZapRecall</h1></div>
        </div>
        <div class="containerFlashCards"> 
           <FlashCards / >
        </div>
          <BarraBottom/>
     </div>
    )
}