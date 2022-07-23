
export default function Icone({respostaCliente}){
    switch(respostaCliente){
        case 'zap':
            return (<img src="./arquivosulteis/img/ok.svg"/>);
            break;
            
        case 'quasenaoLembrei':
            return (<img src="./arquivosulteis/img/interrogacao.svg"/>);
            break;

        case 'naoLembrei':
            return (<img src="./arquivosulteis/img/x.svg"/>);
            break;        
    } 
}