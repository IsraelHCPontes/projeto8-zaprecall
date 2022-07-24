import DadosDeckJSX from "../data/DeckJSX"
import Iconsebtottom from "./Iconesbottom"


export default function BarraBottom({iconeResposta, setIconeResposta, concluido, saldacao, mensagem}){
   
   return ( <div className="barraBottom">
                <div className="msgRetorno desligado">
                    <img src="./arquivosulteis/img/party.png" alt="" />
                    <h3>{saldacao}</h3>
                </div>
                <div className="msgRetornoTexto desligado ">
                    <h3>{mensagem}</h3>
                </div>
                <h3>{concluido}/{DadosDeckJSX.length}CONCLUÍDOS</h3>
                <div className="icones ">
                    <Iconsebtottom iconeResposta={iconeResposta} setIconeResposta={setIconeResposta}/>
                </div>
            </div>
         )
}




{/* <img src="./arquivosulteis/img/ok.svg"/>
                    <img src="./arquivosulteis/img/D.svg"/>
                    <img src="./arquivosulteis/img/x.svg"/> */}