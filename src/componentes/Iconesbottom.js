const respostasIcones = []

 function Iconebtottom(props){
    if(props === "zap"){
        return <img src="./arquivosulteis/img/ok.svg"/>
    }
}


export default function Iconsebtottom({iconeResposta, setIconeResposta}){
    respostasIcones.push(iconeResposta)
    console.log( respostasIcones.filter(Iconebtottom))
   return respostasIcones
}

