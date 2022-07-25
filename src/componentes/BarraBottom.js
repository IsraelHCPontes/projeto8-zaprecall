import DadosDeckJSX from "../data/DeckJSX"
import Iconsebtottom from "./Iconesbottom"
import MsgParabens from "./MsgParabens"
import MsgErro from "./MsgErro"

const respostas= []

export default function BarraBottom({iconeResposta,
    setIconeResposta,
    concluido,
    erro, }){
        
    respostas.push(iconeResposta)
   
    return ( <div className="barraBottom">
                {(respostas.length -1) !== DadosDeckJSX.length ? false :( erro === 0 )? <MsgParabens/> : <MsgErro/>}
                    <h3>{concluido}/{DadosDeckJSX.length}CONCLUÍDOS</h3>
                    <div className="icones ">
                        <Iconsebtottom iconeResposta={iconeResposta} setIconeResposta={setIconeResposta}/>
                    </div>
                </div>
            )
}



