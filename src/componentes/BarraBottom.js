import DadosDeckJSX from "../data/DeckJSX"

export default function BarraBottom(props){
   return ( <div className="barraBottom">
                <div className="msgRetorno desligado">
                    <img src="./arquivosulteis/img/party.png" alt="" />
                    <h3>{props.saldacao}}</h3>
                </div>
                <div className="msgRetornoTexto desligado ">
                    <h3>{props.mensagem}</h3>
                </div>
                <h3>{props.concluidos}/{DadosDeckJSX.length} CONCLUÍDOS</h3>
                <div className="icones desligado ">
                    <img src="./arquivosulteis/img/ok.svg"/>
                    <img src="./arquivosulteis/img/D.svg"/>
                    <img src="./arquivosulteis/img/x.svg"/>
                </div>
            </div>
         )
}