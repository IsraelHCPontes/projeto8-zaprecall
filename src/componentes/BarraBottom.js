import React from "react"
import DadosDeckJSX from "../data/DeckJSX"
import Iconsebtottom from "./Iconesbottom"
import MsgParabens from "./MsgParabens"
import MsgErro from "./MsgErro"
import BotaReinicar from "./BotaoReiniciar"

const respostas= []

export default function BarraBottom({
    iconeResposta,
    setIconeResposta,
    concluido,
    erro, 
    clikado,
    setClickado,
    respostasIcones, 
    setRespostaIcones}){
        
   

        console.log(respostasIcones)


    respostas.push(iconeResposta)

    
   
    return ( <div className="barraBottom">
                {(respostasIcones.length ) !== DadosDeckJSX.length ? false :( erro === 0 )? <MsgParabens/> : <MsgErro/>}
                    <h3>{concluido}/{DadosDeckJSX.length}CONCLUÍDOS</h3>
                    <div className="icones ">
                        {/* <Iconsebtottom iconeResposta={iconeResposta} setIconeResposta={setIconeResposta} estate={clikado} setClickado={setClickado} respostasIcones={respostasIcones} setRespostaIcones={setRespostaIcones} /> */}
                       {respostasIcones}
                    </div>
                    {(respostasIcones.length ) !== DadosDeckJSX.length ? false : <BotaReinicar estate={clikado} setClickado={setClickado} />} 
                </div>
            )
}



