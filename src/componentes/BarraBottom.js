

export default function BarraBottom(props){
   return ( <div className="barraBottom">
                <div className="msgRetorno desligado">
                    <img src="./arquivosulteis/img/party.png" alt="" />
                    <h3>Parabéns!</h3>
                </div>
                <div className="msgRetornoTexto desligado ">
                    <h3>Você não esqueceu de nenhum flashcard!</h3>
                </div>
                <h3>{props.concluidos}/4 CONCLUÍDOS</h3>
                <div className="icones desligado ">
                    <img src="./arquivosulteis/img/ok.svg"/>
                    <img src="./arquivosulteis/img/D.svg"/>
                    <img src="./arquivosulteis/img/x.svg"/>
                </div>
            </div>
         )
}